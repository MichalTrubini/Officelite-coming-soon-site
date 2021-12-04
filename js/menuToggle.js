//TOGGLE PACK OPTIONS

(function(){

    let selectOption = document.querySelector('#select-option');
    
    selectOption.addEventListener('click', function(){
    
        let packMenu = document.querySelector('.sign-up__list-group');
        let arrow = document.querySelector('.sign-up__arrow');
    
        packMenu.classList.toggle('show-element');
        arrow.classList.toggle('arrow-up');
    })
    
    })();
    
    //SELECT PACK OPTION
    
    (function(){
    
        let selectPackage = document.querySelectorAll('.sign-up__list-group-item-wrapper');
    
        selectPackage.forEach(function(item){
    
            item.addEventListener('click', function(){
    
                let checkmarkCurrent = item.querySelector('.sign-up__list-group-checkmark');
                let checkmarksAll = document.querySelectorAll('.sign-up__list-group-checkmark');
                checkmarksAll.forEach(function(checkmarkPrevious){
                    if (checkmarkPrevious.classList.contains('show-element') && checkmarkPrevious.getAttribute('data-selected') !== checkmarkCurrent.getAttribute('data-selected')) checkmarkPrevious.classList.remove('show-element');
                })
                checkmarkCurrent.classList.toggle('show-element');
    
                let packMenu = document.querySelector('.sign-up__list-group');
                let arrow = document.querySelector('.sign-up__arrow');
                packMenu.classList.remove('show-element');
                arrow.classList.remove('arrow-up');
    
                //ADD SELECTION TO THE FORM
    
                let packageNameSelected = item.querySelector('.sign-up__package-name').innerText;
                let packagePriceSelected = item.querySelector('.sign-up__package-price').innerText;
    
                let packageNameForm = document.querySelector('.sign-up__item .sign-up__package-name');
                let packagePriceForm = document.querySelector('.sign-up__item .sign-up__package-price');
    
                packageNameForm.innerText = packageNameSelected;
                packagePriceForm.innerText = packagePriceSelected;
            })
        })
    })();
    