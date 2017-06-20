import React from "react";
import { Item, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ListItem = ({ post, logo }) => {
  return (
    <Item key={post.id}>
      <Item.Image size="tiny" className="App-logo" src={logo} />
      <Item.Content>
        <Item.Header as="a">
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </Item.Header>
        <Item.Extra>Categories</Item.Extra>
        {post.categories}
      </Item.Content>
    </Item>
  );
};

export default ListItem;
