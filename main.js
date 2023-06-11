// Javascript functionality file //

$(document).ready(function() {

// Array for saved items//
let savedItems = [];

// Function to save items in array //
window.saveForLater = function(item) {
  savedItems.push(item);
  localStorage.setItem('savedItems', JSON.stringify(savedItems));
  alert(`You have ${savedItems.length} item(s) in your Save For Later folder.`);
}

// Function to retrieve saved items //
window.onload = function() {
  const savedItemsDiv = document.getElementById('savedItems');
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  savedItems.forEach(item => {
    const itemElement = document.createElement('p');
    itemElement.textContent = item;
    savedItemsDiv.appendChild(itemElement);
  });
}

let likeCounts = {};

// Function to count likes
window.likeItem = function(item) {
  if (!likeCounts[item]) {
    likeCounts[item] = 0;
  }
  likeCounts[item]++;
  localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
  alert(`Item 1 has been liked ${likeCounts[item]} time(s).`);
}

  // Accordian function
  $(".accordion").accordion({
      collapsible: true,
      heightStyle: "content"
  });

    // Chained animation
    $("#animate-rules").click(function() {
      var colors = ["red", "green", "blue", "orange", "purple"];
      var fontSizes = ["1.2rem", "1.4rem", "1.6rem", "1.8rem", "2rem"];

      $(".rules-list ol li").each(function(index, element) {
          var $element = $(element);
          function animateRule(i) {
              if (i >= colors.length) return;
              $element.animate({
                  "color": colors[i],
                  "font-size": fontSizes[i]
              }, 1000, function() {
                  animateRule(i + 1);
              });
          }
          animateRule(0);
      });
  });

  // Picture fade
  var stopClicked = false;
  $('.fade').click(function() {
      stopClicked = false;
      $('img').stop(true, true).fadeIn(3000, function() {
          if (!stopClicked) {
              $(this).fadeOut(3000);
          }
      });
  });

  /* Stop animation
  $(".stop").click(function() {
      stopClicked = true;
      $('.section').stop();
      $('img').stop();
  });
*/

});