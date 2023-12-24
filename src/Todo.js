import React from 'react'

export default function Todo({id,value,checked,handleClicked}) {
      const handleCheckboxClick=()=>{
            handleClicked(id);
      }
  return (
    <div>
      <input type='checkbox' checked={checked} onChange={handleCheckboxClick} />
       <label >{value}</label>
    </div>
  )
}
