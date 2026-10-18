import { useState } from "react";
import { assets } from "../../assets/asset";

const segmentButtonClass =
  "ring-control inline-flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-[40px] border-0 bg-transparent px-4 text-[14px] leading-[20.02px] font-medium whitespace-nowrap text-[#222222]";

const LogoMark = () => (
  <svg
    width="103"
    height="32"
    viewBox="0 0 103 32"
    aria-hidden="true"
    focusable="false"
    className="block h-8 w-25.75"
  >
    <g transform="scale(0.027 0.027)">
      <path
        fill="#ff385c"
        fillRule="evenodd"
        d="M1494.71 456.953C1458.28 412.178 1408.46 389.892 1349.68 389.892C1233.51 389.892 1146.18 481.906 1146.18 605.892C1146.18 729.877 1233.51 821.892 1349.68 821.892C1408.46 821.892 1458.28 799.605 1494.71 754.83L1500.95 810.195H1589.84V401.588H1500.95L1494.71 456.953ZM1369.18 736.895C1295.33 736.895 1242.08 683.41 1242.08 605.892C1242.08 528.373 1295.33 474.888 1369.18 474.888C1443.02 474.888 1495.49 529.153 1495.49 605.892C1495.49 682.63 1443.8 736.895 1369.18 736.895ZM1656.11 810.195H1750.46V401.588H1656.11V810.195ZM948.912 666.715C875.618 506.859 795.308 344.664 713.438 184.809C698.623 155.177 670.554 98.2527 645.603 67.8412C609.736 24.1733 556.715 0.779785 502.915 0.779785C449.115 0.779785 396.094 24.1733 360.227 67.8412C335.277 98.2527 307.207 155.177 292.392 184.809C210.522 344.664 130.212 506.859 56.9187 666.715C47.5621 687.769 24.9504 737.675 16.3736 760.289C6.2373 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.362 1079.22 235.473 1079.22C346.193 1079.22 434.3 1008.26 502.915 934.18C571.53 1008.26 659.638 1079.22 770.357 1079.22C904.468 1079.22 1005.83 975.509 1005.83 846.845C1005.83 817.213 999.593 787.581 989.457 760.289C980.88 737.675 958.268 687.769 948.912 666.715ZM502.915 810.195C447.555 738.455 396.094 649.56 396.094 577.819C396.094 506.079 446.776 470.209 502.915 470.209C559.055 470.209 610.516 508.419 610.516 577.819C610.516 647.22 558.275 738.455 502.915 810.195ZM770.357 998.902C688.362 998.902 618.032 941.557 555.741 872.656C619.966 792.541 690.826 679.121 690.826 577.819C690.826 458.513 598.04 389.892 502.915 389.892C407.79 389.892 315.784 458.513 315.784 577.819C315.784 679.098 386.145 792.478 450.144 872.593C387.845 941.526 317.491 998.902 235.473 998.902C146.586 998.902 81.0898 931.061 81.0898 846.845C81.0898 826.57 84.2087 807.856 91.2261 788.361C98.2436 770.426 120.855 720.52 130.212 701.025C203.505 541.17 282.256 380.534 364.126 220.679C378.941 191.047 403.891 141.921 422.605 119.307C442.877 94.3538 470.947 81.0975 502.915 81.0975C534.883 81.0975 562.953 94.3538 583.226 119.307C601.939 141.921 626.89 191.047 641.704 220.679C723.574 380.534 802.325 541.17 875.618 701.025C884.975 720.52 907.587 770.426 914.604 788.361C921.622 807.856 925.52 826.57 925.52 846.845C925.52 931.061 859.244 998.902 770.357 998.902ZM3285.71 389.892C3226.91 389.892 3175.97 413.098 3139.91 456.953V226.917H3045.56V810.195H3134.45L3140.69 754.83C3177.12 799.605 3226.94 821.892 3285.71 821.892C3401.89 821.892 3489.22 729.877 3489.22 605.892C3489.22 481.906 3401.89 389.892 3285.71 389.892ZM3266.22 736.895C3191.6 736.895 3139.91 682.63 3139.91 605.892C3139.91 529.153 3191.6 474.888 3266.22 474.888C3340.85 474.888 3393.32 528.373 3393.32 605.892C3393.32 683.41 3340.07 736.895 3266.22 736.895ZM2827.24 389.892C2766.15 389.892 2723.56 418.182 2699.37 456.953L2693.13 401.588H2604.24V810.195H2698.59V573.921C2698.59 516.217 2741.47 474.888 2800.73 474.888C2856.87 474.888 2888.84 513.097 2888.84 578.599V810.195H2983.19V566.903C2983.19 457.733 2923.15 389.892 2827.24 389.892ZM1911.86 460.072L1905.62 401.588H1816.73V810.195H1911.08V604.332C1911.08 532.592 1954.74 486.585 2027.26 486.585C2042.85 486.585 2058.44 488.144 2070.92 492.043V401.588C2059.22 396.91 2044.41 395.35 2028.04 395.35C1978.58 395.35 1936.66 421.177 1911.86 460.072ZM2353.96 389.892C2295.15 389.892 2244.21 413.098 2208.15 456.953V226.917H2113.8V810.195H2202.69L2208.93 754.83C2245.36 799.605 2295.18 821.892 2353.96 821.892C2470.13 821.892 2557.46 729.877 2557.46 605.892C2557.46 481.906 2470.13 389.892 2353.96 389.892ZM2334.46 736.895C2259.84 736.895 2208.15 682.63 2208.15 605.892C2208.15 529.153 2259.84 474.888 2334.46 474.888C2409.09 474.888 2461.56 528.373 2461.56 605.892C2461.56 683.41 2408.31 736.895 2334.46 736.895ZM1703.28 226.917C1669.48 226.917 1642.08 254.326 1642.08 288.13C1642.08 321.934 1669.48 349.343 1703.28 349.343C1737.09 349.343 1764.49 321.934 1764.49 288.13C1764.49 254.326 1737.09 226.917 1703.28 226.917Z"
      />
    </g>
  </svg>
);

const HouseArt = () => {
  const [sourceReady, setSourceReady] = useState(false);

  return (
    <span className="relative -ml-[6px] inline-flex h-12 w-12 shrink-0">
      {sourceReady ? null : (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-12 w-12"
        >
          <path
            fill="#ff385c"
            fillRule="evenodd"
            d="M8 21.5 24 8l16 13.5V40H8Zm13.5 10h5V40h-5z"
          />
        </svg>
      )}
      <img
        src={assets.images.searchbarHouse}
        alt=""
        width={48}
        height={48}
        className={
          sourceReady ? "h-12 w-12 object-fill" : "absolute h-px w-px opacity-0"
        }
        onLoad={() => setSourceReady(true)}
        onError={() => setSourceReady(false)}
      />
    </span>
  );
};

const SearchGlyph = () => (
  <svg
    viewBox="0 0 32 32"
    preserveAspectRatio="none"
    aria-hidden="true"
    role="presentation"
    fill="none"
    className="pointer-events-none absolute inset-0 h-full w-full"
  >
    <circle cx="14.2" cy="14.2" r="4.7" stroke="#fff" strokeWidth="2" />
    <path
      d="M17.7 17.7 22.4 22.4"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const GlobeGlyph = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    aria-hidden="true"
    role="presentation"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 1.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zm0 1.15a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2z"
    />
    <path
      fillRule="evenodd"
      d="M8 1.25c1.5 0 2.4 2.7 2.4 6.75s-.9 6.75-2.4 6.75-2.4-2.7-2.4-6.75.9-6.75 2.4-6.75zm0 1.2c-.62 0-1.2 2.3-1.2 5.55s.58 5.55 1.2 5.55 1.2-2.3 1.2-5.55-.58-5.55-1.2-5.55z"
    />
    <path d="M1.4 7.42h13.2v1.16H1.4z" />
  </svg>
);

const MenuGlyph = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    fill="none"
  >
    <path d="M4 8h24M4 16h24M4 24h24" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const iconButtonClass =
  "ring-control inline-flex h-10 w-10 min-w-[32.1px] shrink cursor-pointer items-center justify-center rounded-full border-0 bg-[#f2f2f2] p-0 text-[#222222] transition-[background] duration-[180ms] ease-[ease] hover:bg-[#ebebeb]";

const SiteHeader = () => {
  return (
    <header className="relative z-50 overflow-visible border-b border-solid border-(--line-soft) bg-white px-20 text-[14px] leading-[20.02px] font-normal text-[#222222]">
      <div className="mx-auto grid h-22 w-full max-w-[1760px] grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex justify-self-start">
          <a
            href="#"
            aria-label="Airbnb homepage"
            className="ring-control ring-control-link flex h-8 w-25.75 shrink-0 items-center"
          >
            <LogoMark />
          </a>
        </div>
        <div
          role="search"
          className="inline-flex h-12 w-full items-center rounded-[40px] border border-solid border-(--line) bg-white px-2 shadow-[0_1px_4px_rgba(0,0,0,0.08)] transition-shadow duration-200 ease-[ease] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] max-[743px]:hidden"
        >
          <button type="button" className={segmentButtonClass}>
            <HouseArt />
            Anywhere
          </button>
          <span aria-hidden="true" className="h-6 w-px shrink-0 bg-[#dddddd]" />
          <button type="button" className={segmentButtonClass}>
            Anytime
          </button>
          <span aria-hidden="true" className="h-6 w-px shrink-0 bg-[#dddddd]" />
          <button
            type="button"
            className="ring-control inline-flex h-12 shrink cursor-pointer items-center rounded-[40px] border-0 bg-transparent px-4 text-[14px] leading-[20.02px] font-normal whitespace-normal text-[#717171]"
          >
            Add guests
          </button>
          <button
            type="button"
            aria-label="Search"
            className="ring-control relative ml-2 inline-flex h-8 min-h-8 w-8 min-w-[25.7px] shrink cursor-pointer items-center justify-center rounded-full border-0 bg-[#ff385c] p-0"
          >
            <SearchGlyph />
          </button>
        </div>
        <nav className="flex max-w-full items-center justify-self-end gap-2">
          <a
            href="#"
            className="ring-control ring-control-link shrink cursor-pointer rounded-[22px] bg-transparent px-[14px] py-3 text-[14px] leading-[20.02px] font-medium text-[#222222] no-underline transition-[background] duration-[180ms] ease-[ease] hover:bg-[#f7f7f7] max-[743px]:hidden"
          >
            Become a host
          </a>
          <button
            type="button"
            aria-label="Choose a language and currency"
            className={iconButtonClass}
          >
            <GlobeGlyph />
          </button>
          <button
            type="button"
            aria-label="Main navigation menu"
            className={iconButtonClass}
          >
            <MenuGlyph />
          </button>
        </nav>
      </div>
    </header>
  );
};

export { SiteHeader };
export default SiteHeader;
