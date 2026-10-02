// Wait for DOM to load before running scripts
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
  
  // View Menu button functionality for modal
  let viewMenuBtn = document.querySelector(".view-menu");
  let modal = document.getElementById("menu-modal");
  let closeBtn = document.querySelector(".close");
  let modalMenuItems = document.getElementById("modal-menu-items");

  // Only proceed with modal functionality if elements exist
  if (viewMenuBtn && modal && closeBtn && modalMenuItems) {
    // Open modal with visible menu items
    viewMenuBtn.addEventListener("click", function() {
      modalMenuItems.innerHTML = "";
      
      menuItems.forEach(item => {
        // Only show items that are currently visible
        if (item.style.display !== "none") {
          const itemClone = item.cloneNode(true);
          modalMenuItems.appendChild(itemClone);
        }
      });
      
      modal.classList.add("show");
    });

    // Close modal
    closeBtn.addEventListener("click", function() {
      modal.classList.remove("show");
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  }

});



