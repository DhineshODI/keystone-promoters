import { Helmet } from "react-helmet-async";
import ChannelPartnerComponent from "../Components/ChannelPartnerComponent";
import ContactPage from "../Components/ContactPage";
import Header from "../Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChannelPartner() {
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Real Estate Channel Partners / Keystone Promoters</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join Keystone Promoters’ real estate channel partners network and grow property sales through expert support and trusted collaboration."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="/channel-partners" />

        {/* Schema Markup */}
      </Helmet>

      <h1 style={{ display: "none" }}>Channel Partners</h1>
      <div>
        {/* <Header /> */}
        <ChannelPartnerComponent />
      </div>
    </>
  );
}
