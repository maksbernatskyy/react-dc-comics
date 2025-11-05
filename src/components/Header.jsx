import dcLogo from "../assets/img/dc-logo.png";

export default function Header() {
  {/* array della navbar */}
  
  const navBar = [
    'character',
    'comics',
    'movies',
    'tv',
    'games',
    'collectibles',
    'videos',
    'fans',
    'news',
    'shop',
  ]

  return (
    <>
      <header className="py-3">
        <div className="container d-flex justify-content-between">
          <div>
            <img className="logo" src={dcLogo} alt="" />
          </div>

          <div>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {/* Inserimento navBar dinamicamente */}
                    {
                      navBar.map((thisLink, i) => (
                        <li key={i} className="nav-item">
                          <a className="nav-link fw-bold text-uppercase" aria-current="page" href="#">
                          {thisLink}
                          </a>
                        </li>
                      ))
                    }

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
