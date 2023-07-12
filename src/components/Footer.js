import "./FooterStyles.css";
import LogoDouble from "../assets/dabali-can.png"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = () => {
  
  return (
    <div className="footer">
      <div classname="sb_footer section-padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>Où nous trouver?</h4>
            <a>info@dabalixpress.com</a>
            <a href="https://maps.app.goo.gl/NwfPcvCNjTtV1wUd7" target="_blank">Cocody angré les oscars</a>
            <a href="https://maps.app.goo.gl/F2CipXZnrEU4H89r9" target="_blank">Riviera 2</a>
            <a href="https://maps.app.goo.gl/HjX8miXZL1bNuMcr5" target="_blank">Zone 4</a>
            <a href="https://maps.app.goo.gl/GX8nt6ir24u4ih1k7" target="_blank">Plateau rue des banques</a>
          </div>
          <div className="sb_footer-links-div">
            <h4>L'entreprise</h4>
            <a href="/dabali_xpress">Histoire</a>
            <a href="">Recrutements</a>
            <a href="">Medias</a>
            <a href="">Collaborations</a>
            <a href="">Communiqués de presse</a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Informations légales</h4>
            <a href="">Mentions légales</a>
            <a href="">Politique de confidentialité</a>
            <a href="">Cookies</a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Service conso</h4>
            <a href="">Besoin de parler?</a>
            <a href="">FAQ</a>
            <a href="">Contactez - nous</a>
          </div>
        </div>
      </div>
      <img src={LogoDouble}></img>
      <hr></hr>
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>SUIVEZ DABALI XPRESS</p>
        </div>
        <div className="sb_footer-below-links">
          <a href=""><div><p><FaFacebook style={{display : "inline"}}/> Facebook</p></div></a>
          <a href=""><div><p><FaInstagram style={{display : "inline"}}/> Instagram</p></div></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
