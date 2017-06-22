import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';
import _ from 'lodash';

import { loadProfiles, addContact } from '../actions';
import ProfileCard from '../components/profile_card';
import ProfilesSelector from '../selectors/profiles_selector';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTerm: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    console.log('loading...');
    if(this.props.profiles.length === 0) {
      this.props.loadProfiles();
    }
  }

  handleInputChange(event) {
    this.setState({ currentTerm: event.target.value });
  }

  render () {
    console.log('profiles', this.props.profiles);
    if(this.props.profiles.length === 0) {
      console.log('vazio ainda...');
      return <h1>Loading...</h1>;
    }

    console.log('data loaded...');

    return (
      <div className="search-results">
          { _.map(this.props.profiles, profile =>
            <ProfileCard key={ profile.id.value } profile={ profile }>
              <Button icon='bookmark' label='Bookmark' accent onClick={ () => this.props.addContact(profile) } />
            </ProfileCard>)
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profiles: ProfilesSelector(state)
  };
}

export default connect(mapStateToProps, { loadProfiles, addContact })(Search);
