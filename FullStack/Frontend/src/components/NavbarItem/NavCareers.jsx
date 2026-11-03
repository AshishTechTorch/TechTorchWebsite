import { routeFor } from "./navRoutes";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { Compass, Users, UserPlus, ArrowRight } from "lucide-react";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

/* Edit the short descriptions freely */
const links = [
  {
    title: "The TechTorch Way",
    text: "How we think, work and deliver.",
    Icon: Compass,
  },
  {
    title: "Culture & Inclusion",
    text: "The people and values behind TechTorch.",
    Icon: Users,
  },
  {
    title: "Join Us",
    text: "Explore open roles and grow with us.",
    Icon: UserPlus,
  },
];

const CLOSE_DELAY = 150;

function NavCareers() {
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

    return () => window.removeEventListener("resize", updatePosition);
  }, [isOpen]);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    cancelClose();
    setIsOpen(true);
  }, [cancelClose]);

  const closeMenu = useCallback(() => {
    cancelClose();

    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY);
  }, [cancelClose]);

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
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
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
        Careers
      </span>

      {isOpen && (
        <div
          style={{ top: navBottom }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className="fixed left-0 right-0 w-full max-h-[85vh] overflow-y-auto
          bg-white shadow-2xl z-[9999] border-t border-gray-100"
        >
          <div className="grid gap-10 px-[6%] py-12 lg:grid-cols-[1fr_minmax(320px,32%)] lg:gap-14">
            {/* ================= LEFT: LINKS ================= */}
            <div>
              <p className="m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a1538]">
                Careers
              </p>
              <h3 className="m-0 mb-2 font-plus-jakarta text-[26px] font-semibold leading-[1.2] text-gray-900">
                Build your career with us
              </h3>
              <p className="m-0 mb-8 max-w-[520px] font-inter text-[14px] leading-[1.6] text-gray-500">
                Our people, our culture and the opportunities at TechTorch.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {links.map(({ title, text, Icon }) => (
                  <Link
                    key={title}
                    to={routeFor(title)}
                    onClick={() => setIsOpen(false)}
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

            {/* ================= RIGHT: FEATURED CARDS ================= */}
            <div className="flex flex-col gap-5">
              {/* FEATURED STORY */}
              <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-2xl">
                <img
                  src={image4}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05) 100%)",
                  }}
                />
                <div className="relative flex h-full min-h-[240px] flex-col justify-between p-6 text-white">
                  <span className="w-fit rounded-full bg-white/15 px-3 py-1 font-plus-jakarta text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur">
                    Featured Story
                  </span>

                  <div>
                    <p className="m-0 font-plus-jakarta text-[18px] font-semibold leading-[1.35]">
                      Life & Culture at TechTorch
                    </p>
                    <Link
                      to={routeFor("Culture & Inclusion")}
                      onClick={() => setIsOpen(false)}
                      className="mt-4 inline-flex items-center gap-2 font-inter text-[13px] font-bold uppercase tracking-wide text-white no-underline hover:text-gray-200"
                    >
                      Read more <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* OPPORTUNITIES */}
              <div className="relative min-h-[170px] overflow-hidden rounded-2xl">
                <img
                  src={image5}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,0,40,0.75) 0%, rgba(20,0,40,0.15) 60%, rgba(20,0,40,0) 100%)",
                  }}
                />
                <div className="relative flex h-full min-h-[170px] flex-col justify-between p-6 text-white">
                  <span className="w-fit rounded-full bg-white/15 px-3 py-1 font-plus-jakarta text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur">
                    Opportunities
                  </span>

                  <Link
                    to={routeFor("Join Us")}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 font-inter text-[13px] font-bold uppercase tracking-wide text-white no-underline hover:text-gray-200"
                  >
                    View opportunities <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavCareers;
