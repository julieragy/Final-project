
let destinations = document.querySelectorAll(".destination");
let dots = document.querySelectorAll(".dot");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
function showDestination(index) {
    destinations.forEach(function(destination) {
        destination.classList.remove("active");
    });
    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });
    destinations[index].classList.add("active");
    dots[index].classList.add("active");
}
nextBtn.onclick = function() {
    currentIndex++;
    if (currentIndex >= destinations.length) {
        currentIndex = 0;
    }
    showDestination(currentIndex);
};
prevBtn.onclick = function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = destinations.length - 1;
    }
    showDestination(currentIndex);
};
dots.forEach(function(dot, index) {
    dot.onclick = function() {
        currentIndex = index;
        showDestination(currentIndex);
    };
});
function showMessage(city, country, place) {
    alert(`Discover ${city} in ${country}!\nFamous Place: ${place}`);
}
showDestination(currentIndex);
