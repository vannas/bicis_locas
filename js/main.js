function validateForm(){
	/* Escribe tú código aquí */
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
		alert("Escriba la primera letra de su nombre con mayúscula");
		return;
	}

	if(lastname[0].toUpperCase()!=lastname[0]){
		alert("Escriba la primera letra de su apellido con mayúscula");
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
		alert("Contraseña debe tener al menos 6 carácteres")
		return;
	}
	
	if(opcion.value == "0" ){
		alert("No ha seleccionado su opción de bici")
		return;
	}
		
	if(! /^\w+@\w+\.\w+$/.test(email)) {
		alert("Formato de e-mail no es válido");
		return;
	}
}
