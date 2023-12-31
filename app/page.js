
"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    // ...mainTask taki purana wala na hate 
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  const deletehandler=(i)=>{
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }


  let renderTask = <h2> No Task Available </h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-4 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deletehandler(i)
          }} className='bg-red-400 text-white px-4 py-2 font-bold rounded'>
            Delete
          </button>
        </li>)
    })

  }

  return (
    <>
      <h1 className='bg-sky-950 text-white p-5 text-5xl font-bold text-center'>My Todo-List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value);

          }} />

        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Description Here '
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);

          }} />
        <button className='text-xl font-bold m-2 p-2 border-2 rounded border-black bg-black text-white'>
          Add Task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>

      </div>
    </>
  );
}

export default page;
