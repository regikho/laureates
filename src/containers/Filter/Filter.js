import React from 'react';

import classes from './Filter.module.css';

const Filter = ({ onInputChange, filter }) => (
    <form className={classes.filter}>
        <h4>Поиск:</h4>
        <input 
            name="filter"
            placeholder="Введите cлово"
            value={filter}
            onChange={onInputChange}
        />
    </form> 
)

export default Filter
