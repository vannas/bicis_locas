function validateForm(){
	
	var name=document.getElementById("name");
	var lastname=document.getElementById("lastname");
	var email=document.getElementById("input-email");
	var clave=document.getElementById("input-password");
	var opcion=document.getElementsByTagName("select")[0];


	/* Validar el nombre, mostrando un span de alerta */
	function alerte(mensaje, elem) {
		var span= elem.parentNode.children[2];				/* identifica que el span sea elemento 3 */
		if(!span) {
			var span= document.createElement("span");		/* Si no existe un span, crea el elemento */	
		}
		span.innerHTML = mensaje ;							/* muestra mensaje indicado dentro del span */
		elem.parentNode.appendChild(span);					/* engancha el span al padre del elemento indicado */
	}

	function quitar_span(elem) {
		var span=elem.parentNode.children[2];
		if(!span) {
			return;
		}
		elem.parentNode.removeChild(span);
	}
		
			
	if(name.value.length == ""){
		alerte("Debe ingresar un nombre", name);
	}

	else if (!name.value.match(/^[a-zA-Z]+$/)){
		alerte("Su nombre sólo puede contener letras", name); 
	}

	else if (!name.value[0] != name.value[0].toUpperCase()) {
		alerte("No olvide la mayúscula de su nombre", name);
	}

	else{
		quitar_span(name);
	}

 	/* Validar apellido */
	if(lastname.value.length == ""){
		alerte("Debe ingresar su apellido", lastname);
	}

	else if(!lastname.value.match(/^[a-zA-Z]+$/)){
		alerte("Su apellido sólo puede contener letras", lastname);
	}

	else if(!lastname.value[0] != lastname.value[0].toUpperCase()){
		alerte("No olvide la mayúscula de su apellido", lastname);
	}

	else{
		quitar_span(lastname);
	}

	/* Validar e-mail */
	if(email.value.length == ""){
		alerte("Debe ingresar su e-mail", email);
	}

	else if(! /^\w+@\w+\.\w+$/.test(email)){
		alerte("Formato de e-mail no es válido", email);
	}

	else{
		quitar_span(email);
	}

	/* Validar clave*/

	if(lastname.value.length == ""){
		alerte("Debe ingresar una clave", clave);
	}
	else if(clave.value == "password" || clave.value == "123456" || clave.value == "0987654"){
		alerte("Contraseña no es válida", clave);
	}

	else if(clave.value.length < 6){
		alerte("Su contraseña debe contenter al menos 6 carácteres", clave);
	}
	
	else{
		quitar_span(clave);
	}

	/* Validar Opción de Bici */
	
	if(opcion.value == "0"){
		alerte("No ha seleccionado su bicicleta", opcion);
	}	

	else{
		var span=elem.parentNode.children[1];
		if(!span) {
			return;
		}
		elem.parentNode.removeChild(span);
	}
}





/* Me costó mucho para borrarlo....

function validateForm(){
	var name=document.getElementById("name").value;
	var lastname=document.getElementById("lastname").value;
	var email=document.getElementById("input-email").value;
	var clave=document.getElementById("input-password");
	var opcion=document.getElementsByTagName("option");

	if(name == "" || lastname == "" || email =="" || clave.value==""){
		alert("Campo obligatorio");
		return;
	}

	if(name[0].toUpperCase()!=name[0]){
		alert("La primera letra de su nombre debe ser mayúscula");
		return;
	}

	if(lastname[0].toUpperCase()!=lastname[0]){
		alert("La primera letra de su apellido debe ser mayúscula");
		return;
	}

	if(!name.match(/^[a-zA-Z]+$/)) {
		alert("Nombre sólo permite letras");
		return;
	}
	
	if(!lastname.match(/^[a-zA-Z]+$/)) {
		alert("Nombre y Apellido sólo deben contener letras");
		return;
	}
	
	if(clave.value == "password" || clave.value == "123456" || clave.value == "0987654"){
		alert("No es una contraseña válida");
		return;
	}

	if(clave.value.length < 6){
		alert("Contraseña debe tener al menos 6 carácteres");
		return;
	}
	
	if(opcion.value == "0" ){
		alert("No ha seleccionado su opción de bici");
		return;
	}
		
	if(! /^\w+@\w+\.\w+$/.test(email)) {
		alert("Formato de e-mail no es válido");
		return;
	}
}
*/