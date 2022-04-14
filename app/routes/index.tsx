import bootstrap from '../styles/bootstrap.min.css';
import owlCarousel from '../styles/owl.carousel.min.css';
import fontAwesome from '../styles/font-awesome.min.css';
import magnificPopup from '../styles/magnific-popup.css';
import style from '../styles/style.css';
import responsive from '../styles/responsive.css';
import animate from '../styles/animate.css';

export const links = () => [{
  rel: 'stylesheet',
  href: bootstrap
},
{
  rel: 'stylesheet',
  href: owlCarousel
},
{
  rel: 'stylesheet',
  href: fontAwesome
},
{
  rel: 'stylesheet',
  href: magnificPopup
},
{
  rel: 'stylesheet',
  href: style
},
{
  rel: 'stylesheet',
  href: responsive
},
{
  rel: 'stylesheet',
  href: animate
}];

export default function Index() {
  return (
      <>
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row header-top-wrap">
              <div className="col-md-8">
                <div className="header-cont-info">
                  <ul>
                    <li><i className="fa fa-phone"></i> Call Us: +98 54321 67890</li>
                    <li><i className="fa fa-envelope"></i> Email Us: support@example.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header-social text-right">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainmenu">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a className="logo" href="#"><img src="assets/images/logo.png" alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar"><i className="icofont-navigation-menu"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                  <ul className="navbar-nav mx-auto text-center">
                    <li className="nav-item">
                      <a className="nav-link active" href="#" data-scroll-nav="0">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="1">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="2">Review</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="3">Product</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="4">Faq</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="5">Contact</a>
                    </li>
                  </ul>
                  <ul className="navbar-nav shop-btn">
                    <li className="nav-item">
                      <a className="nav-link active" href="#" data-scroll-nav="3">Shop Now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

  <section id="hero-area" data-scroll-index="0">
    <div className="container">
      <div className="row">

        <div className="col-md-7">
          <div className="caption d-table">
            <div className="d-table-cell align-middle">
              <h5>30% off for limited time</h5>
              <h1>Best Fashionable Digital Watch.</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium ligula.</p>
              <ul>
                <li><a href="#">Shop Now<i className="fa fa-long-arrow-right"></i></a></li>
                <li><span>Strating at $199</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="caption-img d-table text-center">
            <div className="d-table-cell align-middle">
              <img src="assets/images/watch-img-1.png" className="img-fluid animation-jump" alt="image" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
      </>

)}
