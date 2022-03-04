import { AppWrapper } from '@context/AppContext';
import { Footer, Header } from '@components/index';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppWrapper>
  );
}

export default MyApp;
