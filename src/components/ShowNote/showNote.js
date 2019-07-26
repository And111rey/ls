import React from 'react';
import NoteItem from "./NoteItem"



const  ShowNote = ({data, del}) =>{
    
        let note = data.map(({name, id, content}) => {
            return <div>< NoteItem del={()=>{del(id)}} name={name} content={content} /></div>
        })
  
        return (
        <div>
            <ul className="list-group list">
                {note}
            </ul>
        </div>
    )
}

    


export default ShowNote