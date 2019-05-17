import React, {Component} from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Layout extends Component {

  style1 = {width: '85%'};
  style2 = {width: '25%'};
  style3 = {width: '90%'};
  style4 = {height: '300px', width: '100%', marginTop: '30px'};
  style5 = {height: '300px', width: '100%', marginTop: '30px'};
  style6 = {height: '300px', width: '100%', marginTop: '30px'};
  style7 = {height: '300px', width: '100%', maxWidth: '275px'};
  style8 = {borderColor: '#3862f5'};
  style9 = {borderColor: '#07e0c4'};
  style10 = {borderColor: '#00b1f4'};
  style11 = {borderColor: '#f8538d'};
  style12 = {borderColor: '#ffbb44'};
  style13 = {borderColor: '#25d5e4'};
  style14 = {height: '435px', maxHeight: '100%'};
  style15 = {width: '70%'};
  style16 = {width: '30%'};
  style17 = {width: '86%'};

  componentDidMount() {
    // initializing dfault app after rendering
    window.App.init();
  }
  
  render () {
    return (
      <div className="main-layout">
        <Header></Header>

        <div className="main-container" id="container">

          <div className="overlay"></div>
          <div className="cs-overlay"></div>

          <div className="sidebar-wrapper sidebar-theme">

            <div id="dismiss" className="d-lg-none"><i className="flaticon-cancel-12"></i></div>

            <nav id="sidebar">

              <ul className="navbar-nav theme-brand flex-row  d-none d-lg-flex">
                <li className="nav-item d-flex">
                  <a href="index.html" className="navbar-brand">
                    <img src="assets/img/logo-3.png" className="img-fluid" alt="logo" />
                  </a>
                  <p className="border-underline"></p>
                </li>
                <li className="nav-item theme-text">
                  <a href="index.html" className="nav-link"> Equation </a>
                </li>
              </ul>


              <ul className="list-unstyled menu-categories" id="accordionExample">
                <li className="menu">
                  <a href="#dashboard" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">
                    <div className="">
                      <i className="flaticon-computer-6 ml-3"></i>
                      <span>Dashboard</span>
                    </div>

                    <div>
                      <span className="badge badge-pill badge-secondary mr-2">7</span>
                    </div>
                  </a>
                  <ul className="collapse submenu list-unstyled show" id="dashboard" data-parent="#accordionExample">
                    <li className="active">
                      <a href="index.html"> <i className="flaticon-computer-4"></i> Default </a>
                    </li>
                    <li>
                      <a href="accounting_dashboard.html"> <i className="flaticon-chart-line"></i> Accounting </a>
                    </li>
                    <li>
                      <a href="analytics_dashboard.html"> <i className="flaticon-computer-2"></i> Analytics </a>
                    </li>
                    <li>
                      <a href="car_dashboard.html"> <i className="flaticon-car"></i> Car </a>
                    </li>
                    <li>
                      <a href="classic_dashboard.html"> <i className="flaticon-computer-8"></i> Classic </a>
                    </li>
                    <li>
                      <a href="stock_market_dashboard.html"> <i className="flaticon-up-chart"></i> Stock Market </a>
                    </li>
                    <li>
                      <a href="cryptocurrency_dashboard.html"> <i className="flaticon-bitcoin-circle"></i> Cryptocurrency </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

          </div>


          <div id="content" className="main-content">
            <div className="container">
              <div className="page-header">
                <div className="page-title">
                  <h3>Dashboard</h3>
                </div>
              </div>

              <div className="row layout-spacing ">

                <div className="col-xl-3 mb-xl-0 col-lg-6 mb-4 col-md-6 col-sm-6">
                  <div className="widget-content-area  data-widgets br-4">
                    <div className="widget  t-sales-widget">
                      <div className="media">
                        <div className="icon ml-2">
                          <i className="flaticon-line-chart"></i>
                        </div>
                        <div className="media-body text-right">
                          <p className="widget-text mb-0">Sales</p>
                          <p className="widget-numeric-value">98,225</p>
                        </div>
                      </div>
                      <p className="widget-total-stats mt-2">94% New Sales</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 mb-xl-0 col-lg-6 mb-4 col-md-6 col-sm-6">
                  <div className="widget-content-area  data-widgets br-4">
                    <div className="widget  t-order-widget">
                      <div className="media">
                        <div className="icon ml-2">
                          <i className="flaticon-cart-bag"></i>
                        </div>
                        <div className="media-body text-right">
                          <p className="widget-text mb-0">Orders</p>
                          <p className="widget-numeric-value">24,017</p>
                        </div>
                      </div>
                      <p className="widget-total-stats mt-2">552 New Orders</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-sm-0 mb-4">
                  <div className="widget-content-area  data-widgets br-4">
                    <div className="widget  t-customer-widget">
                      <div className="media">
                        <div className="icon ml-2">
                          <i className="flaticon-user-11"></i>
                        </div>
                        <div className="media-body text-right">
                          <p className="widget-text mb-0">Customers</p>
                          <p className="widget-numeric-value">92,251</p>
                        </div>
                      </div>
                      <p className="widget-total-stats mt-2">390 New Customers</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                  <div className="widget-content-area  data-widgets br-4">
                    <div className="widget  t-income-widget">
                      <div className="media">
                        <div className="icon ml-2">
                          <i className="flaticon-money"></i>
                        </div>
                        <div className="media-body text-right">
                          <p className="widget-text mb-0">Income</p>
                          <p className="widget-numeric-value">9.5 M</p>
                        </div>
                      </div>
                      <p className="widget-total-stats mt-2">$2.1 M This Week</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>


        </div>


        <Footer></Footer>
      
      </div>
    );
  }
}

export default Layout;