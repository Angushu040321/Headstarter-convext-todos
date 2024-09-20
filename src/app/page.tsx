"use client";

import { todo } from "node:test";
import { use, useState } from "react";
import { NewTodoForm } from "./_components/new-todo-form";


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

  
  

  return (
    <div className="max-wscreen-md mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <ul className="space-y-2">  
      {todos.map(({title, description, completed}, index)=>(
       <ToDoItem 
        key = {index}
        title={title} 
        description={description} 
        completed = {completed} 
        onCompleteChanged={(newValue) => {
        setTodos(prev =>{
          const newTodos =[...prev];
          newTodos[index].completed = newValue;
          return newTodos;
        })
       }}

       onRemove={() => {
        setTodos(prev =>{
          const newTodos = [...prev].filter((_, i) => i !== index);
          return newTodos;
        })
       
      }}
       />
      ))}
      </ul>
      <NewTodoForm onCreate={(title,description) =>{
        setTodos(prev => {
          const newTodos = [...prev];
          newTodos.push({title, description, completed: false});
          return newTodos;
        });
      
      }} />
    </div>
    
  );
}

function ToDoItem({title,description,completed,onCompleteChanged, onRemove}: {
  title:string; 
  description: string; 
  completed: boolean; 
  onCompleteChanged:(newValue:boolean) => void;
  onRemove: () => void;
  
  }){
  
      return(
        <li className="flex gap-2 border rounded p-2">
          <input type="checkbox" 
          checked = {completed} 
          onChange={e => onCompleteChanged(e.target.checked) }
          />
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <div>
            <button type="button" className="text-red-500" onClick={() => onRemove()}>Remove</button>
          </div>
        </li>

          
      )
  }
 