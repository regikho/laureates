import React from 'react';

import classes from './TableHead.module.css';

const TableHead = ({ sortDirection, onSort }) => {
    return (
        <thead className={classes.tableHead}> 
            <tr>
                <td 
                    className={classes.sort}
                    onClick={onSort}
                >
                    Имя лауреата{' '}
                    <span>
                       {sortDirection === 'asc' ? '▲' : '▼'} 
                    </span>
                </td>
                <td
                    className={classes.sort}
                    onClick={onSort}
                >
                    Год получения премии{' '}
                    <span>
                       {sortDirection === 'asc' ? '▲' : '▼'} 
                    </span>
                </td>
                <td
                    className={classes.sort}
                    onClick={onSort}
                >
                    Направление{' '}
                    <span>
                       {sortDirection === 'asc' ? '▲' : '▼'} 
                    </span>
                </td>
                <td>Неоднократное награждение</td>
                <td></td>
            </tr>
        </thead>
 
    )
}

export default TableHead