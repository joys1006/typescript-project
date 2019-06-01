import TodolistTemplate from './TodoListTemplate';
import TodoListService from '../../services/apis/todoList.service';

export default class TodoListContainer extends TodoListService  {
	protected template: any = new TodolistTemplate();
	protected listData: Types.Response.TodoListData[] = [];

	public async created() {
		await this.getListData();
	}
	protected getListData() {
		this.getAllTodoList()
			.then((response: Types.Response.TodoListData[]) => {
				this.getListDataCallBack(response);
			});
	}
	protected getListDataCallBack(response: Types.Response.TodoListData[]) {
		this.listData = response;
		this.template.createHtmlRender(response);
	}
}