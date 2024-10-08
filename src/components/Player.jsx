import React from 'react'
import { useState } from 'react'

const Player = ({iName,symbol,isActive,change}) => {
    const [name,setName]=useState(iName);
    const [edit,setEdit] =useState(false);
    function handleEdit(){
        setEdit((edit)=>!edit);
        change(symbol,name);
    }
    function handlechange(event){
        setName(event.target.value);
    }
  return (
    <li className={isActive?'active':undefined}>
        <span className='player'>
            {(edit)? <input type='text' value={name} onChange={handlechange} required/>: <span className='player-name'>{name}</span>}
        
            <span className='player-symbol'>{symbol}</span>
        </span>
        
        {(edit)?<button onClick={handleEdit }>Save</button>:<button onClick={handleEdit}>Edit</button>}
    </li>
  )
}

export default Player
