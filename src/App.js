import Form from "./components/Form";
import { useState } from "react";
import Button from "./components/Button";
import './styles.css';

function App() {
  // const sampleData = [
  //   {
  //     id: 1,
  //     task: "Buy Groceries",
  //     category: "Personal",
  //     completed: false,
  //     createdAt: new Date()
  //   },
  //   {
  //     id: 2,
  //     task: "Have coffee",
  //     category: "Business",
  //     completed: false,
  //     createdAt: new Date()
  //   },
  // ]

  const loadedData = JSON.parse(localStorage.getItem('items')) || [];
  loadedData.forEach(item => {
    if (item.completed) {

    }
  })

  //const [dataSubmit, setDataSubmit] = useState(sampleData);
  const [dataSubmit, setDataSubmit] = useState(loadedData);
  localStorage.setItem('items', JSON.stringify(dataSubmit));


  const handleCompleted = (e) => {
    const taskId = parseInt(e.target.id);

    const findTask = dataSubmit.find(data => taskId === data.id);
    const elementDel = dataSubmit.filter(data => taskId !== data.id)

    if (findTask.completed === false) {
      findTask.completed = true
    } else {
      findTask.completed = false
    }

    setDataSubmit([...elementDel, findTask])
  }

  const handleSubmit = (textInput) => {
    const data = [...dataSubmit, textInput]
    setDataSubmit(data)
  }

  const handleEdit = (e) => {
    const buttonId = parseInt(e.target.id)
    const inputChange = dataSubmit.find(data => buttonId === data.id)
    const elementDel = dataSubmit.filter(data => buttonId !== data.id)
    const promptData = prompt("Change your task name:")

    inputChange.task = promptData

    setDataSubmit([...elementDel, inputChange])
  }

  const handleDelete = (e) => {
    const buttonId = parseInt(e.target.id)

    const elementDel = dataSubmit.filter(data => buttonId !== data.id)

    setDataSubmit(elementDel)
  }

  const renderedTasks = dataSubmit.map((data) => {

    return (
      <div key={data.id} className="item">
        <input type="checkbox" id={data.id} className="chk" onClick={handleCompleted} checked={data.completed} readOnly />
        <input type="text" id={data.id} value={data.task} className={data.completed ? "strikethrough" : "incomplete"} name="task" catcolor={data.category} readOnly />
        <Button onClick={handleEdit} id={data.id} className="edit">Edit</Button>
        <Button onClick={handleDelete} id={data.id} className="delete">Delete</Button>
      </div>
    )
  })

  return (
    <div className="App">
      <header>Developed by Tiago Castro</header>
      <h1>Hi from React!</h1>
      <Form onFill={handleSubmit} />
      <div>
        {renderedTasks}
      </div>
    </div>
  );
}

export default App;
