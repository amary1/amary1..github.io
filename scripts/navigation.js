document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        navigateNext();
    } else if (event.key === 'ArrowLeft') {
        navigatePrevious();
    }
});

console.log("1123123")

function navigateNext() {
    const currentPage = getCurrentPage();
    if (currentPage === 'Hippoalergic.html') {
        window.location.href = 'Children.html';
    } else if (currentPage === 'Children.html') {
        window.location.href = 'popular.html';
    }
    // You can add more logic for handling other cases.
}

function navigatePrevious() {
    const currentPage = getCurrentPage();
        if (currentPage === 'Children.html') {
        window.location.href = 'Hippoalergic.html';
    } else if (currentPage === 'popular.html') {
        window.location.href = 'Children.html';
    }
    // You can add more logic for handling other cases.
}

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}



// Get the input element and attach an event listener for input events
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase(); // Get the search text and convert to lowercase

    // Loop through  items and hide/show them based on the search text
    const breedsItem = document.querySelectorAll('.breeds-item');
    breedsItem.forEach(item => {
        const breedsName = item.querySelector('h5').innerText.toLowerCase(); // Get the  name and convert to lowercase
        // If the  name contains the search text, show the item, otherwise hide it
        if (breedsName.includes(searchText)) {
            item.style.display = 'block';
            console.log("Searched");
        } else {
            item.style.display = 'none';
        }
    });
});


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all
    var breedsItem = document.querySelectorAll('.Breeds-item');

    // Add the 'Breeds-item' class to trigger the fade-in animation
    breedsItem.forEach(function(breedsItem) {
        breedsItem.classList.add('Breeds-item');
    });
});


$(document).ready(function() {
    // Function to handle scroll event
    $(window).on('scroll', function() {
        // Get the scroll position
        var scroll = $(window).scrollTop();

        // Add or remove 'scrolled' class based on scroll position
        if (scroll >= 50) {
            console.log("Scrolled");
            $('.sticky-top').addClass('scrolled');
        } else {
            $('.sticky-top').removeClass('scrolled');
        }
    });
});

