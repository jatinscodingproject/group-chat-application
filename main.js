const username = document.querySelector('#name');
const form = document.querySelector('#form');
console.log(username)
form.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    const userdata = {
        username:`${username.value}`
    }
    console.log(userdata)
    userdatastring = JSON.stringify(userdata);
    localStorage.setItem('username',userdata.username)
    // console.log(username)
}