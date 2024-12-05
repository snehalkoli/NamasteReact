import React from "react";
// extends React.Component will make react know that this is a class based component
class UserClass extends React.Component {
  // render method will return the piece of jsx which will be displayed on the ui
  //constructor is called then the render method is called
  //once this class based component mounted on to the dom then this component did mount is called


  // 1. constructor will be called 
  // 2. render method will be called
 
  // 3. componentDidMount will be called
   //3.check if the child component is mounted 

  //  componentDidMount() is used to make an api call 

  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      count2: 2,
    };
    console.log("Child Render");
    
  }
  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {  
    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button
          onClick={()=>this.setState({
            count: this.state.count + 1,
          })}
        >Increase Count</button>
        <h2>Name : Snehal{this.props.name}</h2>
        <h3>Location:Pune {this.props.location}</h3>
        <h4>Contact:snehalkoli100@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
