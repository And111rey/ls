import React from 'react';
import './createNte.css'

class CreateNote extends React.Component  {
    state ={
        name: "",
        content: ""
    }

    handleCahgeName = (e) => {
        let text = e.target.value;
        this.setState({
            name: text
        })
    };

    handleCahgeText = (e) => {
        let text = e.target.value;
        this.setState({
            content: text 
        })
    };

    sendValueToLS = () => {
        let {name, content} = this.state;
        localStorage.setItem(name, content)
        this.setState({
            name: "",
            content: "" 
        })
        
    };

    clear = () => {
        // localStorage.clear()
        this.props.clear()
    }

    render () {
        let {name, content} = this.state;
        return (
             <div className="list-group">
                 <input placeholder="name" onChange={this.handleCahgeName} value={name} />
                 <textarea placeholder="content"  onChange={this.handleCahgeText} value={content}/>
                 <button onClick={this.sendValueToLS} className="btn btn-outline-success ">Add NOTE</button>
                 <button class='b1' onClick={this.clear} className="btn btn-outline-success ">Remove all from LocalStorage DB </button>

             </div>
        )
    }
}

export default CreateNote