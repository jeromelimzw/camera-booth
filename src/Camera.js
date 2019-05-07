import React, { Component } from "react";
import { Container, Segment, Icon, Grid, Button } from "semantic-ui-react";
import Webcam from "react-webcam";
import { saveToCamera } from "./static/cameraMemory";

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = { imageSrc: "", facingMode: "user" };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    saveToCamera(imageSrc);
    console.log(imageSrc);
  };

  handleChangeCamera = () => {
    this.state.facingMode === "user"
      ? this.setState({ facingMode: { exact: "environment" } })
      : this.setState({ facingMode: "user" });
  };

  render() {
    const videoConstraints = { facingMode: this.state.facingMode };
    return (
      <Container className="mt4">
        <Segment>
          <Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            className="w-100 ba br3"
            videoConstraints={videoConstraints}
          />
          <Segment>
            <Grid>
              <Grid.Column className="">
                <div className="flex justify-around">
                  <Icon
                    onClick={this.capture}
                    name="camera"
                    size="big"
                    circular
                    inverted
                    className="grow-large pointer "
                  />
                  <Icon
                    onClick={this.handleChangeCamera}
                    name="nintendo switch"
                    size="big"
                    circular
                    inverted
                    className="grow-large pointer "
                  />
                </div>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default Camera;
