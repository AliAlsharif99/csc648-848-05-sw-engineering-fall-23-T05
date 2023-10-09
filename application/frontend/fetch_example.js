These are some examples on how we handle frontend logic using Fetch API.
Note that these are just examples, make sure the html element id matches to what we have.

Example to fetch and wrap data from Login page:
    // This code will grab data from the text fields of the login page,
    // wrap it in JSON format, and send this wrapped package containing those user data,
    // to the backend for me to handle...
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = {
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        };

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 401) {
                throw new Error('Invalid credentials!');
            }
            return response.json();
        })
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            alert(error.message);
        });
    });


Example to fetch and wrap data from Registration page:
    // This code will grab data from the text fields of the registration page,
    // wrap it in JSON format, and send this wrapped package containing those user data,
    // to the backend for me to handle...
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        });
    });



Example to fetch restaurant data from DB to Home page:
    // This code will request and get all users data from the backend,
    // and spit out users on an html element with id='users',
    // creating a new <p> tags on each user data...
    window.onload = function() {
        fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            let userContainer = document.getElementById('users');
            users.forEach(user => {
                userContainer.innerHTML += `<p>${user.name}</p>`;
            });
        });
    };


Example to fetch and wrap search data:
    // This code will be triggered once a user release a keypress.
    // Grab the user search input sends it to the backend,
    // then getting back the response from the backend,
    // finally displaying the results inside a newly create <p> tag.
    document.getElementById('searchInput').addEventListener('keyup', function() {
        let query = this.value;

        fetch(`/api/search?q=${query}`)
        .then(response => response.json())
        .then(restaurants => {
            let restaurantContainer = document.getElementById('restaurants');
            restaurantContainer.innerHTML = '';  // Clear previous results
            restaurants.forEach(restaurant => {
                restaurantContainer.innerHTML += `<p>${restaurant.name}</p>`;
            });
        });
    });



