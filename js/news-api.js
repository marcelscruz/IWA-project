// apiKey 5ad08b376dc24ce8b8fbc2a1abcbd1c3

var BBCArticle = [];

$$.getJSON('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3',
  function (data) {

    for (var key in data.articles) {

      BBCArticle[key] = data.articles[key];
    }
    // console.log(BBCArticle[8]);
    // BBCArticle.map(function (x) {
    //   console.log(BBCArticle[x].title);
    // });
  }
);

{/* <div class='list-block cards-list'>
  <ul>
    <li class='card'>
      <div class='card-header'>Card Header</div>
      <div class='card-content'>
        <div class='card-content-inner'>Card content</div>
      </div>
    </li>
  </ul>
</div> */}
