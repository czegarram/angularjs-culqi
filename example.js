
function culqi() {   

};


angular.module('demo', []);

angular.module('demo').controller('DialogDemoCtrl', function ($scope, $timeout) {  

  var $ctrl = this;
  $ctrl.animationsEnabled = true;

  $ctrl.payment = { description: 'Carrito de Compras', amount: 2000, orden: 'x123131' };

  $ctrl.open = function(size){
      
    //hack for culqi_api
    var element = document.getElementById("culqi_checkout_frame");

    if(element){
      element.parentNode.removeChild(element);  
    }    

    $timeout(function(){
      Culqi.codigoComercio = 'v8HxAHHvjVzf'; 
      Culqi.configurar({
          nombre: 'Easy Buy', 
          orden: $ctrl.payment.orden, 
          moneda: 'PEN',
          descripcion: $ctrl.payment.description,
          monto: parseInt($ctrl.payment.amount),
          guardar: false
      });
      //Culqi.cargar(); 

      culqi = function(){

        if(Culqi.error){
           // Mostramos JSON de objeto error en consola
          console.log('error');
          console.log(Culqi.error);
        }
        else{
          console.log('exito');
          console.log(Culqi.token.id);          
           /*$.post("/tarjeta", // Ruta hacia donde enviaremos el token vía POST
            {token: Culqi.token.id},
            function(data, status){
                if (data=='ok') {
                    alert('¡Todo en orden! Token enviado.');
                } else {
                    alert('Error');
                }
            });*/
        }        
      };    

      $timeout(function(){
        Culqi.abrir(); 
      },100);

    },500); 

  }; 


});
