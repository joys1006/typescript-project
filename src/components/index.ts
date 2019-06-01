import TodoListContainer from './TodoList/TodoListContainer';

export default class Components {
	private todoListComponent = new TodoListContainer();
	
	protected TodoListRender() {
		this.todoListComponent.created();
	}
}