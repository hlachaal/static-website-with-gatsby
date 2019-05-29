import React, { Component } from "react"
import { Alert, Row, Col, Input } from "reactstrap"
import { getPhoneModels } from "./services/phoneModelService"
import { getTabletModels } from "./services/tabletModelService"

class DeviceModel extends Component {
  renderModels() {
    if (this.props.deviceTypeId === 1) {
      const phoneModels = getPhoneModels()
      return (
        <Row className="text-center">
          <Col md="4" />
          <Col md="4">
            <Input
              onChange={this.props.onSelectModel}
              type="select"
              name="phoneModel"
              id="phoneModel"
            >
              <option key="null">Select Model</option>
              {phoneModels.map(item => (
                <option key={item._id}>{item.title}</option>
              ))}
            </Input>
          </Col>
          <Col md="4" />
        </Row>
      )
    }

    if (this.props.deviceTypeId === 2) {
      const tabletModels = getTabletModels()
      return (
        <Row className="text-center">
          <Col md="4" />
          <Col md="4">
            <Input
              onChange={this.props.onSelectModel}
              type="select"
              name="tabletModel"
              id="tabletModel"
            >
              <option key="null">Select Model</option>
              {tabletModels.map(item => (
                <option key={item._id}>{item.title}</option>
              ))}
            </Input>
          </Col>
          <Col md="4" />
        </Row>
      )
    }

    if (this.props.deviceTypeId === 3) {
      return (
        <Row className="text-center">
          <Col md="4">
            <Input
              type="text"
              name="laptopMaker"
              id="laptopMaker"
              placeholder="Brand. Example: Dell"
            />
          </Col>
          <Col md="4">
            <Input
              type="text"
              name="laptopModel"
              id="laptopModel"
              placeholder="Model. Example: XPS 15"
            />
          </Col>
          <Col md="4">
            <button className="btn custom-padding">Submit</button>
          </Col>
        </Row>
      )
    }
  }
  render() {
    return (
      <div>
        <Row className="text-center">
          <Col md="12">
            <Alert color="light">{this.renderModels()}</Alert>
          </Col>
        </Row>
      </div>
    )
  }
}
export default DeviceModel
