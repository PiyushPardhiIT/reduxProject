import { createSlice, nanoid} from "@reduxjs/toolkit"; 

const initialState = {
    todos: [{id:1 , Text:"hello world"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,   
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                Text: action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
}
})