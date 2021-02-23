'use strict';
import Components from './components';

class App extends Components {
    public init() {
    	this.TodoListRender();
    }
}
const app = new App();
app.init();