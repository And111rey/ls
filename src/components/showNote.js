import React from 'react';


let NoteItem = ({name, content, id}) => {
    return(
        <div>
            <p>{name}</p>
            <span>{content}</span>
        </div>
    )
}

const  ShowNote = ({data}) =>{
    let note = data.map(({name, id, content}) => {
        return <div>< NoteItem name={name} content={content} /></div>
    })  
    return (
        <div>
            <ul>
                {note}
            </ul>
        </div>
    )
}

    


export default ShowNote