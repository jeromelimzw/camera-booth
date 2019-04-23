import React, { Component } from "react";
import { Container, Segment, Icon, Grid } from "semantic-ui-react";
import Webcam from "react-webcam";
import { saveToCamera } from "./static/cameraMemory";

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = { imageSrc: "" };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    saveToCamera(imageSrc);
    console.log(imageSrc);
  };

  render() {
    return (
      <Container className="mt6">
        <Segment>
          <Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            className="w-100 ba br3"
          />
          <Segment>
            <Grid>
              <Grid.Column textAlign="center">
                <Icon
                  onClick={this.capture}
                  name="camera"
                  size="big"
                  circular
                  inverted
                  className="grow-large pointer"
                />
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default Camera;
