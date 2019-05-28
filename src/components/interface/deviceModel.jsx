import React, { Component } from "react"
import { Alert, Row, Col, Input } from "reactstrap"
import { getPhoneModels } from "./services/phoneModelService"

class DeviceModel extends Component {
  render() {
    const phoneModels = getPhoneModels()

    return (
      <div>
        <Row className="text-center">
          <Col md="12">
            <Alert color="light">
              <h2>Device Model:</h2>
              <Row className="text-center">
                <Col md="4" />
                <Col md="4">
                  <Input
                    onChange={this.props.onSelectModel}
                    type="select"
                    name="phoneModel"
                    id="phoneModel"
                  >
                    <option key="null">select</option>
                    {phoneModels.map(item => (
                      <option key={item._id}>{item.title}</option>
                    ))}
                  </Input>
                </Col>
                <Col md="4" />
              </Row>
            </Alert>
          </Col>
        </Row>
      </div>
    )
  }
}
export default DeviceModel
