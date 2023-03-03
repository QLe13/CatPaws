import React from 'react'
import DropdownMenu from './DropdownMenu'

const FindClasses = () => {
  const classes = ['CS', 'COMM', 'ECON','MATH']
  return (
    <div>
      <DropdownMenu items = {classes}/>
    </div>
  )
}

export default FindClasses
