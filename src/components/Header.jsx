import dcLogo from "../assets/img/dc-logo.png";

export default function Header() {
  return (
    <>
      <header className="py-3">
        <div className="container d-flex justify-content-between">
          <div>
            <img className="logo w-75" src={dcLogo} alt="" />
          </div>

          <div>
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        characters
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        comics
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        movies
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        tv
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        games
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        Characters
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        collectibles
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        videos
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        fans
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        news
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                        shop
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
