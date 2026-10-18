import { assets } from "../../assets/asset";
import { sleepSection } from "../../assets/data";

const sleepFont =
  '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif';

const sleepImage = (
  assetId: (typeof sleepSection.spaces)[number]["imageAssetId"],
) => {
  if (assetId === "mosaicPhoto4") return assets.images.mosaicPhoto4;
  return assets.images.sleepLivingRoom;
};

const WhereYouSleep = () => {
  return (
    <div
      className="m-0 border-t border-solid border-[#ebebeb] bg-transparent py-8 text-[#222222]"
      style={{ fontFamily: sleepFont, WebkitFontSmoothing: "antialiased" }}
    >
      <h2 className="m-0 mb-6 text-[22px] leading-[26px] font-medium tracking-normal text-[#222222]">
        {sleepSection.heading}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {sleepSection.spaces.map((space) => (
          <div key={space.title} className="cursor-auto bg-transparent">
            <img
              src={sleepImage(space.imageAssetId)}
              alt={space.imageAlt}
              width={space.naturalWidth}
              height={space.naturalHeight}
              className="box-border block aspect-[3/2] w-full rounded-lg border border-solid border-[rgba(0,0,0,0.08)] bg-transparent object-cover object-center"
            />
            <div className="mt-[14px] text-[15px] leading-[21.45px] font-medium text-[#222222]">
              {space.title}
            </div>
            <div className="mt-0.5 text-[14px] leading-[20.02px] font-normal text-[#717171]">
              {space.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WhereYouSleep };
export default WhereYouSleep;
