import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost } from "../../actions";
import { Container, Header, Divider, Icon, Button } from "semantic-ui-react";
import Logo from "../app/logo.svg";

class PostDetails extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const id = this.props.match.params.id;
      this.props.fetchPost(id);
    }
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Container className="blogdetails">
          <Link to="/">
            <Button primary animated>
              <Button.Content visible>
                <Icon name="chevron left" />
              </Button.Content>
              <Button.Content hidden>
                Back
              </Button.Content>
            </Button>
          </Link>
          <Button floated="right" color="red" animated>
            <Button.Content visible>
              <Icon name="trash" />
            </Button.Content>
            <Button.Content hidden>
              Delete
            </Button.Content>
          </Button>
        </Container>
        <Container className="blogdetails">
          <Header textAlign="center" as="h2">
            <img src={Logo} className="App-logo" />
            {this.props.post.title}
          </Header>
          <Divider />
          <p>{this.props.post.content}</p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchPost })(PostDetails);
