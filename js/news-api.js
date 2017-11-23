// apiKey 5ad08b376dc24ce8b8fbc2a1abcbd1c3

let sportsArray = [];
let businessArray = [];
let financialArray = [];

function getNews (response, selector){
  if (selector === '#sports-cards') {
    sportsArray = response;
  } else if (selector === '#business-cards') {
    businessArray = response;
  } else if (selector === '#financial-cards') {
    financialArray = response;
  }
}

function buildCards(response, selector) {
  $.each(response.articles, function(i, value){

    $(selector).append(
      `
        <li class='card'>
          <a href='#'
            data-index="${i}"
            data-author="${value.author}"
            data-title="${value.title}"
            data-description="${value.description}"
            data-url="${value.url}"
            data-urlToImage="${value.urlToImage}"
            data-publishedAt="${value.publishedAt}"
            class="item-link active open-popup">

            <div class='card-header'>
              <img src='${value.urlToImage}' width='100%'>
            </div>
            <div class='card-content'>
              <div class='card-content-inner'>${value.title}</div>
            </div>
          </a>
        </li>
      `
    );
  });
}

// function createNewStory(selector) {
//   if (selector === '#sports-cards') {
//     sportsArray.articles[sportsArray.articles.length].title = 'marcel';
//   } else if (selector === '#business-cards') {
//     businessArray = response;
//   } else if (selector === '#financial-cards') {
//     financialArray = response;
//   }
// }

let index,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    date,
    day,
    month,
    year,
    time;

$(document).on("click",".open-popup", function(e){
  e.preventDefault();

  // console.log($(this)[0].dataset);

  index = $(this)[0].dataset.index;
  author = $(this)[0].dataset.author;
  title = $(this)[0].dataset.title;
  description = $(this)[0].dataset.description;
  url = $(this)[0].dataset.url;
  urlToImage = $(this)[0].dataset.urltoimage;
  publishedAt = $(this)[0].dataset.publishedat;
  date = publishedAt.slice(0, publishedAt.indexOf('T')).split('-');
  day = date[2];
  month = date[1];
  year = date[0];
  time = publishedAt.slice(publishedAt.indexOf('T') + 1, publishedAt.indexOf('Z'));

  newsView.router.load({url: "news-details.html"});

});


myApp.onPageInit('news-details', function() {

  $('#news-details').html(
    `
      <div id="back-button" class="left">
        <a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a>
      </div>
      <div id="news-details-inner">
        <p class="news-title">${title}</p>
        <img src="${urlToImage}" width="100%">
        <p class="news-author">Author: ${author}</p>
        <p class="news-published-at">Published ${day}/${month}/${year} at ${time}</p>
        <p class="news-description">${description}</p>
      </div>
    `
  )
});

// https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3
// https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3

$$.getJSON('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    getNews(data, '#sports-cards');
    buildCards(sportsArray, '#sports-cards');
  }
);

$$.getJSON('https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    getNews(data, '#business-cards');
    buildCards(businessArray, '#business-cards');
  }
);

$$.getJSON('https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    getNews(data, '#financial-cards');
    buildCards(financialArray, '#financial-cards');
  }
);
