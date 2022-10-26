document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;
    alert(email);
    Signed in

        alert('user created successfully')
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(erorMessage);
            })
})
