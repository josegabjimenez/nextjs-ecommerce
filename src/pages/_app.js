import { AppWrapper } from '@context/AppContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
