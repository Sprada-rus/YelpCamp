export default function CampCard({ campData }) {
    const lightImage = require('../image/Assets/Camp-Images/Compressed-Images/' + campData.camp_light_image);
    const HighImage = require('../image/Assets/Camp-Images/High-Quality-Images/' + campData.capm_high_image);

    return <div className="card" id={campData.camp_name.toLowerCase().split(' ').join('-')}>
        <img
            srcSet={ `${lightImage} 800w, ${HighImage} 1100w` }
            src={lightImage}
            alt={campData.camp_name}
        />
        <h3>{campData.camp_name}</h3>
        <p>{campData.camp_descr}</p>
        <button className="light-btn">View Campground</button>
    </div>
}