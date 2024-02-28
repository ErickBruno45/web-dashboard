var i=0;
var pp=0;


let isChecked0 = false;

function toggleCheckbox0() {
    const cuadro_blanco_1 = document.getElementById("cuadro_blanco_1");

    isChecked0 = !isChecked0;

    if (isChecked0) {


        cuadro_blanco_1.style.color = "#FFFFFF";
        // Marcar
        cuadro_blanco_1.innerHTML = '✓'; // Puedes cambiar el símbolo según tu preferencia
        cuadro_blanco_1.style.backgroundColor = '#2A28C3';
        cuadro_blanco_1.style.fontSize = '15px'; // Ajusta el tamaño de la aspa
        cuadro_blanco_1.style.lineHeight = '1'; // Ajusta el grosor de la aspa
        id_color_interno.style.backgroundColor = '#F1F0FF';
        

    } else {
        // Desmarcar
        cuadro_blanco_1.innerHTML = ''; // Elimina el contenido para desmarcar
        cuadro_blanco_1.style.backgroundColor = 'white';
        id_color_interno.style.backgroundColor = 'white';

    }
}

function actualizarNombre() {
    

    


    

        var id_nombre_colaborador = document.getElementById('id_nombre_colaborador');
        var id_apellido_colaborador = document.getElementById('id_apellido_colaborador');
        var id_dni_colaborador = document.getElementById('id_dni_colaborador');
        var id_dni_opcional_colaborador = document.getElementById('id_dni_opcional_colaborador');
        var id_fecha_colaborador = document.getElementById('id_fecha_colaborador');
        var id_retribucion_colaborador = document.getElementById('id_retribucion_colaborador');
        var texto_estado = document.getElementById('texto_estado');


    

        
        

        var textoIngresado = id_nombre_colaborador.value;
        var textoIngresado0 = id_apellido_colaborador.value;
        var textoIngresado1 = id_dni_colaborador.value;
        var textoIngresado2 = id_dni_opcional_colaborador.value;
        var textoIngresado3 = id_fecha_colaborador.value;
        var textoIngresado4 = id_retribucion_colaborador.value;
        var textoIngresado5 = texto_estado.innerHTML;

        i=i+1;


        if(i===1){
            var nombreMostrado = document.getElementById('nombreMostrado');
            var idOpcional = document.getElementById('idOpcional');
            var idDNI = document.getElementById('idDNI');
            var id_cuentaSoles = document.getElementById('id_cuentaSoles');
            var id_Fecha_Registro = document.getElementById('id_Fecha_Registro');
            var idEstado = document.getElementById('idEstado');
    
            const id_sombra_editar=document.getElementById("id_sombra_editar");
            const imagen_editar=document.getElementById("imagen_editar");
            const id_sobra_tachito=document.getElementById("id_sobra_tachito");
            const imagen_tachito=document.getElementById("imagen_tachito");
    
    
            const id_contorno_estado=document.getElementById("id_contorno_estado");
            const id_texto_estado=document.getElementById("id_texto_estado");
            const imagen_iconoco_boton=document.getElementById("imagen_iconoco_boton");
            
            
            
    
    
    
    
            imagen_editar.src = "fotos_inactivar_colaborador/icon_editar.png";
            id_sombra_editar.style.backgroundColor = '#F5F5FF';
    
            if(texto_estado.innerHTML==='Inactivo'){
    
                imagen_tachito.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito.style.backgroundColor = '#F6FFED';
    
                id_texto_estado.innerHTML='De baja';
                id_texto_estado.style.color = "#F5222D";
                id_contorno_estado.style.backgroundColor = '#FFF1F0';
                id_contorno_estado.style.border = '1px #FFA39E solid';
                id_color_interno.style.backgroundColor = '#FAFAFA';
            }
    
            if(texto_estado.innerHTML==='Activo'){
    
                imagen_tachito.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado.innerHTML='laborando';
                id_texto_estado.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado.style.backgroundColor = '#FAFAFA';
                id_contorno_estado.style.border = '1px #D9D9D9 solid';
                id_color_interno.style.backgroundColor = 'white';
    
    
            }
    
            if(texto_estado.innerHTML==='Suspendido'){
    
                imagen_tachito.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado.innerHTML='Motivo';
                id_texto_estado.style.color = "rgba(0, 0, 0, 0.25)";
                id_contorno_estado.style.backgroundColor = 'white';
                id_contorno_estado.style.border = '1px #D9D9D9 solid';
               
                imagen_iconoco_boton.src = "fotos_inactivar_colaborador/icon_boton.png";
                imagen_iconoco_boton.style.marginLeft= '30px';
                id_color_interno.style.backgroundColor = 'white';
                
                
    
    
    
    
    
    
            }
    
           
        
            
    
    
    
        
    
            
    
            nombreMostrado.textContent = textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
            idDNI.textContent = textoIngresado1 || 'Nombre por defecto';
            idOpcional.textContent = textoIngresado2 || 'Nombre por defecto';
            id_Fecha_Registro.textContent = textoIngresado3 || 'Nombre por defecto';
            id_cuentaSoles.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
            idEstado.textContent = textoIngresado5 || 'Nombre por defecto';
    
    
    
        }
        if(i===2){
            var nombreMostrado2 = document.getElementById('nombreMostrado2');
            var idOpcional2 = document.getElementById('idOpcional2');
            var idDNI2 = document.getElementById('idDNI2');
            var id_cuentaSoles2 = document.getElementById('id_cuentaSoles2');
            var id_Fecha_Registro2 = document.getElementById('id_Fecha_Registro2');
            var idEstado2 = document.getElementById('idEstado2');
    
    
            const id_sombra_editar2=document.getElementById("id_sombra_editar2");
            const imagen_editar2=document.getElementById("imagen_editar2");
            const id_sobra_tachito2=document.getElementById("id_sobra_tachito2");
            const imagen_tachito2=document.getElementById("imagen_tachito2");
    
    
            const id_contorno_estado2=document.getElementById("id_contorno_estado2");
            const id_texto_estado2=document.getElementById("id_texto_estado2");
            const imagen_iconoco_boton2=document.getElementById("imagen_iconoco_boton2");
            
            
            
    
    
    
    
            imagen_editar2.src = "fotos_inactivar_colaborador/icon_editar.png";
            id_sombra_editar2.style.backgroundColor = '#F5F5FF';
    
            if(texto_estado.innerHTML==='Inactivo'){
    
                imagen_tachito2.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito2.style.backgroundColor = '#F6FFED';
    
                id_texto_estado2.innerHTML='De baja';
                id_texto_estado2.style.color = "#F5222D";
                id_contorno_estado2.style.backgroundColor = '#FFF1F0';
                id_contorno_estado2.style.border = '1px #FFA39E solid';
                id_color_interno2.style.backgroundColor = '#FAFAFA';
            }
    
            if(texto_estado.innerHTML==='Activo'){
    
                imagen_tachito2.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito2.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado2.innerHTML='laborando';
                id_texto_estado2.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado2.style.backgroundColor = '#FAFAFA';
                id_contorno_estado2.style.border = '1px #D9D9D9 solid';
                id_color_interno2.style.backgroundColor = 'white';
    
    
            }
    
            if(texto_estado.innerHTML==='Suspendido'){
    
                imagen_tachito2.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito2.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado2.innerHTML='Motivo';
                id_texto_estado2.style.color = "rgba(0, 0, 0, 0.25)";
                id_contorno_estado2.style.backgroundColor = 'white';
                id_contorno_estado2.style.border = '1px #D9D9D9 solid';
               
                imagen_iconoco_boton2.src = "fotos_inactivar_colaborador/icon_boton.png";
                imagen_iconoco_boton2.style.marginLeft= '30px';
                id_color_interno2.style.backgroundColor = 'white';
                
                
    
    
    
    
    
    
            }
    
           
    
            
    
            nombreMostrado2.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
            idDNI2.textContent = textoIngresado1 || 'Nombre por defecto';
            idOpcional2.textContent = textoIngresado2 || 'Nombre por defecto';
            id_Fecha_Registro2.textContent = textoIngresado3 || 'Nombre por defecto';
            id_cuentaSoles2.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
            idEstado2.textContent = textoIngresado5 || 'Nombre por defecto';
    
        }
    
    
    
        if(i===3){
            var nombreMostrado3 = document.getElementById('nombreMostrado3');
            var idOpcional3 = document.getElementById('idOpcional3');
            var idDNI3 = document.getElementById('idDNI3');
            var id_cuentaSoles3 = document.getElementById('id_cuentaSoles3');
            var id_Fecha_Registro3 = document.getElementById('id_Fecha_Registro3');
            var idEstado3 = document.getElementById('idEstado3');
    
    
            const id_sombra_editar3=document.getElementById("id_sombra_editar3");
            const imagen_editar3=document.getElementById("imagen_editar3");
            const id_sobra_tachito3=document.getElementById("id_sobra_tachito3");
            const imagen_tachito3=document.getElementById("imagen_tachito3");
    
    
            const id_contorno_estado3=document.getElementById("id_contorno_estado3");
            const id_texto_estado3=document.getElementById("id_texto_estado3");
            const imagen_iconoco_boton3=document.getElementById("imagen_iconoco_boton3");
            
            
            
    
    
    
    
            imagen_editar3.src = "fotos_inactivar_colaborador/icon_editar.png";
            id_sombra_editar3.style.backgroundColor = '#F5F5FF';
    
            if(texto_estado.innerHTML==='Inactivo'){
    
                imagen_tachito3.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito3.style.backgroundColor = '#F6FFED';
    
                id_texto_estado3.innerHTML='De baja';
                id_texto_estado3.style.color = "#F5222D";
                id_contorno_estado3.style.backgroundColor = '#FFF1F0';
                id_contorno_estado3.style.border = '1px #FFA39E solid';
                id_color_interno3.style.backgroundColor = '#FAFAFA';
            }
    
            if(texto_estado.innerHTML==='Activo'){
    
                imagen_tachito3.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito3.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado3.innerHTML='laborando';
                id_texto_estado3.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado3.style.backgroundColor = '#FAFAFA';
                id_contorno_estado3.style.border = '1px #D9D9D9 solid';
                id_color_interno3.style.backgroundColor = 'white';
    
    
            }
    
            if(texto_estado.innerHTML==='Suspendido'){
    
                imagen_tachito3.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito3.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado3.innerHTML='Motivo';
                id_texto_estado3.style.color = "rgba(0, 0, 0, 0.25)";
                id_contorno_estado3.style.backgroundColor = 'white';
                id_contorno_estado3.style.border = '1px #D9D9D9 solid';
               
                imagen_iconoco_boton3.src = "fotos_inactivar_colaborador/icon_boton.png";
                imagen_iconoco_boton3.style.marginLeft= '30px';
                id_color_interno3.style.backgroundColor = 'white';
                
                
    
    
    
    
    
    
            }
    
           
    
            
    
            nombreMostrado3.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
            idDNI3.textContent = textoIngresado1 || 'Nombre por defecto';
            idOpcional3.textContent = textoIngresado2 || 'Nombre por defecto';
            id_Fecha_Registro3.textContent = textoIngresado3 || 'Nombre por defecto';
            id_cuentaSoles3.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
            idEstado3.textContent = textoIngresado5 || 'Nombre por defecto';
    
        }
    
    
    
    
    
    
        if(i===4){
            var nombreMostrado4 = document.getElementById('nombreMostrado4');
            var idOpcional4 = document.getElementById('idOpcional4');
            var idDNI4 = document.getElementById('idDNI4');
            var id_cuentaSoles4 = document.getElementById('id_cuentaSoles4');
            var id_Fecha_Registro4 = document.getElementById('id_Fecha_Registro4');
            var idEstado4 = document.getElementById('idEstado4');
    
    
            const id_sombra_editar4 = document.getElementById("id_sombra_editar4");
            const imagen_editar4 = document.getElementById("imagen_editar4");
            const id_sobra_tachito4 = document.getElementById("id_sobra_tachito4");
            const imagen_tachito4 = document.getElementById("imagen_tachito4");
    
    
            const id_contorno_estado4=document.getElementById("id_contorno_estado4");
            const id_texto_estado4=document.getElementById("id_texto_estado4");
            const imagen_iconoco_boton4=document.getElementById("imagen_iconoco_boton4");
            
            
            
    
    
    
    
            imagen_editar4.src = "fotos_inactivar_colaborador/icon_editar.png";
            id_sombra_editar4.style.backgroundColor = '#F5F5FF';
    
            if(texto_estado.innerHTML==='Inactivo'){
    
                imagen_tachito4.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito4.style.backgroundColor = '#F6FFED';
    
                id_texto_estado4.innerHTML='De baja';
                id_texto_estado4.style.color = "#F5222D";
                id_contorno_estado4.style.backgroundColor = '#FFF1F0';
                id_contorno_estado4.style.border = '1px #FFA39E solid';
                id_color_interno4.style.backgroundColor = '#FAFAFA';
            }
    
            if(texto_estado.innerHTML==='Activo'){
    
                imagen_tachito4.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito4.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado4.innerHTML='laborando';
                id_texto_estado4.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado4.style.backgroundColor = '#FAFAFA';
                id_contorno_estado4.style.border = '1px #D9D9D9 solid';
                id_color_interno4.style.backgroundColor = 'white';
    
    
            }
    
            if(texto_estado.innerHTML==='Suspendido'){
    
                imagen_tachito4.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito4.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado4.innerHTML='Motivo';
                id_texto_estado4.style.color = "rgba(0, 0, 0, 0.25)";
                id_contorno_estado4.style.backgroundColor = 'white';
                id_contorno_estado4.style.border = '1px #D9D9D9 solid';
                
                imagen_iconoco_boton4.src = "fotos_inactivar_colaborador/icon_boton.png";
                imagen_iconoco_boton4.style.marginLeft= '30px';
                id_color_interno4.style.backgroundColor = 'white';
                
                
    
    
    
    
    
    
            }
    
           
    
            
    
            nombreMostrado4.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
            idDNI4.textContent = textoIngresado1 || 'Nombre por defecto';
            idOpcional4.textContent = textoIngresado2 || 'Nombre por defecto';
            id_Fecha_Registro4.textContent = textoIngresado3 || 'Nombre por defecto';
            id_cuentaSoles4.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
            idEstado4.textContent = textoIngresado5 || 'Nombre por defecto';
    
        }
    
    
    
        if(i===5){
            var nombreMostrado5 = document.getElementById('nombreMostrado5');
            var idOpcional5= document.getElementById('idOpcional5');
            var idDNI5 = document.getElementById('idDNI5');
            var id_cuentaSoles5 = document.getElementById('id_cuentaSoles5');
            var id_Fecha_Registro5 = document.getElementById('id_Fecha_Registro5');
            var idEstado5 = document.getElementById('idEstado5');
    
    
            const id_sombra_editar5 = document.getElementById("id_sombra_editar5");
            const imagen_editar5 = document.getElementById("imagen_editar5");
            const id_sobra_tachito5 = document.getElementById("id_sobra_tachito5");
            const imagen_tachito5 = document.getElementById("imagen_tachito5");
    
    
            const id_contorno_estado5=document.getElementById("id_contorno_estado5");
            const id_texto_estado5=document.getElementById("id_texto_estado5");
            const imagen_iconoco_boton5=document.getElementById("imagen_iconoco_boton5");
            
            
            
    
    
    
    
            imagen_editar5.src = "fotos_inactivar_colaborador/icon_editar.png";
            id_sombra_editar5.style.backgroundColor = '#F5F5FF';
    
            if(texto_estado.innerHTML==='Inactivo'){
    
                imagen_tachito5.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito5.style.backgroundColor = '#F6FFED';
    
                id_texto_estado5.innerHTML='De baja';
                id_texto_estado5.style.color = "#F5222D";
                id_contorno_estado5.style.backgroundColor = '#FFF1F0';
                id_contorno_estado5.style.border = '1px #FFA39E solid';
                id_color_interno5.style.backgroundColor = '#FAFAFA';
            }
    
            if(texto_estado.innerHTML==='Activo'){
    
                imagen_tachito5.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito5.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado5.innerHTML='laborando';
                id_texto_estado5.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado5.style.backgroundColor = '#FAFAFA';
                id_contorno_estado5.style.border = '1px #D9D9D9 solid';
                id_color_interno5.style.backgroundColor = 'white';
    
    
            }
    
            if(texto_estado.innerHTML==='Suspendido'){
    
                imagen_tachito5.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito5.style.backgroundColor = '#FFF1F0';
    
                id_texto_estado5.innerHTML='Motivo';
                id_texto_estado5.style.color = "rgba(0, 0, 0, 0.25)";
                id_contorno_estado5.style.backgroundColor = 'white';
                id_contorno_estado5.style.border = '1px #D9D9D9 solid';
          
                imagen_iconoco_boton5.src = "fotos_inactivar_colaborador/icon_boton.png";
                imagen_iconoco_boton5.style.marginLeft= '30px';
                id_color_interno5.style.backgroundColor = 'white';
                
                
    
    
    
    
    
    
            }
    
           
    
            
    
            nombreMostrado5.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
            idDNI5.textContent = textoIngresado1 || 'Nombre por defecto';
            idOpcional5.textContent = textoIngresado2 || 'Nombre por defecto';
            id_Fecha_Registro5.textContent = textoIngresado3 || 'Nombre por defecto';
            id_cuentaSoles5.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
            idEstado5.textContent = textoIngresado5 || 'Nombre por defecto';
    
        }

    
    

    


    
}


let isChecked1 = false;

    function toggleCheckbox1() {
        const checkbox1 = document.getElementById("checkbox1");

        isChecked1 = !isChecked1;

        if (isChecked1) {
            // Marcar
            checkbox1.innerHTML = '✔'; // Puedes cambiar el símbolo según tu preferencia
        } else {
            // Desmarcar
            checkbox1.innerHTML = ''; // Elimina el contenido para desmarcar
        }
}


function home() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("index.html");

}


function contactos_c() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("contactos_ipay.html");

}

function libro_reclamaciones() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("reclamo.html");

}

function sobre_nosotros() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("nosotros.html");

}

function preguntas_respuestas() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("preguntas.html");

}

function terno_condiciones() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("termino.html");

}

function politica_privacidad() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("politica.html");

}

$(document).ready(function () {
    $('#carouselExample').carousel({
        interval: 2000, // Cambia cada 2 segundos (ajusta según tu preferencia)
        wrap: true      // Permite el desplazamiento infinito
    });
});
function inicio_sesion() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("inicio_sesion.html");

};

function prueba() {
    localStorage.setItem("", JSON.stringify());
    window.location.replace("pruebaaa.html");

};



const btsSignIn=document.getElementById("contra"),
      btsSignIn1=document.getElementById("confirmar"),
      olidoContra=document.getElementById("contra1"),
      enviarContra=document.getElementById("miDiv"),
      nuevaContra=document.getElementById("contra10"),
      inicio1o=document.getElementById("inicio1"),
      formventana1=document.querySelector(".ventana1"),
      formventana2=document.querySelector(".ventana2"),
      formventana3=document.querySelector(".ventana3"),
      formventana4=document.querySelector(".ventana4"),
      formventana5=document.querySelector(".ventana5"),
      formventana6=document.querySelector(".ventana6"),
      
      Res = document.getElementById("Res"),
      ventanaD = document.querySelector(".ventanaD"),
      id_inactivar=document.getElementById("id_inactivar"),
      inactivar =document.querySelector(".inactivar"),
      id_revisar_datos=document.getElementById("id_revisar_datos"),
      revisar_datos =document.querySelector(".revisar_datos"),
      id_lista_transacciones=document.getElementById("id_lista_transacciones"),
      transacciones =document.querySelector(".transacciones"),
      id_lista_liquidacion=document.getElementById("id_lista_liquidacion"),
      liquidacion =document.querySelector(".liquidacion"),
      id_añadir_colaborador=document.getElementById("id_añadir_colaborador"),
      dupla_colaborador =document.querySelector(".dupla_colaborador"),
      id_un_colaborador=document.getElementById("id_un_colaborador"),
      aña_colaboradores =document.querySelector(".aña_colaboradores"),
      id_varios_colaboradores=document.getElementById("id_varios_colaboradores"),
      varios_colaboradores =document.querySelector(".varios_colaboradores"),
      id_neto=document.getElementById("id_neto"),
      id_bruto=document.getElementById("id_bruto"),
      bola_1 =document.querySelector(".bola_1"),
      retangulo_bola =document.querySelector(".retangulo_bola"),

      id_entidad=document.getElementById("id_entidad"),
      seleccion_entidad =document.querySelector(".seleccion_entidad"),
      id_estado=document.getElementById("id_estado"),
      seleccion_estado =document.querySelector(".seleccion_estado"),

      banco_credito_color = document.getElementById('banco_credito_color'),
      interbanck_color = document.getElementById('interbanck_color'),
      bbva_color = document.getElementById('bbva_color'),
      seleccionTexto = document.getElementById('seleccionTexto'),


      activo_color = document.getElementById('activo_color'),
      inactivo_color = document.getElementById('inactivo_color'),
      suspendido_color = document.getElementById('suspendido_color'),
      texto_estado = document.getElementById('texto_estado'),


      id_tipo_cuenta= document.getElementById("id_tipo_cuenta"),
      seleccion_tipo =document.querySelector(".seleccion_tipo"),

      ahorro_color = document.getElementById('ahorro_color'),
      corriente_color = document.getElementById('corriente_color'),
      texto_tipo_cuenta = document.getElementById('texto_tipo_cuenta'),

      id_ver_colaborador = document.getElementById('id_ver_colaborador'),
      id_aceptar_colaborador = document.getElementById('id_aceptar_colaborador'),
      ventana_acpetar_colaborador =document.querySelector(".ventana_acpetar_colaborador"),


      id_boton_añadir_colaborador = document.getElementById('id_boton_añadir_colaborador'),
      cuadro_subir_archivo =document.querySelector(".cuadro_subir_archivo"),
      id_click_arrastrar = document.getElementById('id_click_arrastrar'),
      boton_colaborador_añade =document.querySelector(".boton_colaborador_añade"),
      ventana_cargar_documento =document.querySelector(".ventana_cargar_documento"),

      miInput_cuenta = document.getElementById('miInput_cuenta'),
      id_añade_botom = document.getElementById('id_añade_botom'),
      añade_text = document.getElementById('añade_text'),
      id_imagen_cruz = document.getElementById('id_imagen_cruz'),

      nombreMostrado = document.getElementById('nombreMostrado'),
      id_nombre_colaborador = document.getElementById('id_nombre_colaborador'),

      ventana_negra_editar=document.querySelector(".ventana_negra_editar"),
      imagen_editar=document.getElementById("imagen_editar"),
      
      id_boton_editar_cancelar=document.getElementById("id_boton_editar_cancelar"),

      id_dni_colaborador=document.getElementById("id_dni_colaborador"),
      id_dni_opcional_colaborador=document.getElementById("id_dni_opcional_colaborador"),
      id_subsidiaria_colaborador=document.getElementById("id_subsidiaria_colaborador"),
      id_fecha_colaborador=document.getElementById("id_fecha_colaborador"),
      id_fecha_colaborador_fin=document.getElementById("id_fecha_colaborador_fin"),
      id_retribucion_colaborador=document.getElementById("id_retribucion_colaborador"),
      id_apellido_colaborador=document.getElementById("id_apellido_colaborador"),



      activo_color2=document.getElementById("activo_color2"),
      inactivo_color2=document.getElementById("inactivo_color2"),
      suspendido_color2=document.getElementById("suspendido_color2"),
      imagen_iconoco_boton=document.getElementById("imagen_iconoco_boton"),
      seleccion_estado2 =document.querySelector(".seleccion_estado2"),
      otros_color2=document.getElementById("otros_color2"),

      cuadrilla_seleccion_estado=document.getElementById("cuadrilla_seleccion_estado"),
      imagen_iconoco_boton2=document.getElementById("imagen_iconoco_boton2"),
      imagen_iconoco_boton3=document.getElementById("imagen_iconoco_boton3"),
      imagen_iconoco_boton4=document.getElementById("imagen_iconoco_boton4"),
      imagen_iconoco_boton5=document.getElementById("imagen_iconoco_boton5"),



      imagen_tachito=document.getElementById("imagen_tachito"),
      imagen_tachito2=document.getElementById("imagen_tachito2"),
      imagen_tachito3=document.getElementById("imagen_tachito3"),
      imagen_tachito4=document.getElementById("imagen_tachito4"),
      venatna_negra_inactivar =document.querySelector(".venatna_negra_inactivar"),
      id_seguir_editando=document.getElementById("id_seguir_editando"),
      id_boton_inactivar=document.getElementById("id_boton_inactivar"),
      imagen_tachito5=document.getElementById("imagen_tachito5"),

      id_guardar_cambios=document.getElementById("id_guardar_cambios"),
      vetana_de_guardar_carga_datos =document.querySelector(".vetana_de_guardar_carga_datos"),




      id_estado2=document.getElementById("id_estado2"),
      seleccion_estado3=document.querySelector(".seleccion_estado3"),
      activo_color3=document.getElementById("activo_color3"),
      inactivo_color3=document.getElementById("inactivo_color3"),
      suspendido_color3=document.getElementById("suspendido_color3"),




      
      imagen_editar3=document.getElementById("imagen_editar3"),
      imagen_editar4=document.getElementById("imagen_editar4"),
      imagen_editar5=document.getElementById("imagen_editar5"),


      id_color_interno=document.getElementById("id_color_interno"),
      id_color_interno2=document.getElementById("id_color_interno2"),
      id_color_interno3=document.getElementById("id_color_interno3"),
      id_color_interno4=document.getElementById("id_color_interno4"),
      id_color_interno5=document.getElementById("id_color_interno5"),

      

      ventana_negra_activar_colaborador =document.querySelector(".ventana_negra_activar_colaborador"),
      id_seguir_editando_ya_no_activar=document.getElementById("id_seguir_editando_ya_no_activar"),
      id_activar_nuevamente=document.getElementById("id_activar_nuevamente"),


      añade_colaborador_desde_inactivar=document.getElementById("añade_colaborador_desde_inactivar"),


      
      id_pantalla_carga=document.getElementById("id_pantalla_carga"),
      ventaana_de_cargar_loadig =document.querySelector(".ventaana_de_cargar_loadig"),
      boton_para_ir_al_cargado_completo=document.getElementById("boton_para_ir_al_cargado_completo"),
      cargando_verder_ya_casi =document.querySelector(".cargando_verder_ya_casi"),
      planta_cargar_archivo =document.querySelector(".planta_cargar_archivo"),
      id_agregar_cola_azul=document.getElementById("id_agregar_cola_azul"),

      id_ventanota_1 =document.querySelector(".id_ventanota_1"),
      id_ventanota_2 =document.querySelector(".id_ventanota_2"),
      id_ventanota_3 =document.querySelector(".id_ventanota_3"),
      id_ventanota_4 =document.querySelector(".id_ventanota_4"),
     
      ventana_subido_exito =document.querySelector(".ventana_subido_exito"),

      carga_n1=document.getElementById("carga_n1"),
      carga_n2=document.getElementById("carga_n2"),
      carga_n3=document.getElementById("carga_n3"),
      carga_n4=document.getElementById("carga_n4"),

      foto_sumando_colaborador=document.getElementById("foto_sumando_colaborador"),
      id_ventana_negra_acceso=document.getElementById("id_ventana_negra_acceso"),

      foto_añade_colaborador=document.getElementById("foto_añade_colaborador"),
      texto_añade_colaborador_cruz=document.getElementById("texto_añade_colaborador_cruz"),

      ventana_carga_error_x =document.querySelector(".ventana_carga_error_x"),
      ventana_negra_de_error =document.querySelector(".ventana_negra_de_error"),


      ver_colaborador_añdido_carga=document.getElementById("ver_colaborador_añdido_carga"),
      aceptar_funciones_carga_datos=document.getElementById("aceptar_funciones_carga_datos"),

      id_volver_subir=document.getElementById("id_volver_subir"),



      id_pase_de_carga_4_pantallas=document.getElementById("id_pase_de_carga_4_pantallas"),
      id_añade_cargar_documento=document.getElementById("id_añade_cargar_documento"),


      cuadro_blanco_1=document.getElementById("cuadro_blanco_1"),
      Eliminar_por_grupo=document.getElementById("Eliminar_por_grupo");
      


      


    

document.addEventListener("DOMContentLoaded", function() {

        xp=0;


        Eliminar_por_grupo.addEventListener("click", e=>{
            
            planta_cargar_archivo.classList.remove("hide12")
            
            texto_añade_colaborador_cruz.style.color = "#FFFFFF";
            foto_añade_colaborador.src = "fotos_añadir_colaborador_IPAY/Union (2).png";
            id_añade_cargar_documento.style.backgroundColor = '#2A28C3';
            ventana_negra_de_error.classList.add("hide12")
            


        })


       
       



      

        id_volver_subir.addEventListener("click", e=>{
            
            planta_cargar_archivo.classList.remove("hide12")
            
            texto_añade_colaborador_cruz.style.color = "#FFFFFF";
            foto_añade_colaborador.src = "fotos_añadir_colaborador_IPAY/Union (2).png";
            id_añade_cargar_documento.style.backgroundColor = '#2A28C3';
            ventana_negra_de_error.classList.add("hide12")
            


        })

        id_ventana_negra_acceso.addEventListener("click", e=>{
            
            ventana_negra_de_error.classList.remove("hide12")
            ventana_carga_error_x.classList.add("hide12")
            


        })


        foto_sumando_colaborador.addEventListener("click", e=>{
            
            ventana_carga_error_x.classList.remove("hide12")
            id_ventanota_4.classList.add("hide12")
            texto_añade_colaborador_cruz.style.color = "rgba(0, 0, 0, 0.25)";
            foto_añade_colaborador.src = "fotos_añadir_colaborador_IPAY/Plus.png";
            id_añade_cargar_documento.style.backgroundColor = '#F5F5F5';
        
            


        })

        ver_colaborador_añdido_carga.addEventListener("click", e=>{
            
            
            revisar_datos.classList.remove("hide12")
            ventana_subido_exito.classList.add("hide12")
            varios_colaboradores.classList.add("hide12")
            cuadro_subir_archivo.classList.add("hide12")
            boton_colaborador_añade.classList.remove("hide12")


        })


        aceptar_funciones_carga_datos.addEventListener("click", e=>{
            
            
            ventana_subido_exito.classList.add("hide12")
            


        })

        carga_n4.addEventListener("click", e=>{
            
            ventana_subido_exito.classList.remove("hide12")
            id_ventanota_4.classList.add("hide12")
            


        })

        carga_n3.addEventListener("click", e=>{
            
            id_ventanota_4.classList.remove("hide12")
            id_ventanota_3.classList.add("hide12")
            


        })
        carga_n2.addEventListener("click", e=>{
            
            id_ventanota_3.classList.remove("hide12")
            id_ventanota_2.classList.add("hide12")
            


        })

        carga_n1.addEventListener("click", e=>{
            
            id_ventanota_2.classList.remove("hide12")
            id_ventanota_1.classList.add("hide12")
            


        })


        id_pase_de_carga_4_pantallas.addEventListener("click", e=>{
            
            id_ventanota_1.classList.remove("hide12")
            planta_cargar_archivo.classList.add("hide12")
            


        })

        id_agregar_cola_azul.addEventListener("click", e=>{
            
            planta_cargar_archivo.classList.remove("hide12")
            cargando_verder_ya_casi.classList.add("hide12")
            texto_añade_colaborador_cruz.style.color = "#FFFFFF";
            foto_añade_colaborador.src = "fotos_añadir_colaborador_IPAY/Union (2).png";
            id_añade_cargar_documento.style.backgroundColor = '#2A28C3';
        


            


        })

        boton_para_ir_al_cargado_completo.addEventListener("click", e=>{
            
            cargando_verder_ya_casi.classList.remove("hide12")
            ventaana_de_cargar_loadig.classList.add("hide12")
            


        })
    


        id_pantalla_carga.addEventListener("click", e=>{
            
            ventaana_de_cargar_loadig.classList.remove("hide12")
            ventana_cargar_documento.classList.add("hide12")
            varios_colaboradores.classList.remove("hide12")
            cuadro_subir_archivo.classList.remove("hide12")
            

        
                                
            



        })


        añade_colaborador_desde_inactivar.addEventListener("click", e=>{
            inactivar.classList.add("hide12")
            aña_colaboradores.classList.remove("hide12")
        
                                
            



        })


        id_estado2.addEventListener("click", e=>{
            seleccion_estado3.classList.remove("hide12")
        
                                
            



        })





        id_guardar_cambios.addEventListener("click", e=>{
            
                                
            

           
            ventana_negra_editar.classList.add("hide12")


            var id_nombre_colaborador2 = document.getElementById('id_nombre_colaborador2');
            var id_apellido_colaborador2 = document.getElementById('id_apellido_colaborador2');
            var id_dni_colaborador2 = document.getElementById('id_dni_colaborador2');
            var id_dni_opcional_colaborador2 = document.getElementById('id_dni_opcional_colaborador2');
            var id_fecha_colaborador2 = document.getElementById('id_fecha_colaborador2');
            var id_retribucion_colaborador2 = document.getElementById('id_retribucion_colaborador2');
            var texto_estado2 = document.getElementById('texto_estado2');


        

            
            

            var textoIngresado = id_nombre_colaborador2.value;
            var textoIngresado0 = id_apellido_colaborador2.value;
            var textoIngresado1 = id_dni_colaborador2.value;
            var textoIngresado2 = id_dni_opcional_colaborador2.value;
            var textoIngresado3 = id_fecha_colaborador2.value;
            var textoIngresado4 = id_retribucion_colaborador2.value;
            var textoIngresado5 = texto_estado2.innerHTML;

        

            if(i===1){
                var nombreMostrado = document.getElementById('nombreMostrado');
                var idOpcional = document.getElementById('idOpcional');
                var idDNI = document.getElementById('idDNI');
                var id_cuentaSoles = document.getElementById('id_cuentaSoles');
                var id_Fecha_Registro = document.getElementById('id_Fecha_Registro');
                var idEstado = document.getElementById('idEstado');
        
                const id_sombra_editar=document.getElementById("id_sombra_editar");
                const imagen_editar=document.getElementById("imagen_editar");
                const id_sobra_tachito=document.getElementById("id_sobra_tachito");
                const imagen_tachito=document.getElementById("imagen_tachito");
        
        
                const id_contorno_estado=document.getElementById("id_contorno_estado");
                const id_texto_estado=document.getElementById("id_texto_estado");
                const imagen_iconoco_boton=document.getElementById("imagen_iconoco_boton");
                
                
                
        
        
        
        
                imagen_editar.src = "fotos_inactivar_colaborador/icon_editar.png";
                id_sombra_editar.style.backgroundColor = '#F5F5FF';
        
                if(texto_estado2.innerHTML==='Inactivo'){

                    venatna_negra_inactivar.classList.remove("hide12");
                    ix=1

                    id_boton_inactivar.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado.textContent = textoIngresado + ' ' + textoIngresado0 || 'Nombre por defecto';
                        idDNI.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles.textContent = "S/" + textoIngresado4 || 'Nombre por defecto';
                        idEstado.textContent = textoIngresado5 || 'Nombre por defecto';
                    });


        
                    
                }
        
                if(texto_estado2.innerHTML==='Activo'){
        
                    ventana_negra_activar_colaborador.classList.remove("hide12");
                    il=1

                    id_activar_nuevamente.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado.textContent = textoIngresado + ' ' + textoIngresado0 || 'Nombre por defecto';
                        idDNI.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles.textContent = "S/" + textoIngresado4 || 'Nombre por defecto';
                        idEstado.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
        
        
                }
        
                if(texto_estado2.innerHTML==='Suspendido'){
        
                    imagen_tachito.src = "fotos_inactivar_colaborador/icon_tachito.png";
                    id_sobra_tachito.style.backgroundColor = '#FFF1F0';
        
                    id_texto_estado.innerHTML='Motivo';
                    id_texto_estado.style.color = "rgba(0, 0, 0, 0.25)";
                    id_contorno_estado.style.backgroundColor = 'white';
                    id_contorno_estado.style.border = '1px #D9D9D9 solid';
              
                    imagen_iconoco_boton.src = "fotos_inactivar_colaborador/icon_boton.png";
                    imagen_iconoco_boton.style.marginLeft= '30px';

                    vetana_de_guardar_carga_datos.classList.remove("hide12")
                    setTimeout(() => {
                        vetana_de_guardar_carga_datos.classList.add("hide12");
                    }, 2000);


                    nombreMostrado.textContent = textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                    idDNI.textContent = textoIngresado1 || 'Nombre por defecto';
                    idOpcional.textContent = textoIngresado2 || 'Nombre por defecto';
                    id_Fecha_Registro.textContent = textoIngresado3 || 'Nombre por defecto';
                    id_cuentaSoles.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                    idEstado.textContent = textoIngresado5 || 'Nombre por defecto';


                    
                    
                    
        
        
        
        
        
        
                }


                
        
            
            
                
        
        
        
            
        
                
        
                
        
        
        
            }
            if(i===2){
                var nombreMostrado2 = document.getElementById('nombreMostrado2');
                var idOpcional2 = document.getElementById('idOpcional2');
                var idDNI2 = document.getElementById('idDNI2');
                var id_cuentaSoles2 = document.getElementById('id_cuentaSoles2');
                var id_Fecha_Registro2 = document.getElementById('id_Fecha_Registro2');
                var idEstado2 = document.getElementById('idEstado2');
        
        
                const id_sombra_editar2=document.getElementById("id_sombra_editar2");
                const imagen_editar2=document.getElementById("imagen_editar2");
                const id_sobra_tachito2=document.getElementById("id_sobra_tachito2");
                const imagen_tachito2=document.getElementById("imagen_tachito2");
        
        
                const id_contorno_estado2=document.getElementById("id_contorno_estado2");
                const id_texto_estado2=document.getElementById("id_texto_estado2");
                const imagen_iconoco_boton2=document.getElementById("imagen_iconoco_boton2");
                
                
                
        
        
        
        
                imagen_editar2.src = "fotos_inactivar_colaborador/icon_editar.png";
                id_sombra_editar2.style.backgroundColor = '#F5F5FF';
        
                if(texto_estado2.innerHTML==='Inactivo'){
        
                    venatna_negra_inactivar.classList.remove("hide12");
                    ix=2

                    id_boton_inactivar.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado2.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI2.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional2.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro2.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles2.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado2.textContent = textoIngresado5 || 'Nombre por defecto';
                    });

                }
        
                if(texto_estado2.innerHTML==='Activo'){
                    ventana_negra_activar_colaborador.classList.remove("hide12");
                    il=2

                    id_activar_nuevamente.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado2.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI2.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional2.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro2.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles2.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado2.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
        
        
        
                }
        
                if(texto_estado2.innerHTML==='Suspendido'){
        
                    imagen_tachito2.src = "fotos_inactivar_colaborador/icon_tachito.png";
                    id_sobra_tachito2.style.backgroundColor = '#FFF1F0';
        
                    id_texto_estado2.innerHTML='Motivo';
                    id_texto_estado2.style.color = "rgba(0, 0, 0, 0.25)";
                    id_contorno_estado2.style.backgroundColor = 'white';
                    id_contorno_estado2.style.border = '1px #D9D9D9 solid';
                    
                    imagen_iconoco_boton2.src = "fotos_inactivar_colaborador/icon_boton.png";
                    imagen_iconoco_boton2.style.marginLeft= '30px';


                    vetana_de_guardar_carga_datos.classList.remove("hide12")
                    setTimeout(() => {
                        vetana_de_guardar_carga_datos.classList.add("hide12");
                    }, 2000);

                    nombreMostrado2.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                    idDNI2.textContent = textoIngresado1 || 'Nombre por defecto';
                    idOpcional2.textContent = textoIngresado2 || 'Nombre por defecto';
                    id_Fecha_Registro2.textContent = textoIngresado3 || 'Nombre por defecto';
                    id_cuentaSoles2.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                    idEstado2.textContent = textoIngresado5 || 'Nombre por defecto';
                    
                    
        
        
        
        
        
        
                }
        
            
        
                
        
                
        
            }
        
        
        
            if(i===3){
                var nombreMostrado3 = document.getElementById('nombreMostrado3');
                var idOpcional3 = document.getElementById('idOpcional3');
                var idDNI3 = document.getElementById('idDNI3');
                var id_cuentaSoles3 = document.getElementById('id_cuentaSoles3');
                var id_Fecha_Registro3 = document.getElementById('id_Fecha_Registro3');
                var idEstado3 = document.getElementById('idEstado3');
        
        
                const id_sombra_editar3=document.getElementById("id_sombra_editar3");
                const imagen_editar3=document.getElementById("imagen_editar3");
                const id_sobra_tachito3=document.getElementById("id_sobra_tachito3");
                const imagen_tachito3=document.getElementById("imagen_tachito3");
        
        
                const id_contorno_estado3=document.getElementById("id_contorno_estado3");
                const id_texto_estado3=document.getElementById("id_texto_estado3");
                const imagen_iconoco_boton3=document.getElementById("imagen_iconoco_boton3");
                
                
                
        
        
        
        
                imagen_editar3.src = "fotos_inactivar_colaborador/icon_editar.png";
                id_sombra_editar3.style.backgroundColor = '#F5F5FF';
        
                if(texto_estado2.innerHTML==='Inactivo'){
        
                    venatna_negra_inactivar.classList.remove("hide12");
                    ix=3

                    id_boton_inactivar.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado3.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI3.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional3.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro3.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles3.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado3.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
                }
        
                if(texto_estado2.innerHTML==='Activo'){
        
                    ventana_negra_activar_colaborador.classList.remove("hide12");
                    il=3

                    id_activar_nuevamente.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado3.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI3.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional3.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro3.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles3.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado3.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
        
        
        
                }
        
                if(texto_estado2.innerHTML==='Suspendido'){
        
                    imagen_tachito3.src = "fotos_inactivar_colaborador/icon_tachito.png";
                    id_sobra_tachito3.style.backgroundColor = '#FFF1F0';
        
                    id_texto_estado3.innerHTML='Motivo';
                    id_texto_estado3.style.color = "rgba(0, 0, 0, 0.25)";
                    id_contorno_estado3.style.backgroundColor = 'white';
                    id_contorno_estado3.style.border = '1px #D9D9D9 solid';
                   
                    imagen_iconoco_boton3.src = "fotos_inactivar_colaborador/icon_boton.png";
                    imagen_iconoco_boton3.style.marginLeft= '30px';

                    vetana_de_guardar_carga_datos.classList.remove("hide12")
                    setTimeout(() => {
                        vetana_de_guardar_carga_datos.classList.add("hide12");
                    }, 2000);

                    nombreMostrado3.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                    idDNI3.textContent = textoIngresado1 || 'Nombre por defecto';
                    idOpcional3.textContent = textoIngresado2 || 'Nombre por defecto';
                    id_Fecha_Registro3.textContent = textoIngresado3 || 'Nombre por defecto';
                    id_cuentaSoles3.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                    idEstado3.textContent = textoIngresado5 || 'Nombre por defecto';
                    
                    
        
        
        
        
        
        
                }
        
            
        
                
        
               
        
            }
        
        
        
        
        
        
            if(i===4){
                var nombreMostrado4 = document.getElementById('nombreMostrado4');
                var idOpcional4 = document.getElementById('idOpcional4');
                var idDNI4 = document.getElementById('idDNI4');
                var id_cuentaSoles4 = document.getElementById('id_cuentaSoles4');
                var id_Fecha_Registro4 = document.getElementById('id_Fecha_Registro4');
                var idEstado4 = document.getElementById('idEstado4');
        
        
                const id_sombra_editar4 = document.getElementById("id_sombra_editar4");
                const imagen_editar4 = document.getElementById("imagen_editar4");
                const id_sobra_tachito4 = document.getElementById("id_sobra_tachito4");
                const imagen_tachito4 = document.getElementById("imagen_tachito4");
        
        
                const id_contorno_estado4=document.getElementById("id_contorno_estado4");
                const id_texto_estado4=document.getElementById("id_texto_estado4");
                const imagen_iconoco_boton4=document.getElementById("imagen_iconoco_boton4");
                
                
                
        
        
        
        
                imagen_editar4.src = "fotos_inactivar_colaborador/icon_editar.png";
                id_sombra_editar4.style.backgroundColor = '#F5F5FF';
        
                if(texto_estado2.innerHTML==='Inactivo'){
        
                    venatna_negra_inactivar.classList.remove("hide12");
                    ix=4

                    id_boton_inactivar.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado4.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI4.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional4.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro4.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles4.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado4.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
                }
        
                if(texto_estado2.innerHTML==='Activo'){
        
                    ventana_negra_activar_colaborador.classList.remove("hide12");
                    il=4

                    id_activar_nuevamente.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado4.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI4.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional4.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro4.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles4.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado4.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
        
        
        
                }
        
                if(texto_estado2.innerHTML==='Suspendido'){
        
                    imagen_tachito4.src = "fotos_inactivar_colaborador/icon_tachito.png";
                    id_sobra_tachito4.style.backgroundColor = '#FFF1F0';
        
                    id_texto_estado4.innerHTML='Motivo';
                    id_texto_estado4.style.color = "rgba(0, 0, 0, 0.25)";
                    id_contorno_estado4.style.backgroundColor = 'white';
                    id_contorno_estado4.style.border = '1px #D9D9D9 solid';
                  
                    imagen_iconoco_boton4.src = "fotos_inactivar_colaborador/icon_boton.png";
                    imagen_iconoco_boton4.style.marginLeft= '30px';


                    vetana_de_guardar_carga_datos.classList.remove("hide12")
                    setTimeout(() => {
                        vetana_de_guardar_carga_datos.classList.add("hide12");
                    }, 2000);

                    nombreMostrado4.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                    idDNI4.textContent = textoIngresado1 || 'Nombre por defecto';
                    idOpcional4.textContent = textoIngresado2 || 'Nombre por defecto';
                    id_Fecha_Registro4.textContent = textoIngresado3 || 'Nombre por defecto';
                    id_cuentaSoles4.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                    idEstado4.textContent = textoIngresado5 || 'Nombre por defecto';
                    
                    
        
        
        
        
        
        
                }
        
            
        
                
        
                
        
            }
        
        
        
            if(i===5){
                var nombreMostrado5 = document.getElementById('nombreMostrado5');
                var idOpcional5= document.getElementById('idOpcional5');
                var idDNI5 = document.getElementById('idDNI5');
                var id_cuentaSoles5 = document.getElementById('id_cuentaSoles5');
                var id_Fecha_Registro5 = document.getElementById('id_Fecha_Registro5');
                var idEstado5 = document.getElementById('idEstado5');
        
        
                const id_sombra_editar5 = document.getElementById("id_sombra_editar5");
                const imagen_editar5 = document.getElementById("imagen_editar5");
                const id_sobra_tachito5 = document.getElementById("id_sobra_tachito5");
                const imagen_tachito5 = document.getElementById("imagen_tachito5");
        
        
                const id_contorno_estado5=document.getElementById("id_contorno_estado5");
                const id_texto_estado5=document.getElementById("id_texto_estado5");
                const imagen_iconoco_boton5=document.getElementById("imagen_iconoco_boton5");
                
                
                
        
        
        
        
                imagen_editar5.src = "fotos_inactivar_colaborador/icon_editar.png";
                id_sombra_editar5.style.backgroundColor = '#F5F5FF';
        
                if(texto_estado2.innerHTML==='Inactivo'){
        
                    venatna_negra_inactivar.classList.remove("hide12");
                    ix=5

                    id_boton_inactivar.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado5.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI5.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional5.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro5.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles5.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado5.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
                }
        
                if(texto_estado2.innerHTML==='Activo'){
        
                    ventana_negra_activar_colaborador.classList.remove("hide12");
                    il=5

                    id_activar_nuevamente.addEventListener("click", function() {
                        // Este bloque de código se ejecutará cuando se haga clic en el botón
                        nombreMostrado5.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                        idDNI5.textContent = textoIngresado1 || 'Nombre por defecto';
                        idOpcional5.textContent = textoIngresado2 || 'Nombre por defecto';
                        id_Fecha_Registro5.textContent = textoIngresado3 || 'Nombre por defecto';
                        id_cuentaSoles5.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                        idEstado5.textContent = textoIngresado5 || 'Nombre por defecto';
                    });
        
        
        
                }
        
                if(texto_estado2.innerHTML==='Suspendido'){
        
                    imagen_tachito5.src = "fotos_inactivar_colaborador/icon_tachito.png";
                    id_sobra_tachito5.style.backgroundColor = '#FFF1F0';
        
                    id_texto_estado5.innerHTML='Motivo';
                    id_texto_estado5.style.color = "rgba(0, 0, 0, 0.25)";
                    id_contorno_estado5.style.backgroundColor = 'white';
                    id_contorno_estado5.style.border = '1px #D9D9D9 solid';
                    
                    imagen_iconoco_boton5.src = "fotos_inactivar_colaborador/icon_boton.png";
                    imagen_iconoco_boton5.style.marginLeft= '30px';


                    vetana_de_guardar_carga_datos.classList.remove("hide12")
                    setTimeout(() => {
                        vetana_de_guardar_carga_datos.classList.add("hide12");
                    }, 2000);


                    nombreMostrado5.textContent =  textoIngresado +' '+textoIngresado0 || 'Nombre por defecto';
                    idDNI5.textContent = textoIngresado1 || 'Nombre por defecto';
                    idOpcional5.textContent = textoIngresado2 || 'Nombre por defecto';
                    id_Fecha_Registro5.textContent = textoIngresado3 || 'Nombre por defecto';
                    id_cuentaSoles5.textContent = "S/"+ textoIngresado4 || 'Nombre por defecto';
                    idEstado5.textContent = textoIngresado5 || 'Nombre por defecto';
                    
                    
        
        
        
        
        
        
                }
        
            
        
                
        
              
        
            }


        })


        


        

        id_boton_inactivar.addEventListener("click", e=>{

            vetana_de_guardar_carga_datos.classList.remove("hide12")
            setTimeout(() => {
                vetana_de_guardar_carga_datos.classList.add("hide12");
            }, 2000);

            
            

            

            

            if(ix===1){
                imagen_tachito.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito.style.backgroundColor = '#F6FFED';
                id_texto_estado.innerHTML='De baja';
                id_texto_estado.style.color = "#F5222D";
                id_contorno_estado.style.backgroundColor = '#FFF1F0';
                id_contorno_estado.style.border = '1px #FFA39E solid';
                idEstado.textContent='Inactivo';
                
                
                imagen_iconoco_boton.src ='';
                imagen_iconoco_boton.style.marginLeft= '';
                venatna_negra_inactivar.classList.add("hide12");
                id_color_interno.style.backgroundColor = '#FAFAFA';
                
                

            }
            if(ix===2){
                imagen_tachito2.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito2.style.backgroundColor = '#F6FFED';
                id_texto_estado2.innerHTML='De baja';
                id_texto_estado2.style.color = "#F5222D";
                id_contorno_estado2.style.backgroundColor = '#FFF1F0';
                id_contorno_estado2.style.border = '1px #FFA39E solid';
                venatna_negra_inactivar.classList.add("hide12")
                idEstado2.innerHTML='Inactivo'
                id_color_interno2.style.backgroundColor = '#FAFAFA';
                imagen_iconoco_boton2.src ='';
                imagen_iconoco_boton2.style.marginLeft= '';

            }
            if(ix===3){
                imagen_tachito3.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito3.style.backgroundColor = '#F6FFED';
                id_texto_estado3.innerHTML='De baja';
                id_texto_estado3.style.color = "#F5222D";
                id_contorno_estado3.style.backgroundColor = '#FFF1F0';
                id_contorno_estado3.style.border = '1px #FFA39E solid';
                venatna_negra_inactivar.classList.add("hide12")
                idEstado3.innerHTML='Inactivo'
                id_color_interno3.style.backgroundColor = '#FAFAFA';
                imagen_iconoco_boton3.src ='';
                imagen_iconoco_boton3.style.marginLeft= '';
            }
            if(ix===4){
                imagen_tachito4.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito4.style.backgroundColor = '#F6FFED';
                id_texto_estado4.innerHTML='De baja';
                id_texto_estado4.style.color = "#F5222D";
                id_contorno_estado4.style.backgroundColor = '#FFF1F0';
                id_contorno_estado4.style.border = '1px #FFA39E solid';
                venatna_negra_inactivar.classList.add("hide12")
                idEstado4.innerHTML='Inactivo'
                id_color_interno4.style.backgroundColor = '#FAFAFA';
                imagen_iconoco_boton4.src ='';
                imagen_iconoco_boton4.style.marginLeft= ''

            }
            if(ix===5){
                imagen_tachito5.src = "fotos_inactivar_colaborador/icon_encender.png";
                id_sobra_tachito5.style.backgroundColor = '#F6FFED';
                id_texto_estado5.innerHTML='De baja';
                id_texto_estado5.style.color = "#F5222D";
                id_contorno_estado5.style.backgroundColor = '#FFF1F0';
                id_contorno_estado5.style.border = '1px #FFA39E solid';
                venatna_negra_inactivar.classList.add("hide12")
                idEstado5.innerHTML='Inactivo';
                id_color_interno5.style.backgroundColor = '#FAFAFA';
                imagen_iconoco_boton5.src ='';
                imagen_iconoco_boton5.style.marginLeft= ''

            }

                                    
            
        })




        id_activar_nuevamente.addEventListener("click", e=>{

            vetana_de_guardar_carga_datos.classList.remove("hide12")
            setTimeout(() => {
                vetana_de_guardar_carga_datos.classList.add("hide12");
            }, 2000);
            

            

            if(il===1){
                imagen_tachito.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito.style.backgroundColor = '#FFF1F0';

                id_texto_estado.innerHTML='laborando';
                id_texto_estado.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado.style.backgroundColor = '#FAFAFA';
                id_contorno_estado.style.border = '1px #D9D9D9 solid';
                idEstado.textContent='Activo';
                id_color_interno.style.backgroundColor = 'white';
                ventana_negra_activar_colaborador.classList.add("hide12")
                
                
                

            }

            if(il===2){
                imagen_tachito2.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito2.style.backgroundColor = '#FFF1F0';

                id_texto_estado2.innerHTML='laborando';
                id_texto_estado2.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado2.style.backgroundColor = '#FAFAFA';
                id_contorno_estado2.style.border = '1px #D9D9D9 solid';
                idEstado2.textContent='Activo';
                id_color_interno2.style.backgroundColor = 'white';
                ventana_negra_activar_colaborador.classList.add("hide12")
                
                
                

            }
            
            if(il===3){
                imagen_tachito3.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito3.style.backgroundColor = '#FFF1F0';

                id_texto_estado3.innerHTML='laborando';
                id_texto_estado3.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado3.style.backgroundColor = '#FAFAFA';
                id_contorno_estado3.style.border = '1px #D9D9D9 solid';
                idEstado3.textContent='Activo';
                id_color_interno3.style.backgroundColor = 'white';
                ventana_negra_activar_colaborador.classList.add("hide12")
                
                
                

            }
            
            if(il===4){
                imagen_tachito4.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito4.style.backgroundColor = '#FFF1F0';

                id_texto_estado4.innerHTML='laborando';
                id_texto_estado4.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado4.style.backgroundColor = '#FAFAFA';
                id_contorno_estado4.style.border = '1px #D9D9D9 solid';
                idEstado4.textContent='Activo';
                id_color_interno4.style.backgroundColor = 'white';
                ventana_negra_activar_colaborador.classList.add("hide12")
                
                
                

            }
            
            if(il===5){
                imagen_tachito5.src = "fotos_inactivar_colaborador/icon_tachito.png";
                id_sobra_tachito5.style.backgroundColor = '#FFF1F0';

                id_texto_estado5.innerHTML='laborando';
                id_texto_estado5.style.color = "rgba(0, 0, 0, 0.85)";
                id_contorno_estado5.style.backgroundColor = '#FAFAFA';
                id_contorno_estado5.style.border = '1px #D9D9D9 solid';
                idEstado5.textContent='Activo';
                id_color_interno5.style.backgroundColor = 'white';
                ventana_negra_activar_colaborador.classList.add("hide12")
                
                
                

            }
            
            

                                    
            
        })



        id_seguir_editando.addEventListener("click", e=>{
                                
            venatna_negra_inactivar.classList.add("hide12")
        })
        
        id_seguir_editando_ya_no_activar.addEventListener("click", e=>{
                                
            ventana_negra_activar_colaborador.classList.add("hide12")
        })



        imagen_tachito.addEventListener("click", e=>{

            if(id_texto_estado.innerHTML!=='De baja' && xp==0 ){
                venatna_negra_inactivar.classList.remove("hide12")
                ix=1;

            }

            else{

                ventana_negra_activar_colaborador.classList.remove("hide12")
                il=1;

                

            }

            

                            
           
        })


        imagen_tachito2.addEventListener("click", e=>{
                            
            if(id_texto_estado2.innerHTML!=='De baja'){
                venatna_negra_inactivar.classList.remove("hide12")
                ix=2;

            }

            else{

                ventana_negra_activar_colaborador.classList.remove("hide12")
                il=2;

                
                

            }
        })

        imagen_tachito3.addEventListener("click", e=>{
                            
            if(id_texto_estado3.innerHTML!=='De baja'){
                venatna_negra_inactivar.classList.remove("hide12")
                ix=3;

            }
            else{

                ventana_negra_activar_colaborador.classList.remove("hide12")
                il=3;

                
                

            }
        })

        imagen_tachito4.addEventListener("click", e=>{
                            
            if(id_texto_estado4.innerHTML!=='De baja'){
                venatna_negra_inactivar.classList.remove("hide12")
                ix=4;

            }

            else{

                ventana_negra_activar_colaborador.classList.remove("hide12")
                il=4;

                
                

            }

        })
        imagen_tachito5.addEventListener("click", e=>{
                            
            if(id_texto_estado5.innerHTML!=='De baja'){
                venatna_negra_inactivar.classList.remove("hide12")
                ix=5;

            }

            else{

                ventana_negra_activar_colaborador.classList.remove("hide12")
                il=5;

                
                

            }
        })





        otros_color2.addEventListener("click", e =>{
            if(cuadrilla_seleccion_estado.style.marginTop==='275px'){
                id_texto_estado.innerHTML='otros';
                id_texto_estado.style.color = " #52C41A";
                id_contorno_estado.style.backgroundColor = '#F6FFED';
                id_contorno_estado.style.border = '1px #B7EB8F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton.src ='';
                imagen_iconoco_boton.style.marginLeft='';
                id_contorno_estado.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='330px'){
                id_texto_estado2.innerHTML='otros';
                id_texto_estado2.style.color = " #52C41A";
                id_contorno_estado2.style.backgroundColor = '#F6FFED';
                id_contorno_estado2.style.border = '1px #B7EB8F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton2.src ='';
                imagen_iconoco_boton2.style.marginLeft='';
                id_contorno_estado2.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='385px'){
                id_texto_estado3.innerHTML='otros';
                id_texto_estado3.style.color = " #52C41A";
                id_contorno_estado3.style.backgroundColor = '#F6FFED';
                id_contorno_estado3.style.border = '1px #B7EB8F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton3.src ='';
                imagen_iconoco_boton3.style.marginLeft='';
                id_contorno_estado3.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='440px'){
                id_texto_estado4.innerHTML='otros';
                id_texto_estado4.style.color = " #52C41A";
                id_contorno_estado4.style.backgroundColor = '#F6FFED';
                id_contorno_estado4.style.border = '1px #B7EB8F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton4.src ='';
                imagen_iconoco_boton4.style.marginLeft='';
                id_contorno_estado4.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='495px'){
                id_texto_estado5.innerHTML='otros';
                id_texto_estado5.style.color = " #52C41A";
                id_contorno_estado5.style.backgroundColor = '#F6FFED';
                id_contorno_estado5.style.border = '1px #B7EB8F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton5.src ='';
                imagen_iconoco_boton5.style.marginLeft='';
                id_contorno_estado5.style.width = '';

            }

            
            
        })

        suspendido_color2.addEventListener("click", e =>{

            if(cuadrilla_seleccion_estado.style.marginTop==='275px'){
                id_texto_estado.innerHTML='medico';
                id_texto_estado.style.color = "#FAAD14";
                id_contorno_estado.style.backgroundColor = '#FFFBE6';
                id_contorno_estado.style.border = '1px #FFE58F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton.src ='';
                imagen_iconoco_boton.style.marginLeft='';
                id_contorno_estado.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='330px'){
                id_texto_estado2.innerHTML='medico';
                id_texto_estado2.style.color = "#FAAD14";
                id_contorno_estado2.style.backgroundColor = '#FFFBE6';
                id_contorno_estado2.style.border = '1px #FFE58F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton2.src ='';
                imagen_iconoco_boton2.style.marginLeft='';
                id_contorno_estado2.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='385px'){
                id_texto_estado3.innerHTML='medico';
                id_texto_estado3.style.color = "#FAAD14";
                id_contorno_estado3.style.backgroundColor = '#FFFBE6';
                id_contorno_estado3.style.border = '1px #FFE58F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton3.src ='';
                imagen_iconoco_boton3.style.marginLeft='';
                id_contorno_estado3.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='440px'){
                id_texto_estado4.innerHTML='medico';
                id_texto_estado4.style.color = "#FAAD14";
                id_contorno_estado4.style.backgroundColor = '#FFFBE6';
                id_contorno_estado4.style.border = '1px #FFE58F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton4.src ='';
                imagen_iconoco_boton4.style.marginLeft='';
                id_contorno_estado4.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='495px'){
                id_texto_estado5.innerHTML='medico';
                id_texto_estado5.style.color = "#FAAD14";
                id_contorno_estado5.style.backgroundColor = '#FFFBE6';
                id_contorno_estado5.style.border = '1px #FFE58F solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton5.src ='';
                imagen_iconoco_boton5.style.marginLeft='';
                id_contorno_estado5.style.width = '';

            }

            
            
        })


        inactivo_color2.addEventListener("click", e =>{


            if(cuadrilla_seleccion_estado.style.marginTop==='275px'){
                id_texto_estado.innerHTML='licencia';
                id_texto_estado.style.color = "#13C2C2";
                id_contorno_estado.style.backgroundColor = '#E6FFFB';
                id_contorno_estado.style.border = '1px #87E8DE solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton.src ='';
                imagen_iconoco_boton.style.marginLeft='';
                id_contorno_estado.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='330px'){
                id_texto_estado2.innerHTML='licencia';
                id_texto_estado2.style.color = "#13C2C2";
                id_contorno_estado2.style.backgroundColor = '#E6FFFB';
                id_contorno_estado2.style.border = '1px #87E8DE solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton2.src ='';
                imagen_iconoco_boton2.style.marginLeft='';
                id_contorno_estado2.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='385px'){
                id_texto_estado3.innerHTML='licencia';
                id_texto_estado3.style.color = "#13C2C2";
                id_contorno_estado3.style.backgroundColor = '#E6FFFB';
                id_contorno_estado3.style.border = '1px #87E8DE solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton3.src ='';
                imagen_iconoco_boton3.style.marginLeft='';
                id_contorno_estado3.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='440px'){
                id_texto_estado4.innerHTML='licencia';
                id_texto_estado4.style.color = "#13C2C2";
                id_contorno_estado4.style.backgroundColor = '#E6FFFB';
                id_contorno_estado4.style.border = '1px #87E8DE solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton4.src ='';
                imagen_iconoco_boton4.style.marginLeft='';
                id_contorno_estado4.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='495px'){
                id_texto_estado5.innerHTML='licencia';
                id_texto_estado5.style.color = "#13C2C2";
                id_contorno_estado5.style.backgroundColor = '#E6FFFB';
                id_contorno_estado5.style.border = '1px #87E8DE solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton5.src ='';
                imagen_iconoco_boton5.style.marginLeft='';
                id_contorno_estado5.style.width = '';

            
            }

            
            
        })


        activo_color2.addEventListener("click", e =>{

            

            if(cuadrilla_seleccion_estado.style.marginTop==='275px'){
                id_texto_estado.innerHTML='vacaciones';
                id_texto_estado.style.color = "#2A28C3";
                id_contorno_estado.style.backgroundColor = '#F1F0FF';
                id_contorno_estado.style.border = '1px #9B9FFD solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton.src ='';
                imagen_iconoco_boton.style.marginLeft='';
                id_contorno_estado.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='330px'){
                id_texto_estado2.innerHTML='vacaciones';
                id_texto_estado2.style.color = "#2A28C3";
                id_contorno_estado2.style.backgroundColor = '#F1F0FF';
                id_contorno_estado2.style.border = '1px #9B9FFD solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton2.src ='';
                imagen_iconoco_boton2.style.marginLeft='';
                id_contorno_estado2.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='385px'){
                id_texto_estado3.innerHTML='vacaciones';
                id_texto_estado3.style.color = "#2A28C3";
                id_contorno_estado3.style.backgroundColor = '#F1F0FF';
                id_contorno_estado3.style.border = '1px #9B9FFD solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton3.src ='';
                imagen_iconoco_boton3.style.marginLeft='';
                id_contorno_estado3.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='440px'){
                id_texto_estado4.innerHTML='vacaciones';
                id_texto_estado4.style.color = "#2A28C3";
                id_contorno_estado4.style.backgroundColor = '#F1F0FF';
                id_contorno_estado4.style.border = '1px #9B9FFD solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton4.src ='';
                imagen_iconoco_boton4.style.marginLeft='';
                id_contorno_estado4.style.width = '';

            }
            if(cuadrilla_seleccion_estado.style.marginTop==='495px'){
                id_texto_estado5.innerHTML='vacaciones';
                id_texto_estado5.style.color = "#2A28C3";
                id_contorno_estado5.style.backgroundColor = '#F1F0FF';
                id_contorno_estado5.style.border = '1px #9B9FFD  solid';
                seleccion_estado2.classList.add("hide12");
                imagen_iconoco_boton5.src ='';
                imagen_iconoco_boton5.style.marginLeft='';
                id_contorno_estado5.style.width = '';

            
            }
            
        })


        imagen_iconoco_boton.addEventListener("click", e=>{
                    
                seleccion_estado2.classList.remove("hide12")
                cuadrilla_seleccion_estado.style.marginTop='275px';
        })
        imagen_iconoco_boton2.addEventListener("click", e=>{
                    
                seleccion_estado2.classList.remove("hide12")
                cuadrilla_seleccion_estado.style.marginTop='330px';
        })
        imagen_iconoco_boton3.addEventListener("click", e=>{
                    
                seleccion_estado2.classList.remove("hide12")
                cuadrilla_seleccion_estado.style.marginTop='385px';
        })
        imagen_iconoco_boton4.addEventListener("click", e=>{
                    
                seleccion_estado2.classList.remove("hide12")
                cuadrilla_seleccion_estado.style.marginTop='440px';
        })
        imagen_iconoco_boton5.addEventListener("click", e=>{
                    
                seleccion_estado2.classList.remove("hide12")
                cuadrilla_seleccion_estado.style.marginTop='495px';
        })



        id_boton_editar_cancelar.addEventListener("click", e=>{
                    
                ventana_negra_editar.classList.add("hide12")
        })



        imagen_editar.addEventListener("click", e=>{
            
            ventana_negra_editar.classList.remove("hide12")
            i=1;
       })
       imagen_editar2.addEventListener("click", e=>{
            
            ventana_negra_editar.classList.remove("hide12")
            i=2;
       })
       imagen_editar3.addEventListener("click", e=>{
            
            ventana_negra_editar.classList.remove("hide12")
            i=3;
       })
       imagen_editar4.addEventListener("click", e=>{
            
            ventana_negra_editar.classList.remove("hide12")
            i=4;
       })
       imagen_editar5.addEventListener("click", e=>{
            
            ventana_negra_editar.classList.remove("hide12")
            i=5;
       })

        


        miInput_cuenta.addEventListener('input', function() {

            if (miInput_cuenta.value.trim() !== '') {
                id_añade_botom.style.backgroundColor = '#2A28C3'; // Cambia a un color naranja
                añade_text.style.color = "#FFFFFF"; // Cambia a un color naranja    
                id_imagen_cruz.src = "fotos_añadir_colaborador_IPAY/Union.png"; 
            } else {
                id_añade_botom.style.backgroundColor = '#F5F5F5'; // Cambia a un color naranja
                añade_text.style.color = "rgba(0, 0, 0, 0.25)"; // Ca Vuelve al color verde
                id_imagen_cruz.src = "fotos_añadir_colaborador_IPAY/Plus.png"; 
            
            }
      // Cambiar el color del div
    
        });
    

        id_click_arrastrar.addEventListener("click", e =>{

                            
            
            ventana_cargar_documento.classList.remove("hide12")
            
        });


        id_boton_añadir_colaborador.addEventListener("click", e =>{

                        
            boton_colaborador_añade.classList.add("hide12")
            cuadro_subir_archivo.classList.remove("hide12")
            
        });

        id_ver_colaborador.addEventListener("click", e =>{

                    
            revisar_datos.classList.remove("hide12")
            ventana_acpetar_colaborador.classList.add("hide12")
            aña_colaboradores.classList.add("hide12")
        });

        id_añade_botom.addEventListener("click", e =>{

                
            ventana_acpetar_colaborador.classList.remove("hide12")
        });



        id_aceptar_colaborador.addEventListener("click", e =>{

            
            ventana_acpetar_colaborador.classList.add("hide12")
            id_nombre_colaborador.value=''
            id_apellido_colaborador.value=''
            id_dni_colaborador.value=''
            id_dni_opcional_colaborador.value=''
            id_subsidiaria_colaborador.value=''
            id_fecha_colaborador.value=''
            id_fecha_colaborador_fin.value=''
            id_retribucion_colaborador.value=''
            texto_estado.style.color= 'rgba(0, 0, 0, 0.25)';
            texto_estado.innerHTML='Selecciona el estado';
            seleccionTexto.style.color= 'rgba(0, 0, 0, 0.25)';
            seleccionTexto.innerHTML='Selecciona entidad'
            texto_tipo_cuenta.innerHTML='Selecciona tu tipo de cuenta'
            texto_tipo_cuenta.style.color= 'rgba(0, 0, 0, 0.25)';
            miInput_cuenta.value=''

            retangulo_bola.style.backgroundColor = ' #9B9FFD';
            bola_1.style.marginLeft = '-15px';
            bola_1.style.transition = 'left 1s ease-in-out';
        });




        ahorro_color.addEventListener("click", e =>{

            texto_tipo_cuenta.innerHTML ='Ahorros';
            texto_tipo_cuenta.style.color ='#000000';
            seleccion_tipo.classList.add("hide12")
        });

        corriente_color.addEventListener("click", e =>{

            texto_tipo_cuenta.innerHTML ='Corriente';
            texto_tipo_cuenta.style.color ='#000000';
            seleccion_tipo.classList.add("hide12")
        });


        id_tipo_cuenta.addEventListener("click", e =>{

            seleccion_tipo.classList.remove("hide12")
          
        });





        

        activo_color.addEventListener("click", e =>{

            texto_estado.innerHTML ='Activo';
            texto_estado.style.color ='#000000';
            seleccion_estado.classList.add("hide12")
        });

        inactivo_color.addEventListener("click", e =>{

            texto_estado.innerHTML ='Inactivo';
            texto_estado.style.color ='#000000';
            seleccion_estado.classList.add("hide12")
        });

        suspendido_color.addEventListener("click", e =>{

            texto_estado.innerHTML ='Suspendido';
            texto_estado.style.color ='#000000';
            seleccion_estado.classList.add("hide12")
        });


        activo_color3.addEventListener("click", e =>{

            texto_estado2.innerHTML ='Activo';
            texto_estado2.style.color ='#000000';
            seleccion_estado3.classList.add("hide12")
        });

        inactivo_color3.addEventListener("click", e =>{

            texto_estado2.innerHTML ='Inactivo';
            texto_estado2.style.color ='#000000';
            seleccion_estado3.classList.add("hide12")
        });

        suspendido_color3.addEventListener("click", e =>{

            texto_estado2.innerHTML ='Suspendido';
            texto_estado2.style.color ='#000000';
            seleccion_estado3.classList.add("hide12")
        });






        banco_credito_color.addEventListener("click", e =>{

            seleccionTexto.innerHTML ='Banco de Crédito del Perú';
            seleccionTexto.style.color ='#000000';
            seleccion_entidad.classList.add("hide12")
        });

        bbva_color.addEventListener("click", e =>{

            seleccionTexto.innerHTML ='BBVA Continental';
            seleccionTexto.style.color ='#000000';
            seleccion_entidad.classList.add("hide12")
        });

        interbanck_color.addEventListener("click", e =>{

            seleccionTexto.innerHTML ='Interbank';
            seleccionTexto.style.color ='#000000';
            seleccion_entidad.classList.add("hide12")
        });





        id_entidad.addEventListener("click", e =>{

            seleccion_entidad.classList.remove("hide12")
            seleccion_estado.classList.add("hide12")
           
        
            
                            
        });

        id_estado.addEventListener("click", e =>{

            seleccion_estado.classList.remove("hide12")
            seleccion_entidad.classList.add("hide12")
       
    
        
                         
        });
        // Tu código aquí

        id_neto.addEventListener("click", e =>{

            retangulo_bola.style.backgroundColor = ' #2A28C3';
            bola_1.style.marginLeft = '32px';
            bola_1.style.transition = 'left 1s ease-in-out';
            
                
                                
        });
        id_bruto.addEventListener("click", e =>{

            retangulo_bola.style.backgroundColor = ' #9B9FFD';
            bola_1.style.marginLeft = '-15px';
            bola_1.style.transition = 'left 1s ease-in-out';
            
                
                                
        });

        id_un_colaborador.addEventListener("click", e =>{

            aña_colaboradores.classList.remove("hide12")
            varios_colaboradores.classList.add("hide12")
            liquidacion.classList.add("hide12")
            transacciones.classList.add("hide12")
            ventanaD.classList.add("hide12")
            inactivar.classList.add("hide12")
            revisar_datos.classList.add("hide12")
            
                
                                
        });
            
        
        
        id_varios_colaboradores.addEventListener("click", e =>{
        
            varios_colaboradores.classList.remove("hide12")
            aña_colaboradores.classList.add("hide12")
            liquidacion.classList.add("hide12")
            transacciones.classList.add("hide12")
            ventanaD.classList.add("hide12")
            inactivar.classList.add("hide12")
            revisar_datos.classList.add("hide12")
            
                
                                
        })
            
        
        id_añadir_colaborador.addEventListener("click", e =>{
        
            dupla_colaborador.classList.remove("hide12")
            
                            
        })
        
        id_lista_liquidacion.addEventListener("click", e =>{
        
            liquidacion.classList.remove("hide12")
            transacciones.classList.add("hide12")
            ventanaD.classList.add("hide12")
            inactivar.classList.add("hide12")
            revisar_datos.classList.add("hide12")
            dupla_colaborador.classList.add("hide12")
        
            varios_colaboradores.classList.add("hide12")
            aña_colaboradores.classList.add("hide12")
                        
        })
        
        
        
        id_lista_transacciones.addEventListener("click", e =>{
         
            transacciones.classList.remove("hide12")
            ventanaD.classList.add("hide12")
            inactivar.classList.add("hide12")
            revisar_datos.classList.add("hide12")
            liquidacion.classList.add("hide12")
            dupla_colaborador.classList.add("hide12")
        
            varios_colaboradores.classList.add("hide12")
            aña_colaboradores.classList.add("hide12")
                    
        })
        
        id_revisar_datos.addEventListener("click", e =>{
         
            revisar_datos.classList.remove("hide12")
            ventanaD.classList.add("hide12")
            inactivar.classList.add("hide12")
            transacciones.classList.add("hide12")
            liquidacion.classList.add("hide12")
            dupla_colaborador.classList.add("hide12")
        
            varios_colaboradores.classList.add("hide12")
            aña_colaboradores.classList.add("hide12")
                
        })
        
        id_inactivar.addEventListener("click", e =>{
         
            inactivar.classList.remove("hide12");
            ventanaD.classList.add("hide12");
            revisar_datos.classList.add("hide12");
            transacciones.classList.add("hide12");
            liquidacion.classList.add("hide12");
            dupla_colaborador.classList.add("hide12");
        
            varios_colaboradores.classList.add("hide12");
            aña_colaboradores.classList.add("hide12")
            
        })
            
            
        Res.addEventListener("click", e =>{
           
            ventanaD.classList.remove("hide12")
            inactivar.classList.add("hide12")
            revisar_datos.classList.add("hide12")
            liquidacion.classList.add("hide12")
            transacciones.classList.add("hide12")
            dupla_colaborador.classList.add("hide12")
        
            varios_colaboradores.classList.add("hide12")
            aña_colaboradores.classList.add("hide12")
        })
        
              
            
});


btsSignIn.addEventListener("click", e=>{
    formventana1.classList.add("hide");
    formventana2.classList.remove("hide")
})

btsSignIn1.addEventListener("click", e=>{
    formventana2.classList.add("hide");
    formventana3.classList.remove("hide")
})

olidoContra.addEventListener("click", e=>{
    formventana1.classList.add("hide");
    formventana4.classList.remove("hide")
})

enviarContra.addEventListener("click", e=>{
    formventana4.classList.add("hide");
    formventana5.classList.remove("hide")
})

inicio1o.addEventListener("click", e=>{
    formventana3.classList.add("hide");
    formventana6.classList.remove("hide")
})

inicio2.addEventListener("click", e=>{
    formventana5.classList.add("hide");
    formventana6.classList.remove("hide")
})

nuevaContra.addEventListener("click", e=>{
    formventana6.classList.add("hide");
    formventana4.classList.remove("hide")
})




var input = document.getElementById('miInput');
var miDiv = document.getElementById('miDiv');
var contra2 = document.getElementById('contra2');

// Añadir un listener al evento 'input' en el campo de entrada
input.addEventListener('input', function() {

    if (input.value.trim() !== '') {
        miDiv.style.backgroundColor = '#2A28C3'; // Cambia a un color naranja
        contra2.style.color = "#FFFFFF"; // Cambia a un color naranja
      } else {
        miDiv.style.backgroundColor = '#F5F5F5'; // Cambia a un color naranja
        contra2.style.color = "rgba(0, 0, 0, 0.25)"; // Ca Vuelve al color verde
      }
  // Cambiar el color del div

});



var input1 = document.getElementById('miInput1');
var miDiv1 = document.getElementById('miDiv1');
var contra = document.getElementById('contra');

input1.addEventListener('input', function() {

    if (input1.value.trim() !== '') {
        miDiv1.style.backgroundColor = '#2A28C3'; // Cambia a un color naranja
        contra.style.color = "#FFFFFF"; // Cambia a un color naranja
      } else {
        miDiv1.style.backgroundColor = '#F5F5F5'; // Cambia a un color naranja
        contra.style.color = "rgba(0, 0, 0, 0.25)"; // Ca Vuelve al color verde
      }
  // Cambiar el color del div

});




var input2 = document.getElementById('miInput2');
var miDiv2 = document.getElementById('miDiv2');
var confirmar = document.getElementById('confirmar');

input2.addEventListener('input', function() {

    if (input2.value.trim() !== '') {
        miDiv2.style.backgroundColor = '#2A28C3'; // Cambia a un color naranja
        confirmar.style.color = "#FFFFFF"; // Cambia a un color naranja
      } else {
        miDiv2.style.backgroundColor = '#F5F5F5'; // Cambia a un color naranja
        confirmar.style.color = "rgba(0, 0, 0, 0.25)"; // Ca Vuelve al color verde
      }
  // Cambiar el color del div

});


const punto1= document.getElementById("p1"),
      punto11= document.getElementById("p11"),
      punto2= document.getElementById("p2"),
      punto22= document.getElementById("p22"),
      punto3= document.getElementById("p3"),
      punto33= document.getElementById("p33"),
      punto4= document.getElementById("p4"),
      punto44= document.getElementById("p44"),
      unoo= document.getElementById("uno"),
      dosoo= document.getElementById("dos"),
      tress= document.getElementById("tres"),
      cuatroo= document.getElementById("cuatro"),
      cincoo= document.getElementById("cinco"),
      seiss= document.getElementById("seis"),
      sietee= document.getElementById("siete"),
      ochoo= document.getElementById("ocho"),
      nuevee= document.getElementById("nueve"),
      ceroo= document.getElementById("cero"),
      contrario= document.getElementById("po"),
      contrario1= document.getElementById("textoIniciarSesion"),
      contra10= document.getElementById("contra10"),
      borrar_uno= document.getElementById("borrar_uno"),
      BorrarTodo= document.getElementById("borrar_todo"),
      tabla=document.querySelector(".tabla");
      
     
      var conteo = 0;

     

contra10.addEventListener("click", e=>{
    tabla.classList.add("hide");
        
})     

contrario1.addEventListener("click", e=>{
    tabla.classList.add("hide");
        
})  
punto1.addEventListener("click", e=>{
    tabla.classList.remove("hide");
    
})

punto2.addEventListener("click", e=>{
    tabla.classList.remove("hide");
    
})

punto3.addEventListener("click", e=>{
    tabla.classList.remove("hide");
    
})

punto4.addEventListener("click", e=>{
    tabla.classList.remove("hide");
    
})

BorrarTodo.addEventListener("click", e=>{
    tabla.classList.add("hide");
    punto11.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    punto22.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    punto33.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    punto44.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    contrario.style.backgroundColor = '#F5F5F5';
    contrario1.style.color= "rgba(0, 0, 0, 0.25)";
    conteo=0;
    
    

        
})

unoo.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})

dosoo.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})
tress.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})

cuatroo.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})


cincoo.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})


seiss.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})

sietee.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})

ochoo.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})

nuevee.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})

ceroo.addEventListener("click", e=>{

    conteo=conteo+1;
    if(conteo===1){
        punto11.style.backgroundColor = '#2A28C3';
        contrario.style.backgroundColor = '#2A28C3';
        contrario1.style.color= '#F5F5FF';

    }

    if(conteo===2){
        punto22.style.backgroundColor = '#2A28C3';

    }
    if(conteo===3){
        punto33.style.backgroundColor = '#2A28C3';

    }
    if(conteo===4){
        punto44.style.backgroundColor = '#2A28C3';

    }

   
        
})

borrar_uno.addEventListener("click", e=>{

    if(conteo>4){
        conteo=4

    }
    
    if(conteo===1){
     
        punto11.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        conteo=conteo-1
        contrario.style.backgroundColor = '#F5F5F5';
        contrario1.style.color= "rgba(0, 0, 0, 0.25)";

    }

    if(conteo===2){
        punto22.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        conteo=conteo-1

    }
    if(conteo===3){
        punto33.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        conteo=conteo-1

    }
    if(conteo===4){
        punto44.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        conteo=conteo-1
        

    }
        
})




function cambiarColor1(cerca) {

  
    const divuno = document.getElementById('uno');
    const divuno1 = document.getElementById('1uno');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divuno.style.backgroundColor = '#2A28C3';
        divuno1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divuno.style.backgroundColor = '#F5F5FF';
        divuno1.style.color = '#2A28C3'; // Color del texto
    }
}

function cambiarColor2(cerca) {

  
    const divdos = document.getElementById('dos');
    const divdos1 = document.getElementById('1dos');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divdos.style.backgroundColor = '#2A28C3';
        divdos1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divdos.style.backgroundColor = '#F5F5FF';
        divdos1.style.color = '#2A28C3'; // Color del texto
    }
}
function cambiarColor3(cerca) {

  
    const divtres = document.getElementById('tres');
    const divtres1 = document.getElementById('1tres');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divtres.style.backgroundColor = '#2A28C3';
        divtres1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divtres.style.backgroundColor = '#F5F5FF';
        divtres1.style.color = '#2A28C3'; // Color del texto
    }
}
function cambiarColor4(cerca) {

  
    const divcuatro = document.getElementById('cuatro');
    const divcuatro1 = document.getElementById('1cuatro');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divcuatro.style.backgroundColor = '#2A28C3';
        divcuatro1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divcuatro.style.backgroundColor = '#F5F5FF';
        divcuatro1.style.color = '#2A28C3'; // Color del texto
    }
}


function cambiarColor5(cerca) {

    const divCinco = document.getElementById('cinco');
    const divCinco1 = document.getElementById('1cinco');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
        divCinco.style.backgroundColor = '#2A28C3';
        divCinco1.style.color = '#F5F5FF'; // Color del texto
       
    } else {
        // Vuelve al color original cuando el cursor se aleja
        divCinco.style.backgroundColor = '#F5F5FF';
        divCinco1.style.color = '#2A28C3'; // Color del texto
      
    }
}

function cambiarColor6(cerca) {

  
    const divseis = document.getElementById('seis');
    const divseis1 = document.getElementById('1seis');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divseis.style.backgroundColor = '#2A28C3';
        divseis1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divseis.style.backgroundColor = '#F5F5FF';
        divseis1.style.color = '#2A28C3'; // Color del texto
    }
}

function cambiarColor7(cerca) {

  
    const divsiete = document.getElementById('siete');
    const divsiete1 = document.getElementById('1siete');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divsiete.style.backgroundColor = '#2A28C3';
        divsiete1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divsiete.style.backgroundColor = '#F5F5FF';
        divsiete1.style.color = '#2A28C3'; // Color del texto
    }
}


function cambiarColor8(cerca) {

  
    const divocho = document.getElementById('ocho');
    const divocho1 = document.getElementById('1ocho');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divocho.style.backgroundColor = '#2A28C3';
        divocho1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divocho.style.backgroundColor = '#F5F5FF';
        divocho1.style.color = '#2A28C3'; // Color del texto
    }
}


function cambiarColor9(cerca) {

  
    const divnueve = document.getElementById('nueve');
    const divnueve1 = document.getElementById('1nueve');
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divnueve.style.backgroundColor = '#2A28C3';
        divnueve1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divnueve.style.backgroundColor = '#F5F5FF';
        divnueve1.style.color = '#2A28C3'; // Color del texto
    }
}


function cambiarColor0(cerca) {

  
    const divcero = document.getElementById('cero');
    const divcero1 = document.getElementById('1cero');
    
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        divcero.style.backgroundColor = '#2A28C3';
        divcero1.style.color = '#F5F5FF'; // Color del texto
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        divcero.style.backgroundColor = '#F5F5FF';
        divcero1.style.color = '#2A28C3'; // Color del texto
    }
}

function cambiarColorborratodo(cerca) {

  
    const borrar_todo = document.getElementById('borrar_todo');
    const imagen = document.getElementById("imagenBorrarTodo");

    
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        borrar_todo.style.backgroundColor = '#2A28C3';
        imagen.src = "DeleteOutlined (1).png"; 
       
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        borrar_todo.style.backgroundColor = '#F5F5FF';
        imagen.src = "DeleteOutlined.png"; 
       
    }
}

function cambiarColorborraUno(cerca) {

  
    const borrar_uno = document.getElementById('borrar_uno');
    const imagen1 = document.getElementById("imagenBorrarUno");

    
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        borrar_uno.style.backgroundColor = '#2A28C3';
        imagen1.src = "Vector_nuevo.png"; 
       
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        borrar_uno.style.backgroundColor = '#F5F5FF';
        imagen1.src = "close.png"; 
       
    }
}



function notificacion1(cerca) {

  
    const noti1=document.querySelector(".noti1");
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
       
        noti1.classList.remove("hide12");
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        noti1.classList.add("hide12");
    }
}


function notificacion2(cerca) {

  
    const noti2=document.querySelector(".noti2");
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
       
        noti2.classList.remove("hide12");
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        noti2.classList.add("hide12");
    }
}


function notificacion3(cerca) {

  
    const noti3=document.querySelector(".noti3");
   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
       
        noti3.classList.remove("hide12");
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        noti3.classList.add("hide12");
    }
}











// Función para cambiar el estado de p1 y actualizar el botón de inicio de sesión


let isChecked = false;

    function toggleCheckbox() {
        const checkbox = document.getElementById("checkbox");

        isChecked = !isChecked;

        if (isChecked) {
            // Marcar
            checkbox.innerHTML = '✔'; // Puedes cambiar el símbolo según tu preferencia
        } else {
            // Desmarcar
            checkbox.innerHTML = ''; // Elimina el contenido para desmarcar
        }
}










function moverRectangulo(elementoTexto, texto) {
    var rectangulo = document.getElementById('miRectangulo');
    var posicionTexto = elementoTexto.getBoundingClientRect();
    
    // Calcular la posición deseada para el rectángulo
    var nuevaPosicion = posicionTexto.top - rectangulo.clientHeight - 40; // Añadir separación
    
    // Mover el rectángulo a la nueva posición
    rectangulo.style.marginTop = nuevaPosicion + "px";
    
    // Establecer el texto del rectángulo
   
  }











  function cambiarColor_banco(cerca) {

  
    const banco_credito_color = document.getElementById('banco_credito_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        banco_credito_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        banco_credito_color.style.backgroundColor = '#FFFFFF';
       
    }
}


function cambiarColor_bbva(cerca) {

  
    const bbva_color = document.getElementById('bbva_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        bbva_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        bbva_color.style.backgroundColor = '#FFFFFF';
       
    }
}

function cambiarColor_inter(cerca) {

  
    const interbanck_color = document.getElementById('interbanck_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        interbanck_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        interbanck_color.style.backgroundColor = '#FFFFFF';
       
    }
}






function cambiarColor_activo(cerca) {

  
    const activo_color = document.getElementById('activo_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        activo_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        activo_color.style.backgroundColor = '#FFFFFF';
       
    }
}


function cambiarColor_inactivo(cerca) {

  
    const inactivo_color = document.getElementById('inactivo_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        inactivo_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        inactivo_color.style.backgroundColor = '#FFFFFF';
       
    }
}



function cambiarColor_suspendido(cerca) {

  
    const suspendido_color = document.getElementById('suspendido_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        suspendido_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        suspendido_color.style.backgroundColor = '#FFFFFF';
       
    }
}





function cambiarColor_ahorro(cerca) {

  
    const ahorro_color = document.getElementById('ahorro_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        ahorro_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        ahorro_color.style.backgroundColor = '#FFFFFF';
       
    }
}




function cambiarColor_corriente(cerca) {

  
    const corriente_color = document.getElementById('corriente_color');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        corriente_color.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        corriente_color.style.backgroundColor = '#FFFFFF';
       
    }
}









function cambiarColor_activo2(cerca) {

  
    const activo_color2 = document.getElementById('activo_color2');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        activo_color2.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        activo_color2.style.backgroundColor = '#FFFFFF';
       
    }
}


function cambiarColor_inactivo2(cerca) {

  
    const inactivo_color2 = document.getElementById('inactivo_color2');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        inactivo_color2.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        inactivo_color2.style.backgroundColor = '#FFFFFF';
       
    }
}



function cambiarColor_suspendido2(cerca) {

  
    const suspendido_color2 = document.getElementById('suspendido_color2');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        suspendido_color2.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        suspendido_color2.style.backgroundColor = '#FFFFFF';
       
    }
}


function cambiarColor_otros2(cerca) {

  
    const otros_color2 = document.getElementById('otros_color2');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        otros_color2.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        otros_color2.style.backgroundColor = '#FFFFFF';
       
    }
}








function cambiarColor_activo3(cerca) {

  
    const activo_color3 = document.getElementById('activo_color3');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        activo_color3.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        activo_color3.style.backgroundColor = '#FFFFFF';
       
    }
}




function cambiarColor_inactivo3(cerca) {

  
    const inactivo_color3 = document.getElementById('inactivo_color3');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        inactivo_color3.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        inactivo_color3.style.backgroundColor = '#FFFFFF';
       
    }
}



function cambiarColor_suspendido3(cerca) {

  
    const suspendido_color3 = document.getElementById('suspendido_color3');

   


    if (cerca) {
        // Cambia el color cuando el cursor está cerca
      
        suspendido_color3.style.backgroundColor = '#F5F5F5';
      
    } else {
        // Vuelve al color original cuando el cursor se aleja
      
        suspendido_color3.style.backgroundColor = '#FFFFFF';
       
    }
}
