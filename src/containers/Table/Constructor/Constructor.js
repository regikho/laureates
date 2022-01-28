import React, { Component } from 'react';

import classes from './Constructor.module.css';
import buttonAdd from '../../../assets/buttonAdd.svg';

export default class Constructor extends Component {
    state = {
      name: '',
      date: '',
      field: '',
      isMultiple: null
    }

    handleInputChange = ({ target: { name, value }}) => {
        this.setState({
          [name]: value
        })
    }
  
    handleCheckBoxChange = ({ target: { name, checked }}) => {
        this.setState({
          [name] : checked
        })
    }

    render() {
        return (
            <tr className={classes.constructor}>
                <td>
                    <input 
                        name="name"
                        placeholder="Введите имя"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </td>
                <td>
                    <input 
                        type="date"
                        name="date"
                        placeholder='Введите год' 
                        value={this.state.date}
                        onChange={this.handleInputChange}
                    />
                </td>
                <td>
                    <input
                        name="field"
                        placeholder='Введите направление'
                        value={this.state.field}
                        onChange={this.handleInputChange} 
                    />
                </td>
                <td>
                    <input 
                        type='checkbox'
                        name="isMultiple"
                        checked={this.state.isMultiple}
                        onChange={this.handleCheckBoxChange}                    
                    />
                </td>
                <td onClick={() => {
                    this.props.onAdd(this.state.name, this.state.date, this.state.field, this.state.isMultiple);
                    this.setState({
                        name: '',
                        date: '',
                        field: '',
                        isMultiple: null
                    })
                }}>
                    <img src={buttonAdd} />
                </td>
            </tr>
        ) 
    }
}
