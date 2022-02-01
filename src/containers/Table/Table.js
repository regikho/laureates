import React from 'react';

import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';
import classes from './Table.module.css';

const Table = ({ laureates, sortDirection, onDelete, onAdd, onSort, fieldName }) => {
  return (
    <table className={classes.table}>
      <TableHead 
        sortDirection={sortDirection}
        onSort={onSort} 
        fieldName={fieldName}
      />
      <TableBody
        laureates={laureates} 
        onDelete={onDelete} 
        onAdd={onAdd}
      />
    </table>
  )
}

export default Table 
