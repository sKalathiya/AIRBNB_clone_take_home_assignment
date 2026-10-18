import type { ReactNode } from "react";

const Glyph = ({ children }: { children: ReactNode }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    {children}
  </svg>
);

const TorchIcon = () => (
  <Glyph>
    <path d="M16 17.5c2.4-1.8 3.6-4 3.2-6.4-2.2.6-3.2 2.2-4.6 2.2.2-2.6.8-4.8 2.6-6.8-4.6 1.8-7.4 5.4-7.4 9.2 0 2.2 1 4 2.4 5" />
    <path d="M13.2 18.2h5.6" />
    <path d="M16 18.2V27" />
    <path d="M12 27h8" />
  </Glyph>
);

const FanIcon = () => (
  <Glyph>
    <circle cx="16" cy="16" r="2.1" />
    <path d="M16 13.6c.2-5.2 2.4-7.4 4.6-6.6-2.2 2.4-3.6 5-4.6 6.6z" />
    <path d="M18.4 16c5.2.2 7.4 2.4 6.6 4.6-2.4-2.2-5-3.6-6.6-4.6z" />
    <path d="M16 18.4c-.2 5.2-2.4 7.4-4.6 6.6 2.2-2.4 3.6-5 4.6-6.6z" />
    <path d="M13.6 16c-5.2-.2-7.4-2.4-6.6-4.6 2.4 2.2 5 3.6 6.6 4.6z" />
  </Glyph>
);

const DoorIcon = () => (
  <Glyph>
    <path d="M10 5h12v22H10z" />
    <path d="M10 5c4 1.2 6 1.2 10 0" />
    <circle cx="19.2" cy="16.5" r="1.1" fill="currentColor" stroke="none" />
  </Glyph>
);

const LaurelMark = ({
  mirror = false,
  height = "h-9",
  width = "w-5.75",
}: {
  mirror?: boolean;
  height?: string;
  width?: string;
}) => (
  <svg
    className={`${height} ${width} shrink-0${mirror ? " -scale-x-100" : ""}`}
    viewBox="0 0 20 32"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z"
      fill="#222222"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z"
      fill="#F7F7F7"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z"
      fill="#222222"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z"
      fill="#F7F7F7"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z"
      fill="#222222"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z"
      fill="#F7F7F7"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z"
      fill="#222222"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z"
      fill="#F7F7F7"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z"
      fill="#222222"
    ></path>
  </svg>
);

const StarMark = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 32 32"
    aria-hidden="true"
    focusable="false"
    className="h-3 w-3 shrink-0"
  >
    <path
      fill="currentColor"
      d="M16 2.4 19.7 12h9.2l-7.4 5.5 2.8 9.3L16 21.6 7.7 26.8l2.8-9.3L3.1 12h9.2z"
    />
  </svg>
);
const ShowMoreGlyph = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 8 14"
    aria-hidden="true"
    focusable="false"
    className="h-3.5 w-2 shrink-0"
  >
    <path
      d="M1.15 1 6.85 7 1.15 13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 32 32"
    fill="none"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className="h-4 w-4 shrink-0"
  >
    <path
      d="M6 12 L16 22 L26 12"
      stroke="rgb(34, 34, 34)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const FlagMark = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className="h-4 w-4 shrink-0"
  >
    <path fill="rgb(113, 113, 113)" d="M3.15 1.35h1.15V14.7H3.15z" />
    <path
      fill="rgb(113, 113, 113)"
      d="M4.3 2.05h8.35L10.9 5.25l1.75 3.25H4.3z"
    />
  </svg>
);

const AmenityIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Kitchen":
      return (
        <Glyph>
          <path d="M8 14h16v6a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z" />
          <path d="M7 14c.4-2.2 2.4-3.2 5-3.2h8c2.6 0 4.6 1 5 3.2" />
          <path d="M12.5 7.5h7" />
          <path d="M5.5 16H3.5M28.5 16H26.5" />
        </Glyph>
      );
    case "Wifi":
      return (
        <Glyph>
          <path d="M7 13.5c2.4-2.6 5-4 9-4s6.6 1.4 9 4" />
          <path d="M10.5 17.2a7.2 7.2 0 0 1 11 0" />
          <path d="M14 21a2.8 2.8 0 0 1 4 0" />
          <circle cx="16" cy="24.2" r="1.1" fill="currentColor" stroke="none" />
        </Glyph>
      );
    case "Dedicated workspace":
      return (
        <Glyph>
          <path d="M7 8h18v11H7z" />
          <path d="M13 19v3h6v-3" />
          <path d="M6 26h20" />
        </Glyph>
      );
    case "Free parking on premises":
      return (
        <Glyph>
          <rect x="7" y="5" width="18" height="22" rx="2" />
          <path d="M12.5 23V9.2h4.4a3.8 3.8 0 0 1 0 7.6h-4.4" />
        </Glyph>
      );
    case "Pool":
      return (
        <Glyph>
          <path d="M4 12c2 1.8 3.6 1.8 5.6 0s3.6-1.8 5.6 0 3.6 1.8 5.6 0 3.6-1.8 5.6 0" />
          <path d="M4 18c2 1.8 3.6 1.8 5.6 0s3.6-1.8 5.6 0 3.6 1.8 5.6 0 3.6-1.8 5.6 0" />
          <path d="M4 24c2 1.8 3.6 1.8 5.6 0s3.6-1.8 5.6 0 3.6 1.8 5.6 0 3.6-1.8 5.6 0" />
        </Glyph>
      );
    case "Hot tub":
      return (
        <Glyph>
          <path d="M6 16h20v5.5a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 6 21.5z" />
          <circle cx="11" cy="10" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="16" cy="7.6" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="21" cy="10" r="1.15" fill="currentColor" stroke="none" />
        </Glyph>
      );
    case "Pets allowed":
      return (
        <Glyph>
          <circle cx="16" cy="20.5" r="4" fill="currentColor" stroke="none" />
          <circle cx="8.2" cy="14.2" r="2" fill="currentColor" stroke="none" />
          <circle
            cx="12.6"
            cy="9.8"
            r="2.05"
            fill="currentColor"
            stroke="none"
          />
          <circle
            cx="19.4"
            cy="9.8"
            r="2.05"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="23.8" cy="14.2" r="2" fill="currentColor" stroke="none" />
        </Glyph>
      );
    case "Exterior security cameras on property":
      return (
        <Glyph>
          <path d="M5 13h12l3-3h4v12h-4l-3-3H5z" />
          <path d="M8 22v3M12 22v3" />
        </Glyph>
      );
    case "Carbon monoxide alarm":
      return (
        <Glyph>
          <circle cx="16" cy="16" r="8" />
          <path d="M12.2 16h7.6M16 12.4v7.2" />
        </Glyph>
      );
    case "Smoke alarm":
      return (
        <Glyph>
          <circle cx="16" cy="18" r="6.5" />
          <path d="M16 5.5v3" />
          <path d="M10 8.2l1.6 2.2M22 8.2l-1.6 2.2" />
        </Glyph>
      );
    case "Hairdryer":
      return (
        <Glyph>
          <path d="M8 12h10a4 4 0 0 1 0 8H8z" />
          <path d="M18 16h6v3a3 3 0 0 1-3 3h-1" />
          <path d="M12 20v5" />
        </Glyph>
      );
    case "Cleaning products":
      return (
        <Glyph>
          <path d="M13 8h6v3h-6z" />
          <path d="M12 11h8l1 4v9H11v-9z" />
          <path d="M20 7c2-1 3-.2 3 2" />
        </Glyph>
      );
    case "Shampoo":
    case "Shower gel":
      return (
        <Glyph>
          <path d="M13 6h6v3h-6z" />
          <path d="M12 9h8v15a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
        </Glyph>
      );
    case "Hot water":
      return (
        <Glyph>
          <path d="M11 6h6l2 8H9z" />
          <path d="M10 14h12v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z" />
          <path d="M16 18v4" />
        </Glyph>
      );
    case "Washing machine":
      return (
        <Glyph>
          <rect x="6" y="4" width="20" height="24" rx="2" />
          <circle cx="16" cy="18" r="5" />
          <path d="M10 8h.1M14 8h6" />
        </Glyph>
      );
    case "Hangers":
      return (
        <Glyph>
          <path d="M16 8a2.2 2.2 0 1 1 2.2 2.2c-1 .4-2.2 1.2-2.2 2.4" />
          <path d="M16 12.6 6 20h20z" />
        </Glyph>
      );
    case "Bed linen":
      return (
        <Glyph>
          <path d="M5 20V14a3 3 0 0 1 3-3h6v9" />
          <path d="M14 16h13v4" />
          <path d="M5 20h22v3H5z" />
        </Glyph>
      );
    case "Room-darkening blinds":
      return (
        <Glyph>
          <path d="M7 6h18" />
          <path d="M8 11h16M8 16h16M8 21h16M8 26h16" />
        </Glyph>
      );
    case "Iron":
      return (
        <Glyph>
          <path d="M8 18h16l2 6H8z" />
          <path d="M10 18V12a4 4 0 0 1 4-4h4" />
        </Glyph>
      );
    case "Clothes storage":
      return (
        <Glyph>
          <rect x="6" y="5" width="20" height="22" rx="1.5" />
          <path d="M6 13h20M6 20h20" />
          <path d="M16 8.5v2M16 15.5v2M16 22.5v2" />
        </Glyph>
      );
    case "Cot":
      return (
        <Glyph>
          <path d="M6 20V10M26 20V10" />
          <path d="M6 14h20" />
          <path d="M6 20h20" />
          <path d="M9 20v4M23 20v4" />
        </Glyph>
      );
    case "TV":
      return (
        <Glyph>
          <rect x="5" y="7" width="22" height="14" rx="1.5" />
          <path d="M12 25h8M16 21v4" />
        </Glyph>
      );
    case "Air conditioning":
      return (
        <Glyph>
          <rect x="5" y="8" width="22" height="10" rx="1.5" />
          <path d="M10 22v2M16 22v3M22 22v2" />
        </Glyph>
      );
    case "Ceiling fan":
      return <FanIcon />;
    case "Fridge":
    case "Freezer":
      return (
        <Glyph>
          <rect x="9" y="4" width="14" height="24" rx="1.5" />
          <path d="M9 14h14" />
          <path d="M20 9v2M20 18v3" />
        </Glyph>
      );
    case "Microwave":
      return (
        <Glyph>
          <rect x="4" y="9" width="24" height="14" rx="1.5" />
          <rect x="7" y="12" width="12" height="8" rx="1" />
          <path d="M22 13v.1M22 17v.1M22 21v.1" />
        </Glyph>
      );
    case "Cooking basics":
      return (
        <Glyph>
          <path d="M8 22h12" />
          <path d="M10 22c0-6 2-8 4-12" />
          <path d="M20 8v14" />
        </Glyph>
      );
    case "Crockery and cutlery":
      return (
        <Glyph>
          <circle cx="13" cy="16" r="6" />
          <path d="M22 8v16M25 8v6c0 2-1.4 3-3 3" />
        </Glyph>
      );
    case "Kettle":
      return (
        <Glyph>
          <path d="M10 14h12v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z" />
          <path d="M22 16h3a3 3 0 0 1 0 6h-3" />
          <path d="M13 10h6" />
        </Glyph>
      );
    case "Coffee":
      return (
        <Glyph>
          <path d="M8 12h14v8a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4z" />
          <path d="M22 14h2.5a2.5 2.5 0 0 1 0 5H22" />
          <path d="M12 8c0 1.2.8 1.2.8 2.4M16 8c0 1.2.8 1.2.8 2.4" />
        </Glyph>
      );
    case "Wine glasses":
      return (
        <Glyph>
          <path d="M10 6h8l-1.2 8a2.8 2.8 0 0 1-5.6 0z" />
          <path d="M14 16.8V24M11 24h6" />
        </Glyph>
      );
    case "Toaster":
      return (
        <Glyph>
          <rect x="5" y="12" width="22" height="12" rx="2" />
          <path d="M10 12V9M16 12V9" />
          <path d="M23 16v4" />
        </Glyph>
      );
    case "Blender":
      return (
        <Glyph>
          <path d="M11 6h8l2 12H9z" />
          <path d="M10 22h12v3H10z" />
          <path d="M19 10h5" />
        </Glyph>
      );
    case "Cooker":
      return (
        <Glyph>
          <rect x="5" y="6" width="22" height="20" rx="1.5" />
          <circle cx="12" cy="13" r="2.2" />
          <circle cx="20" cy="13" r="2.2" />
          <path d="M5 19h22" />
        </Glyph>
      );
    case "Private entrance":
      return <DoorIcon />;
    case "Patio or balcony":
      return (
        <Glyph>
          <path d="M6 22V12M26 22V12" />
          <path d="M6 14h20" />
          <path d="M6 22h20" />
          <path d="M16 8v6" />
          <path d="M12 10c1.2-2 2.6-3 4-3s2.8 1 4 3" />
        </Glyph>
      );
    case "Outdoor dining area":
      return (
        <Glyph>
          <path d="M6 14h20" />
          <path d="M8 14v10M24 14v10" />
          <path d="M10 10h4M18 10h4" />
        </Glyph>
      );
    case "Gym":
      return (
        <Glyph>
          <path d="M6 16h20" />
          <path d="M8 12v8M12 10v12M20 10v12M24 12v8" />
        </Glyph>
      );
    case "Cleaning available during stay":
      return (
        <Glyph>
          <path d="M16 5l1.4 4.2H22l-3.6 2.6 1.4 4.2L16 13.6 12.2 16l1.4-4.2L10 9.2h4.6z" />
          <path d="M8 24h16" />
        </Glyph>
      );
    case "Long-term stays allowed":
      return (
        <Glyph>
          <rect x="6" y="7" width="20" height="18" rx="2" />
          <path d="M6 13h20M12 5v4M20 5v4" />
        </Glyph>
      );
    case "Self check-in":
      return <DoorIcon />;
    default:
      return (
        <Glyph>
          <circle cx="16" cy="16" r="6" />
        </Glyph>
      );
  }
};

const HighlightIcon = ({ title }: { title: string }) => {
  if (title === "Outdoor entertainment") return <TorchIcon />;
  if (title === "Designed for staying cool") return <FanIcon />;
  return <DoorIcon />;
};

export {
  AmenityIcon,
  ChevronDown,
  FlagMark,
  HighlightIcon,
  LaurelMark,
  ShowMoreGlyph,
  StarMark,
};
