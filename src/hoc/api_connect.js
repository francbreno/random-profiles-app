import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../containers/search';

const apiConnect = ComposeComponent => {
  return class extends Component {

    componentDidMount() {
      this.props.loadData();
    }

    render() {
      return <ComposedComponent { ...this.props } />
    }
  }
}

export default apiConnect(Search);
