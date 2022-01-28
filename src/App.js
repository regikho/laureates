import React, { Component } from 'react';

import './App.css';
import Table from './containers/Table/Table';
import Filter from './containers/Filter/Filter';
import laureates from './common/laureates.json';
import { MILLISECONDS_IN_SECOND } from './common/constants';

export default class App extends Component {

  state = {
    laureates,
    filter: '',
    sortDirection: 'asc'
  }

  handleDelete = id => {
    const laureates = this.state.laureates.filter(laureate => laureate.id !== id)

    this.setState({
      laureates
    })
  }

  handleAdd = (name, date, field, isMultiple) => {
    const laureates = this.state.laureates
    const laureate = {
      id: this.state.laureates.length + 1,
      name,
      date: Date.parse(date) / MILLISECONDS_IN_SECOND,
      field,
      isMultiple
    }
  }

  handleInputChange = ({ target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }

  handleSort = () => {
    this.setState({
      sortDirection: this.state.sortDirection === 'asc' ? 'desc' : 'asc'
    })
  }

  render () {
    const { laureates, filter, sortDirection } = this.state;
    const filteredLaureates = laureates.filter(
      ({ name, field }) => {
        const lowerFilter = filter.toLowerCase();

        return name.toLowerCase().includes(lowerFilter)

        || field.toLowerCase().includes(lowerFilter)
      }
    )
    
    const sortedLaureates = filteredLaureates.sort(
      (a, b) => {
        const firstName = a.name.toLowerCase().replace(/\s+/g, '');
        const secondName = b.name.toLowerCase().replace(/\s+/g, '');
        if (sortDirection === 'asc') {
          if (firstName > secondName) {
            return 1
          } else if (firstName < secondName) {
            return -1
          }
          return 0
        } else {
          if (firstName > secondName) {
            return -1
          } else if (firstName < secondName) {
            return 1
          }
          return 0
        }
      }
    )

    return (
      <div className="App">
        <Filter 
          onInputChange={this.handleInputChange}
          filter={this.state.filter}
        />
        <Table 
          laureates={sortedLaureates} 
          sortDirection={this.state.sortDirection}
          onDelete={this.handleDelete} 
          onAdd={this.handleAdd}
          onSort={this.handleSort}
        />
      </div>
    );
  }
}
