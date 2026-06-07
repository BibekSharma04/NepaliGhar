// Wait for DOM to load before running scripts
document.addEventListener("DOMContentLoaded", function() {
  
  // View Menu button functionality
  let viewMenuBtn = document.querySelector(".view-menu");
  let modal = document.getElementById("menu-modal");
  let closeBtn = document.querySelector(".close");
  let modalMenuItems = document.getElementById("modal-menu-items");

  // Check if elements exist
  if (!viewMenuBtn || !modal || !closeBtn || !modalMenuItems) {
    console.error("Required elements not found!");
    return;
  }

  // Menu items data
  const menuData = [
    {
      name: "Mutton Sekuwa",
      description: "Grilled marinated mutton skewers, a popular Nepali delicacy.",
      price: "$5.66",
      image: "images/Mutton-sekuwa.png"
    },
    {
      name: "Chicken Momo",
      description: "Steamed dumplings filled with spiced chicken, served with a tangy dipping sauce.",
      price: "$8.99",
      image: "images/momo.jpg"
    },
    {
      name: "Thakali Set",
      description: "A traditional Nepali meal set with rice, lentils, vegetables, and pickles.",
      price: "$10.99",
      image: "images/Jimbu-Thakali.jpg"
    },
    {
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces, served with naan.",
      price: "$11.99",
      image: "images/Butter-Chicken.png"
    },
    {
      name: "Roti",
      description: "A traditional Nepali flatbread, perfect for every meal.",
      price: "$4.99",
      image: "images/Naan.jpg"
    },
    {
      name: "Gundruk Soup",
      description: "A flavorful soup made from fermented leafy greens, a staple in Nepali cuisine.",
      price: "$6.99",
      image: "images/gundruk-soup.jpg"
    },
    {
      name: "Juju Dahu",
      description: "A traditional fermented yak milk yogurt, known for its unique taste and health benefits.",
      price: "$5.99",
      image: "images/juju-dahu.jpg"
    }
  ];

  // Open modal with menu items
  viewMenuBtn.addEventListener("click", function() {
    modalMenuItems.innerHTML = "";
    
    menuData.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span class="price">${item.price}</span>
        </div>
      `;
      modalMenuItems.appendChild(itemDiv);
    });
    
    modal.classList.add("show");
  });

  // Close modal
  closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
  });

  // Close modal when clicking outside
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  });

});

