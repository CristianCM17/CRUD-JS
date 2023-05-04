//import AddTodo from "./components/add-todo.js";

export default class View{
    constructor(){
        this.model = null;
        this.table= document.getElementById('table');
        const btn = document.getElementById('add');
    //    this.addTodoForm=new AddTodo();

 //      this.addTodoFrom.onClick((title,description) => this.addTodo(title,description));//esperando recibir parametros del titulo y descripcion para ejecutar el addtodo de la clase
       
        btn.onclick= () => { //debemos de usar la funcion flecha para indicar que 
            this.addTodo('Titulo','Desc'); //el this.addTodo es de la clase view y no de la funcion
        }
    }
    setModel(model){
        this.model = model; 
    }

    addTodo(title,description){
         const todo= this.model.addTodo(title,description);//del modelo que recibimos ejecutamos su funcion addtodo del model
    }                                                      //osea agregamos un nuevo modelo ala base de datos por asi decirlo
}