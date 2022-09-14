import "../css/index.css";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function MyApp({ Component, pageProps }) {

  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
  }
  return (
    <Web3ReactProvider getLibrary = { getLibrary } >
    <Component {...pageProps} />
    </Web3ReactProvider >
  );
}

export default MyApp;
