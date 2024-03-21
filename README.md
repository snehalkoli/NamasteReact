**What is Emmet?**
Emmet is a plugin for text editors that allows for greatly improved HTML and CSS workflow. It enables developers to write HTML and CSS code faster using abbreviations and shortcuts. For example, typing div.container>p*3 and then expanding it with Emmet would result in:
<div class="container">
    <p></p>
    <p></p>
    <p></p>
</div>


**Difference between a Library and Framework?**
Library: Think of a library as a collection of tools or functions that you can use to do specific tasks. It's like having a toolbox with various tools that you can pick and choose from. In React, libraries like Lodash provide utilities to work with arrays, objects, and more. You can use these tools as needed in your React projects.

Framework: A framework, on the other hand, is like a complete set of blueprints for building a house. It not only provides tools but also gives you a structure to follow. In React, the React framework provides guidelines and conventions for building user interfaces. It dictates how components should be structured, how data flows through the application, and how everything fits together.

So, in simple terms, a library gives you tools to use, while a framework gives you both tools and a way to build your application

**Why is React known as React?**

React is called React because it is designed around the concept of components reacting to changes in state. When the state of a component changes, React efficiently updates the user interface to reflect those changes.

**What is crossorigin in script tag?**

The crossorigin attribute in a <script> tag is used when loading scripts from a different origin (domain) than the one the page is hosted on. It is used for security purposes to prevent cross-origin attacks. Setting crossorigin="anonymous" allows the browser to request the resource without sending any credentials, which is useful for loading resources from a CDN.

**What is the difference between React and ReactDOM?**

React is a JavaScript library for building user interfaces, whereas ReactDOM is a package that provides DOM-specific methods that enable React to interact with the browser's DOM. ReactDOM is used for rendering React components into the DOM.

**What is the difference between react.development.js and react.production.js files via CDN?**

react.development.js is used for development purposes. It includes helpful warnings and debugging information to aid developers during the development process.
react.production.js, on the other hand, is optimized for production use. It has all the development-specific warnings and debugging tools stripped out, resulting in a smaller file size and improved performance.

**What is async and defer?**

Async and defer are attributes used with <script> tags to control the loading and execution of external scripts.
Async: When a script is loaded with the async attribute, it will be downloaded asynchronously while the HTML parsing and rendering process continue. The script will execute as soon as it's downloaded, which means it may not execute in the order it appears in the HTML.
Defer: Scripts with the defer attribute will also be downloaded asynchronously but will only execute after the HTML parsing is complete. They will execute in the order they appear in the HTML.

