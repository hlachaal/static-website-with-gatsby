import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import { FormGroup, Label, Alert, Row, Col, Input } from "reactstrap"
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
        <Fragment>
          <Row className="text-center">
            <Col md="6">
              <FormGroup>
                <Label for="laptopMaker">Laptop brand</Label>
                <Input
                  value={this.props.laptopBrand}
                  type="text"
                  name="laptopMaker"
                  id="laptopMaker"
                  placeholder="Example: Dell"
                  onChange={this.props.onUpdateLaptopBrand}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="laptopModel">Laptop model</Label>
                <Input
                  value={this.props.laptopModel}
                  type="text"
                  name="laptopModel"
                  id="laptopModel"
                  placeholder="Example: XPS 15"
                  onChange={this.props.onUpdateLaptopModel}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md="4" />
            <Col md="4">
              <button
                onClick={this.props.onSubmitLaptop}
                className="btn custom-padding"
              >
                Submit
              </button>
              <br />
              <br />
              <Link onClick={this.props.onchangeDevice} to="">
                Edit
              </Link>
            </Col>
            <Col md="4" />
          </Row>
        </Fragment>
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
