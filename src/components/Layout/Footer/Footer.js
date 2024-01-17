import React from "react";
import TermsDoc from "../../../assets/docs/terms.pdf";
import PrivacyDoc from "../../../assets/docs/privacy.pdf";
import "./Footer.scss";
import FooterLogo from "./FooterLogo/FooterLogo";
import LinkedIn from "../../../assets/icons/LinkedIn/LinkedIn";
// import Discord from "../../../assets/icons/Discord/Discord";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="Brand flex-col justify-start items-start gap-5 inline-flex">
          <div className="h-[38px] justify-center items-center inline-flex">
            <div className="justify-start items-center gap-2.5 inline-flex">
              <FooterLogo />
              <div className="text-white text-[28px] font-normal">
                <a
                  href="https://www.adsynthetica.com/"
                  className="footer__logo-text"
                >
                  Adsynthetica
                </a>
              </div>
            </div>
          </div>
          <p className="w-[335px] text-white text-base font-normal">
            Get better results while saving time.  Trusted by advertisers around
            the world.
          </p>
        </div>

        <div className="Frame  justify-start items-start gap-20 footer__nav">
          <div className="footer__nav__links">
            <a href="#home">Home</a>
            <a href="#product">Product</a>
            <a href="#services">Services</a>
            <a href="#features">Features</a>
            <div className="FollowUs flex-col justify-start items-start gap-5 inline-flex">
              <a href="mailto:founders@adsynthetica.com">Contact</a>
            </div>
          </div>
          <div>
            <div className="footer__nav__socials">
              <a
                href="https://lnkd.in/gvTHdRXQ"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedIn />
              </a>
              {/* <a
                href="https://discord.gg/XJ3MMqcN"
                rel="noreferrer"
                target="_blank"
              >
                <Discord />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom  justify-between items-center inline-flex">
        <div>
          <span className="text-white text-xl font-normal">©</span>
          <span className="text-white text-xs font-normal">
            {" "}
            2023 All Rights Reserved.
          </span>
        </div>
        <div className="Terms justify-start items-center gap-2 flex">
          <div className="PrivacyPolicy text-white text-xs font-medium">
            <a href={PrivacyDoc}>Privacy Policy</a>
          </div>
          <div className="Ellipse w-1 h-1 bg-white rounded-full" />
          <div className="TermsConditions text-white text-xs font-medium">
            <a href={TermsDoc}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
