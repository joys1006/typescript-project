/**
 * @author Has
 * @reg_date 2018-06-01
 * @summary TodoList Api Service
 * @description TodoList 관련 Api
 */

import { Api } from '../fetch';

export default class TodoListService extends Api {
	/**
	 * @author HoChoel Eom
	 * @param {page} 페이지 번호
	 * @description Api TodoList Get Service
	 */
    protected getTodoList(page: number) {
        return this.get(`/api/lists/${page}`);
    }
    /**
	 * @author HoChoel Eom
	 * @description Api TodoList Get Service
	 */
    protected getAllTodoList() {
        return this.get('/api/lists');
    }
    /**
	 * @author HoChoel Eom
	 * @param {payload} Request Body 
	 * @description Api TodoList Post Service
	 */
    protected postList(payload: Types.Response.Dictionary<string>) {
        return this.post(`/api/list`, payload);
    }
}
