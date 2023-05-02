//el evento del content loaded que no noe ejecute nada de js hasta que todo el html se haya cargado
document.addEventListener('DOMContentLoaded',function () {
    const title= document.getElementById('title');
    const description= document.getElementById('description');
    const alert= document.getElementById('alert');
    const table= document.getElementById('table');
    const btn= document.getElementById('add');  

    let id=1; //el id de cada fila
    
    function removeTOdo(id) { //funcion para remover la fila, recibe el id de la fila
        
        document.getElementById(id).remove();
       

        
    }

    function addTodo() {
        if (title.value==='' && description.value==='') {
            alert.classList.remove('d-none');//la alerta se le remueve la clase de css de display-none
            alert.innerText= 'Title and description are requiered'; //cambiamos lo que dice la alerta
            return;
        }
        alert.classList.add('d-none');//anadimos el display-none
    }

        btn.onclick= addTodo;




});
