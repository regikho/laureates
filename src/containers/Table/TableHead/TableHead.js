import React from 'react';

import classes from './TableHead.module.css';

const TableHead = ({ sortDirection, onSort, fieldName}) => {
    return (
        <thead className={classes.tableHead}> 
            <tr>
                <td 
                    className={classes.sort}
                    onClick={() => onSort('name')}
                >
                    Имя лауреата{' '}
                    {fieldName === 'name' && (
                        <span>
                            {sortDirection === 'asc' ? '▲' : '▼'} 
                        </span>
                    )}
                </td>
                <td
                    className={classes.sort}
                    onClick={() => onSort('date')}
                >
                    Год получения премии{' '}
                    {fieldName === 'date' && (
                        <span>
                            {sortDirection === 'asc' ? '▲' : '▼'} 
                        </span>
                    )}
                </td>
                <td
                    className={classes.sort}
                    onClick={() => onSort('field')}
                >
                    Направление{' '}
                    {fieldName === 'field' && (
                        <span>
                            {sortDirection === 'asc' ? '▲' : '▼'} 
                        </span>
                    )}
                </td>
                <td>Неоднократное награждение</td>
                <td></td>
            </tr>
        </thead>
 
    )
}

export default TableHead