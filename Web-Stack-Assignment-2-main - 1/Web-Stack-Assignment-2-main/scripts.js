// Function to select section (smoking/non-smoking)
function selectSection(section) {
  const nonSmokingBtn = document.getElementById("nonSmokingBtn");
  const smokingBtn = document.getElementById("smokingBtn");

  if (section === "nonsmoking") {
    nonSmokingBtn.classList.add("active");
    smokingBtn.classList.remove("active");
    console.log("Selected Section: Non-Smoking");
  } else {
    smokingBtn.classList.add("active");
    nonSmokingBtn.classList.remove("active");
    console.log("Selected Section: Smoking");
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Reserve Table modal
  const reserveButton = document.getElementById("reserveButton");
  if (reserveButton) {
    reserveButton.addEventListener("click", function () {
      $("#reservationModal").modal("show");
    });
  }

  // Login modal
  const loginLink = document.getElementById("loginLink");
  if (loginLink) {
    loginLink.addEventListener("click", function (e) {
      e.preventDefault();
      $("#loginModal").modal("show");
    });
  }

  // Handle section button clicks
  const nonSmokingBtn = document.getElementById("nonSmokingBtn");
  const smokingBtn = document.getElementById("smokingBtn");

  if (nonSmokingBtn) {
    nonSmokingBtn.addEventListener("click", function () {
      selectSection("nonsmoking");
    });
  }

  if (smokingBtn) {
    smokingBtn.addEventListener("click", function () {
      selectSection("smoking");
    });
  }
});

var carousel = $("#homeCarousel");
var isPlaying = true;
$("#carouselToggle").click(function () {
  if (isPlaying) {
    carousel.carousel("pause");
    $(this).find("i").removeClass("fa-pause").addClass("fa-play");
  } else {
    carousel.carousel("cycle");
    $(this).find("i").removeClass("fa-play").addClass("fa-pause");
  }
  isPlaying = !isPlaying;
});
