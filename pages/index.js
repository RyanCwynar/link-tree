import Header from "../components/Header";
import LinkList from "../components/LinkList"
import Footer from "../components/Footer";
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'
import { useEffect } from 'react';
import useEagerConnect from '../hooks/useEagerConnect';
import Wallet from '../components/Wallet';
import { Tip } from '../components/Tip';

function IndexPage() {
  let triedToEagerConnect = useEagerConnect();
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      <div className='flex items-center space-x-2 justify-center pt-4'>
        <Tip />
        <Wallet triedToEagerConnect={triedToEagerConnect} />
      </div>
      {/* FontAwesome CDN style tag */}
      <Head>
        <title>Ryan | byldr.eth</title>
        <meta
          name="description"
          content="Quick links to important things."
        />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
      </Head>

      {/* Profile Pic and Title Header*/}
      <Header />

      {/* List of Links generated from links.json */}
      <LinkList />

      {/* Social Links and Footer Disclaimer/Credits */}
      <Footer />
    </div>
  );
}

export default IndexPage;
