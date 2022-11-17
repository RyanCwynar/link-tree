import SocialLinks from "./SocialLinks";
import FooterDisclaimer from "./FooterDisclaimer";
import SendEth from "./SendEth";
import SendUSDC from "./SendUSDC";

function Footer() {
  return (
    <footer className="px-3 sm:px-0">
      <div className="container text-center mx-auto">
        <div className="md:w-4/6 mx-auto">
          <SocialLinks />
          <SendEth amount="0.01" />
          <SendUSDC amount="10" />
          <FooterDisclaimer />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
