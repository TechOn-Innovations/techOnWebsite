import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const footerStyle = {
  backgroundColor: "#0E1E28",
  color: "#5CF9EF",
  fontSize: "50px",
  borderTop: "1px solid #0E1E28",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "30px",
  color: "#5CF9EF"
};

function Footer({ children }) {
  return (
    <div>
      <div className="phantom" style={phantomStyle} />

      <div style={footerStyle}>
        {children}
        <MailOutlineIcon />
        <WhatsAppIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Footer;
