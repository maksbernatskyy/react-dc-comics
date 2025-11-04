import bigLogo from '../assets/img/dc-logo-bg.png'

export default function Footer() {
  return (
    <footer>
        <div id='main-footer' className='py-5'>
            <div className="container">
                <div id='footer-field' className="row">
                    <div className="col-6 row">
                        <div className='col-4'>
                            <h4 className='text-uppercase text-white fw-bold'>
                                    dc comics
                            </h4>
                            <ul className='list-unstyled'>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Characters
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Comics
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Movies
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Tv
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Games
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Videos
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        News
                                    </a>
                                </li>
                            </ul>

                            <div>
                                <h4 className='text-uppercase text-white fw-bold'>
                                    shop
                                </h4>
                                <ul className='list-unstyled'>
                                    <li className='text-decoration-none'>
                                        <a href="#" className='text-white-50 text-decoration-none'>
                                            Shop DC
                                        </a>
                                    </li>
                                    <li className='text-decoration-none'>
                                        <a href="#" className='text-white-50 text-decoration-none'>
                                            Shop DC Collectibles
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-4'>
                            <h4 className='text-uppercase text-white fw-bold'>
                                    dc
                            </h4>
                            <ul className='list-unstyled'>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Terms Of Use
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Privacy policy (New)
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Ad Choices
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Advertising
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Jobs
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Characters
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Subscriptions
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Talent Workshop
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        CPSC Certificates
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Raitings
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Shop Help
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-4'>
                            <h4 className='text-uppercase text-white fw-bold'>
                                    sites
                            </h4>
                            <ul className='list-unstyled'>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        DC
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        MAD Magazine
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        DC Kids
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        DC Universe
                                    </a>
                                </li>
                                <li className='text-decoration-none'>
                                    <a href="#" className='text-white-50 text-decoration-none'>
                                        DC Power Visa
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div id='big-logo'>
                        <img src={bigLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div id='signup-field' className='bg-dark py-5'>
            <div className="container">
                <div>
                    <a className='text-uppercase text-decoration-none text-white p-2 border border-primary border-3' href="#">sign-up now</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
