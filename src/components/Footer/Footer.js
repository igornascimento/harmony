import React from 'react';

const footer = () => (
  <footer className="footer-section theme-footer">

      <div className="footer-section-2 container-fluid">
        <div className="row">
          <div id="toggle-grid" className="col-xl-7 col-md-6 col-sm-6 col-12 text-sm-left text-center">
            <ul className="list-inline links ml-sm-5">
              <li className="list-inline-item mr-3">
                <a href="javascript:void(0);">Home</a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="javascript:void(0);">Blog</a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="javascript:void(0);">About</a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0);">Buy</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-5 col-md-6 col-sm-6 col-12">
            <ul className="list-inline mb-0 d-flex justify-content-sm-end justify-content-center mr-sm-3 ml-sm-0 mx-3">
              <li className="list-inline-item  mr-3">
                <p className="bottom-footer">&#xA9; 2019 <a target="_blank" href="https://designreset.com/equation">Equation
                    Admin Theme</a></p>
              </li>
              <li className="list-inline-item align-self-center">
                <div className="scrollTop"><i className="flaticon-up-arrow-fill-1"></i></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
);

export default footer;