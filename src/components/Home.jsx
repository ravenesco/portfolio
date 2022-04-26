import { React, Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Masthead from "./Masthead";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Modals from "./Modals";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/")
      .then((res) => this.setState({ projectList: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <Masthead />
        <Projects projectList={this.state.projectList} />
        <About />
        <Footer />
        <Modals projectList={this.state.projectList} />
      </div>
    );
  }
}

export default Home;
