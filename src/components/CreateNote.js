import React from 'react';

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

    clean = () => {
        localStorage.clear()
    }

    render () {
        let {name, content} = this.state;
        return (
             <div>
                 <input onChange={this.handleCahgeName} value={name} />
                 <textarea onChange={this.handleCahgeText} value={content}/>
                 <button onClick={this.sendValueToLS}>Add NOTE</button>
                 <button onClick={this.clean} className="btn btn-outline-success ">CleanLS</button>

             </div>
        )
    }
}

export default CreateNote