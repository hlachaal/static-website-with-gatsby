import React, { Component, Fragment } from "react"
import { Alert, Row, Col, Card } from "reactstrap"
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaGamepad } from "react-icons/fa"

class DeviceType extends Component {
  doNothing = e => {
    e.preventDefault()
  }
  render() {
    return (
      <Fragment>
        <Row className="text-center">
          <Col md="12">
            <Alert color="light">
              <Row className="text-center">
                <Col md="4">
                  <Card>
                    <button
                      className="btn font26"
                      onClick={this.props.onSelectPhone}
                    >
                      <FaMobileAlt />
                      <br />
                      SmartPhone
                    </button>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <button
                      className="btn font26"
                      onClick={this.props.onSelectTablet}
                    >
                      <FaTabletAlt />
                      <br />
                      Tablet
                    </button>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <button
                      className="btn font26"
                      onClick={this.props.onSelectLaptop}
                    >
                      <FaLaptop />
                      <br />
                      Laptop
                    </button>
                  </Card>
                </Col>
              </Row>
              <Row className="text-center">
                <Col md="4">
                  <Card>
                    <button
                      className="btn font26"
                      onClick={e => this.doNothing(e)}
                    >
                      <FaGamepad />
                      <br />
                      video game console
                    </button>
                  </Card>
                </Col>
                <Col md="4" />
                <Col md="4" />
              </Row>
            </Alert>
          </Col>
        </Row>
      </Fragment>
    )
  }
}
export default DeviceType
