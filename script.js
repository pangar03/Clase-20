const render = () => {
    // ================== CLASE ==================
    // const formulario = document.querySelector('#formulario');
    // const correo = document.querySelector('#correo');

    // formulario.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     // alert(correo.value); // Forma numero 1 de obtener el valor del input
    //     console.log(e);
    //     // const correoElectronico = e.target.correo.value; // Forma numero 2 de obtener el valor del input
    // });

    // correo.addEventListener('input', (e) => {
    //     // console.log(e.target.value); // Forma numero 3 de obtener el valor del input
    // });

    // ================== TALLER ==================
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value;
        const edad = e.target.edad.value;
        
        const text = document.querySelector('#texto');
        text.innerHTML = `El nombre de la persona es ${nombre}, su apellido es ${apellido} y su edad es ${edad} años`;
        document.body.appendChild(text);
    });
};

document.addEventListener('DOMContentLoaded', render);