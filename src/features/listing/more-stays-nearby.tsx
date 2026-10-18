import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { assets } from "../../assets/asset";
import { nearbyStays } from "../../assets/data";

const scrollStepRatio = 0.9;
const edgeSlack = 8;

const listingFont =
  '"Airbnb Cereal VF", Circular, system-ui, Roboto, "Helvetica Neue", sans-serif';

const starPath =
  "M16 2 L19.53 11.15 L29.31 11.67 L21.71 17.85 L24.23 27.33 L16 22 L7.77 27.33 L10.29 17.85 L2.69 11.67 L12.47 11.15 Z";

const chevronPaths = {
  previous: "M13.25 3.25 L7.5 9 L13.25 14.75 L11.75 16.25 L4.5 9 L11.75 1.75 Z",
  next: "M4.75 3.25 L10.5 9 L4.75 14.75 L6.25 16.25 L13.5 9 L6.25 1.75 Z",
} as const;

const PageChevron = ({ direction }: { direction: "previous" | "next" }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 18 18"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path fill="rgb(34, 34, 34)" d={chevronPaths[direction]} />
  </svg>
);

const readTrackPage = (track: HTMLDivElement) => {
  const total = Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth));
  const current = Math.min(
    total,
    Math.round(track.scrollLeft / track.clientWidth) + 1,
  );

  return {
    current,
    total,
    atStart: track.scrollLeft < edgeSlack,
    atEnd:
      track.scrollLeft + track.clientWidth >= track.scrollWidth - edgeSlack,
  };
};

const MoreStaysNearby = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(nearbyStays.pageCount);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncPage = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const next = readTrackPage(track);
    setPage((current) => (current === next.current ? current : next.current));
    setPageCount(next.total);
    setAtStart((current) =>
      current === next.atStart ? current : next.atStart,
    );
    setAtEnd((current) => (current === next.atEnd ? current : next.atEnd));
  }, []);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    syncPage();
    const observer = new ResizeObserver(() => {
      syncPage();
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, [syncPage]);

  const scrollByPage = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * scrollStepRatio,
      behavior: "smooth",
    });
  };

  return (
    <section className="nearby-stays" style={{ fontFamily: listingFont }}>
      <div className="nearby-heading-row">
        <h2>{nearbyStays.heading}</h2>
        <div className="nearby-page-controls">
          <span className="nearby-page-label">
            {page}
            {" / "}
            {pageCount}
          </span>
          <button
            id={nearbyStays.previousButtonId}
            className="nearby-page-button"
            disabled={atStart}
            onClick={() => scrollByPage(-1)}
          >
            <PageChevron direction="previous" />
          </button>
          <button
            id={nearbyStays.nextButtonId}
            className="nearby-page-button"
            disabled={atEnd}
            onClick={() => scrollByPage(1)}
          >
            <PageChevron direction="next" />
          </button>
        </div>
      </div>
      <div ref={trackRef} className="nearby-track" onScroll={syncPage}>
        {nearbyStays.stays.map((stay, index) => (
          <div className="nearby-card" key={`${stay.title}-${index}`}>
            <img
              className="nearby-card-image"
              src={assets.images[stay.imageAssetId]}
              alt=""
              loading="lazy"
            />
            <div className="nearby-card-title">{stay.title}</div>
            <div className="nearby-card-price">
              {stay.priceCurrency}
              {stay.priceAmount}
              {" \u00A0 "}
              <span className="nearby-star">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path fill="rgb(34, 34, 34)" d={starPath} />
                </svg>
              </span>
              {` ${stay.ratingLabel}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { MoreStaysNearby };
export default MoreStaysNearby;
