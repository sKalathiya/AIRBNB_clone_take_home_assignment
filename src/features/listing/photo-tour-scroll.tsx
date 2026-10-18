import { useEffect, useLayoutEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { assets } from "../../assets/asset";
import { listingInfo, photoTour, photoTourLightbox } from "../../assets/data";

type TourPhoto = (typeof photoTour.rooms)[number]["photos"][number];
type ImageId = keyof typeof assets.images;

type PhotoRow =
  | { kind: "full"; photo: TourPhoto }
  | { kind: "pair"; photos: readonly TourPhoto[] };

const imageUrl = (assetId: string) => assets.images[assetId as ImageId];

const photoRows = (photos: readonly TourPhoto[]): PhotoRow[] => {
  const rows: PhotoRow[] = [];
  let index = 0;
  while (index < photos.length) {
    const remaining = photos.length - index;
    if (remaining === 1) {
      rows.push({ kind: "full", photo: photos[index] });
      break;
    }
    if (remaining === 2) {
      rows.push({ kind: "pair", photos: photos.slice(index, index + 2) });
      break;
    }
    rows.push({ kind: "full", photo: photos[index] });
    rows.push({ kind: "pair", photos: photos.slice(index + 1, index + 3) });
    index += 3;
  }
  return rows;
};

interface PhotoTourScrollProps {
  open: boolean;
  scrollRoomIndex: number | null;
}

const PhotoTourScroll = ({ open, scrollRoomIndex }: PhotoTourScrollProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const viewerWasOpen = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const viewerOpen = searchParams.get("modalItem") !== null;

  useEffect(() => {
    if (viewerOpen) {
      viewerWasOpen.current = true;
      return;
    }
    if (!viewerWasOpen.current) return;
    viewerWasOpen.current = false;
    openerRef.current?.focus({ preventScroll: true });
  }, [viewerOpen]);

  const scrollToRoom = (roomIndex: number) => {
    const scroller = scrollerRef.current;
    const section = scroller?.querySelector<HTMLElement>(
      `[data-room="${roomIndex}"]`,
    );
    if (!scroller || !section) return;
    const delta =
      section.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top -
      24;
    scroller.scrollTo({ top: scroller.scrollTop + delta });
  };

  useLayoutEffect(() => {
    if (!open) return;
    const align = () => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      if (scrollRoomIndex === null) {
        scroller.scrollTop = 0;
        return;
      }
      const section = scroller.querySelector<HTMLElement>(
        `[data-room="${scrollRoomIndex}"]`,
      );
      if (!section) return;
      const delta =
        section.getBoundingClientRect().top -
        scroller.getBoundingClientRect().top -
        24;
      scroller.scrollTop += delta;
    };
    align();
    const frame = window.requestAnimationFrame(align);
    return () => window.cancelAnimationFrame(frame);
  }, [open, scrollRoomIndex]);

  const openPhoto = (index: number, button: HTMLButtonElement) => {
    const match = photoTourLightbox.photos.find(
      (entry) => entry.index === index,
    );
    if (!match) return;
    openerRef.current = button;
    setSearchParams(
      (current) => {
        const next = new URLSearchParams(current);
        next.set("modalItem", String(match.modalItem));
        return next;
      },
      { preventScrollReset: true },
    );
  };

  return (
    <div className="photo-tour-scroll" ref={scrollerRef}>
      <div className="photo-tour-scroll-frame">
        <nav
          className="photo-tour-categories grid grid-cols-4 gap-4 md:grid-cols-2"
          aria-label={photoTour.categoryNavLabel}
        >
          {photoTour.rooms.map((room, roomIndex) => (
            <button
              key={room.title}
              type="button"
              className="photo-tour-category"
              onClick={() => scrollToRoom(roomIndex)}
            >
              <img src={imageUrl(room.categoryAssetId)} alt="" loading="lazy" />
              <span className="photo-tour-category-label">{room.title}</span>
            </button>
          ))}
        </nav>
        {photoTour.rooms.map((room, roomIndex) => (
          <div
            key={room.title}
            className="photo-tour-room"
            data-room={roomIndex}
          >
            <div className="photo-tour-room-copy">
              <p className="photo-tour-room-title">{room.title}</p>
              {room.amenities.length > 0 ? (
                <p className="photo-tour-room-amenities">
                  {room.amenities.join(photoTour.amenitySeparator)}
                </p>
              ) : null}
            </div>
            <div className="photo-tour-photos">
              {photoRows(room.photos).map((row) =>
                row.kind === "full" ? (
                  <PhotoButton
                    key={row.photo.index}
                    photo={row.photo}
                    roomTitle={room.title}
                    onOpen={openPhoto}
                  />
                ) : (
                  <div
                    key={row.photos[0].index}
                    className="photo-tour-photo-pair"
                  >
                    {row.photos.map((photo) => (
                      <PhotoButton
                        key={photo.index}
                        photo={photo}
                        roomTitle={room.title}
                        onOpen={openPhoto}
                      />
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface PhotoButtonProps {
  photo: TourPhoto;
  roomTitle: string;
  onOpen: (index: number, button: HTMLButtonElement) => void;
}

const PhotoButton = ({ photo, roomTitle, onOpen }: PhotoButtonProps) => {
  return (
    <button
      type="button"
      className="photo-tour-photo"
      aria-label={`${listingInfo.propertyName} image ${photo.index}`}
      onClick={(event) => {
        onOpen(photo.index, event.currentTarget);
      }}
    >
      <img
        src={imageUrl(photo.assetId)}
        alt={roomTitle}
        width={photo.naturalWidth}
        height={photo.naturalHeight}
      />
    </button>
  );
};

export { PhotoTourScroll };
