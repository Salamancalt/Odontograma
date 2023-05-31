var toothInfo = {
    '11': 'Información del diente 11',
    '12': 'Información del diente 12',
    '13': 'Información del diente 13',
    '14': 'Información del diente 14',
    // Resto de los dientes...
  };
  
  function openModal(toothId) {
    var modal = document.getElementById('myModal');
    var toothNumber = document.getElementById('toothNumber');
    var toothInfoText = document.getElementById('toothInfo');
  
    toothNumber.textContent = 'Diente: ' + toothId;
    toothInfoText.textContent = toothInfo[toothId] || 'Información no disponible';
  
    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }