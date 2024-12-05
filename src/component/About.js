import React, { Component } from "react";
import { User } from "../component/User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor called");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Parent Component Did Update");
  }
  componentWillUnmount() {
    console.log("Parent Component Will Unmount");
  }

  // after each and every render the useeffect will be called
  // after 1st render component did mount is called|
  //after every subsequent render component did update is called 
  //component did update is called after every update
  render() {

    console.log("Parent Render Called");
    return (
      <div>
        About
       
        <UserClass name={"John Doe(class)"} location={"New York"} />
        <UserClass name={"Akshay Saini(class)"} location={"Jath"} />
      </div>
    );
  }
}
export default About;

/**Parent Constructor
 * Parent Render
 * 1st child constructor
 * 1st child render method
 * 2nd child constructor
 * 2nd child render method
 * 1st child component did mount
 * 2nd child component did mount
 * Parent Component did mount
 * 
 */

// component did update is called just before the component is unmounted

//first constructor is called then render method is called then react  will updates the dom and once the dom is updated or loaded then component did mount will call
//component is quickly render on to the dom the component did mountis called thats why it is a best lace to make an api call
// export default function About() {
//   return (
//     <div>
//       About
//       <User />
//       <UserClass name={"John Doe(class)"} location={"New York"} />
//       <UserClass name={"Akshay Saini(class)"} location={"Jath"} />
//     </div>
//   );
// }
