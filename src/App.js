import React from 'react';

import Header from "./components/header"
import CreateNote from "./components/CreateNote";
import ShowNote from "./components/showNote";





class App extends React.Component {

  state = {
    data:[]
  }
   
  componentWillMount() {
      let arr= [];
      for (var i=0; i < localStorage.length; i++) {
        let itemLS={id: i, name:localStorage.key(i),content: localStorage.getItem(localStorage.key(i))} 
        arr.push(itemLS)
      }
      this.setState({
        data: arr
      })
    
    } 

    delItem = (id) => {
      this.setState( ({data}) => {
        let neededId = data.findIndex( (elFromState) => elFromState.id === id )
        this.delI(neededId)
        let before = data.slice(0, neededId)
        let after = data.slice(neededId + 1)
        let res = [...before, ...after]
          return {
            data:res
          }
      })
    }

    delI = (neededId) =>{
      localStorage.removeItem(this.state.data[neededId].name)
    }

   
     
  render() {
    // const {data} = this.state
    console.log(this.state.data)
    return(
        <div>
          < Header />
          < CreateNote />
          < ShowNote del={this.delItem} data={this.state.data}/>
        </div>
    )
  }
}
export default App;
