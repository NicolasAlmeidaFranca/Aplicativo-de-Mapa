<<<<<<< HEAD
$(docuent).ready(function(){
  var internet;
  var networkState = navigator.connection.type;
  $("#map").show();

  document.addEventListener("offline",onOffline,false);
  function onOffline(){
    internet = true;
  }

$(document).on("click","#abrirMapa",function(){
  if(internet == false){
    navigator.vibrate([6050]);
    navigator.notification.beep(3);
    alert("Nenhuma Rede Detectada!");
  }
  else if (internet != false){
    $("#map").show();
    navigator.notification.beep(1);
    var onSucess = function(position){
      L.mapquest.key = 'ZWOPZh9GQroj1mpc8EGwcRGE654RB0P2';
      L.mapquest.map('map',{
        center:[position.coords.latitude,position.coords.longitude],
        layers:L.mapquest.titleLayer('map'),
        zoom:12
      });
    };
    navigator.geolocation.getCurrentPosition(onSucess);
  };
});
});
=======
>>>>>>> f4d1074ecca7754287e400a2a713cf5941815a74
