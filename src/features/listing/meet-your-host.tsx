import { assets } from "../../assets/asset";
import { meetYourHost } from "../../assets/data";

const listingFont =
  '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif';

const PinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className="h-6 w-6 shrink-0"
  >
    <path
      fill="rgb(34, 34, 34)"
      d="M12 2.4a6.3 6.3 0 0 0-6.3 6.3c0 4.8 6.3 12.7 6.3 12.7s6.3-7.9 6.3-12.7A6.3 6.3 0 0 0 12 2.4zm0 8.5a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4z"
    />
  </svg>
);

const GraduationCapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className="h-6 w-6 shrink-0"
  >
    <path fill="rgb(34, 34, 34)" d="M12 3.2 22.2 8 12 12.8 1.8 8z" />
    <path
      fill="rgb(34, 34, 34)"
      d="M6.2 10.1v5.1c0 .3 2.5 3.6 5.8 3.6s5.8-3.3 5.8-3.6v-5.1l-5.8 2.7z"
    />
    <path fill="rgb(34, 34, 34)" d="M21.1 8.6v6.6h-1.4V9.4z" />
  </svg>
);

const ShieldOutlineIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className="h-6 w-6 shrink-0"
  >
    <path
      fill="rgb(113, 113, 113)"
      fillRule="evenodd"
      d="M12 2.1 20.8 6v6.2c0 4.5-3.5 7.7-8.8 9.6-5.3-1.9-8.8-5.1-8.8-9.6V6zm0 2.1 6.4 2.8v4.9c0 3.1-2.3 5.5-6.4 7-4.1-1.5-6.4-3.9-6.4-7V7z"
    />
  </svg>
);

const VerifiedCheck = () => (
  <svg
    width="24.8"
    height="24.8"
    viewBox="0 0 32 32"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className="h-[24.8px] w-[24.8px]"
  >
    <path
      fill="rgb(255, 255, 255)"
      d="M13.4 22.8 6.2 15.6l2.4-2.4 4.8 4.8 9.9-9.9 2.4 2.4z"
    />
  </svg>
);

const FactIcon = ({ name }: { name: string }) => {
  if (name === "graduation-cap") return <GraduationCapIcon />;
  return <PinIcon />;
};

const CoHostAvatar = ({
  person,
}: {
  person: (typeof meetYourHost.coHosts)[number];
}) => {
  if (person.avatar.type === "initial") {
    return (
      <span
        className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[13px] leading-none font-medium"
        style={{
          color: person.avatar.textColor,
          backgroundColor: person.avatar.backgroundColor,
        }}
      >
        {person.avatar.initial}
      </span>
    );
  }

  if (!("naturalWidth" in person) || person.avatar.type !== "photo")
    return null;

  return (
    <img
      src={assets.images[person.avatar.assetId]}
      alt=""
      width={person.naturalWidth}
      height={person.naturalHeight}
      className="h-[34px] w-[34px] shrink-0 rounded-full object-cover"
    />
  );
};

const MeetYourHost = () => (
  <section
    className="border-t-[0.8px] border-solid border-[#ebebeb] bg-transparent py-12 tracking-normal text-[#222222]"
    style={{ fontFamily: listingFont, letterSpacing: "normal" }}
  >
    <h2 className="m-0 mb-6 w-full text-start text-[22px] leading-[26px] font-medium tracking-normal text-[#222222] antialiased">
      {meetYourHost.heading}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-[340px_732px] items-start gap-x-12 gap-y-12">
      <div>
        <div className="box-border h-65 w-full md:w-85 overflow-visible rounded-[20px] border-[0.8px] border-solid border-[rgba(0,0,0,0.08)] bg-transparent px-6 py-[30px] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
          <div className="grid h-full grid-cols-[190.4px_100px] items-center justify-between">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3 h-[88px] w-[88px]">
                <img
                  src={assets.images[meetYourHost.host.avatarAssetId]}
                  alt=""
                  width={meetYourHost.host.avatarNaturalWidth}
                  height={meetYourHost.host.avatarNaturalHeight}
                  className="h-[88px] w-[88px] rounded-full object-cover"
                />
                <span className="absolute top-[56px] right-0 bottom-1 left-[60px] flex items-center justify-center rounded-full border-[1.6px] border-solid border-white bg-[#ff385c]">
                  <VerifiedCheck />
                </span>
              </div>
              <div className="w-full text-center text-[26px] leading-[37.18px] font-medium text-[#222222]">
                {meetYourHost.host.name}
              </div>
              <div className="mt-1 text-center text-[13px] leading-[18.59px] font-normal text-[#222222]">
                {meetYourHost.host.role}
              </div>
            </div>
            <div className="box-border w-25 border-l-[0.8px] border-solid border-[#ebebeb] pl-5 text-start">
              {meetYourHost.host.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index === 0
                      ? "w-20"
                      : "w-[79.2px] border-t-[0.8px] border-solid border-[#ebebeb] py-2.5"
                  }
                >
                  <div className="text-start text-[20px] leading-[28.6px] font-medium text-[#222222]">
                    {stat.value}
                  </div>
                  <div className="text-start text-[12px] leading-[17.16px] font-normal text-[#222222]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[22px] flex w-[340px] flex-col gap-[14px]">
          {meetYourHost.host.facts.map((fact) => (
            <div key={fact.text} className="flex h-6 items-center gap-[14px]">
              <FactIcon name={fact.icon} />
              <span className="text-start text-[15px] leading-[21.45px] font-normal text-[#222222]">
                {fact.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-4  text-start text-[18px] leading-[25.74px] font-medium text-[#222222]">
          {meetYourHost.coHostsHeading}
        </div>
        <div className="mb-[30px] grid h-[134px] grid-cols-3 gap-x-2 gap-y-4">
          {meetYourHost.coHosts.map((person) => (
            <div
              key={person.name}
              className="flex h-[34px] cursor-default items-center gap-[10px]"
            >
              <CoHostAvatar person={person} />
              <span className="text-start text-[14px] leading-[20.02px] font-normal text-[#222222]">
                {person.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mb-4 text-start text-[18px] leading-[25.74px] font-medium text-[#222222]">
          {meetYourHost.detailsHeading}
        </div>
        <p className="m-0 h-12 text-start text-[15px] leading-6 font-normal text-[#222222]">
          {meetYourHost.responseRateLabel} {meetYourHost.responseRate}
          <br />
          {meetYourHost.responseTime}
        </p>
        <button
          type="button"
          className="ring-control mt-[18px] h-12 cursor-pointer rounded-lg border-0 bg-[#f2f2f2] px-6 py-[14px] text-center text-[15px] leading-normal font-medium text-[#222222] shadow-none transition-none hover:bg-[#ebebeb]"
        >
          {meetYourHost.messageHostLabel}
        </button>
        <div className="mt-[30px] flex items-start gap-[10px]">
          <ShieldOutlineIcon />
          <p className="m-0 text-start text-[12px] leading-[17.16px] font-normal text-[#717171]">
            {meetYourHost.protectionNote}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { MeetYourHost };
export default MeetYourHost;
