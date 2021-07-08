// function ajax(url) {
//     return new Promise(function(resolve, reject) {

//         //XML REQUEST
//         let xhr = new XMLHttpRequest()

//         xhr.addEventListener('load', function(evt) {

//             if (this.status === 200) {
//                 resolve(this.responseText)
//             } else {
//                 reject('There was a network error')
//             }
//         })

//         xhr.open('GET', url)

//         xhr.send()

//     })
// }

// window.onload = function() {
//     ajax('https://jsonplaceholder.typicode.com/posts')

//     //then(res =>) attaches callbacks for the resolution of the promise
//     .then(res => {
//         let rtitle = document.querySelector('articletitle');
//         let article = JSON.parse(res);
//         rtitle.innerText = article.title;
//     })
// }

//ARTICLE TITLE
let rtitle = document.querySelector('.articletitle');


//AJAX FUNCTION
function ajax(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function(evt) {
            if (this.status === 200) {
                resolve(this.responseText)
            } else {
                reject('There was a network error')
            }
        })
        xhr.send();
        // console.log(url);
        // let article;
        // article.push(ajax(url));
        // console.log(article);
    })
}

window.onload = function() {
    ////Pass in API source
    ajax('https://jsonplaceholder.typicode.com/posts')

    ////then(res =>) attaches callbacks for the resolution of the promise
    //In this case, res returns json from api source
    .then(res => {
        ///Array of articles
        let articles = JSON.parse(res).slice(0, 3);
        //Arrays of article elements
        let rtitle = document.querySelectorAll('.articletitle');
        let rauthor = document.querySelectorAll('.articleauthor');
        let rcontent = document.querySelectorAll('.articlecontent');
        //promises
        let promises = [];

        articles.forEach(user => {
            promises.push(ajax('https://jsonplaceholder.typicode.com/posts/' + user.id));
            console.log(articles);
            rtitle[user.id - 1].innerText = articles[user.id - 1].title;
        });
        articles.forEach(user => {
            promises.push(ajax('https://jsonplaceholder.typicode.com/posts/' + user.id));
            console.log(articles);
            rauthor[user.id - 1].innerText = articles[user.id - 1].title;
        });
        articles.forEach(user => {
            promises.push(ajax('https://jsonplaceholder.typicode.com/posts/' + user.id));
            console.log(articles);
            rcontent[user.id - 1].innerText = articles[user.id - 1].body;
        });
        return Promise.all(promises);
        console.log(Promise.all(promises));
    })

}