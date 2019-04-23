import React, { Component } from "react";
import { Container, Grid, Image, Icon } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";
import { getAllPhotos, deletePhotoById } from "./static/cameraMemory";

class CameraRoll extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }
  componentDidMount() {
    this.setState({ photos: getAllPhotos() });
  }

  handleDeletePhoto = id => {
    this.setState({ photos: deletePhotoById(id) });
  };

  render() {
    return (
      <Container className="mb7 mt4">
        <h2>Photo Reel</h2>
        <Grid>
          <Grid.Row columns={3}>
            {this.state.photos.length === 0 ? (
              <img
                src="http://www.webbdsc.com/wp-content/uploads/2017/11/noimage_camera.jpg"
                alt="no-photos"
              />
            ) : (
              this.state.photos.map((a, index) => (
                <Grid.Column key={index}>
                  <div className="tr">
                    <Icon
                      name="delete"
                      color="red"
                      onClick={() => this.handleDeletePhoto(a.uuid)}
                      className="grow-large pointer"
                      circular
                      inverted
                    />
                  </div>
                  <Link to={`/album/${a.uuid}`}>
                    <Image src={a.photoInfo.img} className="shadow-5 mt2" />
                    <span> {a.date}</span>
                    <br />
                    <span> {a.time}</span>
                  </Link>
                </Grid.Column>
              ))
            )}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default CameraRoll;
