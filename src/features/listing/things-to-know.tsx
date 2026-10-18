import type { MouseEvent } from "react";
import { thingsToKnow } from "../../assets/data";

const listingFont =
  '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif';

const iconPaths = {
  "calendar-with-x":
    "M6.2 9.4h2.3V5.2h2.5v4.2h7.8V5.2h2.5v4.2h4.5c1 0 1.8.8 1.8 1.8v15.4c0 1-.8 1.8-1.8 1.8H6.2c-1 0-1.8-.8-1.8-1.8V11.2c0-1 .8-1.8 1.8-1.8zM7.2 14.6h17.6V25H7.2zM12 16.4l1.5-1.5 2.5 2.5 2.5-2.5 1.5 1.5-2.5 2.5 2.5 2.5-1.5 1.5-2.5-2.5-2.5 2.5-1.5-1.5 2.5-2.5z",
  key: "M12 5.4a5.5 5.5 0 1 0 .01 0zM12 8.5a2.4 2.4 0 1 1-.01 0zM17.5 10h8.3v2.4h-2.5v2.9h-2.2V12.4H17.5z",
  shield:
    "M16 3.6 27.2 8.8v7.8c0 5.6-4.6 9.8-11.2 12-6.6-2.2-11.2-6.4-11.2-12V8.8zM16 8.2l6.4 3.3v4.8c0 3.6-2.6 6.4-6.4 8-3.8-1.6-6.4-4.4-6.4-8v-4.8z",
} as const;

const keepPlace = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

const ColumnIcon = ({
  name,
}: {
  name: (typeof thingsToKnow.columns)[number]["icon"];
}) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    className="mb-[18px] block h-6 w-6"
  >
    <path fill="rgb(34, 34, 34)" fillRule="evenodd" d={iconPaths[name]} />
  </svg>
);

const ThingsToKnow = () => (
  <div
    className="border-t-[0.8px] border-solid border-[#ebebeb] bg-transparent px-0 py-12 text-[#222222]"
    style={{ fontFamily: listingFont, letterSpacing: "normal" }}
  >
    <h2 className="m-0 mb-6 w-full text-[22px] leading-[26px] font-medium tracking-normal text-[#222222]">
      {thingsToKnow.heading}
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-[352px_352px_352px] items-start gap-x-8 gap-y-8 bg-transparent">
      {thingsToKnow.columns.map((column) => (
        <div
          key={column.id}
          className="bg-transparent text-left leading-[20.02px]"
        >
          <ColumnIcon name={column.icon} />
          <div className="mb-[14px] text-[16px] leading-[22.88px] font-medium tracking-normal text-[#222222]">
            {column.title}
          </div>
          {column.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-2 text-[14px] leading-[21px] font-normal tracking-normal text-[#222222]"
            >
              {paragraph}
            </p>
          ))}
          <a
            href={column.linkHref}
            className="ring-control ring-control-link inline-block cursor-pointer align-top text-[14px] leading-[20.02px] font-medium tracking-normal text-[#222222] underline decoration-solid transition-all duration-0 ease-[ease]"
            onClick={keepPlace}
          >
            {column.linkLabel}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export { ThingsToKnow };
export default ThingsToKnow;
