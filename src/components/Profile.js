import React, { Component, Fragment } from 'react';
import { Auth } from 'aws-amplify';

class Profile extends Component {
  state = { user: {}, isLoading: true };

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ user, isLoading: false });
    } catch (error) {
      console.error(
        'There was an issue while fetching information about current user',
        error
      );
    }
  }

  render() {
    const { user, isLoading } = this.state;

    return (
      <Fragment>
        <p>User profile</p>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <p>{JSON.stringify(user, null, 2)}</p>
        )}
      </Fragment>
    );
  }
}

export default Profile;
