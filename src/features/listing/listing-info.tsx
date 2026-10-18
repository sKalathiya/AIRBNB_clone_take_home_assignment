import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { listingInfo } from "../../assets/data";
import { AmenitiesDialog } from "./amenities-dialog";
import { HostInfo } from "./host-info";
import { ListingCalendar } from "./listing-calendar";
import { WhereYouSleep } from "./where-you-sleep";
import {
  AmenityIcon,
  HighlightIcon,
  LaurelMark,
  ShowMoreGlyph,
  StarMark,
} from "./listing-icons";

const listingFont =
  '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif';

const keepPlace = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

const isUnavailable = (name: string) =>
  listingInfo.unavailableAmenities.some((entry) => entry === name);

const GuestFavourite = () => (
  <div className="mt-8 flex h-20.5 flex-nowrap items-center gap-5.5 rounded-2xl border-[0.8px] border-solid border-[#dddddd] px-7 py-4">
    <div className="flex w-29.25 shrink-0 items-center gap-1">
      <LaurelMark />
      <span className="w-16 text-center text-[15px] leading-[1.15] font-medium text-[#222222]">
        {listingInfo.guestFavourite.label}
      </span>
      <LaurelMark mirror />
    </div>
    <p className="m-0 min-w-0 flex-1 text-[14px] leading-[1.3] font-normal text-[#222222]">
      {listingInfo.guestFavourite.summary}
    </p>
    <div className="flex w-[153px] shrink-0 items-center justify-between gap-[22px]">
      <div className="text-center">
        <div className="text-[20px] leading-none font-bold text-[#222222]">
          {listingInfo.guestFavourite.rating}
        </div>
        <div className="mt-1 flex justify-center gap-0.5 text-[#222222]">
          {Array.from({ length: 5 }, (_, index) => (
            <StarMark key={index} />
          ))}
        </div>
      </div>
      <span className="h-[34px] w-px shrink-0 bg-[#dddddd]" />
      <div className="text-center">
        <div className="text-[20px] leading-none font-bold text-[#222222]">
          {listingInfo.guestFavourite.reviewCount}
        </div>
        <div className="cursor-auto text-[13px] font-medium text-[#222222]">
          {listingInfo.guestFavourite.reviewsLabel}
        </div>
      </div>
    </div>
  </div>
);

const ListingInfo = () => {
  const [expanded, setExpanded] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const amenitiesWasOpen = useRef(false);

  const closeAmenities = useCallback(() => {
    setAmenitiesOpen(false);
  }, []);

  useEffect(() => {
    if (amenitiesOpen) {
      amenitiesWasOpen.current = true;
      return;
    }
    if (!amenitiesWasOpen.current) return;
    openerRef.current?.focus();
  }, [amenitiesOpen]);

  return (
    <div
      className="min-w-0 text-[14px] font-normal text-[#222222]"
      style={{ fontFamily: listingFont }}
    >
      <div className="pb-1">
        <h2 className="m-0 text-[22px] leading-6.5 font-medium text-[#222222]">
          {listingInfo.propertyType}
        </h2>
        <p className="mt-1.5 mb-0 text-[16px] leading-[1.43] font-normal text-[#222222]">
          {listingInfo.capacity.line}
        </p>
        <GuestFavourite />
      </div>
      <HostInfo />
      <div className="flex flex-col gap-6 border-t-[0.8px] border-solid border-[#ebebeb] py-8">
        {listingInfo.highlights.map((highlight) => (
          <div key={highlight.title} className="flex items-start gap-6">
            <HighlightIcon title={highlight.title} />
            <div>
              <div className="text-[14px] leading-5 font-medium text-[#222222]">
                {highlight.title}
              </div>
              <div className="mt-0.5 text-[14px] font-normal text-[#717171]">
                {highlight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[0.8px] border-solid border-[#ebebeb] pt-[26px] pb-8">
        <div className="mb-2 flex items-center gap-[10px] rounded-xl bg-[#f7f7f7] px-[18px] py-4 text-[14px] font-normal text-[#222222]">
          <p className="m-0">{listingInfo.translationNotice}</p>
          <a
            href="#"
            tabIndex={0}
            className="listing-quiet cursor-pointer font-medium text-[#222222] underline"
            onClick={keepPlace}
          >
            {listingInfo.showOriginalLabel}
          </a>
        </div>

        <p
          className="m-0 text-[16px] leading-[1.5] font-normal whitespace-pre-line text-[#222222]"
          style={
            expanded
              ? { maxHeight: "none", overflow: "visible" }
              : { maxHeight: "99.2px", overflow: "hidden" }
          }
        >
          {listingInfo.description}
        </p>
        <div
          aria-hidden={!expanded}
          className={`pointer-events-none relative -mt-[64px] mb-0 h-[64px] w-full select-none border-0 bg-transparent p-0 ${
            expanded ? "hidden" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#fff] via-[#fff]/70 to-[#fff]/0" />
        </div>
        <button
          type="button"
          className="listing-quiet mt-[14px] inline-flex cursor-pointer items-center gap-[6px] border-0 bg-transparent p-0 text-[16px] font-medium text-[#222222] underline underline-offset-[3px]"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? listingInfo.showLessLabel : listingInfo.showMoreLabel}
          <ShowMoreGlyph />
        </button>
      </div>
      <WhereYouSleep />
      <div
        id="amenities"
        className="border-t-[0.8px] border-solid border-[#ebebeb] py-8"
      >
        <h2 className="m-0 mb-6 text-[22px] leading-[26px] font-medium text-[#222222]">
          {listingInfo.amenitiesHeading}
        </h2>
        <ul className="m-0 mb-6 grid list-none grid-cols-2 gap-x-2 gap-y-4 p-0">
          {listingInfo.amenitiesPreview.map((label) => {
            const unavailable = isUnavailable(label);
            return (
              <li
                key={label}
                className={`flex items-center gap-4 py-1 ${
                  unavailable ? "text-[#717171]" : "text-[#222222]"
                }`}
              >
                <AmenityIcon name={label} />
                <span
                  className={`text-[16px] leading-[1.43] font-normal ${
                    unavailable ? "line-through" : ""
                  }`}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
        <button
          ref={openerRef}
          type="button"
          className="amenities-trigger inline-flex h-12 w-[208px] cursor-pointer items-center justify-center rounded-xl border border-solid border-[#222222] bg-white px-[23px] py-[13px] text-[16px] font-medium text-[#222222]"
          onClick={() => setAmenitiesOpen(true)}
        >
          {listingInfo.amenitiesButtonLabel}
        </button>
      </div>
      <AmenitiesDialog open={amenitiesOpen} onClose={closeAmenities} />
      <ListingCalendar />
    </div>
  );
};

export { ListingInfo };
export default ListingInfo;
