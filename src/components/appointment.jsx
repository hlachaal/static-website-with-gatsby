import React, { Component, Fragment } from "react"
import { Alert, Row, Col } from "reactstrap"
import DeviceType from "./interface/deviceType"
import DeviceModel from "./interface/deviceModel"
import { Link } from "gatsby"

class Appointment extends Component {
  state = {
    deviceTypeId: 0,
    deviceTypeSelected: false,
    deviceModelId: 0,
    deviceModelSelected: false,
    issueId: 0,
    issueSelected: false,
  }
  selectDevice = e => {
    const deviceTypeId = e
    const deviceTypeSelected = true
    this.setState({ deviceTypeId, deviceTypeSelected })
  }
  selectPhone = () => {
    this.selectDevice(1)
  }
  selectTablet = () => {
    this.selectDevice(2)
  }
  selectLaptop = () => {
    this.selectDevice(3)
  }

  renderDeviceType() {
    if (this.state.deviceTypeSelected === false) {
      return (
        <DeviceType
          onSelectPhone={this.selectPhone}
          onSelectTablet={this.selectTablet}
          onSelectLaptop={this.selectLaptop}
        />
      )
    }
  }
  handelSelectModel = e => {
    this.setState({ deviceModelId: e.target.value, deviceModelSelected: true })
    console.log(this.state)
  }
  editDeviceModel = e => {
    e.preventDefault()
    this.setState({
      deviceTypeId: 0,
      deviceTypeSelected: false,
      deviceModelId: 0,
      deviceModelSelected: false,
    })
  }

  renderDeviceModel() {
    if (this.state.deviceTypeSelected === true) {
      if (this.state.deviceModelSelected === false) {
        return (
          <DeviceModel
            deviceTypeId={this.state.deviceTypeId}
            deviceModelId={this.state.deviceModelId}
            onSelectModel={this.handelSelectModel}
          />
        )
      }
      return (
        <Row className="text-center">
          <Col md="12">
            <Alert color="light">
              <p>
                Selected device: {this.state.deviceModelId}
                <br />
                <Link to="" onClick={this.editDeviceModel}>
                  Edit
                </Link>
              </p>
            </Alert>
          </Col>
        </Row>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderDeviceType()}
        {this.renderDeviceModel()}
      </Fragment>
    )
  }
}

export default Appointment
