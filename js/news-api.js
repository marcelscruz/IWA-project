// apiKey 5ad08b376dc24ce8b8fbc2a1abcbd1c3

let sportsArray = [];
let businessArray = [];
let financialArray = [];
let index;

function getNews (news, selector){

  if (selector === '#sports-cards') {
    sportsArray = news;
  } else if (selector === '#business-cards') {
    businessArray = news;
  } else if (selector === '#financial-cards') {
    financialArray = news;
  }

  $.each(news, function(i, value){

    $(selector).append(
      `
        <li class='card'>
          <a href='#' data-index="${i}" class="item-link active open-popup">
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

myApp.onPageInit('news-details', function() {

  $('#news-details').html(
    `
      <div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>
      <p>${index}</p>
    `
  )
});

$(document).on("click",".open-popup", function(e){
  e.preventDefault();
  console.log($(this)[0].dataset.index);

  index = $(this)[0].dataset.index;

  view1.router.load({url: "news-details.html"});

});

$$.getJSON('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    let bbcSports = data.articles;
    getNews(bbcSports, '#sports-cards');

  }
);

$$.getJSON('https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    let businessInsider = data.articles;
    getNews(businessInsider, '#business-cards');
  }
);

$$.getJSON('https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    let financialTimes = data.articles;
    getNews(financialTimes, '#financial-cards');
  }
);
