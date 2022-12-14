function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="/ryan-selfie-4-1000px-colored-bg.jpeg" className="h-[9rem] w-[9rem] object-cover rounded-full mx-auto mb-5" />
        <h1 className="font-bold">Ryan Cwynar</h1>
        <p><a className="hover:text-gray-600" href="https://etherscan.io/address/byldr.eth">byldr.eth</a></p>
      </div>
    </header>
  );
}

export default Header;
