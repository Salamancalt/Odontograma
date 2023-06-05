var toothInfo = {
    '18': 'Información del diente 18',
    '17': 'Información del diente 17',
    '16': 'Información del diente 16',
    '15': 'Información del diente 15',
    '14': 'Información del diente 15',
    '13': 'Información del diente 13',
    '12': 'Información del diente 12',
    '11': 'Información del diente 11',
    '19': 'Información del diente 19',
    '20': 'Información del diente 20',
    '21': 'Información del diente 21',
    '22': 'Información del diente 22',
    
    // Resto de los dientes...
}
  function openModal(toothId) {
    var modal = document.getElementById('myModal');
    var toothNumber = document.getElementById('toothNumber');
    var toothInfoText = document.getElementById('toothInfo');
  
  
    toothNumber.textContent = 'AÑADIR PROCEDIMIENTO: DIENTE ' + toothId;
    toothInfoText.textContent = toothInfo[toothId] || 'Información no disponible';
   
  
    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }