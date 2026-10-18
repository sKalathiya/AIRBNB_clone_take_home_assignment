import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { reserveOffer } from "../../assets/asset";
import { scrollHeader } from "../../assets/data";

const sectionIds = scrollHeader.links.map((link) => link.targetId);
const showWhenMosaicBottom = 39;
const sectionLine = 118;
const landingOffset = 80;

const ScrollStar = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    aria-hidden="true"
    focusable="false"
    className="scroll-header-star"
  >
    <path
      fill="#222222"
      d="M5.5.7 6.7 4h3.4L7.4 6.1l1 3.3L5.5 7.6 2.6 9.4l1-3.3L1.9 4h3.4z"
    />
  </svg>
);

const currentSection = () => {
  let current: string = sectionIds[0];
  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;
    if (section.getBoundingClientRect().top <= sectionLine) current = id;
  });
  return current;
};

const mosaicIsPast = () => {
  const mosaic = document.querySelector(".mosaic-section");
  if (!(mosaic instanceof HTMLElement)) return false;
  return mosaic.getBoundingClientRect().bottom <= showWhenMosaicBottom;
};

const ScrollHeader = () => {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>(sectionIds[0]);
  const [toastOpen, setToastOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const [toastTick, setToastTick] = useState(0);

  useEffect(() => {
    if (!toastOpen) return;
    setFading(false);
    const startFade = window.setTimeout(() => setFading(true), 1500);
    return () => window.clearTimeout(startFade);
  }, [toastOpen, toastTick]);

  useEffect(() => {
    if (!fading) return;
    const hide = window.setTimeout(() => {
      setToastOpen(false);
      setFading(false);
    }, 340);
    return () => window.clearTimeout(hide);
  }, [fading]);

  const showChargeToast = () => {
    setFading(false);
    setToastTick((tick) => tick + 1);
    setToastOpen(true);
  };

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(mosaicIsPast());
      setActiveId(currentSection());
    };
    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const markKeyboard = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      document.body.classList.add("kbd");
    };
    const markPointer = () => {
      document.body.classList.remove("kbd");
    };
    window.addEventListener("keydown", markKeyboard);
    window.addEventListener("pointerdown", markPointer);
    return () => {
      window.removeEventListener("keydown", markKeyboard);
      window.removeEventListener("pointerdown", markPointer);
    };
  }, []);

  const onSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (!section) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const top =
      section.getBoundingClientRect().top + window.scrollY - landingOffset;
    window.scrollTo({
      top,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveId(targetId);
  };

  return (
    <>
      <div
        className={visible ? "scroll-header is-visible" : "scroll-header"}
        aria-hidden={visible ? undefined : true}
        inert={visible ? undefined : true}
      >
        <div className="scroll-header-row">
          <nav className="scroll-header-nav" aria-label={scrollHeader.navLabel}>
            {scrollHeader.links.map((link) => (
              <a
                key={link.targetId}
                href={link.href}
                className={
                  activeId === link.targetId
                    ? "scroll-header-link is-current"
                    : "scroll-header-link"
                }
                onClick={(event) => onSectionClick(event, link.targetId)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="scroll-header-actions">
            <div className="scroll-header-price">
              <p className="scroll-header-price-line">
                <span className="scroll-header-amount">
                  {scrollHeader.price.amountLabel}
                </span>
                <span className="scroll-header-nights">
                  {scrollHeader.price.nightsLabel}
                </span>
              </p>
              <p className="scroll-header-rating">
                <ScrollStar /> {scrollHeader.rating.scoreLabel}{" "}
                {scrollHeader.rating.separator}{" "}
                {scrollHeader.rating.reviewsLabel}
              </p>
            </div>
            <button
              type="button"
              className="scroll-header-reserve"
              onClick={showChargeToast}
            >
              {scrollHeader.reserveLabel}
            </button>
          </div>
        </div>
      </div>
      <p
        className={`title-toast z-50${fading ? " title-toast-out" : ""}`}
        data-open={toastOpen ? "true" : "false"}
        role="status"
        aria-live="polite"
        aria-hidden={toastOpen ? undefined : true}
      >
        {toastOpen ? reserveOffer.chargeNote : ""}
      </p>
    </>
  );
};

export { ScrollHeader };
export default ScrollHeader;
