const btn = document.querySelector('.submit-btn');
let userInputCity = '';
let userInputState = '';

btn.addEventListener('click', function(e){
    e.preventDefault();
    //userInputCity = document.querySelector('.city').value;
    //userInputState = document.querySelector('.state').value;
    //console.log(`City: ${userInputCity}\nState: ${userInputState}`);

    axios.get('https://regres.in/api/users')
        .then(function(response){
            console.log(response);
    })
})


//const apiKEY = 'f12a1950f4679d31d6d5ff0f098477c4';

//API CALL
/*
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
exclude={part}&appid={f12a1950f4679d31d6d5ff0f098477c4}
*/

