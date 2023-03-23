import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/valmilogo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
const Footer = () => {
  
    return (
      <footer   className="footer has-background-black has-text-white-ter ">
         
              {/* <div   className=" social is-4">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>  */}
              

              <span style={{"text-align": "right", "display":"block", "width" : "100%",  }}> © 2023 valmi.io. All rights reserved &nbsp; &nbsp;</span>
           
      </footer>
    );
};

export default Footer;
