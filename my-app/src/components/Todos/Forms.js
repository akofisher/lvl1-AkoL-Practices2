import React, {useState} from 'react';


function Forms({onSubmit}) {
const [title, setTitle] = useState('');
let handleChange = (e) => {
    setTitle(e.target.value);
  }

let formSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle('');
    
  }

  return (
<form onSubmit={formSubmit}>
        <input placeholder='Enter todo here' value={title} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
</form>
  )


}

export default Forms;