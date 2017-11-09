// apiKey 5ad08b376dc24ce8b8fbc2a1abcbd1c3

function getNews (news, selector){
  $.each(news, function(i, value){
    $(selector).append(
      ` <li class='card'>
          <a href='#'>
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
