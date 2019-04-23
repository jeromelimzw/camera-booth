import { Container, Segment, Grid } from "semantic-ui-react";
import { getPhotoById } from "./static/cameraMemory";
import React, { Component } from "react";

class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.match.url);
  }

  render() {
    const { url } = this.props.match;
    return (
      <Container className="mb7 mt4">
        <Segment>
          <Grid>
            <Grid.Column textAlign="center">
              <img
                alt=""
                src={
                  url.substring(7) === "empty"
                    ? "https://ak4.picdn.net/shutterstock/videos/7905244/thumb/11.jpg"
                    : getPhotoById(url.substring(7)).photoInfo.img
                }
                className="tc center w-90 br3 shadow-5 b--black bw3 ba"
              />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <div className="tc">
            <i className="fas fa-microscope fa-5x mb0 bg-gray white pa3 br-100 hover-gray hover-bg-transparent pointer" />
            <h2 className="mt0">Analysis</h2>
          </div>
        </Segment>
      </Container>
    );
  }
}

export default PhotoViewer;
