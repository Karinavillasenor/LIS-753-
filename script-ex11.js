const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach( function(button)  {

    button.addEventListener("click", function() {

        console.log(button);

      // hide all details divs
       details.forEach(function(item) {
         item.hidden = true;

       });

      

      // find and show the relevant program details
      const target = button.dataset.target;
      document.getElementById(target).hidden = false;

    });
  
});
