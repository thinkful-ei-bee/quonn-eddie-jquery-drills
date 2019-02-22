'use strict';

$(function(){
    
    $('#number-chooser').on('click', 'button', function(event){
        event.preventDefault();
        $('.js-results').empty();
        const value = $('input').val();
        for(let i =1; i<=value; i++){
            if (i % 15 === 0 ){
                $('.js-results').append('<div class="fizz-buzz-item fizbuzz"><span>fizzbuzz</span></div>');
            }
            else if(i % 5 === 0){
                $('.js-results').append('<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
            }
            else if(i % 3 === 0){
                $('.js-results').append('<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
            }
            else{
                $('.js-results').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
            }
        }
    });
});