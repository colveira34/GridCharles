
class Helados{
    constructor(descSabor){
        this.descSabor = descSabor;
        this.tipo1 = "CUCURUCHO";
        this.tipo2 = "1KG HELADO";
        this.tipo3 = "1/4 HELADO";
    }   
  }
   
  let arraySabores = [];
  let totalSaboresCH = 0;
  let totalSaboresNA = 0;
  let totalSaboresFR = 0;
  let totalSaboresCHBL=0;
 
  let contadorCH = 0;
  let contadorNA = 0;
 

  arraySabores.push(new Helados("CHOCOLATE"));
  arraySabores.push(new Helados("NARANJA"));
  arraySabores.push(new Helados("FRUTILLA"));
  arraySabores.push(new Helados("CHOCOLATE BLANCO"));

   
  //Voy creando los botones (agregar y quitar) en función de los sabores instanciados

    for (let i in arraySabores){
        if(arraySabores[i].descSabor == "CHOCOLATE"){
            $("#saboresCH").append(`
              <div>
                  <button  
                      class="buy">
                    AgregarCH
                  </button>
                  <button  
                      class="buyQuitar">
                    QuitarCH
                  </button>
              </div>
            `);
        }else if(arraySabores[i].descSabor == "NARANJA"){
            $("#saboresNA").append(`
              <div>
                  <button  
                      class="buyNA">
                    AgregarNA
                  </button>
                  <button  
                      class="buyQuitarNA">
                    QuitarNA
                  </button>
              </div>
            `);
          }else if(arraySabores[i].descSabor == "FRUTILLA"){
            $("#saboresFR").append(`
              <div>
                <button  
                    class="buyFR">
                  AgregarFR
                </button>
                <button  
                    class="buyQuitarFR">
                  QuitarFR
                </button>
              </div>
            `);
          }else if(arraySabores[i].descSabor == "DULCE DE LECHE"){
            $("#saboresDL").append(`
                <div>
                    <button  
                        class="buyDL">
                      AgregarDL
                    </button>
                    <button  
                        class="buyQuitarDL">
                      QuitarDL
                    </button>
                </div>
            `);
          }else if(arraySabores[i].descSabor == "CHOCOLATE BLANCO"){
            $("#saboresCHBL").append(`
                <div>
                    <button  
                        class="buyCHBL">
                      AgregarCHBL
                    </button>
                    <button  
                        class="buyQuitarCHBL">
                      QuitarCHBL
                    </button>
                </div>
            `);
          }else if(arraySabores[i].descSabor == "PISTACHO"){
             $("#saboresPS").append(`       
                <div>
                    <button  
                        class="buyPS">
                      AgregarPS
                    </button>
                    <button  
                        class="buyQuitarPS">
                      QuitarPS
                    </button>
                </div>  
             `);
          }else if(arraySabores[i].descSabor == "MARACUYA"){
            $("#saboresMA").append(`
              <div>
                  <button  
                      class="buyMA">
                    AgregarMA
                  </button>
                  <button  
                      class="buyQuitarMA">
                    QuitarMA
                  </button>
              </div>     
              `);
          }else if(arraySabores[i].descSabor == "LIMON"){
            $("#saboresLI").append(`
              <div>
                  <button  
                      class="buyLI">
                    AgregarLI
                  </button>
                  <button  
                      class="buyQuitarLI">
                    QuitarLI
                  </button>
              </div>  
            `);
          }
        }
   
      let i=0; //Uso esta variable para mostrar el listado de los tipos de helado
        $("body").append(`
            <br>
            <br>
          <h1 id="moverTitulo">Formulario para registrar la compra</h1>
          <div id="moveLeft">
              <form id="myform">
              <input type="text" placeholder="Ingrese nombre"><br>
              <br>
              <input type="text" placeholder="Ingrese apellido"><br><br>
              <select class="tipoHelados">
                      <option value = "1" selected> ${arraySabores[i].tipo1}</option>
                      <option value = "2" selected> ${arraySabores[i].tipo2}</option>
                      <option value = "3" selected> ${arraySabores[i].tipo3}</option>
              </select>
              <br>
              <br>
              <input type = "number" placeholder="Ingrese Cant. a llevar">
              <br>
              <br>
              <input type="text" placeholder = "Ingrese forma de pago"><br>
              <br>
              <button type="submit">Confirmar Compra</button>
              </form>
          </div>
         `);
     
         $("#myform").submit(function(e){
            e.preventDefault();
            let hijos =  $(this).children(":input");  
            let seleccion = $('.tipoHelados').children(":selected");
            //console.log(seleccion[0].value); //VALUE=3 (1/4 HELADO) VALUE=2(1KG HELAD)
            
            if(seleccion[0].value == "1"){
              $("body").append(`
                 <div id="moverForm">
                        <h1>Detalle de la Compra Realizada</h1>
                        <h3>Nombre: ${hijos[0].value}</h3>
                        <h3>Nombre: ${hijos[1].value}</h3>
                        <h3>Tipo Helado: CUCURUCHO </h3>
                        <h3>Valor del helado: $${hijos[3].value*150}</h3>
                        <h3>Forma de pago: ${hijos[4].value} </h3>
                        <h3>Cant Sabores: ${saboresComprados()}</h3>
                 </div> 
              `);
              
            } else if(seleccion[0].value == "2"){
                  $("body").append(`
                  <div id="moverForm">
                        <h1>Detalle de la Compra Realizada</h1>
                        <h3>Nombre: ${hijos[0].value}</h3>
                        <h3>Nombre: ${hijos[1].value}</h3>
                        <h3>Tipo Helado: 1KG HELADO </h3>
                        <h3>Valor del helado: $${hijos[3].value*1200}</h3>
                        <h3>Forma de pago: ${hijos[4].value} </h3>
                        <h3>Cant Sabores: ${saboresComprados()}</h3>
                  </div> 
              `);
            }else if(seleccion[0].value == "3"){
                $("body").append(`
                <div id="moverForm">
                      <h1>Detalle de la Compra Realizada</h1>
                      <h3>Nombre: ${hijos[0].value}</h3>
                      <h3>Nombre: ${hijos[1].value}</h3>
                      <h3>Tipo Helado: 1/4 HELADO </h3>
                      <h3>Valor del helado: $${hijos[3].value*500}</h3>
                      <h3>Forma de pago: ${hijos[4].value} </h3>
                      <h3>Cant Sabores: ${saboresComprados()}</h3>
                </div> 
              `);
            }
        });
      
        $("body").css({"margin-right": "100px"});
  
    //Agrego cantidad de sabores (Chocolate Blanco)
    function cargoSaboresCHBL(){
      $("#btnCHBL").html(`<h2>CHOCOLATE BLANCO: ${totalSaboresCHBL} </h2>`);
      JSON.stringify(localStorage.setItem("CHOCOLATE BLANCO", totalSaboresCHBL));
      totalSaboresCHBL++;
    }
    
    //Quito cantidades de sabores (Chocolate Blanco)
    function quitarSaboresCHBL(){
      contCHBL = JSON.parse(localStorage.getItem("CHOCOLATE BLANCO"));
      
      if(contCHBL>0){
        contCHBL -=1;
        $("#btnCHBL").html(`<h2>CHOCOLATE BLANCO: ${contCHBL} </h2>`);
        JSON.stringify(localStorage.setItem("CHOCOLATE BLANCO", contCHBL));
        totalSaboresCHBL-=1;
      }
    }

    //Agrego cantidad de sabores (Chocolate)
    function cargoSaboresCH(){ 
        $("#btnCH").html(`<h2>CHOCOLATE: ${totalSaboresCH}</h2>`);
        JSON.stringify(localStorage.setItem("CHOCOLATE", totalSaboresCH));
        totalSaboresCH++;
    }
  
    //Quito cantidad de Sabores de Chocolate
    function quitarCH(){
       contCH = JSON.parse(localStorage.getItem("CHOCOLATE"));
        
      if(contCH>0){
        contCH -=1;
        $("#btnCH").html(`<h2>CHOCOLATE: ${contCH}</h2>`);
        JSON.stringify(localStorage.setItem("CHOCOLATE", contCH))
        totalSaboresCH -=1;
      }
    }

     //Agrego cantidad de sabores (Naranja)
     function cargoSaboresNA(){ 
      $("#btnNA").html(`<h2>NARANJA: ${totalSaboresNA}</h2>`);
      JSON.stringify(localStorage.setItem("NARANJA", totalSaboresNA));
      totalSaboresNA++;
    }

    //Quito cantidad de sabores (Naranja)
    function quitarNA(){
      contNA = JSON.parse(localStorage.getItem("NARANJA"));

      if(contNA > 0){
        contNA -=1;
        $("#btnNA").html(`<h2>NARANJA: ${contNA}</h2>`);
        JSON.stringify(localStorage.setItem("NARANJA", contNA));
        totalSaboresNA -=1;
      }
    }
     //Agrego los sabores de Frutilla
    function cargoSaboresFR(){
      $("#btnFR").html(`<h2>FRUTILLA: ${totalSaboresFR} </h2>`);
      JSON.stringify(localStorage.setItem("FRUTILLA", totalSaboresFR));
      totalSaboresFR++;
    }

    //Quito los sabores de Frutilla
    function quitarFR(){
      contFR = JSON.parse(localStorage.getItem("FRUTILLA"));

      if(contFR > 0){
        contFR -=1;
        $("#btnFR").html(`<h2>FRUTILLA: ${contFR}</h2>`);
        JSON.stringify(localStorage.setItem("FRUTILLA", contFR));
        totalSaboresFR -=1;
      }
    }
   
    //Sumo al formulario de compra la cantidad total de sabores seleccionados
    function saboresComprados(){
      cantCH = JSON.parse(localStorage.getItem("CHOCOLATE"));
      cantNA = JSON.parse(localStorage.getItem("NARANJA"));
      cantFR = JSON.parse(localStorage.getItem("FRUTILLA"));
      cantCHBL = JSON.parse(localStorage.getItem("CHOCOLATE BLANCO"));

      total = cantCH + cantNA + cantFR + cantCHBL;

      return total;
    }

    cargoSaboresCH();
    cargoSaboresNA();
    cargoSaboresFR();
    cargoSaboresCHBL();
    
    quitarFR();
   
    //Ejecuto el evento que agregar los sabores de Chocolate Blanco
    $('.buyCHBL').click((e) =>{
       cargoSaboresCHBL();
    });

    //ejecuto el evento que quita los sabores de Chocolate Blanco
    $('.buyQuitarCHBL').click((e) =>{
      quitarSaboresCHBL();
    });


    //Ejecuto el evento que agrega los sabores de Chocolate
    $('.buy').click((e)=>{
        cargoSaboresCH();
         contadorCH++;
         if(contadorCH==6){
            $("#btnCH").html(`<h2>NO HAY MAS STOCK DEL SABOR CHOCOLATE<H2>`);
            $('.buy').html(`
                    <button  
                        class="buy"
                        disabled
                        >
                        AgregarCH
                    </button>
            `)
            $('#avisoCH').append(`
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Mensaje Importante
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title" id="exampleModalLabel">Aviso!!!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <h4>Tener en cuenta que se termino el stock en sabores de Chocolate</h4>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            `);
          }    
         });

        //Ejecuto el evento que quita los sabores de Chocolate
        $('.buyQuitar').click((e) =>{ 
          quitarCH();
        });

       //Ejecuto el evento que agrega los sabores de Naranja
        $('.buyNA').click((e)=>{
          cargoSaboresNA();
           contadorNA++;
           if(contadorNA == 5){
              $('#avisoNA').append(`
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Mensaje Importante
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                      <h1 class="modal-title" id="exampleModalLabel">Aviso!!!</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <h4>Revisar el Stock de este Sabor porque se esta por terminar</h4>
                      </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                  </div>
                  </div>
              </div>
           `);
          }
        });

        //Ejecuto el evento que quita los sabores de Naranja
        $('.buyQuitarNA').click((e) =>{
          quitarNA();
        });
        
        //Ejecuto el evento que carga los sabores de Frutilla
        $('.buyFR').click((e) =>{
          cargoSaboresFR();
        });

        //Ejecuto el evento que quita los sabores de Frutilla
        $('.buyQuitarFR').click((e) =>{
          quitarFR();
        });


        //Ejecuto una llamada por AJAX
        let url = "https://jsonplaceholder.typicode.com/posts";

        $('#llamadaAJAX').html("<h1>LLamada ajax");

       $('#llamadaAJAX').append("<button id='btnAjax'>POST</button>");


       $('#btnAjax').click(() => {
        info = {sabor: "Vainilla", precio: "200"};
    
        $.post(url, info, function(respuesta, estado) {
        $('#llamadaAJAX').append(`
          <h2>${respuesta.sabor}</h2>
          <h2>${estado}</h2>
        `);
        });

    $('#llamadaAJAX').html("<h1>Peticion exitosa</h1>");
        });


     

  
   

 
  
 
  
  
  
   




   
    
   






  

     
  

   
    
  


