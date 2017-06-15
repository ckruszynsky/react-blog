import React from "react";
import { Item } from "semantic-ui-react";

const ListItem = ({post, logo }) =>{
  return (
      <Item key={post.id}>
        <Item.Image size="tiny" src={logo} />
        <Item.Content>
          <Item.Header as="a">{post.title}</Item.Header>                  
          <Item.Extra>Categories</Item.Extra>
          {post.categories}
        </Item.Content>
      </Item>
    );
}
  
export default ListItem;


