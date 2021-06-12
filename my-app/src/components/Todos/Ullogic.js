import React from 'react';


const List = ({data, setData}) => {

    const editTodo = (index) => {
    setData(data.map((el, indx) => {
      if(indx === index) {
        el.editing = !el.editing;
      }
      return el;
    })

    )}

    let handleEdit = (index, e) => {
    let tmp = [...data];
    tmp[index]['title'] = e.target.value;
    setData(tmp);
    }
 
   const deleteTodo = (index) => {
    let tmp = [...data]
    tmp.splice(index, 1);
    setData([
      ...tmp
    ])};

  let toggleStatus = (index) => {
    let tmp = [...data];
    tmp[index].checked = !tmp[index].checked;
    setData(tmp);
  }


return (
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
            {el.editing ? (<input value={el.title} onChange={(e) => handleEdit(index, e)}/>) : el.title}
            
            <button onClick={() => {
              editTodo(index)
            }}>{el.editing ? 'close' : 'edit'}
            </button> 
            <button onClick={() => {
              deleteTodo(index)
            }}>Delete
            </button>
            </li>
          )
        })}
      </ul>


);
       };

export default List;