## React Fragment

React.fragment is a component which is exported by react
Jsx can only have one parent
suppose I want to have two parent then either i can have div and make one parent but if we dont want to use div inside the root then we an use <React.Fragment/> also we can use empty tags <></>

## Virtual DOM

<head>
</head>
    <body>
        <Rest1></Rest1> 
        <Rest2></Rest2> 
        <Rest3></Rest3>
    </body>
<footer>
We keep a representation of a dom with us which is known as virtual dom
we need virtual dom something known as reconciliation
<ul>
<li>reconciliation-reconciliation is an algorithm that react uses to differentiate one tree from another to determine what needs to change in UI and what does not needs to cange in UI.</li>
<li>React uses diff algorithm and find out what needs to be updated and just updates small portion of it so it does not re-render whole app it just re-render the small updated  part  </li>
</ul>

## Why react is fast

react uses something known as virtual dom so virtual dom is a representation of actual dom and react uses something known as reconsiliation 

reconciliation is a process where we have a diff algorithm  which find out the difference between the trees when we find out the difference it will rerender only the portion which is required 

## Imports in react 
Named Import
Default import

## Data Binding in React
React uses one way data binding

## Hooks in React
Hooks are just a normal function which is created by facebook developers and we can import it as a named import every function/hooks has its own feature

**UseState():-
use state is used to create a state variable
this function returns an array the first element of array is an variable name 
second is function to update the state variable

## why do we need state variables
