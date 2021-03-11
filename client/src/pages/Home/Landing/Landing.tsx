import { Link } from "react-router-dom";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import "./Landing.scss";

const landingImgs = [
  "https://jlc-serves.s3.amazonaws.com/landingImg1.JPEG",
  "https://jlc-serves.s3.amazonaws.com/landingImg2.JPEG",
  "https://jlc-serves.s3.amazonaws.com/landingImg3.JPEG",
  "https://jlc-serves.s3.amazonaws.com/landingImg4.JPEG",
  "https://jlc-serves.s3.amazonaws.com/landingImg5.JPEG",
  "https://jlc-serves.s3.amazonaws.com/landingImg6.jpg",
];

const Landing: React.FC = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  const Photo = isMobile
    ? styled.img`
        width: 400px;
        object-fit: cover;
        margin-right: 30px;
        box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
      `
    : styled.img`
        width: 600px;
        object-fit: cover;
        margin-right: 50px;
        box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
      `;

  const Photo2 = isMobile
    ? styled.img`
        width: 400px;
        object-fit: cover;
        margin-right: 30px;
        box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
      `
    : styled.img`
        width: 600px;
        object-fit: cover;
        margin-right: 50px;
        box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
        transform: translateY(100px);
      `;

  return (
    <>
      <div className="landing">
        <div className="top">
          <h2 className="title">JLC Serves.</h2>
          <div className="line"></div>
        </div>

        <div className="middle">
          <div className="verse-block">
            <h1 className="verse-line1">"Share with the Lord's people who</h1>
            <h1 className="verse-line2">
              are in need. Practice hospitality."{" "}
              <span>&#8212; Romans 12: 13</span>
            </h1>
          </div>
          <div className="description-block">
            <p className="description">
              Helping those who need it the most. Hoping for their salvation.
              Together, we can spread the gospel one step at a time.
            </p>
          </div>

          <Link className="link donate-link" to="/donate">
            DONATE NOW
          </Link>
        </div>
      </div>

      <div className="marquee-slider">
        <Marquee
          velocity={isMobile ? 10 : 20}
          direction={"rtl"}
          scatterRandomly={false}
          resetAfterTries={100}
          onInit={(): void => {}}
          onFinish={(): void => {}}
        >
          <Photo src={landingImgs[0]} />
          <Photo2 src={landingImgs[1]} />
          <Photo src={landingImgs[2]} />
          <Photo2 src={landingImgs[3]} />
          <Photo src={landingImgs[4]} />
          <Photo2 src={landingImgs[5]} />
        </Marquee>
      </div>
    </>
  );
};

export default Landing;
