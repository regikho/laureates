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
    sortDirection: 'asc',
    fieldName: 'name'
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

  handleSort = (fieldName) => {
    this.setState({
      sortDirection: this.state.sortDirection === 'asc' ? 'desc' : 'asc',
      fieldName,
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
        const fieldName = this.state.fieldName;

        
        const firstValue = typeof(a[fieldName]) === "string" ? a[fieldName].toLowerCase().replace(/\s+/g, '') : a[fieldName];
        const secondValue = typeof(b[fieldName]) === "string" ? b[fieldName].toLowerCase().replace(/\s+/g, '') : b[fieldName];
        
        if (sortDirection === 'asc') {
          if (firstValue > secondValue) {
            return 1
          } else if (firstValue < secondValue) {
            return -1
          }
          return 0
        } else {
          if (firstValue > secondValue) {
            return -1
          } else if (firstValue < secondValue) {
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
          fieldName={this.state.fieldName}
          onDelete={this.handleDelete} 
          onAdd={this.handleAdd}
          onSort={this.handleSort}
        />
      </div>
    );
  }
}
