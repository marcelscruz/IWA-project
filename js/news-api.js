// apiKey 5ad08b376dc24ce8b8fbc2a1abcbd1c3

function getNews (news, selector){
  $.each(news, function(i, value){
    $(selector).append(
      `
        <li class='card'>
          <a href='#news-details' data-index="${i}" class="tab-link active open-popup">
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

var num = 1;

$(document).on("click",".open-popup", function(e){
  e.preventDefault();
  console.log($(this)[0].dataset.index);

  num++;

{/* <div id="news-details" class="view tab"> */}

  $('#news-details').html(
    `
        <p>${num}</p>
        <a href="#news" class="tab-link">Go Back</a>
    `
  );

  // num++;
  //
  // $('#popup').remove();
  //
  // $('#popup-about').replaceWith(
  //   `
  //     <div id="popup-about" class="popup popup-about">
  //       <div class="content-block">
  //         <p>About</p>
  //         <p><a href="#" class="close-popup">Close popup</a></p>
  //         <p>worksssss!!!!</p>
  //         <p>${num}</p>
  //       </div>
  //     </div>
  //   `
  // );
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
