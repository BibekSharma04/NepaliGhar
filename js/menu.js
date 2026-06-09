document.addEventListener("DOMContentLoaded", function() {
  // Menu filtering functionality
  const filterButtons = document.querySelectorAll(".btn-menu button");
  const menuItemsContainer = document.getElementById("menu-items");
  const menuItems = menuItemsContainer ? menuItemsContainer.querySelectorAll("[data-category]") : [];
  
  // Filter menu items based on category
  if (filterButtons.length > 0 && menuItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", function() {
        const category = this.className;
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        
        // Add active class to clicked button
        this.classList.add("active");
        
        menuItems.forEach(item => {
          const itemCategories = item.getAttribute("data-category");
          
          if (category === "all") {
            // Show all items
            item.style.display = "block";
          } else if (itemCategories && itemCategories.includes(category)) {
            // Show items that match the clicked category
            item.style.display = "block";
          } else {
            // Hide items that don't match
            item.style.display = "none";
          }
        });
      });
    });
  }
});