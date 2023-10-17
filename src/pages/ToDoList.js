import React, { useState } from "react";
import '../assets/css/ToDoList.css';

function ToDoList() {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");

    function addItem() {
        if (value.trim() !== "") {
            setItems([...items, {
                value,
                done: false
            }]);
            setValue("");
        }
    }

    function markAsDone(arrayIndex) {
        return () => {
            const updatedItems = [...items];
            updatedItems[arrayIndex].done = true;
            setItems(updatedItems);
        };
    }

    function handleDelete(arrayIndex) {
        return () => {
            setItems(items.filter((item, index) => arrayIndex !== index));
        };
    };

    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className='input-group'>
                <input
                    className="input-bar"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="button" onClick={addItem}>Add</button>
            </div>
            <div className='list-group'>
                {items.map((item, index) => (
                    !item.done && (
                        <div className='list-item' key={index}>
                            {item.value}
                            <button onClick={markAsDone(index)}>Mark as done</button>
                            <button onClick={handleDelete(index)}>Delete</button>
                        </div>
                    )
                ))}
            </div>
            {items.some(item => item.done) && (
                <div className='list-done'>
                    <p>Done: </p>
                    {items.map((item, index) => (
                        item.done && (
                            <div className='list-item' key={index}>
                                <del>{item.value}</del>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    )
}

export default ToDoList;
