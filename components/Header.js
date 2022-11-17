import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header className="container flex flex-col text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto flex flex-col items-center">
        <ConnectButton className="place-content-center"/>
        <h1 className="font-bold mt-8 text-xl text-blue-400"><a href="https://etherscan.io/address/byldr.eth">Byldr.eth</a></h1>
      </div>
    </header>
  );
}

