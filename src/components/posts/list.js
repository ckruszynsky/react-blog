import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/";
import { Item } from "semantic-ui-react";
import _ from "lodash";
import Logo from '../app/logo.svg';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Item key={post.id}>
        <Item.Image size="tiny" src={Logo} />
          <Item.Content>            
            <Item.Header as="a">{post.title}</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>    
                {post.content}          
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
            {post.categories}
          </Item.Content>
        </Item>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 className="ui header">Blog Posts</h1>
        <Item.Group divided>
          {this.renderPosts()}
        </Item.Group>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
