'use strict';

// Personal Code START

// Parsing the Json
function generateResults(name, repoUrl) {
  return `
    <p class="results-img">${name}: - ${repoUrl}<p>
  `;
}

function generateResultsString(responsesJson) {
  // console.log(responsesJson);
  // console.log(responsesJson);

  // let imgUrlArray = responsesJson.message;

  // const results = imgUrlArray.map(imgUrl => generateResults(imgUrl));

  // return results.join("");
  let results = responsesJson.map(response => generateResults(response.name, response.html_url));

  // let results = generateResults(resultsInfo);

  return results.join('');


}

function renderResults(responsesJson) {
  console.log(responsesJson);
  $('.results-container').html(generateResultsString(responsesJson));

  $('.results').removeClass('hidden');
}


// Handlers
function getUserRepos(name) {
  fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(responseJson => renderResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();

    let name = $('.js-name-form').val();
    // alert(name);
    getUserRepos(name);
  });
}

// Main
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

// Personal Code END

// function getUserRepos() {
//   fetch('https://dog.ceo/api/breeds/image/random/3')
//     .then(response => response.json())
//     .then(responseJson => 
//       displayResults(responseJson))
//     .catch(error => alert('Something went wrong. Try again later.'));
// }

// function displayResults(responseJson) {
//   console.log(responseJson);
//   //replace the existing image with the new one
//   $('.results-img').replaceWith(
//     `<img src="${responseJson.message[0]}" class="results-img">`
//   )
//   //display the results section
//   $('.results').removeClass('hidden');
// }

// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     getUserRepos();
//   });
// }

// $(function() {
//   console.log('App loaded! Waiting for submit!');
//   watchForm();
// });