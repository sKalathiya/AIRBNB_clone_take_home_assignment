import SiteHeader from '../../components/layout/site-header'
import ListingInfo from './listing-info'
import MapSection from './map-section'
import MeetYourHost from './meet-your-host'
import MoreStaysNearby from './more-stays-nearby'
import RatingsSection from './ratings-section'
import PhotoMosaic from './photo-mosaic'
import ScrollHeader from './scroll-header'
import StickyReserve from './sticky-reserve'
import ThingsToKnow from './things-to-know'
import TitleBar from './title-bar'

const ListingPage = () => {
  return (
    <>
      <a
        href="#listing-content"
        className="absolute top-0 left-[-999px] inline-flex h-10 items-center px-4 text-[14px] leading-[20.02px] text-[#222222] no-underline"
      >
        Skip to content
      </a>
      <SiteHeader />
      <ScrollHeader />
      <main id="listing-content" className="min-h-screen">
        <div className="listing-frame mx-auto w-full max-w-[1280px] px-20">
          <TitleBar />
          <PhotoMosaic />
          <div className="listing-columns grid grid-cols-[minmax(0,1fr)_372px] items-stretch gap-x-[96px]">
            <ListingInfo />
            <StickyReserve />
          </div>
          <RatingsSection />
          <MapSection />
          <MeetYourHost />
          <ThingsToKnow />
          <MoreStaysNearby />
        </div>
      </main>
    </>
  )
}

export { ListingPage }
export default ListingPage
