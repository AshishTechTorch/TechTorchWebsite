import { Link } from "react-router-dom";
import { routeFor } from "./navRoutes";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Landmark,
  GraduationCap,
  HeartPulse,
  Factory,
  Monitor,
  ShieldCheck,
  Zap,
  ShoppingCart,
  Truck,
  RadioTower,
  ArrowRight,
} from "lucide-react";

/* Edit the short descriptions freely.
   "title" must match the name used in navRoutes.js */
const industries = [
  {
    title: "Finance",
    text: "Secure, connected systems for financial services.",
    Icon: Landmark,
  },
  {
    title: "Education",
    text: "Software for institutions, students and staff.",
    Icon: GraduationCap,
  },
  {
    title: "Healthcare",
    text: "Technology for efficient hospital and care operations.",
    Icon: HeartPulse,
  },
  {
    title: "Manufacturing",
    text: "Connected production, inventory and supply chain.",
    Icon: Factory,
  },
  {
    title: "Information Technology",
    text: "Engineering and digital services for IT companies.",
    Icon: Monitor,
  },
  {
    title: "Insurance",
    text: "Streamlined policy, claims and customer processes.",
    Icon: ShieldCheck,
  },
  {
    title: "Energy",
    text: "Digital systems for energy and utility operations.",
    Icon: Zap,
  },
  {
    title: "FMCG",
    text: "Distribution, inventory and sales for fast-moving goods.",
    Icon: ShoppingCart,
  },
  {
    title: "Transportation",
    text: "Logistics, fleet and supply chain visibility.",
    Icon: Truck,
  },
  {
    title: "Telecommunications",
    text: "Scalable software and support for telecom providers.",
    Icon: RadioTower,
  },
];

const CLOSE_DELAY = 150;

function NavIndustries() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBottom, setNavBottom] = useState(0);

  const wrapperRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!wrapperRef.current) return;

      const navEl =
        wrapperRef.current.closest("header, nav") || wrapperRef.current;

      setNavBottom(navEl.getBoundingClientRect().bottom);
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isOpen]);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();

    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY);
  }, [cancelClose]);

  const handleOpen = useCallback(() => {
    cancelClose();
    setIsOpen(true);
  }, [cancelClose]);

  const handleLinkClick = () => {
    cancelClose();
    setIsOpen(false);
  };

  /* Close with the Escape key */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    return () => cancelClose();
  }, [cancelClose]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-full"
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
    >
      {/* NAVIGATION TITLE */}
      <span
        className="relative inline-flex items-center h-full cursor-pointer text-[17px] 
        text-gray-900 hover:text-[#8a1538] 
        transition-colors duration-200 
        after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:w-0 
        after:bg-[#8a1538] 
        after:transition-all after:duration-200 
        hover:after:w-full"
      >
        Industries
      </span>

      {/* MEGA MENU */}
      {isOpen && (
        <div
          style={{ top: navBottom }}
          onMouseEnter={handleOpen}
          onMouseLeave={scheduleClose}
          className="fixed left-0 right-0 w-full max-h-[85vh] overflow-y-auto
          bg-white shadow-2xl z-[9999] border-t border-gray-100"
        >
          <div className="px-[6%] py-12">
            {/* ================= INDUSTRY CARDS ================= */}
            <div className="max-w-[920px]">
              <p className="m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a1538]">
                Industries
              </p>
              <h3 className="m-0 mb-2 font-plus-jakarta text-[26px] font-semibold leading-[1.2] text-gray-900">
                Solutions for your sector
              </h3>
              <p className="m-0 mb-8 max-w-[520px] font-inter text-[14px] leading-[1.6] text-gray-500">
                Technology shaped around how your industry works.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {industries.map(({ title, text, Icon }) => (
                  <Link
                    key={title}
                    to={routeFor(title)}
                    onClick={handleLinkClick}
                    className="group flex items-start gap-4 rounded-xl border border-gray-100 
                    bg-white p-5 no-underline transition-all duration-200 
                    hover:border-[#8a1538]/30 hover:bg-[#fdf5f8] hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf0f6] text-[#8a1538]">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2 font-plus-jakarta text-[16px] font-semibold text-gray-900 group-hover:text-[#8a1538]">
                        {title}
                        <ArrowRight
                          size={16}
                          className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </span>
                      <span className="mt-1 block font-inter text-[13px] leading-[1.5] text-gray-500">
                        {text}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavIndustries;
