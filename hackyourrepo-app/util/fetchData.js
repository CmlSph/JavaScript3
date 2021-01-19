const url = ('https://api.github.com/orgs/HackYourFuture/repos?per_page=100');

function fetchData() {
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
    console.log(jsonData)
    for (let i = 0; i < jsonData.length; i++){
        const option = document.createElement('option')
        document.body.appendChild(select);
        select.appendChild(option);
        option.value = jsonData[i].name;
        option.innerText = jsonData[i].name;
        repoDiv.appendChild(p1).innerText = 'Repository: '
        repoDiv.appendChild(p2).innerText = 'Description: '
        repoDiv.appendChild(p3).innerText = 'Forks: '
        repoDiv.appendChild(p4).innerText = 'Updated: '
    }
    })
    .catch((error) => {
        const paraError = document.createElement("p");
        errorDisplayDiv.appendChild(paraError);
        paraError.innerText = 'Network request failed';
        })
}
fetchData();

export default fetchData;

/*I am always getting an error like this;

When I don't use type="module" in html script tag

repo.js:41 Uncaught SyntaxError: Cannot use import statement outside a module

or like this;

When I use type="module" in html script tag

Access to script at 'file:///C:/Users/cemal/Desktop/JS3W3/HOMEWORK/util/repo.js' 
from origin 'null' has been blocked by CORS policy: 
Cross origin requests are only supported for protocol schemes: 
http, data, chrome-extension, edge, https, chrome-untrusted.*/