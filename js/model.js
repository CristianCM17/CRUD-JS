export default class Model{
    constructor(){
        this.view = null;
        this.todos= []; //array de objetos
        this.currentId=1;
    }

     setView(view){
        this.view = view;
    }
    getTodos(){
        return this.todos;
    }
    addTodo(title,description){
        const todo = { //objeto 
            id:this.currentId++,
            title,
            description,
            completed:false,

        }

        this.todos.push(todo) //agregamos el objeto todo a this.todos
        console.log(todo);

        return  {...todo}//Object.assign({},todo) //devuelve un clon de mi objeto con sus propias pro[iedades]
        
    }
}