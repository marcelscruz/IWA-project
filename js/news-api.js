console.log('news-api');

// const apiKey = '5ad08b376dc24ce8b8fbc2a1abcbd1c3';
//

$$.getJSON('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=5ad08b376dc24ce8b8fbc2a1abcbd1c3', function (data) {
  console.log(data.source);
});
