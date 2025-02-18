import React from "react";
import "./footer.css"; // Keeping your custom styles
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      {" "}
      {/* Bootstrap classes:  dark background, white text, padding top and bottom */}
      <div className="container">
        {" "}
        {/* Bootstrap container for responsive width */}
        <div className="row">
          {" "}
          {/* Bootstrap row for horizontal layout */}
          <div className="col-12 col-md-4 mb-3 text-center text-md-start">
            {" "}
            {/* Responsive column sizing.  mb-3 adds bottom margin for small screens, text-center on small, start on medium+ */}
            <div className="d-flex justify-content-center justify-content-md-start">
              {" "}
              {/* Center icons on small screens, align left on medium+ */}
              <a href="#" className="text-white mx-2">
                <FacebookOutlinedIcon />
              </a>{" "}
              {/* mx-2 adds horizontal margin */}
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
            {/* Responsive column sizing */}
            <div className="row">
              {" "}
              {/* Nested row for the lists */}
              <div className="col-6 col-md-3">
                {" "}
                {/* Column for each list, responsive sizing */}
                <ul className="list-unstyled">
                  {" "}
                  {/* Bootstrap class to remove default list styling */}
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
                  <li>Terms of Use</li>{" "}
                  {/* Corrected typo: "Terem" to "Terms" */}
                  <li>Corporate Information</li>
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
            {/* Full width, margin top, centered text */}
            <p>Service Code</p>
          </div>
          <div className="col-12 text-center">
            {" "}
            {/* Full width, centered text */}© 1997-2024 Netflix, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
