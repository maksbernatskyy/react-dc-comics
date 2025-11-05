import digitalComics from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import shopLocator from "../assets/img/buy-comics-shop-locator.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import powerVisa from "../assets/img/buy-dc-power-visa.svg";

export default function BlueBar() {
    return (
        <>
        <div id="icons" className="bg-primary py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
              <div className="col d-flex text-center">
                <img className="me-3 d-inline" src={digitalComics} alt="" />
                <a
                  className="text-uppercase text-white text-decoration-none pt-2"
                  href="#"
                >
                  digital comics
                </a>
              </div>
              <div className="col d-flex text-center">
                <img className="me-3" src={merchandise} alt="" />
                <a
                  className="text-uppercase text-white text-decoration-none pt-2"
                  href="#"
                >
                  dc merchandise
                </a>
              </div>
              <div className="col d-flex text-center">
                <img className="me-3" src={subscription} alt="" />
                <a
                  className="text-uppercase text-white text-decoration-none pt-2"
                  href="#"
                >
                  subscription
                </a>
              </div>
              <div className="col d-flex text-center">
                <img className="me-3" src={shopLocator} alt="" />
                <a
                  className="text-uppercase text-white text-decoration-none pt-2"
                  href="#"
                >
                  comic shop locator
                </a>
              </div>
              <div className="col d-flex text-center">
                <img className="me-3" src={powerVisa} alt="" />
                <a
                  className="text-uppercase text-white text-decoration-none pt-2"
                  href="#"
                >
                  dc power visa
                </a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}