import React from "react";
import "./footer.css"; // Keeping your custom styles
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      {" "}
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          <div className="col-12 col-md-4 mb-3 text-center text-md-start">
            {" "}
            <div className="d-flex justify-content-center justify-content-md-start">
              {" "}
              <a href="#" className="text-white mx-2">
                <FacebookOutlinedIcon />
              </a>{" "}
              <a href="#" className="text-white mx-2">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white mx-2">
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-8">
            {" "}
            <div className="row">
              {" "}
              <div className="col-6 col-md-3">
                {" "}
                <ul className="list-unstyled">
                  {" "}
                  <li>Audio Description</li>
                  <li>Investor Relations</li>
                  <li>Legal Notice</li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li>Help Center</li>
                  <li>Jobs</li>
                  <li>Cookie Preferences</li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li>Gift Cards</li>
                  <li>Terms of Use</li> <li>Corporate Information</li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li>Media Center</li>
                  <li>Privacy</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3 text-center">
            {" "}
            <p>Service Code</p>
          </div>
          <div className="col-12 text-center"> © 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
