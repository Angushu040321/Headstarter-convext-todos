import { useState } from "react";
import { useMutation } from "convex/react";
import{api} from "../../../convex/_generated/api";


export function NewTodoForm () {
    
    const[title,setTitle] = useState("");
    const[description, setdescription] = useState("");
    
    const createTodo = useMutation(api.functions.createTodo);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        await createTodo({title, description});
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

