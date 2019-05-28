import React from "react"

import { Container, Row, Col } from "reactstrap"
import Appointment from "../components/appointment"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./schedule-a-repair.css"
const ScheduleRepair = () => (
  <Layout>
    <SEO title="Schedule an appointment with a tech to fix phone, tablet or laptop" />
    <Container className="light-text">
      <Row>
        <Col className="text-center">
          <h1 className="margin-70 light-text">SCHEDULE A REPAIR</h1>
        </Col>
      </Row>
      <Appointment />
    </Container>
  </Layout>
)

export default ScheduleRepair
