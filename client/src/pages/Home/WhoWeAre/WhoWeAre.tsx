import './WhoWeAre.scss';

const WhoWeAre: React.FC = () => {
    return (
        <div className='who-we-are'>
            <div className="img-container"><img src='https://jlc-serves.s3.amazonaws.com/sleepingBagProject.JPEG' alt='' /></div>
            <div className="content">
            <div className="top">
                <h3 className="who-we-are-text">WHO WE ARE</h3>
                <h1 className="we-are">Small Christian Church With <span>Big Ambitions</span></h1>
            </div>
            <div className="middle">
                <div className="founded middle-card">
                    <h2 className="subheading"><span>01.</span>Our Roots</h2>
                    <p className="text">Jesus Love Church was founded in 2014 by Pastor Gon Kim. Church was first established in Plymouth, PA. After couple of years, we have relocated to Lansdale, PA and have been here since! </p>
                </div>
                <div className="faith middle-card">
                    <h2 className="subheading"><span>02.</span>Our Faith</h2>
                    <p className="text">With a concrete belief in Jesus Christ as our Savior, we walk each step of our journey with purpose: to put God and others before ourselves as Jesus did for us.</p>
                    <p className="bible-verse">"Look not every man on his own things, but every man also on the things of others." &#8212; Philippians 2:4</p>
                </div>
                <div className="mission middle-card">
                    <h2 className="subheading"><span>03.</span>Our Mission</h2>
                    <p className="text">We were put onto this world with purpose. That purpose is to serve others and spread the gospel as God wanted us to. </p>
                    <p className="bible-verse">"For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many." &#8212; Mark 10:45</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WhoWeAre