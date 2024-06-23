import React, { useState } from 'react'

const debounce = function (cb, delay) {
    let timer;
    return function (...args) {
        console.log(...args, 'args')
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            console.log(...args, 'args')
            cb(...args);
        }, delay)
    }
}

const Todo = () => {

    const [todoList, setTodoList] = useState([]);
    const [todoInput, setTodoInput] = useState([]);
    const [isEditEnable, setIsEditEnable] = useState(false);
    const [editFieldIndex, setEditFieldIndex] = useState('');

    //    const enterSarchResult = (value) =>{
    //     console.log(value,'value')
    //     setTodoInput(value)
    //    }
    //    const debounceSearch =  debounce(enterSarchResult,2000)
    //      const handleInput = (event) => {
    //         console.log(event.target.value,'value')
    //         debounceSearch(event.target.value)
    //     }

    const handleInput = (e) => {
        setTodoInput(e.target.value);
    }

    const addTaskInList = () => {
        setTodoList([...todoList, todoInput]);
        setTodoInput('');
    };

    const deleteTask = (index) => {
        const tempTask = [...todoList];
        const finalResult = tempTask.filter((_, idx) => idx !== index);
        setTodoList(finalResult);
    };
    
    const editTask = (index) => {
        console.log(index, 'index');
        setIsEditEnable(true);
        setTodoInput(todoList[index]);
        setEditFieldIndex(index);
    }

    const updateTask = (index) => {
        const tempTask = [...todoList];
        tempTask[index] = todoInput;
        setTodoList(tempTask);
        setIsEditEnable(false);
        setEditFieldIndex(null);
        setTodoInput('');

    }
    return (
        <div className='todo-list-parent'>
            <h1>Todo List</h1>
            <div className='form-input'>
                <label htmlFor='input'>Enter Todo</label>
                <input
                    type="text"
                    value={todoInput}
                    onChange={handleInput}
                    id='input'
                />
                <button onClick={addTaskInList} className="button">Add Task</button>
            </div>
            <ul>
                {todoList.map((item, index) => {
                    return <li key={index}>
                        {editFieldIndex === index ? <input
                            type="text"
                            value={todoInput}
                            onChange={handleInput}
                            id='input'
                        /> : item}
                        {editFieldIndex !== index ?
                            <button onClick={() => editTask(index)} className="button">
                                Edit
                            </button> :
                            <button onClick={() => updateTask(index)} className="button">
                                Update
                            </button>
                        }
                        <button onClick={() => deleteTask(index)} className="button">
                            Delete
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
};

export default Todo;
