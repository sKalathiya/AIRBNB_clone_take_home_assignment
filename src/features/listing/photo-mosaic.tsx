import { useCallback, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { assets, mosaicListing } from "../../assets/asset";
import { photoTour } from "../../assets/data";
import { PhotoTourDialog } from "./photo-tour-dialog";

const roomIndexForAsset = (assetId: string) => {
  const roomIndex = photoTour.rooms.findIndex((room) =>
    room.photos.some((photo) => photo.assetId === assetId),
  );
  return roomIndex < 0 ? null : roomIndex;
};

const mosaicPhotoUrl = (assetId: string) => {
  if (assetId === "mosaicPhoto1") return assets.images.mosaicPhoto1;
  if (assetId === "mosaicPhoto2") return assets.images.mosaicPhoto2;
  if (assetId === "mosaicPhoto3") return assets.images.mosaicPhoto3;
  if (assetId === "mosaicPhoto4") return assets.images.mosaicPhoto4;
  if (assetId === "mosaicPhoto5") return assets.images.mosaicPhoto5;
  return "";
};

const GridIcon = () => (
  <svg
    width="15"
    height="15"
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

const PhotoMosaic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [scrollRoomIndex, setScrollRoomIndex] = useState<number | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const tourOpen = searchParams.get("modal") === "PHOTO_TOUR_SCROLLABLE";

  const openTour = (
    event: MouseEvent<HTMLButtonElement>,
    roomIndex: number | null,
  ) => {
    openerRef.current = event.currentTarget;
    setScrollRoomIndex(roomIndex);
    setSearchParams(
      (current) => {
        const next = new URLSearchParams(current);
        next.set("modal", "PHOTO_TOUR_SCROLLABLE");
        return next;
      },
      { preventScrollReset: true },
    );
  };

  const closeTour = useCallback(() => {
    setSearchParams(
      (current) => {
        const next = new URLSearchParams(current);
        next.delete("modal");
        next.delete("modalItem");
        return next;
      },
      { preventScrollReset: true },
    );
    openerRef.current?.focus({ preventScroll: true });
  }, [setSearchParams]);

  return (
    <>
      <section
        id="photos"
        className="mosaic-section"
        aria-label={mosaicListing.regionLabel}
      >
        <div className="mosaic-grid">
          {mosaicListing.photos.map((photo) => (
            <button
              key={photo.assetId}
              type="button"
              tabIndex={0}
              className={
                photo.placement === "hero"
                  ? "mosaic-tile mosaic-tile-hero"
                  : "mosaic-tile"
              }
              aria-label={photo.accessibleName}
              onClick={(event) =>
                openTour(event, roomIndexForAsset(photo.assetId))
              }
            >
              <img
                src={mosaicPhotoUrl(photo.assetId)}
                alt=""
                width={photo.naturalWidth}
                height={photo.naturalHeight}
                decoding="async"
                loading={photo.loading === "lazy" ? "lazy" : "eager"}
                onError={(event) => {
                  event.currentTarget.hidden = true;
                }}
              />
            </button>
          ))}
        </div>
        <button
          id="showAllPhotos"
          type="button"
          tabIndex={0}
          className="mosaic-show-all ring-control"
          onClick={(event) => openTour(event, null)}
        >
          <GridIcon />
          {mosaicListing.showAllPhotosLabel}
        </button>
      </section>
      <PhotoTourDialog
        open={tourOpen}
        onClose={closeTour}
        scrollRoomIndex={scrollRoomIndex}
      />
    </>
  );
};

export { PhotoMosaic };
export default PhotoMosaic;
