import { useState } from "react";
import Radio from "./Radio";
import Button from "./Button";

const Form = ({ onFill }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Task cannot be blank.")
      return
    }
    if (category === "") {
      alert("You must add on category")
      return
    }
    onFill({ id: generateId(), task, category, completed: false, createdAt: new Date() });
    setTask('');
    e.target.reset() //resetting the radio button on the screen
  }

  const handlePersonal = (e) => {
    setCategory(e.target.value);
  }

  const generateId = () => {
    return Math.floor(Math.random() * 999999)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={task} placeholder="ex. Buy groceries" className="task" />
        <div className="categories">
          <Radio category="Personal" onClick={handlePersonal} className="PCat" />
          <Radio category="Business" onClick={handlePersonal} className="BCat" />
        </div>
        <Button className="add-btn">Add to List</Button>
      </form>
    </div>
  )
}

export default Form;