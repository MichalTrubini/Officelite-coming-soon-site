//FORM VALIDATION

(function () {
    let submitButton = document.querySelector('#submit-form');
    
    submitButton.addEventListener('click',errorAll);
    
    
    function errorAll() {
    
      let input = document.querySelectorAll('input');
      
      input.forEach(errorSpecific);
      input.forEach(checkIfFixed);
    
      function errorSpecific(item) {
        if(!item.validity.valid) {
          let dataAttribute = item.getAttribute('data-input');
          let errorIcon = document.querySelector(`.sign-up__error[data-input='${dataAttribute}']`);
    
          item.classList.add('input-error');
          errorIcon.classList.add('show-element');
        }
      }
    
      function checkIfFixed(item) {
        item.addEventListener('input',checker);
    
        function checker(){
          let dataAttribute = item.getAttribute('data-input');
          let errorIcon = document.querySelector(`.sign-up__error[data-input='${dataAttribute}']`);

          if(!item.validity.valid) item.classList.add('input-error');
          if(item.validity.valid) {
            item.classList.remove('input-error');
            errorIcon.classList.remove('show-element');
          }
        }
      }
    }
})();