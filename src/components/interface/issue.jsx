import React, { Component, Fragment } from "react"
import { Alert, Row, Col, Input } from "reactstrap"
import { Link } from "gatsby"

import { getPhoneIssues } from "./services/phoneIssueService"
import { getTabletIssues } from "./services/tabletIssueService"
import { getLaptopIssues } from "./services/laptopIssueService"

class Issue extends Component {
  renderIssues() {
    if (this.props.deviceTypeId === 1 && this.props.issue === "") {
      const phoneIssues = getPhoneIssues()
      return (
        <Alert color="light">
          <Row>
            <Col md="4" />
            <Col md="4">
              <Row className="text-center">
                <Input
                  onChange={this.props.onSelectIssue}
                  type="select"
                  name="phoneIssues"
                  id="phoneIssues"
                >
                  <option key="null">Select Issue</option>
                  {phoneIssues.map(item => (
                    <option key={item._id}>{item.title}</option>
                  ))}
                </Input>
              </Row>
            </Col>
            <Col md="4" />
          </Row>
        </Alert>
      )
    }
    if (this.props.deviceTypeId === 2 && this.props.issue === "") {
      const tabletIssues = getTabletIssues()
      return (
        <Alert color="light">
          <Row>
            <Col md="4" />
            <Col md="4">
              <Row className="text-center">
                <Input
                  onChange={this.props.onSelectIssue}
                  type="select"
                  name="tabletIssues"
                  id="tabletIssues"
                >
                  <option key="null">Select Issue</option>
                  {tabletIssues.map(item => (
                    <option key={item._id}>{item.title}</option>
                  ))}
                </Input>
              </Row>
            </Col>
            <Col md="4" />
          </Row>
        </Alert>
      )
    }
    if (this.props.deviceTypeId === 3 && this.props.issue === "") {
      const laptopIssues = getLaptopIssues()
      return (
        <Alert color="light">
          <Row>
            <Col md="4" />
            <Col md="4">
              <Row className="text-center">
                <Input
                  onChange={this.props.onSelectIssue}
                  type="select"
                  name="laptopIssues"
                  id="laptopIssues"
                >
                  <option key="null">Select Issue</option>
                  {laptopIssues.map(item => (
                    <option key={item._id}>{item.title}</option>
                  ))}
                </Input>
              </Row>
            </Col>
            <Col md="4" />
          </Row>
        </Alert>
      )
    }
    if (this.props.issue !== "" && this.props.issueSelected === false) {
      return (
        <Alert color="light">
          <p>
            Issue: <b>{this.props.issue}</b>
            <br />
          </p>
          <Link to="" onClick={this.props.onEditIssue}>
            Edit
          </Link>
          <Row>
            <Col md="4" />
            <Col md="4">
              <Row className="text-center margin-top-15">
                <Input
                  onChange={this.props.onUpdateIssueInfo}
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Additional info (Optional)"
                />
              </Row>
              <button
                onClick={this.props.onSubmitIssue}
                className="btn custom-padding"
              >
                Continue
              </button>
            </Col>
            <Col md="4" />
          </Row>
        </Alert>
      )
    }
    if (this.props.issue !== "" && this.props.issueSelected === true) {
      return (
        <Alert color="light">
          <p>
            Issue: <b>{this.props.issue}</b>
            <br />
            <p>{this.props.issueAdditionalInfo}</p>
          </p>
          <Link to="" onClick={this.props.onEditIssue}>
            Edit
          </Link>
        </Alert>
      )
    }
  }
  render() {
    return (
      <Fragment>
        <Row className="text-center">
          <Col md="12">{this.renderIssues()}</Col>
        </Row>
      </Fragment>
    )
  }
}
export default Issue
