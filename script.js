let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Lightbox functions
function openLightbox(index) {
  currentImageIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  lightboxImg.src = images[currentImageIndex].src;
}

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Filtering function
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".filter-btn");

  // Update active button
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Show/hide images based on category
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
      item.classList.add("fade-in");
    } else {
      item.style.display = "none";
    }
  });
}
