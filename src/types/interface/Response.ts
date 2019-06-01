export namespace Response {
	export interface Dictionary<T> {
	    [Key: string]: T;
	}
	export interface TodoListData {
		id: number | undefined;
	    author: string | undefined;
	    content: string | undefined;
	}
	export interface Pattern {
	    pattern: any;
	    message: string;
	}
}