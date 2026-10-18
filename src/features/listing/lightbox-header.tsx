import { lightboxHeader } from "../../assets/data";

interface LightboxHeaderProps {
  open: boolean;
  title: string;
  counter: string;
  onDismiss: () => void;
}

const GridIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="3" cy="3" r="1.35" fill="currentColor" />
    <circle cx="9" cy="3" r="1.35" fill="currentColor" />
    <circle cx="15" cy="3" r="1.35" fill="currentColor" />
    <circle cx="3" cy="9" r="1.35" fill="currentColor" />
    <circle cx="9" cy="9" r="1.35" fill="currentColor" />
    <circle cx="15" cy="9" r="1.35" fill="currentColor" />
    <circle cx="3" cy="15" r="1.35" fill="currentColor" />
    <circle cx="9" cy="15" r="1.35" fill="currentColor" />
    <circle cx="15" cy="15" r="1.35" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 18"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M4.5 4.5 L13.5 13.5 M13.5 4.5 L4.5 13.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const LightboxHeader = ({
  open,
  title,
  counter,
  onDismiss,
}: LightboxHeaderProps) => {
  return (
    <header className="lightbox-header">
      <button
        type="button"
        tabIndex={0}
        className="lightbox-header-button lightbox-header-show"
        aria-label={lightboxHeader.showAllPhotosLabel}
        onClick={onDismiss}
      >
        <GridIcon />
      </button>
      <span className="lightbox-header-title">{open ? title : ""}</span>
      <div className="lightbox-header-end">
        <span className="lightbox-header-counter">{open ? counter : ""}</span>
        <button
          type="button"
          tabIndex={0}
          className="lightbox-header-button"
          aria-label={lightboxHeader.closeLabel}
          onClick={onDismiss}
        >
          <CloseIcon />
        </button>
      </div>
    </header>
  );
};

export { LightboxHeader };
