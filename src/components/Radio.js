import { useState } from "react";

const Radio = ({ category, ...rest }) => {
  const [selected, setSelected] = useState(false); //setting radio checked state

  return (
    <div className="radio">
      <input type="radio" name="category" onClick={() => setSelected(true)} value={category} defaultChecked={selected} {...rest} />
      <label className={category} >{category}</label>
    </div>
  )
}

export default Radio;