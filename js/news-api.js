// apiKey 5ad08b376dc24ce8b8fbc2a1abcbd1c3

function getNews (response, selector){

  $.each(response.articles, function(i, value){

    if (value.urlToImage == null) {
      console.log('no image');
    }

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

let index;
let author;
let title;
let description;
let url;
let urlToImage;
let publishedAt;

$(document).on("click",".open-popup", function(e){
  e.preventDefault();

  console.log($(this)[0].dataset);

  index = $(this)[0].dataset.index;
  author = $(this)[0].dataset.author;
  title = $(this)[0].dataset.title;
  description = $(this)[0].dataset.description;
  url = $(this)[0].dataset.url;
  urlToImage = $(this)[0].dataset.urltoimage;
  publishedAt = $(this)[0].dataset.publishedat;

  view1.router.load({url: "news-details.html"});

});


myApp.onPageInit('news-details', function() {

  $('#news-details').html(
    `
      <div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>
      <p>${index}</p>
      <p>${author}</p>
      <p>${title}</p>
      <p>${description}</p>
      <p>${url}</p>
      <p>${urlToImage}</p>
      <p>${publishedAt}</p>
    `
  )
});

$$.getJSON('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    getNews(data, '#sports-cards');

  }
);

$$.getJSON('https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    getNews(data, '#business-cards');
  }
);

$$.getJSON('https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {
    getNews(data, '#financial-cards');
  }
);
