import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { assets } from "../../assets/asset";
import { lightboxHeader, photoTourLightbox } from "../../assets/data";
import { LightboxHeader } from "./lightbox-header";
import { PhotoTourHeader } from "./photo-tour-header";
import { PhotoTourScroll } from "./photo-tour-scroll";

interface PhotoTourDialogProps {
  open: boolean;
  onClose: () => void;
  scrollRoomIndex: number | null;
}

type TourPhoto = (typeof photoTourLightbox.photos)[number];

const tourEase = [0.2, 0, 0, 1] as const;

const ChevronIcon = ({ direction }: { direction: "previous" | "next" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 32 32"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d={
        direction === "previous"
          ? "M19.78 6 L12.22 16 L19.78 26"
          : "M12.22 6 L19.78 16 L12.22 26"
      }
      fill="none"
      stroke="rgb(34, 34, 34)"
      strokeWidth="4"
    />
  </svg>
);

interface PhotoLightboxProps {
  open: boolean;
  photo: TourPhoto | null;
  onStep: (index: number) => void;
  onClose: () => void;
}

const counterLabel = (index: number) =>
  lightboxHeader.counterPattern
    .replace("{current}", String(index))
    .replace("{total}", String(lightboxHeader.photoCount));

const PhotoLightbox = ({
  open,
  photo,
  onStep,
  onClose,
}: PhotoLightboxProps) => {
  const [shown, setShown] = useState<TourPhoto | null>(photo);

  if (photo && photo !== shown) {
    setShown(photo);
  }

  if (!shown) return null;

  const atStart = shown.index === 1;
  const atEnd = shown.index === photoTourLightbox.photoCount;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photoTourLightbox.dialogLabel}
      aria-hidden={open ? undefined : true}
      className={open ? "photo-lightbox is-open" : "photo-lightbox"}
    >
      <LightboxHeader
        open={open}
        title={shown.category}
        counter={counterLabel(shown.index)}
        onDismiss={onClose}
      />
      <div className="photo-lightbox-stage">
        <img
          className="photo-lightbox-image"
          src={assets.images[shown.assetId]}
          alt={shown.category}
          width={shown.naturalWidth}
          height={shown.naturalHeight}
          style={
            {
              aspectRatio: `${shown.naturalWidth} / ${shown.naturalHeight}`,
              "--lb-w": shown.naturalWidth,
              "--lb-h": shown.naturalHeight,
            } as CSSProperties
          }
        />
      </div>
      <button
        id="lbPrev"
        type="button"
        className="photo-lightbox-arrow photo-lightbox-arrow-prev"
        aria-label={photoTourLightbox.previousLabel}
        disabled={atStart}
        onClick={() => {
          if (atStart) return;
          onStep(shown.index - 2);
        }}
      >
        <ChevronIcon direction="previous" />
      </button>
      <button
        id="lbNext"
        type="button"
        className="photo-lightbox-arrow photo-lightbox-arrow-next"
        aria-label={photoTourLightbox.nextLabel}
        disabled={atEnd}
        onClick={() => {
          if (atEnd) return;
          onStep(shown.index);
        }}
      >
        <ChevronIcon direction="next" />
      </button>
    </div>
  );
};

const PhotoTourDialog = ({
  open,
  onClose,
  scrollRoomIndex,
}: PhotoTourDialogProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [present, setPresent] = useState(open);
  const modalItem = searchParams.get(photoTourLightbox.queryKey);
  const photo =
    photoTourLightbox.photos.find(
      (item) => String(item.modalItem) === modalItem,
    ) ?? null;
  const lightboxOpen = open && photo !== null;

  if (open && !present) {
    setPresent(true);
  }

  const showAt = (index: number) => {
    const next = photoTourLightbox.photos[index];
    if (!next) return;
    setSearchParams(
      (current) => {
        const params = new URLSearchParams(current);
        params.set("modal", photoTourLightbox.modal);
        params.set(photoTourLightbox.queryKey, String(next.modalItem));
        return params;
      },
      { preventScrollReset: true },
    );
  };

  const closeLightbox = () => {
    setSearchParams(
      (current) => {
        if (!current.has(photoTourLightbox.queryKey)) return current;
        const params = new URLSearchParams(current);
        params.delete(photoTourLightbox.queryKey);
        return params;
      },
      { preventScrollReset: true },
    );
  };

  useEffect(() => {
    if (open) return;
    const timeoutId = window.setTimeout(() => setPresent(false), 300);
    return () => window.clearTimeout(timeoutId);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (event.repeat) return;
        if (searchParams.has(photoTourLightbox.queryKey)) {
          closeLightbox();
          return;
        }
        onClose();
        return;
      }
      if (!photo) return;
      if (event.key === "ArrowLeft" && photo.index > 1) {
        showAt(photo.index - 2);
      }
      if (
        event.key === "ArrowRight" &&
        photo.index < photoTourLightbox.photoCount
      ) {
        showAt(photo.index);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, photo, searchParams, setSearchParams]);

  return createPortal(
    <>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Photo tour"
        aria-hidden={present ? undefined : true}
        tabIndex={-1}
        className="photo-tour-dialog"
        style={{ visibility: present ? "visible" : "hidden" }}
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : 28,
        }}
        transition={{
          duration: 0.3,
          ease: tourEase,
        }}
      >
        <PhotoTourHeader onClose={onClose} />
        <PhotoTourScroll open={open} scrollRoomIndex={scrollRoomIndex} />
      </motion.div>
      {present ? (
        <PhotoLightbox
          open={lightboxOpen}
          photo={photo}
          onStep={showAt}
          onClose={closeLightbox}
        />
      ) : null}
    </>,
    document.body,
  );
};

export { PhotoTourDialog };
