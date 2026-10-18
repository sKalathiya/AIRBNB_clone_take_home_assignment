import { useState, useEffect } from "react";

const titleCopy = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  share: "Share",
  save: "Save",
  saved: "Saved",
  shareToast: "Share options",
  savedToast: "Saved to wishlist",
  removedToast: "Removed from wishlist",
} as const;

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      d="M16 18V6M11 11l5-5 5 5M9 14h-1v12h16V14h-1"
    />
  </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      d="M16 26.5C11.2 23.2 6.5 19.4 6.5 14.6 6.5 11.4 8.8 9 12 9c1.8 0 3 1 4 2.2C17 10 18.2 9 20 9c3.2 0 5.5 2.4 5.5 5.6 0 4.8-4.7 8.6-9.5 11.9z"
    />
  </svg>
);

const TitleBar = () => {
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const showToast = (message: string) => {
    setToast(message);
    setToastOpen(true);
  };

  return (
    <>
      <div className="title-row">
        <h1>{titleCopy.title}</h1>
        <div className="title-actions">
          <button
            type="button"
            className="title-action"
            onClick={() => showToast(titleCopy.shareToast)}
          >
            <ShareIcon />
            <span>{titleCopy.share}</span>
          </button>
          <button
            type="button"
            className={
              saved ? "title-action title-action-saved" : "title-action"
            }
            onClick={() => {
              const next = !saved;
              setSaved(next);
              showToast(next ? titleCopy.savedToast : titleCopy.removedToast);
            }}
          >
            <HeartIcon filled={saved} />
            <span>{saved ? titleCopy.saved : titleCopy.save}</span>
          </button>
        </div>
      </div>
      <div
        className="pointer-events-none fixed inset-x-0 bottom-8 z-50 flex w-full justify-center"
        aria-hidden="true"
      >
        <div
          className={`${
            toastOpen ? "animate-toast-in" : "animate-toast-out"
          } rounded-lg bg-black bg-opacity-80 px-6 py-3 text-base font-medium text-white shadow-xl`}
          role="status"
          aria-live="polite"
          style={{ pointerEvents: "auto" }}
        >
          {toast}
        </div>
      </div>
      <style>
        {`
          @keyframes toast-in {
            0% {
              opacity: 0;
              transform: translate(-50%, 32px);
            }
            50% {
              opacity: 1;
              transform: translate(-50%, 0);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, 0);
            }
          }
          @keyframes toast-out {
            0% {
              opacity: 1;
              transform: translate(-50%, 0);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, 16px);
            }
          }
          .animate-toast-in {
            animation: toast-in 320ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
          }
          .animate-toast-out {
            animation: toast-out 340ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
          }
        `}
      </style>
      {(() => {
        // Timed disappearance + fade out
        const [fade, setFade] = useState(false);

        useEffect(() => {
          if (!toastOpen) return;
          setFade(false);
          const t = setTimeout(() => setFade(true), 1000);
          return () => clearTimeout(t);
        }, [toastOpen]);

        useEffect(() => {
          if (!fade) return;
          const t = setTimeout(() => setToastOpen(false), 340);
          return () => clearTimeout(t);
        }, [fade, setToastOpen]);

        return null;
      })()}
    </>
  );
};

export { TitleBar };
export default TitleBar;
