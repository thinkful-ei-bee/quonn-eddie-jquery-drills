"use strict";

// $(function() {

//   $("#js-shopping-list-form").on("click", "formButton", function() {
//     $(".shopping-list").append(
//     );
//   });
// });

const formButton = $("form button");
const shoppingList = $(".shopping-list");
const checkBtn = $(".shopping-item-toggle");
const item = $("li");

function newItemHTML(userInput) {
  return `<li><span class='shopping-item'>${userInput}</span>
  <div class='shopping-item-controls'>
  <button class='shopping-item-toggle'><span class='button-label'>check</span></button>
  <button class='shopping-item-delete'><span class='button-label'>delete</span></button>
   </div> </li >`;
}

function handleCheckBtn() {
  $("ul").on("click", ".shopping-item-toggle", function() {
    console.log(
      $(this)
        .closest("li")
        .find(".shopping-item")
        .toggleClass("shopping-item__checked")
    );
  });
}

function handleSubmit() {
  formButton.on("click", function(event) {
    const userInput = $("#shopping-list-entry").val();
    event.preventDefault();
    shoppingList.prepend(newItemHTML(userInput));
    // console.log(userInput);
  });
}

function handleDel() {
  $("ul").on("click", ".shopping-item-delete", function() {
    console.log(
      $(this)
        .closest("li")
        .remove()
    );
  });
}

function main() {
  console.log("DOM is ready....");
  handleSubmit();
  handleCheckBtn();
  handleDel();
}

$(main);
