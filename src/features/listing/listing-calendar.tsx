import { useEffect } from "react";
import { listingCalendar } from "../../assets/data";

type VisibleMonth = (typeof listingCalendar.visibleMonths)[number];

const calendarFont =
  '"Airbnb Cereal VF", Circular, system-ui, Roboto, "Helvetica Neue", sans-serif';

const MonthChevron = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 18 18"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
  >
    <path
      fill="currentColor"
      d="M6.4 3.6 4.8 5.2 9 9.4 4.8 13.6 6.4 15.2 12.2 9.4Z"
    />
  </svg>
);

const KeyboardGlyph = () => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    aria-hidden="true"
    focusable="false"
    fill="none"
  >
    <rect
      x="1.2"
      y="1.2"
      width="17.6"
      height="11.6"
      rx="1.4"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M4.2 4.6h1.4M9.3 4.6h1.4M14.4 4.6h1.4M6.7 7.4h1.4M11.8 7.4h1.4M4.2 10.2h11.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const dayCount = (year: number, monthIndex: number) =>
  new Date(year, monthIndex + 1, 0).getDate();

const leadingBlanks = (year: number, monthIndex: number) =>
  new Date(year, monthIndex, 1).getDay();

const dayClass = (day: number, month: VisibleMonth) => {
  if (month.unavailableDays.some((value) => value === day)) {
    return "listing-calendar-day is-unavailable";
  }
  if (!month.range) return "listing-calendar-day";
  if (day === month.range.start) return "listing-calendar-day is-check-in";
  if (day === month.range.end) return "listing-calendar-day is-check-out";
  if (day > month.range.start && day < month.range.end) {
    return "listing-calendar-day is-in-range";
  }
  return "listing-calendar-day";
};

const MonthGrid = ({ month }: { month: VisibleMonth }) => {
  const blanks = leadingBlanks(month.year, month.monthIndex);
  const days = dayCount(month.year, month.monthIndex);

  return (
    <div className="listing-calendar-month">
      <div className="listing-calendar-month-name">{month.label}</div>
      <div className="listing-calendar-weekdays">
        {listingCalendar.weekdayLabels.map((label, index) => (
          <span key={`${month.label}-${index}`}>{label}</span>
        ))}
      </div>
      <div className="listing-calendar-days">
        {Array.from({ length: blanks }, (_, index) => (
          <div
            key={`${month.label}-blank-${index}`}
            className="listing-calendar-day is-blank"
          />
        ))}
        {Array.from({ length: days }, (_, index) => {
          const day = index + 1;
          return (
            <div
              key={`${month.label}-${day}`}
              className={dayClass(day, month)}
              tabIndex={-1}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ListingCalendar = () => {
  return (
    <div className="listing-calendar" style={{ fontFamily: calendarFont }}>
      <div className="listing-calendar-title">
        <span>{listingCalendar.nights}</span> nights in{" "}
        {listingCalendar.placeLabel}
      </div>
      <div className="listing-calendar-range">{listingCalendar.rangeLabel}</div>
      <div className="listing-calendar-months">
        <div className="listing-calendar-nav">
          <button
            className="listing-calendar-nav-button cursor-pointer"
            aria-label={listingCalendar.previousMonthLabel}
          >
            <MonthChevron direction="left" />
          </button>
          <button
            className="listing-calendar-nav-button cursor-pointer"
            aria-label={listingCalendar.nextMonthLabel}
          >
            <MonthChevron direction="right" />
          </button>
        </div>
        {listingCalendar.visibleMonths.map((month) => (
          <MonthGrid key={month.label} month={month} />
        ))}
      </div>
      <div className="listing-calendar-footer">
        <div className="listing-calendar-key" aria-hidden="true">
          <KeyboardGlyph />
        </div>
        <button className="listing-calendar-clear">
          {listingCalendar.clearDatesLabel}
        </button>
      </div>
    </div>
  );
};

export { ListingCalendar };
export default ListingCalendar;
