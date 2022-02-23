import React from 'react';


import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIN, ...otherProps}) =>(
   <button className={` ${isGoogleSignIN ? 'google-signin' : ''} custom-button`} {...otherProps}>
       {children}
   </button> 
);


export default CustomButton;