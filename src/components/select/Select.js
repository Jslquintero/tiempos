

import React from 'react';


export default function Select(props) {

    const selectOption = props.opciones.map((item) => {
        return <option key={item.id} value={item.id}>{item.nombre}</option>
    });

    return (
        <>
            <div>
                <select className={props.styleType} name={props.selectName} id={props.selectId}>
                   {selectOption}
                </select>
            </div>
        </>
    );
}