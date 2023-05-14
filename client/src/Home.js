import { Button, Card, Col, Divider, Image, Row } from "antd";
import React from "react";
import Styles from "./Home.module.scss";
import Navbar from "./components/Navbar";
import SectionImageText from "./components/SectionImageText";
import SectionTextCards from "./components/SectionTextCards";
import SquadCard from "./components/SquadCard";
import { useNavigate } from 'react-router-dom';
//import LoginPage from './components/LoginPage';


export default function Home() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className={Styles.homePage}>
      <Col className={Styles.hero}>
        <Navbar />
        <Col className={Styles.heroCol}>
          <p>
            Your assets in confidence,
            <br></br>
            Invest with evidence.
          </p>
          <Col className={Styles.heroBtnGroup}>
          <Button
  className={Styles.heroBtn}
  type="primary"
  onClick={handleLoginClick}
>
              Login
            </Button>
            <Button className={Styles.heroBtn} type="default">
              Register
            </Button>
          </Col>
        </Col>
      </Col>
      <SectionImageText
        imageUrl="/your-image-url.png"
        aboutText="About Us"
        heading="How we can help"
        paragraph="Our investment recommendation system uses historical data and machine learning algorithms to generate personalized investment recommendations. 
        It aims to help individuals make more informed investment decisions that align with their goals and risk profile, potentially leading to better investment returns and financial stability.
        The user-friendly web portal makes the investment process more accessible and engaging for individuals, providing them with the tools and resources they need to achieve their financial goals."
      />
      <SectionTextCards
        aboutText="Our Approach"
        heading="Innovative Strategies"
        paragraph="We use a combination of data-driven insights and industry expertise to deliver innovative investment strategies that help our clients achieve their financial goals."
        cardData={[
          { title: "Strategy 1", content: "Description of strategy 1." },
          { title: "Strategy 2", content: "Description of strategy 2." },
          { title: "Strategy 3", content: "Description of strategy 3." },
        ]}
      />

      <Col className={Styles.heading}>
        <h2>Our Highlighted Features</h2>
        <Divider className={Styles.divider} />
      </Col>
      <Row className={Styles.cardController}>
        <Card
          className={`${Styles.card} featureCard`}
          bordered={false}
          hoverable
        >
          <h3>Data Mining</h3>
          <p>Analyzing data patterns.</p>
          <div>
            <Image
              src={"/1.png"}
              width={40}
              height={40}
              objectFit="contain"
              alt="feature-img"
            />
          </div>
        </Card>
        <Card
          className={`${Styles.card} featureCard`}
          bordered={false}
          hoverable
        >
          <h3>Machine Learning</h3>
          <p>Improving investment accuracy.</p>
          <div>
            <Image
              src={"/2.png"}
              width={40}
              height={40}
              objectFit="contain"
              alt="feature-img"
            />
          </div>
        </Card>
        <Card
          className={`${Styles.card} featureCard`}
          bordered={false}
          hoverable
        >
          <h3>Real-time Data</h3>
          <p>Using up-to-date information.</p>
          <div>
            <Image
              src={"/3.png"}
              width={40}
              height={40}
              objectFit="contain"
              alt="feature-img"
            />
          </div>
        </Card>
      </Row>
      <Col className={Styles.heading}>
        <h2 className={Styles.algorithmsHeading}>Algorithms Applied</h2>
      </Col>
      <div className={Styles.algorithmsSection}>
        <div className={Styles.algorithm}>
          <img
            src={"/tick-mark.png"}
            alt="tick"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />

          <h3>Linear Regression</h3>
          <hr />
        </div>
        <div className={Styles.algorithm}>
          <img
            src={"/tick-mark.png"}
            alt="tick"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />

          <h3>Decison Trees</h3>
          <hr />
        </div>
        <div className={Styles.algorithm}>
          <img
            src={"/tick-mark.png"}
            alt="tick"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />

          <h3>Random Forest</h3>
          <hr />
        </div>
      </div>

      <Col className={Styles.squadHeading}>
        <h2>The Squad</h2>
      </Col>
      <Row className={Styles.squadCardController}>
        <SquadCard
          name="John Doe"
          photo="/john-doe.jpg"
          linkedin="https://www.linkedin.com/in/janesmith/"
          instagram="https://www.instagram.com/johndoe/"
          github="https://github.com/johndoe"
        />
        <SquadCard
          name="Shreyansh Rai"
          photo="/ShreyanshRai.jpg"
          linkedin="https://www.linkedin.com/in/janesmith/"
          instagram="https://www.instagram.com/janesmith/"
          github="https://github.com/janesmith"
        />
        <SquadCard
          name="Bob Brown"
          photo="/bob-brown.jpg"
          linkedin="https://www.linkedin.com/in/bobbrown/"
          instagram="https://www.instagram.com/bobbrown/"
          github="https://github.com/bobbrown"
        />
      </Row>
    </div>
  );
}
