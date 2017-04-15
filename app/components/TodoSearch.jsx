import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends Component {
  render() {
    let {showCompleted, searchText, dispatch} = this.props;
    return (
      <div className="container--header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
            const searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText))
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted()) }
            }/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch);