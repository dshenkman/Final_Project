import React from 'react';
// import './toggle.css'

const ToggleSignOut = ({ onRouteChange }) => {

  return (

    <p onClick={() => onRouteChange('signout')} >Sign Out</p>

  )

}


export default ToggleSignOut;


//
// if(isSignedIn) {
//   return (
//   <nav className = 'nav'>
//           <p onClick={() => onRouteChange('signout')} className=' pt5 f6 f5-ns link dim dib mr3 dim purple grow pointer tl'>Sign Out</p>
//         </nav>
//       );
//     } else {
//       return (
//         <>
//         <nav >
//           <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
//           <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
//         </nav>
//         </>
//     );
//   }
