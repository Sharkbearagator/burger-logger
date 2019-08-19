$(function() {
    $(".change-devoure").on("click", function(event) {
      var id = $(this).data("id");
      var newDedevoure = $(this).data("newdevoure");
  
      var newDevouvreState = {
        devoured: newDedevoure
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouvreState
      }).then(
        function() {
          console.log("changed devoure to", newDedevoure);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bg").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");

  
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted Burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });