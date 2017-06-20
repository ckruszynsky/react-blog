import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/";
import { Container, Item, Button, Icon, Grid, Divider } from "semantic-ui-react";
import _ from "lodash";
import Logo from "../app/logo.svg";
import ListItem from "./list-item";

class PostList extends Component {
  componentDidMount() {
    console.log(`fetching posts`);
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return <ListItem key={post.id} post={post} logo={Logo} />;
    });
  }
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column floated="left">
              <h1 className="ui header">Posts</h1>
            </Grid.Column>           
            <Grid.Column width="3" floated="right">
              <Link to="/posts/new">
                <Button floated="right" 
                        primary animated type="button"
                        >
                  <Button.Content hidden>Add New</Button.Content>
                  <Button.Content visible>
                    <Icon name="add circle" />
                  </Button.Content>
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row />
        </Grid>
        <Divider />        
          <Item.Group divided>
            {this.renderPosts()}
          </Item.Group>        
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
