import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <ul></ul>
      <li>
        <Link href="/3d-gallery">3d-gallery</Link>
      </li>
      <li>
        <Link href="/button-glow-effect">
          button-glow-effect
        </Link>
      </li>
      <li>
        <Link href="/button-hover-effect">
          button-hover-effect
        </Link>
      </li>
      <li>
        <Link href="/card-scroll-snap">card-scroll-snap</Link>
      </li>
      <li>
        <Link href="/cards-flip-effect-gallery">
          cards-flip-effect-gallery
        </Link>
      </li>
      <li>
        <Link href="/cards-hover-effect">
          cards-hover-effect
        </Link>
      </li>
      <li>
        <Link href="/css-flex-box-responsive">
          css-flex-box-responsive
        </Link>
      </li>
      <li>
        <Link href="/custom-loader-v1">custom-loader-v1</Link>
      </li>
      <li>
        <Link href="/custom-loader">custom-loader</Link>
      </li>
      <li>
        <Link href="/custom-radio">custom-radio</Link>
      </li>
      <li>
        <Link href="/custom-slider-range">
          custom-slider-range
        </Link>
      </li>
      <li>
        <Link href="/cut-out-text">cut-out-text</Link>
      </li>
      <li>
        <Link href="/flex-grow-effect">flex-grow-effect</Link>
      </li>
      <li>
        <Link href="/footer-01">footer-01</Link>
      </li>
      <li>
        <Link href="/grid-template-areas">
          grid-template-areas
        </Link>
      </li>
      <li>
        <Link href="/input-example">input-example</Link>
      </li>
      <li>
        <Link href="/input-search">input-search</Link>
      </li>
      <li>
        <Link href="/ios-like-switch">ios-like-switch</Link>
      </li>
      <li>
        <Link href="/menu-items-hover">menu-items-hover</Link>
      </li>
      <li>
        <Link href="/notification-example">
          notification-example
        </Link>
      </li>
      <li>
        <Link href="/profile-card">profile-card</Link>
      </li>
      <li>
        <Link href="/social-buttons">social-buttons</Link>
      </li>
      {/* Not available */}
      {/* <li>
        <Link href="/stories-horizontal-scroller">
          stories-horizontal-scroller
        </Link>
      </li> */}
      <li>
        <Link href="/summary-details">summary-details</Link>
      </li>
      <li>
        <Link href="/theme-switcher">theme-switcher</Link>
      </li>
      <li>
        <Link href="/zoom-image-hover-effect">
          zoom-image-hover-effect
        </Link>
      </li>
    </>
  );
}
