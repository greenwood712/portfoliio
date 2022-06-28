import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; <span id="current-year">2022</span> Arnold Jin
            </p>
          </div>
          <div className="col-sm-2 top">
            <span id="to-top">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a href="https://github.com/greenwood0712" target="_blank" rel="noreferrer">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://join.skype.com/invite/DTcWEdFN53GY"
                  target="_blank" rel="noreferrer"
                >
                  <i className="fa fa-skype" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="mailto:freelance1773@gmail.com" target="_blank" rel="noreferrer">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/tinyHelper712" target="_blank" rel="noreferrer">
                  <i className="fa fa-television" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/18482725/green-land"
                  target="_blank" rel="noreferrer"
                >
                  <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
