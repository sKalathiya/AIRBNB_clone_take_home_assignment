import { useEffect } from "react";
import { mapLocation } from "../../assets/data";

const HousePinIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      d="M10.5 27 28 10.5 45.5 27"
      fill="none"
      stroke="rgb(255, 255, 255)"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M16 25.5V45.5H40V25.5"
      fill="none"
      stroke="rgb(255, 255, 255)"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M24.5 45.5V33H31.5V45.5"
      fill="none"
      stroke="rgb(255, 255, 255)"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <circle
      cx="6.75"
      cy="6.75"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M10.2 10.2 13.6 13.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      d="M8 3.5v9M3.5 8h9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      d="M3.5 8h9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M4.6 2.2 3.4 3.4 7.6 7l-4.2 3.6 1.2 1.2L10.2 7 4.6 2.2Z"
    />
  </svg>
);

const MapSection = () => {
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
      document.body.classList.remove("kbd");
    };
  }, []);

  return (
    <section id={mapLocation.sectionId} className="map-section">
      <h2 className="map-heading">{mapLocation.heading}</h2>
      <div className="map-place">{mapLocation.place}</div>
      <div className="map-frame">
        <div className="map-surface" />
        <div className="map-grid" />
        <div className="map-pin " tabIndex={-1}>
          <HousePinIcon />
        </div>
        <button
          className="map-control map-tool map-search cursor-pointer"
          aria-label={mapLocation.controls.searchLabel}
        >
          <SearchIcon />
        </button>
        <div className="map-zoom">
          <button
            className="map-control map-tool cursor-pointer"
            aria-label={mapLocation.controls.zoomInLabel}
          >
            <PlusIcon />
          </button>
          <button
            className="map-control map-tool cursor-pointer"
            aria-label={mapLocation.controls.zoomOutLabel}
          >
            <MinusIcon />
          </button>
        </div>
      </div>
      <div className="map-caption">{mapLocation.caption}</div>
      <div className="map-neighbourhood-heading">
        {mapLocation.neighbourhoodHeading}
      </div>
      <div className="map-neighbourhood">{mapLocation.neighbourhood}</div>
      <button className="map-control map-show-more">
        {mapLocation.showMoreLabel}
        <ChevronIcon />
      </button>
    </section>
  );
};

export { MapSection };
export default MapSection;
