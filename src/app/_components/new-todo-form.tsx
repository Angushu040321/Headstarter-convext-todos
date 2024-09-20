import { useState } from "react";

type ToDoFormProps = {
    onCreate: (title:string, description: string) => void;
}


export function NewTodoForm ({onCreate}:ToDoFormProps) {
    
    const[title,setTitle] = useState("");
    const[description, setdescription] = useState("");
    
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onCreate(title,description); 
        setTitle("");
        setdescription("");
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="flex felx-col gap-2">
                <label className = "text-sm font-semibold" htmlFor="title">Title</label>
                <input
                    className="p-1 border rounded" 
                    type="text" 
                    name="title"
                    id="title" 
                    value={title} 
                    onChange={ e => setTitle(e.target.value)}
                />
                <label className = "text-sm font-semibold" htmlFor="description">Description</label>
                <input 
                    className="p-1 border rounded" 
                    type="text" 
                    name="description" 
                    id="description" 
                    value={description} 
                    onChange={e => setdescription(e.target.value)}/>
                <button className="bg-blue-500 p-1 rounded text-white" type="submit">Create</button>
            </div>
        </form>
    )
}

