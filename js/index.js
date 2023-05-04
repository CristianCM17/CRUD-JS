import Model from './model.js';
import View  from './view.js';

document.addEventListener('DOMContentLoaded', function () {
    const model = new Model(); //instanciamos la clase model
    const view = new View(); //instanciamos la clase view
    model.setView(view); //le pasamos el view al model da igual que sea
    view.setModel(model);//le pasamos el model al view da igual que sea
});