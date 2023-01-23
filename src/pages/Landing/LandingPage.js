import Header from "../../components/Header";
import {AirbnbLogo, LandingImage, Logo, PlumeGuideLogo, BookingLogo} from "../../components/Images";
import {useNavigate} from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    return <>
        <Header>
            <Logo onClick={() => navigate('/')}/>
        </Header>
        <section>
            <LandingImage />
            <div className="container">
                <h1>Explore the best camp on Earth.</h1>
                <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                <ul className="landing-list">
                    <li>Add your own camp suggestions.</li>
                    <li>Leave reviews and experiences.</li>
                    <li>See locations for all camps.</li>
                </ul>
                <button className="primary-btn" onClick={() => navigate('/list')}>View Campgrounds</button>
            </div>
        </section>
        <section>
            <div className="container">
                <p>Partnered with:</p>
                <div className="partners-logo">
                    <AirbnbLogo/>
                    <BookingLogo/>
                    <PlumeGuideLogo/>
                </div>
            </div>
        </section>
    </>
}