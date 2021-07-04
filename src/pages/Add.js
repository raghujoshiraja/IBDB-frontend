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
      <form className="form">
        <h1 className="h1">Add Book</h1>
        <input type="text" className="inp" placeholder="Title" />
        <input type="text" className="inp" placeholder="Genre" />
        <input type="text" className="inp" placeholder="Page Count" />
        <select type="text" name="city" list="cityname" className="inp" >
          <option value="Boston" >Boston</option>
          <option value="Cambridge" >Birghimpton</option>
        </select>
        <textarea name="" id="" className="inp rounded-3xl" placeholder="Description"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Add
