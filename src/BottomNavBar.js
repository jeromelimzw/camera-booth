import React, { Component } from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";
import { getLastPhoto } from "./static/cameraMemory";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navinfo: []
    };
  }

  componentDidMount(){
     this.setState({navinfo: [
        { link: `/album/${getLastPhoto().uuid}`, icon: "image" },
        { link: "/camera", icon: "camera" },
        { link: "/album", icon: "images" }
      ]}) 
  }

  render() {
    return (
      <Menu widths={3} borderless fixed="bottom">
        <Container>
          {this.state.navinfo.map(a => (
            <Menu.Item>
              <Link to={a.link} activeClassName=" green">
                <Icon name={a.icon} size="huge" />
              </Link>
            </Menu.Item>
          ))}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
