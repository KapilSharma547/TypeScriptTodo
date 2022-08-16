import React, { useState } from 'react';
import "./App.css";
import InputFeild from './componants/InputFeild';
import TodoList from './componants/TodoList';
import { Todo } from './model';
const App: React.FC = () => {

  const [todo, setTodo] = useState("")
  // console.log(todo)

  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("");
    }
  }
  // console.log(todos)
  return (
    <>
      <div className='App'>
        <span className="heading">Taskfy</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        {/* {todos.map((e) => (
          <li>{e.todo} </li>
        ))} */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;

// let age: number | string; // we can set value  number or string both

// age = 52;
// age = ''

// let name: string;
// let isStudent: boolean;
// // isStudent = true;
// let hobbies: string[]; // array of string
// hobbies = ["kapil", "Sharma"]

// let role: [number, string];
// role = [54216565123, 'kapil']  // tuple
// let numbers: number[];
// numbers = [1, 5, 2, 5, 2, 5];  //array of number

// type Person = {
//   name: string,
//   age?: number  // made it optinal
// }

// let Obj: Person = {
//   name: "Sharma",
//   // age: 25
// }


// let Array: Person[] // array of obj

// function printName(name: string) {
//   console.log(name);
// }
// printName('Kapil')
// // printName(45); // createing aerror fo number passing



// let printAge: (age: number) => void // its return what its want to return
// let printplace: (place: "Palika Bazar") => never //its return noting

// let data: any // its can accepet any type in this
// let dataName: unknown;

// // example of alise
// interface SuchData extends x {
//   name: string,
//   age?: number;
// }

// // interface Guy extends SuchData {
// //   profession: string;
// // }

// type x = {
//   a: string;
//   b: number;
// }
