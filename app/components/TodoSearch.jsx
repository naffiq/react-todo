import React from 'react';

const TodoSearch = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },

  handleSearch: function () {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText)
  },

  render: function () {
    let {showCompleted} = this.props;
    return (
      <div className="container--header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.handleSearch}/>

            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;