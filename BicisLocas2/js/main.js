function validateForm(){
	/* Escribe tú código aquí */
	//antes de agregar los primeros span se deben borrar los viejos
	
	//se crea un elemento span y se agrega una clase error para que el ultimo span no se borre
	var span = document.createElement("span");
	span.setAttribute("class","error");

	//busca todos los elementos con la clase error y guarda en variable spans
	var spans = document.getElementsByClassName("error");
	//
	while(spans.length > 0){
		spans[0].parentElement.removeChild(spans[0]); //se posiciona en span y los remueve dependiendo del parent
	}

	//declare variables que voy a utilizar en mi codigo
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");

	//expresion regular para validar correo
	var regexCorreo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var correo = document.getElementById("input-email");
	var contrasena = document.getElementById("input-password");
	var tipoBici = document.getElementsByTagName("select")[0];
	
	//Empieza a validar cada input y muestra los span
	//NOMBRE 
	if(nombre.value == null || nombre.value == ""){
		span.innerHTML = "Debes ingresar nombre";
		nombre.parentNode.appendChild(span);
	}
	else if(!/^[ÑA-Z][ña-z]*$/g.test(nombre.value)){
		span.innerHTML = "La primera letra debe ser mayúscula";
		nombre.parentNode.appendChild(span);
	}
	//APELLIDO
	if (apellido.value == null || apellido.value == "") {
		span.innerHTML = "Debes ingresar apellido";
		apellido.parentNode.appendChild(span);
	}
	else if(!/^[ÑA-Z][ña-z]*$/g.test(apellido.value)){
		span.innerHTML = "La primera letra debe ser mayúscula";
		apellido.parentNode.appendChild(span);
	}
	//CORREO
	if (correo.value == null || correo.value == "") {
		span.innerHTML = "Debes ingresar un correo válido";
		correo.parentNode.appendChild(span);
	}
	else if (!regexCorreo.test(correo.value)){
		span.innerHTML = "Debes ingresar un correo válido";
		correo.parentNode.appendChild(span);
	}
	//CONTRASEÑA
	if (contrasena.value == null || contrasena.value == "") {
		span.innerHTML = "Escribe una contraseña";
		contrasena.parentNode.appendChild(span);
	} else if (contrasena.value.length < 6) {
		span.innerHTML = "La contraseña debe tener al menos 6 caracteres";
		contrasena.parentNode.appendChild(span);
	} else if (contrasena.value == "password" || contrasena.value == "123456" || contrasena == "098754"){
		span.innerHTML = "No se puede utilizar esa contraseña";
		contrasena.parentNode.appendChild(span);
	}
	//BICI
	if( tipoBici.selectedIndex == null || tipoBici.selectedIndex == 0 ) {
		span.innerHTML = "Debe seleccionar una opción de la lista";
		tipoBici.parentNode.appendChild(span);
	}
}