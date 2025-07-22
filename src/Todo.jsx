import { Plus, Trash2 } from 'lucide-react'
import React from 'react'

const Todo = () => {
  return (
    <div className='bg-box w-80 rounded-xl p-2 shadow/25'>

      {/* input box */}
      <div className='flex bg-input-bg p-1.5 rounded-lg justify-between gap-3 shadow/20'>
         <input type="text" placeholder='Add Your Task...' className='border border-primary outline-0 px-3 flex-1 rounded-lg' />
         <Plus className='bg-green-600 text-white rounded-md duration-100 cursor-pointer hover:brightness-110 active:brightness-100 size-9 p-0.5' />
      </div>

      <ul className='divide-y px-1.5 py-2 mt-1 divide-slate-400'>
         <li className='relative py-2'>
           <p>First task</p>
            <Trash2 className='text-red-600 cursor-pointer hover:brightness-110 active:brightness-100 absolute right-0 top-1/2 -translate-y-1/2'/>
         </li>
         <li className='relative py-2'>
           <p>First task</p>
            <Trash2 className='text-red-600 cursor-pointer hover:brightness-110 active:brightness-100 absolute right-0 top-1/2 -translate-y-1/2'/>
         </li>
         <li className='relative py-2'>
           <p>First task</p>
            <Trash2 className='text-red-600 cursor-pointer hover:brightness-110 active:brightness-100 absolute right-0 top-1/2 -translate-y-1/2'/>
         </li>
         
      </ul>
    </div>
  )
}

export default Todo