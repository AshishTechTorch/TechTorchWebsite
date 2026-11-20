import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Users,
  Wallet,
  LayoutGrid,
  MessageCircle,
  Package,
  CreditCard,
  Zap,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const SITE = "https://torchxsuite.com/";

/* >>> CHANGE A LINK HERE <<< */
const products = [
  {
    title: "TorchX Talent",
    text: "Hiring, onboarding and people management.",
    Icon: Users,
    url: "https://torchxsuite.com/talent/",
  },
  {
    title: "TorchX Finance",
    text: "Accounts, billing and financial control.",
    Icon: Wallet,
    url: SITE,
  },
  {
    title: "TorchX Suite",
    text: "Everything your business needs, in one platform.",
    Icon: LayoutGrid,
    url: SITE,
  },
  {
    title: "TorchX Engage",
    text: "Customer and stakeholder engagement.",
    Icon: MessageCircle,
    url: SITE,
  },
  {
    title: "TorchX Inventory",
    text: "Stock, warehouses and supply tracking.",
    Icon: Package,
    url: SITE,
  },
  {
    title: "TorchX Pay",
    text: "Payments and transactions made simple.",
    Icon: CreditCard,
    url: SITE,
  },
  {
    title: "TorchX Spark",
    text: "Fast ideas and tools to get you moving.",
    Icon: Zap,
    url: "https://torchxsuite.com/spark/",
  },
  {
    title: "TorchX Sync",
    text: "Keep your systems and data connected.",
    Icon: RefreshCw,
    url: "https://torchxsuite.com/sync/",
  },
];

const CLOSE_DELAY = 150;

/* Opens the link in a new tab (works even though the menu closes) */
const openExternal = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function NavProduct() {
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
        Product
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
            {/* ================= LEFT: PRODUCTS ================= */}
            <div>
              <p className="m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a1538]">
                Product
              </p>
              <h3 className="m-0 mb-2 font-plus-jakarta text-[26px] font-semibold leading-[1.2] text-gray-900">
                Get to know TorchX
              </h3>
              <p className="m-0 mb-8 max-w-[520px] font-inter text-[14px] leading-[1.6] text-gray-500">
                Connected business products that work on their own or together.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {products.map(({ title, text, Icon, url }) => (
                  <a
                    key={title}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      openExternal(url);
                      setIsOpen(false);
                    }}
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
                  </a>
                ))}
              </div>
            </div>

            {/* ================= RIGHT: FEATURED CARD ================= */}
            <div className="flex flex-col">
              <div
                style={{
                  background: "linear-gradient(135deg,#8a1538,#2a0612)",
                }}
                className="relative min-h-[320px] flex-1 overflow-hidden rounded-2xl"
              >
                <div className="relative flex h-full min-h-[320px] flex-col justify-between p-6 text-white">
                  <span className="w-fit rounded-full bg-white/15 px-3 py-1 font-plus-jakarta text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur">
                    Featured
                  </span>

                  <div>
                    <p className="m-0 font-plus-jakarta text-[18px] font-semibold leading-[1.35]">
                      TorchX Suite: Bringing Business Operations Together
                    </p>
                    <a
                      href={SITE}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        openExternal(SITE);
                        setIsOpen(false);
                      }}
                      className="mt-4 inline-flex items-center gap-2 font-inter text-[13px] font-bold uppercase tracking-wide text-white no-underline hover:text-gray-200"
                    >
                      Learn more <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavProduct;
