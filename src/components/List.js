import React, { Component, Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

class List extends Component {
  state = { posts: [] };

  async componentDidMount() {
    try {
      const data = await API.graphql(listPostsOperation);
      if (
        data &&
        data.data &&
        data.data.listPosts &&
        data.data.listPosts.items
      ) {
        this.setState({ posts: data.data.listPosts.items });
      }
    } catch (error) {
      console.error(`Failed to get list of existing posts`, error);
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <p>List</p>
        {posts.length ? (
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.url}</li>
            ))}
          </ul>
        ) : (
          'No posts'
        )}
      </Fragment>
    );
  }
}

const listPostsOperation = graphqlOperation(`
  query {
    listPosts {
      items {
        id
        url
        notes
        date
      }
    }
  }
`);

export default List;
