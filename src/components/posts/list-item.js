import React from "react";
import { Item, Icon, Button } from "semantic-ui-react";

const ListItem = ({ post, logo }) => {
  return (
    <Item key={post.id}>
      <Item.Image size="tiny" className="App-logo" src={logo} />
      <Item.Content>
        <Item.Header as="a">{post.title}</Item.Header>
        <Item.Extra>Categories</Item.Extra>
        {post.categories}
        <Item.Extra>
           <Button color="red" floated="right" animated type="button">
                  <Button.Content visible>
                    <Icon name="trash" />
                  </Button.Content>
                  <Button.Content hidden>
                    Delete
                  </Button.Content>
           </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default ListItem;
