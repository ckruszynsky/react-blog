import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  TextArea,
  Divider,
  Icon,
  Grid,
  Header
} from "semantic-ui-react";

class NewPost extends Component {
  render() {
    return (
      <Container>
        <Header
          as="h2"
          content="New Post"
          subheader="Create a new blog post here."
        />
        <Divider />
        <Form>
          <Form.Input label="Title" placeholder="Enter a Title for the blog" />
          <Form.Input
            label="Categories"
            placeholder="Development, C#, JavaScript..."
          />
          <Form.Field
            label="Content"
            placeholder="Enter the content of your blog here.."
            control="textarea"
            rows="5"
          />
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column floated="left">
                <Button primary animated type="submit">
                  <Button.Content visible>Submit</Button.Content>
                  <Button.Content hidden>
                    <Icon name="save" />
                  </Button.Content>
                </Button>
              </Grid.Column>
              <Grid.Column floated="right">
                <Link to="/">
                  <Button color="red" animated type="submit">
                    <Button.Content visible>Cancel</Button.Content>
                    <Button.Content hidden>
                      <Icon name="cancel" />
                    </Button.Content>
                  </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    );
  }
}

export default NewPost;
