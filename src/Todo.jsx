import { CheckCircle, Circle, Plus, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const Todo = () => {

   const [tasks, setTasks] = useState(() => {
      const savedTask = localStorage.getItem('tasks')
      return savedTask ? JSON.parse(savedTask) : [];
   })

   const [inputValue, setInputValue] = useState('')
   const [displayError, setDisplayError] = useState(false)
   const [expand, setExpand] = useState(null)
   const [checked, setChecked] = useState(() => {
       const savedTask = localStorage.getItem('checked')
      return savedTask ? JSON.parse(savedTask) : [];
   })


   useEffect(() => {
      // when tasks and checked changes store changed value in localstorage
      localStorage.setItem('tasks', JSON.stringify(tasks))
      localStorage.setItem('checked', JSON.stringify(checked))
   },[tasks,checked])

   const handleAddTask = () => {

      if(!inputValue.trim() == ""){
         setTasks([...tasks, inputValue])
         setChecked([...checked, false])
         setInputValue('') //
         setDisplayError(false)
      }else{
         setDisplayError(true)
      }
   }

   const handleDelete = (idx) => {
      setTasks(tasks.filter((_,i) => i != idx)) // delete item
      setChecked(checked.filter((_,i) => i != idx)) // delete checked value for deleted item
   }

   const handleExpand = (idx) => {
      // if expand = idx set it null to be collapsed otherwise set it idx to be expand
      setExpand(expand == idx ? null : idx)
   }

   const handleChecked = (idx) => {
      setChecked(checked.map((c,i) => i === idx ? !c : c))
   }
   
  return (
    <div className='bg-box w-[90%] sm:w-[400px] rounded-xl p-3 shadow/25'>

      {/* input box */}
      <div className='relative flex bg-input-bg p-1.5 mb-2 rounded-lg justify-between gap-3 shadow/20'>
         <input onKeyDown={(e) => e.key === "Enter" && handleAddTask()} value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Add Your Task...' className='border border-primary outline-0 px-3 flex-1 rounded-lg' />
         <Plus onClick={handleAddTask} className='bg-green-600 text-white rounded-md duration-100 cursor-pointer hover:brightness-110 active:brightness-100 size-9 p-0.5' />
         <p className={`${displayError ? 'block' : 'hidden'} absolute left-4 -bottom-5 text-sm text-red-600`}>Task can't be empty!</p>
      </div>

      <ul className='divide-y px-1.5 py-2 mt-1 divide-slate-400'>
         {tasks.map((task,idx) => (

         <li key={idx} className={`${checked[idx] ? 'opacity-50' : ''} relative py-1.5 px-8`}>

           {checked[idx] ? (
            <CheckCircle size={22} onClick={() => handleChecked(idx)} className='text-slate-600 cursor-pointer hover:brightness-110 active:brightness-100 absolute left-0 top-1/2 -translate-y-1/2'/>
            ) : 
           
           (
            <Circle size={22} onClick={() => handleChecked(idx)} className='text-slate-600 cursor-pointer hover:brightness-110 active:brightness-100 absolute left-0 top-1/2 -translate-y-1/2'/>
           )}
           <p onClick={() => handleExpand(idx)} className={`${expand == idx ? 'line-clamp-none' : 'line-clamp-1'} ${checked[idx] ? 'line-through': ''} text-lg break-words whitespace-normal cursor-pointer`}>{task}</p>
            <Trash2 onClick={() => handleDelete(idx)} className='text-red-600 cursor-pointer hover:brightness-110 active:brightness-100 absolute right-0 top-1/2 -translate-y-1/2'/>
         </li>

         ))}
         {tasks.length === 0 && (
          <li className='py-4 text-center text-gray-500 text-lg'>
            No tasks yet. Add one above!
          </li>
        )}
         
      </ul>
    </div>
  )
}

export default Todo