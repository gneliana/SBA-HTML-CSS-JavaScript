
// let image = document.getElementById('image')


//     fetch("https://dog.ceo/api/breed/poodle/images/random")
//     .then(res => res.json())
//     .then(result => {
//         console.log(result)
//         image.scr = result.message
//     })
//     .catch(err=>console.log(Error))







// function fetchData() {
//     fetch("https://dog.ceo/api/breed/poodle/standard/images")
//     .then(response => {
//         if (!response.ok) {
//             throw Error("Error")
//         }
//         return response.json();
//     }).then(data => {
//         console.log(data.message);
//         const html = data.message.map(Image =>{
//             return '<img'
//         })
//         document.querySelector('#app').insertAdjacentHTML('afterbegin', '<h1>Hello</h1>' );
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

// fetchData();