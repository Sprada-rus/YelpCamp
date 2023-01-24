import logo from "../image/Assets/Logo.svg";
import airbnb from "../image/Assets/Airbnb.svg";
import booking from "../image/Assets/Booking.svg";
import plumeGuide from "../image/Assets/Plum Guide.svg";

export const Logo = ({ onClick = f => f, className }) => <img src={logo}  alt={"Yelp Camp Logo"} className={className} onClick={onClick}/>;

export const LandingImage = () => <div className="hero-img"></div>

export const AirbnbLogo = () => <img src={airbnb} alt="Airbnb logo"/>;

export const BookingLogo = () => <img src={booking} alt="Booking logo"/>;

export const PlumeGuideLogo = () => <img src={plumeGuide} alt="Plume Guide logo"/>;