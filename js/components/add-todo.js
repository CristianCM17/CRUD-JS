
export default class AddTodo{
    constructor(){
    this.btn = document.getElementById('add');
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
    }

    onClick(callback){ //le estamos pasando una funcion
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') {
              
                console.error('incorrecto');
            }else{
                callback(this.title.value,this.description.value);//si todo esta correcto le pasamos a la funcion que nos dieron esos argumentos
            }
        }
    }

}