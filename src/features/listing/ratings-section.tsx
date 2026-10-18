import { useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import { assets } from "../../assets/asset";
import { reviewsSection } from "../../assets/data";


const listingFont =
  '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif';

const initialAvatar = {
  A: { backgroundColor: "#f7ede2", color: "#c1852a" },
  V: { backgroundColor: "#efeaf7", color: "#8b6fc4" },
} as const;

const keepPlace = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const revealChip = (event: FocusEvent<HTMLButtonElement>) => {
  const chip = event.currentTarget;
  const row = chip.parentElement;
  if (!row) return;
  const rowRect = row.getBoundingClientRect();
  const chipRect = chip.getBoundingClientRect();
  if (chipRect.right > rowRect.right) {
    row.scrollLeft += chipRect.right - rowRect.right;
  } else if (chipRect.left < rowRect.left) {
    row.scrollLeft -= rowRect.left - chipRect.left;
  }
};

const ReviewStar = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className="block h-2.5 w-2.5 shrink-0"
  >
    <path
      fill="#222222"
      d="M5 .55 6.18 3.55h3.27L6.82 5.45l1.05 3.15L5 6.85 2.13 8.6l1.05-3.15L.55 3.55h3.27z"
    />
  </svg>
);

const CategoryIcon = ({ label }: { label: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    fill="none"
    stroke="#222222"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-2 block h-8 w-8"
  >
    {label === "Cleanliness" ? (
      <>
        <path d="M14 9.5h5.2l1.4-3.2H23" />
        <path d="M13.2 9.5h6.4v2.4h-6.4z" />
        <path d="M14.2 11.9h4.4c.5 2.2 1.3 3.6 1.3 6.1 0 5.6-1.1 8.5-3.5 8.5s-3.5-2.9-3.5-8.5c0-2.5.8-3.9 1.3-6.1z" />
        <path d="M18.6 15.2h3.4c1 0 1.6.6 1.6 1.4s-.6 1.4-1.4 1.4h-3.6" />
      </>
    ) : null}
    {label === "Accuracy" ? <path d="M8 16.6 13.2 22 24.2 10.2" /> : null}
    {label === "Check-in" ? (
      <>
        <circle cx="12" cy="15" r="4.6" />
        <path d="M16.2 15H25.5v2.8h-2.2V21h-2.4v-3.2h-4.7" />
      </>
    ) : null}
    {label === "Communication" ? (
      <path d="M7.5 8.5h17v11.2h-8.2L9.2 24v-4.3H7.5z" />
    ) : null}
    {label === "Location" ? (
      <>
        <path d="M16 27.2s7.2-7.4 7.2-12.2a7.2 7.2 0 1 0-14.4 0c0 4.8 7.2 12.2 7.2 12.2z" />
        <circle cx="16" cy="15" r="2.2" />
      </>
    ) : null}
    {label === "Value" ? (
      <>
        <path d="M7 16.2 16.2 7h8.6v8.6L15.6 25z" />
        <circle cx="21.2" cy="10.8" r="1.15" fill="#222222" stroke="none" />
      </>
    ) : null}
  </svg>
);

const RatingsSection = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="border-t border-solid border-[#ebebeb]">
      <section
        id={reviewsSection.sectionId}
        className="py-12 text-[#222222]"
        style={{ fontFamily: listingFont }}
      >
        <div className="px-0 pt-2 pb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <img
              src={assets.images.laurelLeft}
              alt="Laurel"
              className="h-26 w-16 shrink-0"
            />
            <div className="text-center text-[100px] leading-[143px] font-medium tracking-[-0.03em] text-[#222222]">
              {reviewsSection.score}
            </div>
            <img
              src={assets.images.laurelRight}
              alt="Laurel"
              className="h-26 w-16 shrink-0"
            />
          </div>
          <div className="mt-2 text-[22px] leading-[22px] font-medium text-[#222222]">
            {reviewsSection.guestFavouriteLabel}
          </div>
          <p className="mx-auto mt-2 mb-0 max-w-[420px] text-[15px] leading-[1.35] font-normal text-[#222222]">
            {reviewsSection.guestFavouriteSummary}
          </p>
          <button
            type="button"
            className="ratings-control ratings-text mt-[14px] cursor-pointer border-0 bg-transparent p-0 text-[14px] leading-[18px] font-medium text-[#222222] underline"
            onClick={keepPlace}
          >
            {reviewsSection.howReviewsWorkLabel}
          </button>
        </div>

        <div className="grid grid-cols-[1.4fr_repeat(1,1fr)] md:grid-cols-[1.4fr_repeat(6,1fr)] gap-2 px-0 pt-2 pb-10">
          <div className="px-6">
            <div className="mb-3 text-[14px] leading-[18px] font-medium text-[#222222]">
              Overall rating
            </div>
            <div className="flex flex-col gap-1">
              {reviewsSection.distribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-[10px]">
                  <span className="w-2 shrink-0 text-[12px] leading-3 font-normal text-[#222222]">
                    {row.stars}
                  </span>
                  <span className="h-1 min-w-0 flex-1 overflow-hidden rounded-[2px] bg-[#ebebeb]">
                    <span
                      className="block h-full bg-[#222222]"
                      style={{ width: `${row.fillPercent}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
          {reviewsSection.categoryRatings.map((category) => (
            <div
              key={category.label}
              className="md:border-l border-solid border-[#dddddd] px-6"
            >
              <div className="mb-3 text-[14px] leading-[18px] font-medium text-[#222222]">
                {category.label}
              </div>
              <div className="text-[18px] leading-[18px] font-medium text-[#222222]">
                {category.score}
              </div>
              <CategoryIcon label={category.label} />
            </div>
          ))}
        </div>

        <div className="ratings-chips flex flex-nowrap gap-3 overflow-x-auto px-0 pt-1 pb-[30px]">
          {reviewsSection.mentionChips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              className="ratings-control flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-solid border-[#dddddd] bg-white py-[13px] pr-[18px] pl-[14px] text-[14px] leading-5 font-medium text-[#222222]"
              onClick={keepPlace}
              onFocus={revealChip}
            >
              <img
                src={assets.images[chip.iconAssetId]}
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className="block h-5 w-5 shrink-0"
              />
              {chip.label} {chip.count}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-10">
          {reviewsSection.reviews.map((review) => {
            const open = expanded[review.name] === true;
            return (
              <article key={review.name} className="min-w-0">
                <div className="flex items-center gap-3">
                  {review.avatar.type === "photo" ? (
                    <img
                      src={assets.images[review.avatar.assetId]}
                      alt=""
                      width={42}
                      height={42}
                      className="h-[42px] w-[42px] shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-[16px] leading-none font-medium"
                      style={initialAvatar[review.avatar.initial]}
                    >
                      {review.avatar.initial}
                    </span>
                  )}
                  <div className="min-w-0">
                    <div className="text-[15px] leading-[19px] font-medium text-[#222222]">
                      {review.name}
                    </div>
                    <div className="text-[13px] leading-4 font-normal text-[#717171]">
                      {review.tenure}
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-1.5 flex items-center gap-1.5 text-[13px] leading-[13px] text-[#222222]">
                  <span className="inline-flex items-center gap-px">
                    {Array.from({ length: review.stars }, (_, index) => (
                      <ReviewStar key={index} />
                    ))}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{review.date}</span>
                </div>
                <p
                  className={`m-0 text-[15px] leading-[21px] font-normal whitespace-pre-line text-[#222222] ${
                    review.showMore && !open
                      ? "line-clamp-4 overflow-hidden"
                      : ""
                  }`}
                >
                  {review.text}
                </p>
                {review.showMore ? (
                  <button
                    type="button"
                    className="ratings-control ratings-text mt-2 cursor-pointer border-0 bg-transparent p-0 text-[15px] leading-5 font-medium text-[#222222] underline"
                    aria-expanded={open}
                    onClick={() => {
                      setExpanded((current) => ({
                        ...current,
                        [review.name]: !current[review.name],
                      }));
                    }}
                  >
                    {open
                      ? reviewsSection.showLessLabel
                      : reviewsSection.showMoreLabel}
                  </button>
                ) : null}
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="ratings-control ratings-show-all inline-flex cursor-pointer items-center justify-center rounded-xl border border-solid border-[#222222] bg-white px-[23px] py-[13px] text-[16px] leading-5 font-medium text-[#222222]"
          onClick={keepPlace}
        >
          {reviewsSection.showAllLabel}
        </button>
      </section>
    </div>
  );
};

export { RatingsSection };
export default RatingsSection;
