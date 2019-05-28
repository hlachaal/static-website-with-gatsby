import React, { Component } from "react"
import { Alert, Row, Col, Card } from "reactstrap"
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa"

class DeviceType extends Component {
  render() {
    return (
      <div>
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
            </Alert>
          </Col>
        </Row>
      </div>
    )
  }
}
export default DeviceType
