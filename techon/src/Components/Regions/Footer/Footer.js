import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const footerStyle = {
    backgroundColor: "grey",
    fontSize: "50px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%"
  };
  
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };
  
  function Footer({ children }) {
    return (
      <div>
        <div style={phantomStyle} />
        
        <div style={footerStyle}>{children}
        <MailOutlineIcon/>
        <PhoneInTalkIcon/>
        <WhatsAppIcon/>
        <FacebookIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
        </div>
        

      </div>
    );
  }

  export default Footer;
  

