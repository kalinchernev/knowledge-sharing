import React, { Component, Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { listPosts } from '../graphql/queries';

class List extends Component {
  state = { posts: [], feedback: '' };

  async componentDidMount() {
    try {
      const data = await API.graphql(graphqlOperation(listPosts));
      if (
        data &&
        data.data &&
        data.data.listPosts &&
        data.data.listPosts.items
      ) {
        this.setState({
          posts: data.data.listPosts.items,
          feedback: data.data.listPosts.items.length
            ? 'See below'
            : 'Be the first to share!',
        });
      }
    } catch (error) {
      const feedback =
        'Failed to get list of existing posts. Check the console for more details.';

      console.error(feedback, error);
      this.setState({ feedback });
    }
  }

  render() {
    const { posts, feedback } = this.state;

    return (
      <Fragment>
        <h2>Latest posts</h2>
        {feedback ? <p>{feedback}</p> : ''}
        {posts.length ? (
          <ul>
            {posts.map(post => (
              <li key={post.id}>{JSON.stringify(post)}</li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

export default List;
