import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa"

import { Animated } from "react-animated-css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import camioun from "../images/camioun.png"
import step1 from "../images/step1.png"
import step2 from "../images/2.png"
import step3 from "../images/3.png"

const IndexPage = () => (
  <Layout>
    <main>
      <div className="wrapper">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>BROKEN Gadget?</h1>
          <p>Same day repair service at your door!</p>
          <div className="text-center">
            <Link to="/schedule-a-repair/">
              <Button color="primary">Schedule a repair</Button>
            </Link>
          </div>
          <Animated
            animationIn="shake"
            animationOut="pulse"
            animationInDuration={3000}
            animationOutDuration={3000}
            isVisible={true}
          >
            <p>We Repair, You Say Where!</p>
          </Animated>

          <Animated
            animationIn="bounce"
            animationOut="slideOutRight"
            animationInDuration={3000}
            animationOutDuration={3000}
            isVisible={false}
          >
            <img className="camioun" src={camioun} alt="Logo" />
          </Animated>
          <div id="scroll">
            <Link to="#">
              <span />
              <span />
              <span />
              <br />
            </Link>
          </div>
          <div className="clearfix" />
        </section>
      </div>
      <div className="light-text padding-80 bg-white">
        <Row>
          <Col className="text-center">
            <h1 className="light-text">How it works</h1>
            <p>
              Most repairs are done within 30 minutes to 1 hour in a location
              and at a time you choose. You pay when the job is done. All waht
              you need to do is:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <img src={step1} alt="1" />
            <p>
              <b>1. Select the device</b> you are looking to repair and{" "}
              <b>explain the issue</b>.
            </p>
          </Col>
          <Col md="4">
            <img src={step2} alt="2" />
            <p>
              <b>2. Choose a time, a location</b> where to meet the technician
              and how we can contact you.
            </p>
          </Col>
          <Col md="4">
            <img src={step3} alt="3" />
            <p>
              <b>3. The rest is on us!</b> We will come to you and repair the
              device at your convinience.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="text-center margin-top-30">
              <Link to="/schedule-a-repair/">
                <Button color="primary">Schedule a repair</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <section className="gray-bg light-text">
        <Container className="text-center  padding-60">
          <Row>
            <Col className="text-center">
              <h1 className="light-text">we repair</h1>
            </Col>
          </Row>
          <Row className="margin-top-30 bigger-font">
            <Col md="4">
              <h2 className="light-text">
                <FaMobileAlt />
              </h2>
              <div className="margin-top-30">
                <ul className="ul-margin-0">
                  <li>Charger port</li>
                  <li>Battery</li>
                  <li>Speaker/Mic</li>
                  <li>Camera/Lens</li>
                  <li>Screen</li>
                </ul>
              </div>
            </Col>
            <Col md="4">
              <h2 className="light-text">
                <FaTabletAlt />
              </h2>
              <div className="margin-top-30">
                <ul className="ul-margin-0">
                  <li>Charger port</li>
                  <li>Battery</li>
                  <li>Speaker/Mic</li>
                  <li>Camera/Lens</li>
                  <li>Screen</li>
                </ul>
              </div>
            </Col>
            <Col md="4">
              <h2 className="light-text">
                <FaLaptop />
              </h2>
              <div className="margin-top-30">
                <ul className="ul-margin-0">
                  <li>Keyboard/Trackpad</li>
                  <li>Battery</li>
                  <li>Drive</li>
                  <li>adware/virus scan</li>
                  <li>Screen</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="light-text bg-gray">
        <Container className="text-center  padding-60">
          <Row>
            <Col className="text-center">
              <h1 className="light-text">Contact us</h1>
            </Col>
          </Row>
          <Row className="margin-top-30">
            <Col xs="12">
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="exemple@email.com"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input type="textarea" name="message" id="message" />
                </FormGroup>
                <Button>Send Message</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)

export default IndexPage
