"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/


const placeholderRepos = [
    {
      name: ' SampleRepo1',
      description: ' This repository is meant to be a sample',
      forks: 5,
      updated: ' 2020-05-27 12:00:00',
      contributor: ' She',
    },
    {
      name: ' AndAnotherOne',
      description: ' Another sample repo! Can you believe it?',
      forks: 9,
      updated: ' 2020-05-27 12:00:00',
      contributor: ' He',
    },
    {
      name: ' HYF-Is-The-Best',
      description:
        " This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
      forks: 130,
      updated: ' 2020-05-27 12:00:00',
      contributor: ' Me',
    },
  ];
/*https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript.html*/
  placeholderRepos.sort(function(a,b){
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  });
  

  const a = document.getElementById("repoOne");
  a.innerText = placeholderRepos[0].name;
  const b = document.getElementById("repoTwo")
  b.innerText = placeholderRepos[1].name;
  const c = document.getElementById("repoThree")
  c.innerText = placeholderRepos[2].name;
    
  
  const myRepo = document.getElementById("selDemo");
    
    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const forks = document.getElementById("forks");
    const updated = document.getElementById("updated");
    const contributor = document.getElementById("contributor");

    
    function myFunction (){
      name.innerText = placeholderRepos[myRepo.value].name;
      description.innerText = placeholderRepos[myRepo.value].description;
      forks.innerText = placeholderRepos[myRepo.value].forks;
      updated.innerText = placeholderRepos[myRepo.value].updated;
      contributor.innerText = placeholderRepos[myRepo.value].contributor;
    };




