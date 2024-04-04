
function pingPong(){
    let adultos = 0;
    let menores = 0;
    let userCantidad = 0;
    userCantidad =  prompt("¿Cuántas personas van a participar en el torneo?");
    //Se puede configurar para números más altos de personas
    if (userCantidad > 6){
        window.alert("No aceptamos a grupos mayores de 6 personas.");
    } else if ((userCantidad <= 6) && (userCantidad > 0)) {
        for (let i = 1; i <= userCantidad; i++){
            let edad = prompt("Escribe la edad de la persona nº " + i + ":");
            while (edad > 111 || edad < 0) {
                edad = prompt("Edad no válida. Vuelve a introducir la edad de la persona nº " + i + ":");
            };
            if (edad >= 18){
                adultos++;
            } else {
                menores++
            }
        }
        let preciototal = (adultos*10) + (menores*5);
        document.getElementById("pingPongResults").innerHTML = "El precio total de inscripción es de " + preciototal + "€";
    } else{
        window.alert("No es un número válido. Vuelve a intentarlo.")
    }
}
function mascotas(){
    let tipoMascota = prompt("¿Qué tipo de mascota tienes?");
    let nombreMascota =  prompt("¿Y cuál es su nombre?");
    if ((tipoMascota ==  null) || (tipoMascota ==  "") || (nombreMascota == null) || (tipoMascota ==  "")){
        window.alert("Falta información, inténtalo de nuevo.");
    } else{
        document.getElementById("mascotasResults").innerHTML = "Tu mascota es un " + tipoMascota + " y su nombre es " + nombreMascota + ".";
    }
}

function peliculas(){
    let peliculas = [];
    let userInput = prompt("¡Bienvenido a tu lista de películas! Escribe la película que quieres añadir, o salir para salir.");
    while (userInput != "salir"){
        peliculas.push(userInput);
        userInput = prompt("Escribe el título de la película que quieras guardar.");
    }
    peliculas.sort();
    let results = "";
    for (let i = 0; i < peliculas.length; i++){
        results += peliculas[i] + "<br>";
    }
    document.getElementById("peliculasResults").innerHTML = results;
}
