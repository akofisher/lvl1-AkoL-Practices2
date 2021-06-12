import './App.css';
import React, {useState} from 'react';
import List from '../src/components/Todos/Ullogic';
import Forms from '../src/components/Todos/Forms';

const Todos = () => {
  const [data, setData] = useState([]);
  
  
  const addTodo = (title) => {
    setData([{
      title: title,
      checked: false,
    },
    ...data
  ]);

  }; 
  
  return (
    <div className='todos'>
      <h2>Todos</h2>

      <Forms onSubmit={addTodo} /> 
      <List data={data} setData={setData} />

    </div>
  );
};

export default Todos;










