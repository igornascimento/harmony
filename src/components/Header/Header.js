import React from 'react';

const header = () => (
  <header className="tabMobileView header navbar fixed-top d-lg-none">
    <div className="nav-toggle">
      <a href="javascript:void(0);" className="nav-link sidebarCollapse" data-placement="bottom">
        <i className="flaticon-menu-line-2"></i>
      </a>
      <a href="index.html" className=""> <img src="assets/img/logo-3.png" className="img-fluid" alt="logo" /></a>
    </div>
    <ul className="nav navbar-nav">
      <li className="nav-item d-lg-none">
        <form className="form-inline justify-content-end" role="search">
          <input type="text" className="form-control search-form-control mr-3" />
        </form>
      </li>
    </ul>
  </header>

  <header className="header navbar fixed-top navbar-expand-sm">
    <a href="javascript:void(0);" className="sidebarCollapse d-none d-lg-block" data-placement="bottom"><i
        className="flaticon-menu-line-2"></i></a>
    <ul className="navbar-nav flex-row">
      <li className="nav-item dropdown language-dropdown ml-1  ml-lg-0">
        <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="flagDropdown" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img src="assets/img/ca.svg" alt="" /> <span className="d-lg-inline-block d-none"></span>
        </a>
        <div className="dropdown-menu position-absolute" aria-labelledby="flagDropdown">
          <a className="dropdown-item" href="javascript:void(0);"><img src="assets/img/de.svg" className="flag-width" alt="" />
            &#xA0;German</a>
          <a className="dropdown-item" href="javascript:void(0);"><img src="assets/img/jp.svg" className="flag-width" alt="" />
            &#xA0;Japanese</a>
          <a className="dropdown-item" href="javascript:void(0);"><img src="assets/img/fr.svg" className="flag-width" alt="" />
            &#xA0;French</a>
          <a className="dropdown-item" href="javascript:void(0);"><img src="assets/img/ru.svg" className="flag-width" alt="" />
            &#xA0;Russian</a>
          <a className="dropdown-item" href="javascript:void(0);"><img src="assets/img/ca.svg" className="flag-width" alt="" />
            &#xA0;English</a>
        </div>
      </li>
    </ul>


    <ul className="navbar-nav flex-row mr-lg-auto ml-lg-0  ml-auto">
      <li className="nav-item dropdown message-dropdown ml-lg-4">
        <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="messageDropdown" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span className="flaticon-mail-10"></span><span className="badge badge-primary">13</span>
        </a>
        <div className="dropdown-menu  position-absolute" aria-labelledby="messageDropdown">
          <a className="dropdown-item title" href="javascript:void(0);">
            <i className="flaticon-chat-line mr-3"></i><span>You have 13 new messages</span>
          </a>
          <a className="dropdown-item" href="javascript:void(0);">
            <div className="media">
              <div className="usr-img online mr-3">
                <img className="usr-img rounded-circle" src="assets/img/90x90.jpg" alt="Generic placeholder image" />
              </div>
              <div className="media-body">
                <div className="mt-0">
                  <p className="text mb-0">Browse latest projects...</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="meta-user-name mb-0">Kara Young</p>
                  <p className="meta-time mb-0  align-self-center">1 min ago</p>
                </div>
              </div>
            </div>

            <div className="media">
              <div className="usr-img mr-3">
                <img className="usr-img rounded-circle" src="assets/img/90x90.jpg" alt="Generic placeholder image" />
              </div>
              <div className="media-body">
                <div className="mt-0">
                  <p className="text mb-0">Design, Development and...</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="meta-user-name mb-0">Amy Diaz</p>
                  <p className="meta-time mb-0  align-self-center">5 mins ago</p>
                </div>
              </div>
            </div>

            <div className="media">
              <div className="usr-img online mr-3">
                <img className="usr-img rounded-circle" src="assets/img/90x90.jpg" alt="Generic placeholder image" />
              </div>
              <div className="media-body">
                <div className="mt-0">
                  <p className="text mb-0">We can ensure...</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="meta-user-name mb-0">Shaun Park</p>
                  <p className="meta-time mb-0  align-self-center">1 day ago</p>
                </div>
              </div>
            </div>
          </a>

          <a className="footer dropdown-item" href="javascript:void(0);">
            <div className="btn btn-info mb-3 mr-2 btn-rounded"><i className="flaticon-arrow-right mr-3"></i> View more</div>
          </a>
        </div>
      </li>

      <li className="nav-item dropdown notification-dropdown ml-3">
        <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span className="flaticon-bell-4"></span><span className="badge badge-success">15</span>
        </a>
        <div className="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
          <a className="dropdown-item title" href="javascript:void(0);">
            <i className="flaticon-bell-13 mr-3"></i> <span>You have 15 new notifications</span>
          </a>

          <a className="dropdown-item text-center  p-1" href="javascript:void(0);">

            <div className="notification-list ">

              <div className="notification-item position-relative  mb-3">
                <div className="c-dropdown text-right">
                  <span id="c-dropdonbtn" className="c-dropbtn mr-2"><i className="flaticon-dots"></i></span>
                  <div className="c-dropdown-content">
                    <div className="c-dropdown-item">View</div>
                    <div className="c-dropdown-item">Delete</div>
                  </div>
                </div>

                <h6 className="mb-1">5 new members joined today</h6>
                <p><span className="meta-time">1 minute ago</span> . <span className="meta-member-notification">4 members</span>
                </p>
                <ul className="list-inline badge-collapsed-img mt-3">
                  <li className="list-inline-item chat-online-usr">
                    <img src="assets/img/90x90.jpg" alt="admin-profile" className="ml-0" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img src="assets/img/90x90.jpg" alt="admin-profile" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img src="assets/img/90x90.jpg" alt="admin-profile" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img src="assets/img/90x90.jpg" alt="admin-profile" />
                  </li>
                </ul>

              </div>

              <div className="notification-item position-relative  mb-3">

                <div className="c-dropdown text-right">
                  <span id="c-dropdonbtn2" className="c-dropbtn mr-2"><i className="flaticon-dots"></i></span>
                  <div className="c-dropdown-content">
                    <div className="c-dropdown-item">View</div>
                    <div className="c-dropdown-item">Delete</div>
                  </div>
                </div>

                <h6 className="mb-1">Very long description...</h6>
                <p><span className="meta-time">5 minutes ago</span> . <span className="meta-member-notification">5 members</span>
                </p>
                <ul className="list-inline badge-collapsed-img mt-3">
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" className="ml-0" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" />
                  </li>
                </ul>

              </div>

              <div className="notification-item position-relative  mb-3">
                <div className="c-dropdown text-right">
                  <span className="c-dropbtn mr-2"><i className="flaticon-dots"></i></span>
                  <div className="c-dropdown-content">
                    <div className="c-dropdown-item">View</div>
                    <div className="c-dropdown-item">Delete</div>
                  </div>
                </div>

                <h6 className="mb-1">New item are in queue</h6>
                <p><span className="meta-time">25 minutes ago</span> . <span className="meta-member-notification">3 members</span>
                </p>
                <ul className="list-inline badge-collapsed-img mt-3">
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" className="ml-0" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" />
                  </li>
                  <li className="list-inline-item chat-online-usr">
                    <img alt="admin-profile" src="assets/img/90x90.jpg" />
                  </li>
                </ul>
              </div>
            </div>
          </a>
          <a className="footer dropdown-item text-center p-2">
            <span className="mr-1">View All</span>
            <div className="btn btn-gradient-warning rounded-circle"><i className="flaticon-arrow-right flaticon-circle-p"></i>
            </div>
          </a>
        </div>
      </li>
    </ul>


    <ul className="navbar-nav flex-row ml-lg-auto">

      <li className="nav-item  d-lg-block d-none">
        <form className="form-inline" role="search">
          <input type="text" className="form-control search-form-control" placeholder="Search..." />
        </form>
      </li>

      <li className="nav-item dropdown app-dropdown  ml-lg-4 mr-lg-2 order-lg-0 order-2">
        <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="appDropdown" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span className="flaticon-bulb"></span>
        </a>
        <div className="dropdown-menu  position-absolute" aria-labelledby="appDropdown">
          <a className="dropdown-item" href="ecommerce_dashboard.html">
            <i className="flaticon-commerce"></i><span>eCommerce</span>
          </a>
          <a className="dropdown-item" href="form_bootstrap_basic.html">
            <i className="flaticon-edit-3"></i><span>Forms</span>
          </a>
          <a className="dropdown-item" href="table_basic.html">
            <i className="flaticon-table"></i><span>Tables</span>
          </a>
          <a className="dropdown-item" href="ui_buttons.html">
            <i className="flaticon-switch"></i><span>Buttons</span>
          </a>
          <a className="dropdown-item" href="ui_flaticon_icon.html">
            <i className="flaticon-edit"></i><span>Font Icons</span>
          </a>
          <a className="dropdown-item" href="modules_widgets.html">
            <i className="flaticon-computer-5"></i><span>Modules</span>
          </a>
          <a className="dropdown-item" href="map_google_basic.html">
            <i className="flaticon-location"></i><span>Maps</span>
          </a>
          <a className="dropdown-item" href="apps_drag_n_drop_calendar.html">
            <i className="flaticon-calendar-1"></i><span>Calendar</span>
          </a>
          <a className="dropdown-item" href="am_column_and_barchart.html">
            <i className="flaticon-chart-3"></i><span>Charts</span>
          </a>
        </div>
      </li>


      <li className="nav-item dropdown user-profile-dropdown ml-lg-0 mr-lg-2 ml-3 order-lg-0 order-1">
        <a href="javascript:void(0);" className="nav-link dropdown-toggle user" id="userProfileDropdown"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="flaticon-user-12"></span>
        </a>
        <div className="dropdown-menu  position-absolute" aria-labelledby="userProfileDropdown">
          <a className="dropdown-item" href="user_profile.html">
            <i className="mr-1 flaticon-user-6"></i> <span>My Profile</span>
          </a>
          <a className="dropdown-item" href="apps_scheduler.html">
            <i className="mr-1 flaticon-calendar-bold"></i> <span>My Schedule</span>
          </a>
          <a className="dropdown-item" href="apps_mailbox.html">
            <i className="mr-1 flaticon-email-fill-1"></i> <span>My Inbox</span>
          </a>
          <a className="dropdown-item" href="user_lockscreen_1.html">
            <i className="mr-1 flaticon-lock-2"></i> <span>Lock Screen</span>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="user_login_1.html">
            <i className="mr-1 flaticon-power-button"></i> <span>Log Out</span>
          </a>
        </div>
      </li>

      <li className="nav-item dropdown cs-toggle order-lg-0 order-3">
        <a href="#" className="nav-link toggle-control-sidebar suffle">
          <span className="flaticon-menu-dot-fill d-lg-inline-block d-none"></span>
          <span className="flaticon-dots d-lg-none"></span>
        </a>
      </li>
    </ul>
  </header>
);

export default header;