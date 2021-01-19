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
 export default getInformationWithAnotherFetch;