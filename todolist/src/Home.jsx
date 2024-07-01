import React, { useEffect, useState } from 'react';
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id) //for update we use put
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id) //for update we use put
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='home'>
        <h2 >Todo List</h2>
        <Create />
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                // eslint-disable-next-line react/jsx-key
                <div className='task'>
                    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                        {todo.done ? 
                            <BsFillCheckCircleFill className='icon' />
                        :<BsCircleFill className='icon'/>
                        }
                        <p className={todo.done ? "line_through" : ""}>{todo.task}</p> {/*In js we can write the classname based on if condition is fullfilled or not*/}
                    </div>
                    <div>
                        <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}/></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home
