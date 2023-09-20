interface todoInter {
    id: number,
    title: string,
    status: stussy,
    co?: Date
}
// can use this for title too i guess
enum stussy {
    d = "done",
    ip = "in-progress",
    td = "todo"
}
const todoItems:todoInter[] = [
    { id: 1, title: "Learn HTML", status: stussy.d, co: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: stussy.ip },
    { id: 3, title: "Write the best app in the world", status: stussy.td },
]

function addTodoItem(todo: string) : todoInter {
    const id = getNextId(todoItems)

    const newTodo : todoInter = {
        id,
        title: todo,
        status: stussy.td,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id:number}>(items : T[]) : number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))

// interface for todoItems, interface should discribe what is inside the array
// Stronly type hard coded variables with enum (status)
// Apply types to parameters and return values to the 2 functions
// use generics in getNextID to define the parameter
