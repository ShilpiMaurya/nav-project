import React,{Component} from 'react';

class App extends component {
constructor(props){
  super(props);
  this.state = {
    items: [], 
    isLoaded: false,
  }
}
componentDidMount(){
  fetch('https://randomuser.me/')
  .then(res => res.json())
  .then(json =>{
     this.setState({
       isLoaded:true,
       items: json,
     })
  });
}
render(){
var { isLoaded, items } = this.state;
if (!isLoaded){
  return <div>Loading....</div>;
}
else{
  return(
    <div className="App">Data has been loaded</div>
    <ul>
      {items.map(item =>(
        <li key={item.id}>
        Name: {item.name} | Email:{item.email}
        </li>

      ))}
    </ul>
  );
}
}
}

  

export default App;
 