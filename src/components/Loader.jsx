import Loader from 'react-loader-spinner';
import React, {Component} from 'react';

 export default class App extends Component {
    render() {
     return(
      <Loader
         type="ThreeDots"
         color="#2a1173"
         height={20}
         width={100}
         timeout={0}
      />
     );
    }
 }