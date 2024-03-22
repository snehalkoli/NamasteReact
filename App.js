import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1', { id: 'title' }, 'Namaste Everyone!');
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

// anything which is auto generated should be put inside the git ignore
//you cant directly use import you have to have your script as module

/**HMR: Hot module reloading-parcel will keep a track of all the files that you are updating
 * FileWatcher Algorithm-its implemented using c++
 * parcel-cache:when parcel was doing HMR, filewatcher,minification of out files, all these things then it will need some space to store them
 * dis folder: it keeps the file minified for us
 * when we do npx parcel index.html it creates development build for us and its host it on the server
 * we ca tell parcel to make a production build by using build command
 * npx parcel build index.html
 * ##################################
 * Bundling
 * Minification
 * cleaning the console
 * it manages dev and production build and it is super fast
 * super fast build algorithm
 * Image Optimisation
 * Cashing while development
 * compression:It compresses your files
 * 1.5s to build our code
 * HTTPS on dev
 * manage port number
 * consistent hashing algorithm
 * Zero configuration
 * Transitive dependecies
 *
 */
