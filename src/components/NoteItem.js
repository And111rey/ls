import React from 'react';



let NoteItem = ({name, content, id, del}) => {
    
    return(
        <li className="list-group-item" key={id}>
            <b>{name}</b>
            <p>{content} 
            <button onClick={ del } className="btn btn-outline-success "><i/>Del ITEM</button></p>
        </li>
    )
}

export default NoteItem