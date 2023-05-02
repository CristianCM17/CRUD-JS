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

        const row= table.insertRow(); //insertamos una nueva fila
        //agregamos al html el contenido 
        row.setAttribute('id',id++) //le damos un atributo a cada fila que es un id que estara aumentando
        row.innerHTML= `  
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
        </td>
        `;
        const removeBtn= document.createElement('button'); //creamos un boton
        removeBtn.classList.add('btn','btn-danger', 'mb-1');//le damos el css
        removeBtn.innerHTML=  '<i class="fa fa-trash"><i>'; //le damos el logo del boton
        removeBtn.onclick= function () { //con el click llamamos a la funcion removeTodo y le 
          removeTOdo(row.getAttribute('id')) //recuperamos el id de la fila en la que estamos
            
        }
        row.children[3].appendChild(removeBtn); //el espacio 4 donde ponemos los botones
                                                //le agregaremos elboton removebtn
        }
        
    
    btn.onclick= addTodo; //llamar a lafuncion asi porque si no a fuerzas quiere algo de retorno
});
z
