"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const sectionDiv = document.createElement('section');
const select = document.createElement('select');
sectionDiv.className = 'sectionDiv';
document.body.appendChild(sectionDiv)
sectionDiv.appendChild(select);
sectionDiv.innerText='HYF Repositories'
sectionDiv.style.marginTop="10px;"
const errorDisplayDiv = document.createElement("div")
document.body.appendChild(errorDisplayDiv)
errorDisplayDiv.id = "errorMessage"
const p1 = document.createElement('h4')
const p2 = document.createElement('h4')
const p3 = document.createElement('h4')
const p4 = document.createElement('h4')
const p1info = document.createElement('p')
const p2info = document.createElement('p')
const p3info = document.createElement('p')
const p4info = document.createElement('p')
const body = document.getElementsByTagName('body')
const repoDiv = document.createElement('div')
document.body.appendChild(repoDiv)
repoDiv.classList.add("myRepoDiv")
const contributorsDiv = document.createElement('div')
document.body.appendChild(contributorsDiv).innerText = 'Contributors'
contributorsDiv.classList.add("myContributorsDiv")
let targetOption;
const contributorsInfoHolder = document.createElement('div');
contributorsInfoHolder.className = "infoHolder"
contributorsDiv.appendChild(contributorsInfoHolder);
// create  a PaginationButton
const PaginationDiv = document.createElement('div');
document.body.appendChild(PaginationDiv);

const footer = document.createElement('footer');
footer.className = 'footer myFooter';
document.body.appendChild(footer);
const paraFooter = document.createElement('p');
paraFooter.innerText = 'HYF Repositories';
footer.appendChild(paraFooter);

// import fetchData from './fetchData.js'

// fetchData();

// import getInformationWithAnotherFetch from './getInformationWithAnotherFetch.js'

// getInformationWithAnotherFetch();


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
function getInformationWithAnotherFetch() {
    
    contributorsInfoHolder.innerHTML = "";
    const url = ('https://api.github.com/orgs/HackYourFuture/repos?per_page=63');
        fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            for (let i = 0; i < jsonData.length; i++){
                if (select.value===jsonData[i].name){
                        p1info.innerHTML = `<a href="${jsonData[i].html_url}">${jsonData[i].name}</a>`
                        p1.appendChild(p1info);
                        p2info.innerText = jsonData[i].description;
                        p2.appendChild(p2info)
                        if (jsonData[i].description===null){
                            p2info.innerText='No Description is Provided!'
                        }
                        p3info.innerText = jsonData[i].forks;
                        p3.appendChild(p3info)
                        p4info.innerText = jsonData[i].updated_at;
                        p4.appendChild(p4info)
            const targetOption = jsonData[i].contributors_url
                fetch(targetOption)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    DisplayList(result,rows, current_page)
                    SetupPagination(result, PaginationDiv, rows)
            })
        }
        }
    })
}
let current_page = 1;
let rows = 5;
function DisplayList(items,rows_per_page, page) {
    console.log(items)
     page--;
     let start = rows_per_page * page;
     let end = start + rows_per_page;
     let paginatedItems = items.slice(start, end);
     console.log(paginatedItems)
      for (let i = 0; i < paginatedItems.length; i++){
        const contributorPropertyHolder = document.createElement('div');
        contributorPropertyHolder.className = 'propertyHolder';
        contributorsInfoHolder.appendChild(contributorPropertyHolder);
        const image = document.createElement('img');
        contributorPropertyHolder.appendChild(image);
        image.src = paginatedItems[i].avatar_url
        image.style.width='50px';
        image.style.height='50px';
        const pID = document.createElement('p')
        contributorPropertyHolder.appendChild(pID)
        const anchor = document.createElement('a');
        contributorPropertyHolder.appendChild(anchor);
        anchor.appendChild(pID);
        const pContributorsHTML = document.createElement('p');
        contributorPropertyHolder.appendChild(pContributorsHTML)
        const pContributions = document.createElement('p');
        contributorPropertyHolder.appendChild(pContributions)
        pContributions.innerText = paginatedItems[i].contributions;
        pContributions.classList.add('pContributions')
        pID.innerText = paginatedItems[i].login
        pID.classList.add('pID')
        anchor.href = paginatedItems[i].html_url;
             }
}
function SetupPagination(items, wrapper, rows_per_page) {
    
     wrapper.innerHTML ="";//This doesn't help clear the previous information, I don't know why?
    
    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i <= page_count; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}
function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    if (current_page == page) {
    button.classList.add('active');
    }
    button.addEventListener('click', function (){
        
        current_page = page;
        DisplayList(items, rows, current_page);
        
    });
    return button;
}

select.addEventListener('change', getInformationWithAnotherFetch);
window.onload = getInformationWithAnotherFetch();