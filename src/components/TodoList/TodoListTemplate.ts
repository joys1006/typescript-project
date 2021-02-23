import { date, validator } from '../../utils';

export default class TodoListTemplate {
	private data:Types.Response.TodoListData[] = [];
	private page: number = 1;

	protected async createHtmlRender(response: Types.Response.TodoListData[]) {
        // initialize state
		this.data = response;
        // methods
		await this.createTodoListUi();
		await this.createUiComments();
	}
	private createTodoListUi() {
		const $app: HTMLElement | null = document.getElementById('app');
		const html: string = `
			<div class="todo-list-widget">
				<h1>할일 리스트 만들기</h1>
				<ul class="is-list"></ul>
			</div>
		`;
		if ($app) $app.innerHTML = html;	
	}
	private createUiComments() {
        const listSelector: any = document.querySelector('.is-list');
        const data = this.data;
        const dataLength = data.length;
        let result: Array<string> = [];

        if (0 < dataLength) {
            data.reduce<any>((accumulator?: Types.Response.TodoListData | undefined, currentValue?: Types.Response.TodoListData | undefined, index?: number) => {
                if (currentValue !== undefined) {
                    const { author, id, content } = currentValue;
                    let listHtml: string = `
                        <li class="is-list">
                            <p class="is-name">${author}</p>
                            <p class="is-date">${date.getDateFormatter(id)}</p>
                            <div class="is-content">
                                ${content}
                            </div>
                        </li>
                    `;
                    result.push(listHtml);
                }
            }, 0);
            listSelector.innerHTML = result;
        } else {
            this.page = this.page - 1;
        }
    }
}