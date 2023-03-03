import React from 'react'
import { useState } from 'react'
import './DropdownMenu.css'

const DropdownMenu = ({items}) => {
    const [selectItem,setSelectedItem]=useState(null)

    const handleSelection = (selection) => {
        setSelectedItem(selection)
        console.log(selection)
    } 

  return (
    <div className='dropdown'>
      <button className='dropdown-button'>{selectItem || 'Select a subject'}</button>
      <ul className='dropdown-menu'>
        {items.map(item => (
            <li key={item} onClick={()=>handleSelection(item)}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownMenu
