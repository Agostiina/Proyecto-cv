
document.addEventListener('DOMContentLoaded', function() {

    var form = document.querySelector('.form__content');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      var nombre = document.getElementById('nombre').value;
      var correo = document.getElementById('correo').value;
      var contraseña = document.getElementById('contraseña').value;
      var sueldo = document.getElementById('sueldo').value;
      var mensaje = document.getElementById('mensaje').value;
  
      form.reset();
  
      var formData = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña,
        sueldo: sueldo,
        mensaje: mensaje
      };
      
      var tasaDolarPeso = 498;  // 1 dólar = 21.50 pesos
      var tasaEuroPeso = 258.30;   // 1 euro = 25.30 pesos
      var tasaBitcoinPeso = 6586486.98;  // 1 bitcoin = 200,000 pesos
  
      var sueldoDolar = sueldo / tasaDolarPeso;
      var sueldoEuro = sueldo / tasaEuroPeso;
      var sueldoBitcoin = sueldo / tasaBitcoinPeso;
  
      formData.sueldoDolar = sueldoDolar.toFixed(2);
      formData.sueldoEuro = sueldoEuro.toFixed(2);
      formData.sueldoBitcoin = sueldoBitcoin.toFixed(8);
  
      mostrarInformacion(formData);
      
    });
  });
   
  function mostrarInformacion(data) {
    if(data.correo == "") return;
    let infoList = document.getElementsByClassName("info__list")[0];
    if(!infoList) {
      var infoContainer = document.createElement('div');
      infoContainer.classList.add('info__container');
  
      infoList = document.createElement('ul');
      infoList.classList.add('info__list');

      infoContainer.appendChild(infoList);

      var infoSection = document.getElementById('info-section');
    
      infoSection.appendChild(infoContainer);
    }

    for (var key in data) {
      var listItem = document.createElement('li');
      listItem.textContent = key + ': ' + data[key];
      infoList.appendChild(listItem);
    }
  
  }