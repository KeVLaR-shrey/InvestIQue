import { Button, Card, Col, Divider, Image, Row } from "antd";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Styles from "./Home.module.scss";
import Navbar from "./components/Navbar";

export default function Home() {
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
          {/* <h1>
            Analysa is your one stop platform to analyse all things car
            industry. Analysa harnesses the power of a dataset of 1200 cars with
            more than 150 attributes, serving you with the knowledge of the
            automotive industry!
          </h1> */}
          <Col className={Styles.heroBtnGroup}>
            <Button className={Styles.heroBtn} type="primary">
              Login
            </Button>
            <Button className={Styles.heroBtn} type="default">
              Register
            </Button>
          </Col>
        </Col>
      </Col>
      <Col className={Styles.heading}>
        <h2>Our Highlighted Features</h2>
        <Divider className={Styles.divider} />
      </Col>
      <Row className={Styles.cardController}>
        <Card className={Styles.card} bordered={false} hoverable>
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
        <Card className={Styles.card} bordered={false} hoverable>
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
        <Card className={Styles.card} bordered={false} hoverable>
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
        <h2>Development Journey</h2>
        <Divider className={Styles.divider} />
      </Col>
    </div>
  );
}
