import React from 'react'
//you have passed a function value as a prop
//onselect as a prop is holding a function here
//isSelected is a bool prop here 
//children is a prop here used to show the description between the custom component
 const TabButton = ({children, onSelect , isSelected}) => {
  return (
   <li>
    <button className={isSelected ? 'active' : null} onClick={onSelect}>{children}</button>
   </li>
  )
}

export default TabButton