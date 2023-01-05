import React, { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className="container loader-wrpaper">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
