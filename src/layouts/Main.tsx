import React from 'react';
import PropTypes from 'prop-types';

const Main = (props: any) => {
  const { children } = props;

  return (
    <div>
      <h1>Title</h1>
      <main className="main">
        {children}
        <div>Footer goes here!</div>
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
