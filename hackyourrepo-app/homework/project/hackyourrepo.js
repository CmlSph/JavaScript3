function main(){

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
    
    
    

    
    
    const footer = document.createElement('footer');
    footer.className = 'footer myFooter';
    document.body.appendChild(footer);
  
    const paraFooter = document.createElement('p');
    paraFooter.innerText = 'HYF Repositories';
    footer.appendChild(paraFooter);
    
    
    function fetchData() {
        
        const url = ('https://api.github.com/orgs/HackYourFuture/repos?per_page=63');
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
                    }  

                const targetOption = jsonData[i].contributors_url
                   
                   fetch(targetOption) 
                   .then(response => response.json())
                   .then((result) => {
                       
                   console.log(result);
                
                   if (select.value===jsonData[i].name){
                    
                    for (let i = 0; i < result.length; i++){
                        
                       
                       
                       
                        
                        const contributorPropertyHolder = document.createElement('div');
                        contributorPropertyHolder.className = 'propertyHolder';
                        contributorsInfoHolder.appendChild(contributorPropertyHolder);
                       
                        const image = document.createElement('img');
                        contributorPropertyHolder.appendChild(image);
                       
                       image.src = " ";
                        image.src = result[i].avatar_url
                       image.style.width='60px';
                       image.style.height='60px';
                    
                       
                       
                      
                       const pID = document.createElement('p')
                       contributorPropertyHolder.appendChild(pID)
                       pID.innerText = " ";
                   
                       const anchor = document.createElement('a');
                       contributorPropertyHolder.appendChild(anchor);
                       anchor.appendChild(pID);
                   
                       const pContributorsHTML = document.createElement('p');
                       contributorPropertyHolder.appendChild(pContributorsHTML)
                   
                       const pContributions = document.createElement('p');
                       pContributions.innerText = " ";
                       contributorPropertyHolder.appendChild(pContributions)
 
                       pContributions.innerText = result[i].contributions;
                       pContributions.classList.add('pContributions')
                          
                       pID.innerText = result[i].login
                       pID.classList.add('pID')

                       anchor.href = result[i].html_url;
                       
                    //    if (contributorPropertyHolder.style.display === "none") {
                    //     contributorPropertyHolder.style.display = "block";
                    //   } else {
                    //     contributorPropertyHolder.style.display = "none";
                    //   }
                       
//   I am trying to clear the previous image and the other information of the selected
//contributor. But whatever I did I couldn't manage to do that. Any help on this 
//issue is very much appreciated.

                   }   
                }
            })

            // const displaySuggestions = (event) => {
            //     event.preventDefault();
            //     while(contributorPropertyHolder.firstChild){
            //         contributorPropertyHolder.removeChild(contributorPropertyHolder.firstChild);
            //     }
            //     getInformationWithAnotherFetch();
            //   }
              
            window.onclick = function (){
                select.onchange = function(){
                    getInformationWithAnotherFetch();
                   
                }
            }  
            
            // select.addEventListener('change', getInformationWithAnotherFetch);
            
                         
    }
  })
}
   
    getInformationWithAnotherFetch();


}   


window.onload = main()