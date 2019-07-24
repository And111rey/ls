import React from 'react';

import Header from "./components/header"
import CreateNote from "./components/CreateNote";
import ShowNote from "./components/showNote";





class App extends React.Component {

  state = {
    
  }
  
  
    
  componentWillMount() {
    
  
      let arr= [];
      for (var i=0; i < localStorage.length; i++) {
        let itemLS={id: i, name:localStorage.key(i),content: localStorage.getItem(localStorage.key(i))} 
        arr.push(itemLS)
      
      // console.log(arr)
      }
    
      this.setState({
        data: arr
      })
    
    } 

      
  render() {
    // const {data} = this.state
    console.log(this.state.data)
    return(
        <div>
          < Header />
          < CreateNote />
          < ShowNote  data={this.state.data}/>
        </div>
    )
  }
}
export default App;
