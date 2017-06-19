import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  TextArea,
  Divider,
  Icon,
  Grid,
  Header,
  Message
} from "semantic-ui-react";

class NewPost extends Component {
  renderField(field) {
    return (    
        <Form.Input
          label={field.label}
          placeholder={field.placeholder}
          control={field.control}
          rows={field.rows}
          {...field.input}
          error={!!field.meta.error}
        />              
    );
  }
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
          <Field
            name="title"
            label="Title"
            placeholder="Enter a title for the blog"
            control="input"
            component={this.renderField}
          />
          <Field
            name="categories"
            label="Categories"
            placeholder="C#, Development, JavaScript, Web Development, etc.."
            control="input"
            component={this.renderField}
          />
          <Field
            name="content"
            label="Post Content"
            placeholder="Enter the content of your blog post here..."
            rows="5"
            control="textarea"
            component={this.renderField}
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

function validate(values) {
  const errors = {};

  //validate inputs from 'values' object
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters long!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter content for the Blog post!";
  }
  //if errors is empty form is good to submit
  //if errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(NewPost);
