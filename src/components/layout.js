
import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./foother"
import Navbar from "./navbar"
import AboutData from "./about"
import FAQ from "./faqs"
import RequestData from "./request";
import CustomertData from "./customer";
import TruckData from "./trucktypes";
import HomeData from "./home";
import ServicesData from "./services";
import TruckStopData from "./truckStop";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleLogoClick = (event) => {
    event.preventDefault();
    sessionStorage.setItem("scrollToTop", "true");
    window.location.reload();
  };

  useEffect(() => {
    if (sessionStorage.getItem("scrollToTop") === "true") {
      sessionStorage.removeItem("scrollToTop");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className="next">
        {/* style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      > */}
        {/* <Navbar/> */}
       

        {/* <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
<Navbar/>
<HomeData/>
<AboutData/>
<ServicesData/>
<TruckData/>
<FAQ/>
<CustomertData/>
<RequestData/>
<TruckStopData/>
<Footer/>

      </div>
    </>
  )
}

export default Layout
