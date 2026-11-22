const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");


buttons.forEach( function(button) {
    console.log(buttons);

    console.log(button.dataset.target + "was loaded");

    button.addEventListener("click", function() {

        console.log(button.dataset.target + "was clicked!");

      // hide all details divs
       details.forEach(function(item) {
         item.hidden = true;
       });

      
      // find and show the relevant program details
      const target = button.dataset.target;
      document.getElementById(target).hidden = false;

    });
  
});

const form = document.querySelector("#registration-form");
const confirmation = document.querySelector("#confirmation-message");

console.log(confirmation);
            
form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const name = document.querySelector("#registration-name").value;
    const program = document.querySelector("#registration-program").value;

    const message = "Thanks, " + name +", for registering for " + program + "!";

    confirmation.textContent = message;

    confirmation.hidden = false; 

});
