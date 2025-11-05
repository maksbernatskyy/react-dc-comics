// Big Logo
import bigLogo from '../assets/img/dc-logo-bg.png'

// Loghi Social
import facebook from '../assets/img/footer-facebook.png'
import periscope from '../assets/img/footer-periscope.png'
import pinterest from '../assets/img/footer-pinterest.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'

export default function Footer() {

    {/* function markup */}
    function getMarkup(array) {
        return array.map((thisElement) => (
                                        <li className='text-decoration-none'>
                                            <a href="#" className='text-white-50 text-decoration-none'>
                                                {thisElement}
                                            </a>
                                        </li>
                                    ))
    }

    {/* Arrays footer */}

    const dcComics = [
        'Characters',
        'Comics',
        'Movies',
        'Tv',
        'Games',
        'Videos',
        'News'
    ]

    const dc = [
        'Terms Of Use',
        'Privacy policy (New)',
        'Ad Choices',
        'Advertising',
        'Jobs',
        'Subscriptions',
        'Talent Workshop',
        'CPSC Certificates',
        'Raitings',
        'Shop Help',
        'Contact Us'
    ]

    const sites = [
        'DC',
        'MAD Magazine',
        'DC Kids',
        'DC Universe',
        'DC Power Visa'
    ]

    const shop = [
        'Shop DC',
        'Shop DC Collectibles'
    ]


  return (
    <footer>

        {/* Main Footer */}
        <div id='main-footer' className='py-5'>
            <div className="container">
                <div id='footer-field' className="row">
                    <div className="col-12 col-md-6 row">
                        <div className='col-4'>
                            <h4 className='text-uppercase text-white fw-bold'>
                                    dc comics
                            </h4>
                            <ul className='list-unstyled'>
                                {
                                    getMarkup(dcComics)
                                }
                            </ul>

                            <div>
                                <h4 className='text-uppercase text-white fw-bold'>
                                    shop
                                </h4>
                                <ul className='list-unstyled'>
                                    {
                                        getMarkup(shop)
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className='col-4'>
                            <h4 className='text-uppercase text-white fw-bold'>
                                    dc
                            </h4>
                            <ul className='list-unstyled'>
                                {
                                    getMarkup(dc)
                                }
                            </ul>
                        </div>

                        <div className='col-4'>
                            <h4 className='text-uppercase text-white fw-bold'>
                                    sites
                            </h4>
                            <ul className='list-unstyled'>
                                {
                                    getMarkup(sites)
                                }
                            </ul>
                        </div>

                    </div>

                    <div id='big-logo'>
                        <img src={bigLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* Small Footer */}
        <div id='signup-field' className='bg-dark py-5'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <div>
                        <a className='text-uppercase text-decoration-none text-white p-2 border border-primary border-3' href="#">sign-up now!</a>
                    </div>
                    <div className='d-flex gap-3'>
                        <a className='text-uppercase text-primary text-decoration-none fw-bold fs-3' href="#">follow us</a>
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={periscope} alt="" /></a>
                        <a href="#"><img src={pinterest} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={youtube} alt="" /></a>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  );
}
