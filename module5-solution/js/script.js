$(function () {
    $("#navbarToggle").blur(function (event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        $("#collapsable-nav").collapse('hide');
      }
    });
  
    // List of categories
    var categories = ["Lunch", "Dinner", "Sushi", "Desserts", "Beverages"];
  
    // Function to get a random category
    function getRandomCategory() {
      var randomIndex = Math.floor(Math.random() * categories.length);
      return categories[randomIndex];
    }
  
    // Add click event listener to Specials tile
    $("#specials-tile").click(function (event) {
      event.preventDefault();
      var randomCategory = getRandomCategory();
      loadMenuCategory(randomCategory);
    });
  
    // Function to load the menu category
    function loadMenuCategory(category) {
      // Navigate to the random category page
      window.location.href = "menu-" + category.toLowerCase() + ".html";
    }
  });
  