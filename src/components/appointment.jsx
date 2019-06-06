import React, { Component } from "react"
import { Link } from "gatsby"
import { Alert, Row, Col } from "reactstrap"
import Moment from "react-moment"
import DeviceType from "./interface/deviceType"
import DeviceModel from "./interface/deviceModel"
import Issue from "./interface/issue"
import AppointmentInfo from "./interface/appointmentInfo"
import { FaEdit } from "react-icons/fa"

class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deviceTypeId: 0,
      deviceTypeSelected: false,
      deviceModelId: 0,
      deviceModelSelected: false,
      laptopBrand: "",
      laptopModel: "",
      issue: "",
      issueAdditionalInfo: "",
      issueSelected: false,
      addressInfo: {
        submitted: false,
      },
      startDate: new Date(),
    }
    this.handleDateChange = this.handleDateChange.bind(this)
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
  handleSelectModel = e => {
    this.setState({ deviceModelId: e.target.value, deviceModelSelected: true })
  }
  SelectIssue = e => {
    this.setState({ issue: e.target.value })
  }
  SubmitIssue = e => {
    e.preventDefault()
    this.setState({ issueSelected: true })
  }

  updateIssueInfo = e => {
    this.setState({ issueAdditionalInfo: e.target.value })
  }

  editIssue = e => {
    e.preventDefault()
    this.setState({
      issue: "",
      issueSelected: false,
      issueAdditionalInfo: "",
    })
  }
  editDeviceModel = e => {
    e.preventDefault()
    this.setState({
      deviceTypeId: 0,
      deviceTypeSelected: false,
      deviceModelId: 0,
      deviceModelSelected: false,
      laptopBrand: "",
      laptopModel: "",
      issueSelected: false,
    })
  }
  handleLaptopBrand = e => {
    this.setState({ laptopBrand: e.target.value })
    console.log(this.state)
  }
  handleLaptopModel = e => {
    this.setState({ laptopModel: e.target.value })
  }
  handleSubmitLaptop = e => {
    e.preventDefault()
    if (this.state.laptopBrand !== "" && this.state.laptopModel !== "") {
      this.setState({ deviceModelSelected: true })
    }
  }

  renderDeviceModel() {
    if (this.state.deviceTypeSelected === true) {
      if (this.state.deviceModelSelected === false) {
        return (
          <DeviceModel
            laptopBrand={this.state.laptopBrand}
            laptopModel={this.state.laptopModel}
            deviceTypeId={this.state.deviceTypeId}
            deviceModelId={this.state.deviceModelId}
            onSelectModel={this.handleSelectModel}
            onUpdateLaptopBrand={this.handleLaptopBrand}
            onUpdateLaptopModel={this.handleLaptopModel}
            onSubmitLaptop={this.handleSubmitLaptop}
            onchangeDevice={this.editDeviceModel}
          />
        )
      }
      if (this.state.deviceTypeId === 1 || this.state.deviceTypeId === 2) {
        return (
          <Row className="text-center">
            <Col md="12">
              <Alert color="light">
                <p>
                  Device: <b>{this.state.deviceModelId}</b>
                  <br />
                </p>
                <Link to="" onClick={this.editDeviceModel}>
                  <FaEdit /> Edit
                </Link>
              </Alert>
            </Col>
          </Row>
        )
      }
      if (this.state.deviceTypeId === 3) {
        return (
          <Row className="text-center">
            <Col md="12">
              <Alert color="light">
                <p>
                  Selected device: {this.state.laptopBrand}{" "}
                  {this.state.laptopModel}
                  <br />
                </p>
                <Link to="" onClick={this.editDeviceModel}>
                  <FaEdit /> Edit
                </Link>
              </Alert>
            </Col>
          </Row>
        )
      }
    }
  }
  renderIssue() {
    if (this.state.deviceModelSelected === true) {
      return (
        <Issue
          deviceTypeId={this.state.deviceTypeId}
          issueSelected={this.state.issueSelected}
          issue={this.state.issue}
          issueAdditionalInfo={this.state.issueAdditionalInfo}
          onSelectIssue={this.SelectIssue}
          onSubmitIssue={this.SubmitIssue}
          onUpdateIssueInfo={this.updateIssueInfo}
          onEditIssue={this.editIssue}
        />
      )
    }
  }

  updateText = e => {
    const addressInfo = { ...this.state.addressInfo }
    addressInfo[e.target.name] = e.target.value
    this.setState({ addressInfo })
  }
  submitAddress = () => {
    const addressInfo = { ...this.state.addressInfo }
    if (
      addressInfo.address &&
      addressInfo.city &&
      addressInfo.state &&
      addressInfo.zip
    ) {
      addressInfo.submitted = true
      this.setState({ addressInfo })
    }
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
    })
    console.log(this.state)
  }
  editTimeLocation = e => {
    e.preventDefault()
    const addressInfo = { ...this.state.addressInfo }
    addressInfo.submitted = false
    this.setState({ addressInfo })
  }

  renderAptInfo() {
    if (this.state.addressInfo.submitted === true) {
      return (
        <Row className="text-center">
          <Col md="12">
            <Alert color="light">
              <p>
                Time:{" "}
                <b>
                  <Moment
                    format="dddd MMMM Do YYYY, h:mm a"
                    date={this.state.startDate}
                  />
                </b>
              </p>
              <p className="margin-15">
                Location: <b>{this.state.addressInfo.address}</b>
              </p>
              <Link
                to=""
                onClick={e => {
                  this.editTimeLocation(e)
                }}
              >
                <FaEdit /> Edit
              </Link>
            </Alert>
          </Col>
        </Row>
      )
    }
    if (
      this.state.addressInfo.submitted === false &&
      this.state.issueSelected === true
    ) {
      return (
        <AppointmentInfo
          onUpdateText={this.updateText}
          addressInfo={this.state.addressInfo}
          onSubmitAddress={this.submitAddress}
          onHandleChange={this.handleDateChange}
          startDate={this.state.startDate}
        />
      )
    }
  }

  render() {
    return (
      <div className="min-height-430">
        {this.renderDeviceType()}
        {this.renderDeviceModel()}
        {this.renderIssue()}
        {this.renderAptInfo()}
      </div>
    )
  }
}

export default Appointment
