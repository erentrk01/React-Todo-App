import Todo from "./Todo";

const TodoList = ({todoList,setTodoList}) => {
	return (
		<div>
			{todoList.map((todoItem) => (
				 <Todo setTodoList={setTodoList} todoList={todoList} todoItem={todoItem} key={todoItem.id}></Todo>))
			}
		</div>
	)
}

export default TodoList;