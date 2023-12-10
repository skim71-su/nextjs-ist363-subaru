// These styles apply to every route in the application
// reference: https://nextjs.org/docs/pages/building-your-application/styling/css-modules
import '../sass/global.scss';
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
} 