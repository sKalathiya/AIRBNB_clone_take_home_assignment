import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { assets, reserveOffer } from "../../assets/asset";
import { ChevronDown, FlagMark } from "./listing-icons";

const reserveFont =
  '"Airbnb Cereal VF", Circular, system-ui, Roboto, "Helvetica Neue", sans-serif';

const keepPlace = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

const FieldLabel = ({ children }: { children: string }) => (
  <div className="text-[10px] leading-[14.3px] font-bold tracking-[0.4px] text-[#222222]">
    {children}
  </div>
);

const FieldValue = ({ children }: { children: string }) => (
  <div className="mt-0.5 text-[14px] leading-[20.02px] font-normal text-[#222222]">
    {children}
  </div>
);

const StickyReserve = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const [toastTick, setToastTick] = useState(0);

  useEffect(() => {
    if (!toastOpen) return;
    setFading(false);
    const startFade = window.setTimeout(() => setFading(true), 1500);
    return () => window.clearTimeout(startFade);
  }, [toastOpen, toastTick]);

  useEffect(() => {
    if (!fading) return;
    const hide = window.setTimeout(() => {
      setToastOpen(false);
      setFading(false);
    }, 340);
    return () => window.clearTimeout(hide);
  }, [fading]);

  const showChargeToast = () => {
    setFading(false);
    setToastTick((tick) => tick + 1);
    setToastOpen(true);
  };

  return (
    <aside className="reserve-aside" style={{ fontFamily: reserveFont }}>
      <div className="sticky top-[100px] w-[372px] text-[14px] leading-[20.02px] font-normal text-[#222222] mb-2">
        <div className="flex h-[70px] items-center gap-3 rounded-xl border-[0.8px] border-solid border-[#dddddd] bg-white p-4">
          <img
            src={assets.images.discountIcon}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
          />
          <p className="m-0 min-w-0 flex-1 text-[14px] leading-[18.2px] font-normal text-[#222222]">
            {reserveOffer.offer.headline}
            <br />
            <a
              href={reserveOffer.offer.termsHref}
              tabIndex={0}
              className="ring-control ring-control-link font-medium text-[#222222] underline"
              onClick={keepPlace}
            >
              {reserveOffer.offer.termsLabel}
            </a>
          </p>
          <button
            type="button"
            tabIndex={0}
            className="claim-offer ring-control inline-flex h-[34px] w-[65px] shrink-0 cursor-pointer items-center justify-center rounded-lg border-0 bg-[#f7f7f7] px-[14px] py-2 text-[14px] font-medium text-[#222222]"
          >
            {reserveOffer.offer.claimLabel}
          </button>
        </div>
        <div className="mt-6 rounded-xl border-[0.8px] border-solid border-[rgba(0,0,0,0.08)] bg-white px-6 pt-[22px] pb-6 shadow-[rgba(0,0,0,0.12)_0px_6px_16px_0px]">
          <div className="mb-[18px] flex items-baseline gap-[6px]">
            <span className="text-[22px] leading-[31.46px] font-medium text-[#222222] underline underline-offset-2">
              {reserveOffer.price.amountLabel}
            </span>
            <span className="text-[15px] leading-[21.45px] font-normal text-[#222222] no-underline">
              {reserveOffer.price.nightsLabel}
            </span>
          </div>
          <div className="h-[117px] overflow-hidden rounded-lg border-[0.8px] border-solid border-[#b0b0b0]">
            <div className="grid grid-cols-2">
              <div className="cursor-auto px-3 py-[10px]">
                <FieldLabel>{reserveOffer.dates.checkInLabel}</FieldLabel>
                <FieldValue>{reserveOffer.dates.checkInValue}</FieldValue>
              </div>
              <div className="cursor-auto border-l-[0.8px] border-solid border-[#b0b0b0] px-3 py-[10px]">
                <FieldLabel>{reserveOffer.dates.checkoutLabel}</FieldLabel>
                <FieldValue>{reserveOffer.dates.checkoutValue}</FieldValue>
              </div>
            </div>
            <div className="flex cursor-auto items-center justify-between border-t-[0.8px] border-solid border-[#b0b0b0] px-3 py-[10px]">
              <div>
                <FieldLabel>{reserveOffer.guests.label}</FieldLabel>
                <FieldValue>{reserveOffer.guests.value}</FieldValue>
              </div>
              <ChevronDown />
            </div>
          </div>
          <p className="my-4 rounded-lg bg-[#f7f7f7] px-2 py-2 text-center text-[13px] leading-[18.59px] text-[#717171]">
            {reserveOffer.cancellation.lead}{" "}
            <b className="font-medium text-[#222222]">
              {reserveOffer.cancellation.date}
            </b>
          </p>
          <button
            id={reserveOffer.reserveButtonId}
            type="button"
            tabIndex={0}
            className="reserve-submit ring-control"
            onClick={showChargeToast}
          >
            {reserveOffer.reserveLabel}
          </button>
          <p className="mt-4 mb-0 text-center text-[14px] font-normal text-[#717171]">
            {reserveOffer.chargeNote}
          </p>
        </div>
        <div className="mt-[26px] flex h-5 items-center justify-center gap-2">
          <FlagMark />
          <a
            href={reserveOffer.reportHref}
            tabIndex={0}
            className="ring-control ring-control-link text-[14px] font-normal text-[#717171] underline"
            onClick={keepPlace}
          >
            {reserveOffer.reportLabel}
          </a>
        </div>
      </div>
      <p
        className={`title-toast z-50${fading ? " title-toast-out" : ""}`}
        data-open={toastOpen ? "true" : "false"}
        role="status"
        aria-live="polite"
        aria-hidden={toastOpen ? undefined : true}
      >
        {toastOpen ? reserveOffer.chargeNote : ""}
      </p>
    </aside>
  );
};

export { StickyReserve };
export default StickyReserve;
