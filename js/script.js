let imageElement = document.getElementById('image');
let buttonElement = document.getElementById('btn');
async function fetchData(url) {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }   
        const data = await response.json();
        console.log(data);
        return data;
    }   
    catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }       
}        

buttonElement.addEventListener('click', async () => {
    const data = await fetchData('https://dog.ceo/api/breeds/image/random');
    imageElement.src = data.message;
});

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData('https://randomuser.me/api/');

    if (data && data.results && data.results.length > 0) {
        const user = data.results[0];
        const fullName = `${user.name.first} ${user.name.last}`;

        document.getElementById('profile-photo').src = user.picture.large;
        document.getElementById('profile-name').textContent = fullName;
        document.getElementById('profile-email').textContent = user.email;
        document.getElementById('profile-country').textContent = user.location.country;
        document.getElementById('profile-city').textContent = user.location.city;
        document.getElementById('profile-age').textContent = user.dob.age;
        document.getElementById('profile-phone').textContent = user.phone;
    }
});


