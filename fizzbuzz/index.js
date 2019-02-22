'use strict';

// $(function(){
    
//     $('#number-chooser').on('click', 'button', function(event){
//         event.preventDefault();
//         $('.js-results').empty();
//         const value = $('input').val();
//         for(let i =1; i<=value; i++){
//             if (i % 15 === 0 ){
//                 $('.js-results').append('<div class="fizz-buzz-item fizbuzz"><span>fizzbuzz</span></div>');
//             }
//             else if(i % 5 === 0){
//                 $('.js-results').append('<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
//             }
//             else if(i % 3 === 0){
//                 $('.js-results').append('<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
//             }
//             else{
//                 $('.js-results').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
//             }
//         }
//     });
// });

function createFizzBuzzHTML(item){
    // Creates an HTML item using a fizzbuzzed word.
    let classInput = '';
    if (typeof item === 'string') classInput = item;
    return `<div class="fizz-buzz-item ${classInput}"><span>${item}</span></div>`;
}

function fizzBuzzer(num){
    // Checks if a number to see if it will return the correct string or value based on the number provided
    if (num % 15 === 0 ){
        return 'fizzbuzz';
    }
    else if(num % 5 === 0){
        return 'buzz';
    }
    else if(num % 3 === 0){
        return 'fizz';
    }
    else{
        return num;
    }
}

function createFizzBuzzedArray(num){
    //Will return an array of fizzbuzzed numbers up to a given number
    let arr = [];
    for (let i = 1; i <= num; i++){
        arr.push(fizzBuzzer(i));
    }
    return arr;

}

function updateDisplay(arr){
    // Updates html for class js-results by joining the given array and clears input field
    $('.js-results').html(arr.join(''));
    $('input').val('');
}

function handleSubmit(){
    // Handles the submit button, preventing default, and runs all of our functions in order
    $('#number-chooser').submit(function(event){
        event.preventDefault();
        const userInput = $('input').val();
        const fizzbuzzed = createFizzBuzzedArray(userInput);
        const htmlArray = fizzbuzzed.map(createFizzBuzzHTML);
        updateDisplay(htmlArray);

    });
}

function main(){
    console.log('DOM is ready...')
    handleSubmit();
}

$(main());