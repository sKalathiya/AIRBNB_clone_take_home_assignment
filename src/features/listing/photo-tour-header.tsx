interface PhotoTourHeaderProps {
  onClose: () => void;
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 18 18",
  "aria-hidden": true,
  role: "presentation",
  focusable: false,
} as const;

const BackIcon = () => (
  <svg {...iconProps}>
    <path
      d="M11.25 3.25 5.5 9l5.75 5.75"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ShareIcon = () => (
  <svg {...iconProps}>
    <path
      d="M3.75 8.25V14.25h10.5V8.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M9 11.25V3.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path
      d="M5.75 6.25 9 3l3.25 3.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const SaveIcon = () => (
  <svg {...iconProps}>
    <path
      d="M9 15.1 4.15 10.2a2.85 2.85 0 0 1 4.03-4.03L9 7.05l.82-.88a2.85 2.85 0 0 1 4.03 4.03L9 15.1Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const PhotoTourHeader = ({ onClose }: PhotoTourHeaderProps) => {
  return (
    <header className="photo-tour-header">
      <button
        type="button"
        className="photo-tour-header-button photo-tour-header-back"
        aria-label="Back"
        tabIndex={0}
        onClick={onClose}
      >
        <BackIcon />
      </button>
      <h2 className="photo-tour-header-title">Photo tour</h2>
      <div className="photo-tour-header-actions">
        <button
          type="button"
          className="photo-tour-header-button"
          aria-label="Share"
          tabIndex={0}
        >
          <ShareIcon />
        </button>
        <button
          type="button"
          className="photo-tour-header-button"
          aria-label="Save"
          tabIndex={0}
        >
          <SaveIcon />
        </button>
      </div>
    </header>
  );
};

export { PhotoTourHeader };
