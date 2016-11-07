var regexName = /^[ÑA-Z][ña-z]*$/g;
var regexCorreo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$(document).ready(function () {
	console.log('Esta listo');
	
	var span = $('<span class="error"></span>');

	$('#name').on('input', function() { 
		console.log('Cambio valor');
		//obtiene el valor del input nombre
		var nombre = $('#name').val(); 
		//Elimina el span 
		$(span).remove();
		//valida si el input tiene espacios
		if (nombre.trim() == "") {
		//trim quita los espacios en blanco
			console.log('Campo vacio');
			//agrega texto al span creado 
			$(span).text('Debes ingresar tu nombre');
			//inserta el span como ultimo hijo del div con la clase .name-container
			$('.name-container').append(span);
		//valida la expresion regular con el valor de input nombre
		} else if (!regexName.test(nombre.trim())) {
			console.log('Valor invalido');
			//si falso arroja el siguiente mensaje
			$(span).text('La primera letra debe ser mayúscula');
			//inserta el span como ultimo hijo del div con la clase .name-container
			$('.name-container').append(span);
		}
	});	

 	$('#lastname').on('input', function() {
		console.log('Cambio valor');
		//obtiene el valor del input apellido
		var apellido = $('#lastname').val(); 
		$(span).remove();
		if (apellido.trim() == "") {
		//trim quita los espacios en blanco
			console.log('Campo vacio');
			$(span).text('Debes ingresar tu apellido');
			$('.lastname-container').append(span);
		} else if (!/^[ÑA-Z][ña-z]*$/.test(apellido.trim())) {
			console.log('Valor invalido ' + apellido);
			$(span).text('La primera letra debe ser mayúscula');
			$('.lastname-container').append(span);
		}
	});
	
	$('#input-email').on('input', function() {
		console.log('Cambio valor');
		//obtiene el valor del input correo
		var mail = $('#input-email').val(); 
		$(span).remove();
		if (mail.trim() == "") {
		//trim quita los espacios en blanco
			console.log('Campo vacio');
			$(span).text('Debes ingresar un correo válido');
			$('.email-container').append(span);
		} else if (!regexCorreo.test(mail)) {
			console.log('Valor invalido');
			$(span).text('Ingresar un correo válido');
			$('.email-container').append(span);
		}
	});

	$('#input-password').on('input', function() {
		console.log('Cambio valor');
		var pass = $('#input-password').val(); //obtiene el valor del input contraseña
		$(span).remove();
		if (pass.trim() == "") {
		//trim quita los espacios en blanco.
			console.log('Campo vacio');
			$(span).text('Debes ingresar una contraseña');
			$("#input-password").parent().append(span);
		} else if (pass.length < 6)  {
			console.log('Valor invalido');
			$(span).text('La contraseña debe tener al menos 6 caracteres');
			$("#input-password").parent().append(span);
		} else if (pass == "password" || pass == "123456" || pass == "098754")  {
			console.log('Valor invalido');
			$(span).text('No se puede utilizar esa contraseña');
			$("#input-password").parent().append(span);
		}
	});	
	
	$('select').on('change', function() {
		console.log('Cambio valor');
		$(span).remove();
		//verifica si la opcion del select esta vacia
		if ($('select').val().trim() === '0') {
			$(span).text('Debes seleccionar un tipo de bici');
			$("select").parent().append(span);
		}
	});
});