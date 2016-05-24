import React from 'react';
import {Link } from 'react-router';
import Photo from './photo';
import PhotoGrid from './photoGrid';

const Main = ({children, component, path}) => (
       <div>
       <h1>
         <Link to={`/PhotoGrid`}> {console.log(this)} </Link>
       </h1>
       {React.cloneElement(children, {component, path})}
     </div>
);

export default Main
