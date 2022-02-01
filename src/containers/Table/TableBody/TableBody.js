import React from 'react';

import classes from './TableBody.module.css';
import { MILLISECONDS_IN_SECOND } from '../../../common/constants';
import Constructor from '../Constructor/Constructor';
import basket from '../../../assets/basket.svg';
import buttonTrue from '../../../assets/buttonTrue.svg';
import buttonFalse from '../../../assets/buttonFalse.svg';

const TableBody = props => {

    return (
        <tbody className={classes.tableBody}>
            {props.laureates.map((laureate) => (
            <tr key={laureate.id}>
                 <td>{laureate.name}</td>
                 <td>{new Date(laureate.date * MILLISECONDS_IN_SECOND).getFullYear()}</td>
                 <td>{laureate.field}</td>
                 <td>{
                    laureate.isMultiple
                    ? <img src={buttonTrue} /> 
                    : <img src={buttonFalse} />
                }</td>
                <td onClick={() => props.onDelete(laureate.id)}>
                    <img src={basket} /> 
                </td>
             </tr> 
            ))}
            <Constructor onAdd={props.onAdd}/>
        </tbody>
    )
}

export default TableBody