"use client";

import { todo } from "node:test";
import { use, useState } from "react";


type ToDoItem = {
  title :string;
  description: string;
  completed: boolean;
}


export default function Home() {
  const[todos, setTodos] = useState<ToDoItem[]>([
    {title:"example", description : "this is an example", completed :false}
  ]);
  const[title,setTitle] = useState("");
  const[description, setdescription] = useState("");
  
  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setTodos(prev => {
      const newTodos = [...prev];
      newTodos.push({title, description, completed: false});
      return newTodos;
    });
    setTitle("");
    setdescription("");
  };

  return (
    <div className="max-wscreen-md mx-auto p-4">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <ul>  
      {todos.map(({title, description, completed}, index)=>(
        <li key = {index}>
          <input type="checkbox" 
          checked = {completed} 
          onChange={e => setTodos(prev =>{
            const newTodos =[...prev];
            newTodos[index].completed = e.target.checked
            return newTodos;
          })}/>

          <span className="font-semibold">{title}</span>
          {description}
          </li>
      ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={ e => setTitle(e.target.value)}/>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" value={description} onChange={e => setdescription(e.target.value)}/>
        <button type="submit">Create</button>

      </form>
    </div>
    
  );
}
 