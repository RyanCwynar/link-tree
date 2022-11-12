import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header className="container flex flex-col text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto flex flex-col items-center">
        <ConnectButton className="place-content-center"/>
        {/* <img src="/profile-pic.jpg" alt="Profile Picture" className="h-24 rounded-full mx-auto mb-5" /> */}
        <h1 className="font-bold">Byldr.eth</h1>
        <p>Builds web3 stuff</p>
      </div>
    </header>
  );
}

