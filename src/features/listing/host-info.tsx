import { listingInfo } from "../../assets/data";

const hostFont =
  '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif';

const HostInfo = () => {
  const { hostedBy, name, tenure, avatar } = listingInfo.host;
  const nameAt = hostedBy.lastIndexOf(name);
  const hostedPrefix = nameAt >= 0 ? hostedBy.slice(0, nameAt) : hostedBy;
  const hostedName = nameAt >= 0 ? name : "";
  const tenureLead = tenure.match(/^\d+/)?.[0] ?? "";
  const tenureRest = tenure.slice(tenureLead.length);

  return (
    <div
      className="m-0 box-border flex w-full flex-row flex-nowrap items-center justify-start gap-4 overflow-visible border-0 bg-transparent py-6.5 text-left text-[14px] leading-[20.02px] font-normal text-[#222222] antialiased opacity-100 outline-none cursor-auto transition-all duration-0"
      style={{
        fontFamily: hostFont,
        letterSpacing: "normal",
        textDecoration: "none",
        borderRadius: 0,
        transform: "none",
      }}
    >
      <img
        src={avatar}
        alt=""
        width={46}
        height={46}
        className="h-11.5 w-11.5 shrink-0 cursor-auto rounded-[50%] border-0 object-cover object-center shadow-none"
      />
      <div className="grow-0 cursor-auto">
        <div className="cursor-auto text-[16px] leading-[22.88px] font-medium whitespace-nowrap text-[#222222] no-underline">
          <span>{hostedPrefix}</span>
          {hostedName ? <span>{hostedName}</span> : null}
        </div>
        <div className="mt-0.5 cursor-auto text-[14px] leading-[20.02px] font-normal whitespace-nowrap text-[#717171] no-underline">
          <span>{tenureLead}</span>
          <span>{tenureRest}</span>
        </div>
      </div>
    </div>
  );
};

export { HostInfo };
export default HostInfo;
