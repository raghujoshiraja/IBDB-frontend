import React from 'react'

const Add = () => {
  return (
    <div className="flex justify-around items-start">
      <form className="form">
        <h1 className="h1">Add Author</h1>
        <input type="text" className="inp" placeholder="Name" />
        <input type="text" className="inp" placeholder="Age" />
        <input type="text" className="inp" placeholder="Age" />
        <button className="btn" >Submit</button>
      </form>
      
    </div>
  )
}

export default Add
