import bootstrap from '../styles/bootstrap.min.css';
import owlCarousel from '../styles/owl.carousel.min.css';
import fontAwesome from '../styles/font-awesome.min.css';
import magnificPopup from '../styles/magnific-popup.css';
import style from '../styles/style.css';
import responsive from '../styles/responsive.css';
import animate from '../styles/animate.css';

export const links = () => [
  {
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
        <div className="mainmenu">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a className="logo" href=""><img src="https://cdn.shopify.com/s/files/1/0515/4819/2958/products/logo-local_1080x.png?v=1649978786" alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar"><i className="icofont-navigation-menu"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                  <ul className="navbar-nav mx-auto text-center">
{/*                    <li className="nav-item">
                      <a className="nav-link active" href="#" data-scroll-nav="0">Home</a>
                    </li>*/}
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="1">Produkte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="2">Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-scroll-nav="3">Über uns</a>
                    </li>
                  </ul>
                  <ul className="navbar-nav shop-btn">
                    <li className="nav-item">
                      <a className="nav-link active" href="#" data-scroll-nav="3">Login</a>
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
              <h1>Werde sichtbar für Kunden in deiner direkten Umgebung</h1>
              <h3>Stele sicher, dass dein Unternehmen in bis zu 36 Online-Verzeichnissen sichtbar ist.</h3>
              <ul>
                <li><a href="#">Jetzt sichtbar werden<i className="fa fa-long-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="caption-img d-table text-center">
            <div className="d-table-cell align-middle">
              <img src="https://cdn.shopify.com/s/files/1/0515/4819/2958/products/remove_iphone_1080x.png?v=1649978990" className="img-fluid animation-jump" alt="image" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


        <section id="video-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="video-player-wrap">
                  <div className="video-player d-table text-center">
                    <div className="d-table-cell align-middle">
                      <a className="popup-video" href="https://www.youtube.com/watch?v=clXBiR01kUM"><i
                          className="icofont-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



          {/*          <div className="prod-single text-center three">
                      <div className="prod-img">
                        <img src="https://cdn.shopify.com/s/files/1/0515/4819/2958/products/remove_iphone_1080x.png?v=1649978990" className="img-fluid animation-jump" alt="" />
                      </div>
                      <div className="prod-info three">
                        <h4>Olimus Blue</h4>
                        <span className="star-rating"><i className="icofont-star"></i><i className="icofont-star"></i><i
                            className="icofont-star"></i><i className="icofont-star"></i><i
                            className="icofont-star"></i></span>
                        <h5>$169</h5>
                        <a href="#">Buy Now</a>
                      </div>
                    </div>*/}




      </>

)}
