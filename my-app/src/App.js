import './App.css';
import React, {useState, useEffect} from 'react';

const Todos = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  let handleChange = (e) => {
    setTitle(e.target.value);
  }
  let formSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setData([{
      title: title,
      checked: false,
    },
    ...data
  ]);
  }

  const deleteTodo = (index) => {
    let tmp = [...data]
    tmp.splice(index, 1);
    setData([
      ...tmp
    ]);

  }

  let toggleStatus = (index) => {
    let tmp = [...data];
    tmp[index].checked = !tmp[index].checked;
    setData(tmp);
  }
  
  return (
    <div className='todos'>
      <h2>Todos</h2>
      <form onSubmit={formSubmit}>
        <input placeholder='Enter todo here' value={title} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
      </form>
      <ul>
        {data.map((el, index) => {
          return (
            <li key={index}>
              <input type='checkbox' checked={el.checked}
              onChange={() => {
                toggleStatus(index)
              }
            }
            />
            {el.title}

            <button onClick={() => {
              deleteTodo(index)
            }}>Delete
            </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Todos;










