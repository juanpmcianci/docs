import React, { useCallback } from "react";

import "./Footer.css";
import useResponsive from "../../hooks/useResponsive";

const Footer = () => {
  const { isMobileWidth } = useResponsive();

  const renderCopyright = useCallback(
    () => (
      <span className="logo-part__copyright">
        Copyright © {new Date().getFullYear()} Axicon Labs Inc. All Rights Reserved. Panoptic™ is a trademark of Axicon Labs Inc. All other trademarks and registered trademarks are the sole property of their respective owners.
      </span>
    ),
    []
  );

  return (
    <footer className="custom-footer">
      <div className="footer-conversation-container footer-conversation-container-background">
        <div className="footer-conversation-title">
          <div>Join the</div>
          <div>Conversation.</div>
        </div>
        <div className="footer-conversation-social">
          <div className="footer-conversation-social-text">Find us on:</div>
          <div >
            <a className="footer-conversation-social-icon-link" href="https://discord.gg/7fE8SN9pRT" aria-label="Discord">
              <img src={"/img/icons/discord.svg"} alt="discord" className="footer-conversation-social-icon ocial-icon-margin"></img>
            </a>
            <a className="footer-conversation-social-icon-link" href="https://www.linkedin.com/company/panoptic-xyz" aria-label="Linked In">
              <img src={"/img/icons/linkedin.svg"} alt="discord" className="footer-conversation-social-icon ocial-icon-margin"></img>
            </a>
            <a className="footer-conversation-social-icon-link" href="https://twitter.com/panoptic_xyz" aria-label="Twitter">
              <img src={"/img/icons/twitter.svg"} alt="discord" className="footer-conversation-social-icon ocial-icon-margin"></img>
            </a>
            <a className="footer-conversation-social-icon-link" href="https://telegram.com/" aria-label="Telegram">
              <img src={"/img/icons/telegram-big.svg"} alt="telegram" className="footer-conversation-social-icon"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__container__logo-part">
          <img
            className="logo-part__logo"
            src="/img/logo-dark.svg"
            alt="footer logo"
          />
          {!isMobileWidth && renderCopyright()}
        </div>
        <div className="footer__container__learn-part">
          <div className="learn-part__title">Learn</div>
          <div className="learn-part__list">
            <a href="/docs/panoptic-protocol/overview">Protocol Overview</a>
            <a href="/docs/trading/basic-concepts">Options Trading 101</a>
            <a href="/docs/whitepaper" target="_blank">White Paper</a>
            <a href="/docs/developers/smart-contracts-overview">Developers</a>
            <a href="/docs/terms/glossary">Glossary</a>
          </div>
        </div>
        <div className="footer__container__community-and-more-part">
          <div className="community-part__title">Community</div>
          <div className="community-part__links">
            <a className="community-part__link" href="https://discord.gg/7fE8SN9pRT" aria-label="Discord" />
            <a className="community-part__link" href="https://www.linkedin.com/company/panoptic-xyz" aria-label="Linked In" />
            <a className="community-part__link" href="https://twitter.com/panoptic_xyz" aria-label="Twitter" />
            <a className="community-part__link" href="https://telegram.com/" aria-label="Telegram" />
          </div>
          <div className="more-part__title">More</div>
          <div className="more-part__links">
            <a className="more-part__link" target="_blank" href="https://github.com/panoptic-labs">
              Github <i className="icon__external-link" />
            </a>
            <a className="more-part__link" target="_blank" href="https://research.panoptic.xyz/">
              Research <i className="icon__external-link" />
            </a>
            <a className="more-part__link" target="_blank" href="https://blog.panoptic.xyz/">
              Blog <i className="icon__external-link" />
            </a>
          </div>
        </div>
        {isMobileWidth && renderCopyright()}
        <p className="footer__container__description-part">
          The content provided is for informational and educational purposes
          only and is not intended as, nor should it be construed as, financial,
          investment, or trading advice, or a recommendation to buy, sell, or
          hold any options. Options trading carries significant risks, including
          the potential for substantial losses, and may not be suitable for all
          investors. Before engaging in options trading, you should consult with
          a qualified financial advisor or other professional to evaluate your
          specific financial situation and objectives.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
