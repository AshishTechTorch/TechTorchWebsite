require("dotenv").config();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { connectDB } = require("./src/config/db");
const Admin = require("./src/models/Admin.model");

// Store one-time superadmin credentials in Backend/.env.
const SUPERADMIN = {
  name: process.env.SUPERADMIN_NAME || "Super Admin",
  email: process.env.SUPERADMIN_EMAIL,
  password: process.env.SUPERADMIN_PASSWORD,
};

async function createSuperadmin() {
  const email = (SUPERADMIN.email || "").trim().toLowerCase();

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing. Add it to Backend/.env first.");
  }
  if (!SUPERADMIN.email || !SUPERADMIN.password) {
    throw new Error("Add SUPERADMIN_EMAIL and SUPERADMIN_PASSWORD to Backend/.env first.");
  }
  if (SUPERADMIN.password.length < 6) {
    throw new Error("Superadmin password must be at least 6 characters.");
  }

  await connectDB();

  const existingSuperadmin = await Admin.findOne({ role: "superadmin" });
  if (existingSuperadmin) {
    throw new Error(`A superadmin already exists (${existingSuperadmin.email}). No changes made.`);
  }

  const existingAccount = await Admin.findOne({ email });
  if (existingAccount) {
    throw new Error(`An admin account already exists with ${email}. No changes made.`);
  }

  await Admin.create({
    name: SUPERADMIN.name.trim(),
    email,
    password: await bcrypt.hash(SUPERADMIN.password, 10),
    role: "superadmin",
    status: "active",
  });

  console.log(`Superadmin created successfully: ${email}`);
}

createSuperadmin()
  .catch((error) => {
    console.error("Could not create superadmin:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });



