import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

//exporta la funcion saludar
export const saludar = ( nombre = 'Sin nombre') =>{

    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');

    h1.innerText = `Hola, ${ nombre }!!!, que bueno que estés de vuelta.`;

    document.body.append(h1);

    //img
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);

}