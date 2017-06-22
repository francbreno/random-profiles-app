import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Button from 'react-toolbox/lib/button/Button';

import ProfileCard from '../components/profile_card';
import { removeContact } from '../actions';
import ContactsSelector from '../selectors/contacts_selector';

class Contacts extends Component {

  render () {
    return (
      <div className="search-results">
        { _.map(this.props.contacts, contact =>
          <ProfileCard key={ contact.id.value } profile={ contact }>
            <Button icon='delete' label='Delete' onClick={ () => this.props.removeContact(contact) } />
          </ProfileCard>)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    contacts: ContactsSelector(state)
  }
}

export default connect(mapStateToProps, { removeContact })(Contacts);
