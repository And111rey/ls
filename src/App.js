import React from 'react';
import {  Route, BrowserRouter } from "react-router-dom";


import Header from "./components/Heade/header"
import CreateNote from "./components/CreateNote/CreateNote";
import ShowNote from "./components/ShowNote/showNote";
import './app.css'





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

  clearListAfterClearLS = () =>{
    this.setState({
      data:[]
    })
    localStorage.clear()
  }
     
  render() {
    console.log(this.state.data)
      return(
        <BrowserRouter>
          <div>
              < Header />
              <Route  path='/add'  render={() =><  CreateNote clear={this.clearListAfterClearLS} />} />
              <Route  path='/note' render= {() => <  ShowNote del={this.delItem} data={this.state.data}/>} />
          </div>
        </BrowserRouter>     
    )
  }
}
export default App;
