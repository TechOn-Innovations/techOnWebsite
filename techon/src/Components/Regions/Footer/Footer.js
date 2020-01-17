import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css'

  
  function Footer({ children }) {
    return (
      <div>
        <div className="footer-container"/>
        
        <div className="footer-children">{children}
          <MailOutlineIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
        </div>
        

      </div>
    );
  }

  export default Footer;
  

