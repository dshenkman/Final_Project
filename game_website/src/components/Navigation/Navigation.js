import React from 'react';

const Navigation = ({ onRouteChange }) => {
      return (
          <p className="dim purple grow pointer" onClick={() => onRouteChange('signout')} >Sign Out</p>
      );

}

export default Navigation;
