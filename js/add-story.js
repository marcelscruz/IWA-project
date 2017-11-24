// Add new story

function submitStory() {

  let category = $('#select-input')[0].value;
  let title = $('#title-input')[0].value;
  let story = $('#story-input')[0].value;
  let encoded = encodeURI('Category: ' + category + ' - Title: ' + title + ' - Story: ' + story);

  $.post("http://52.48.79.163/db.php?type=newstory&data=" + encoded + "&id=122973101745992");

  myApp.alert('Your story was posted!', 'Success', function() {
    clearStory();
  });
}

function clearStory() {
  $('#title-input')[0].value = '';
  $('#story-input')[0].value = '';
}

// Top 10 stories

function create10TopList(response) {
  $.each(response.news.story, function(i, value){
    $('#top-10-content').append(
      `
        <p>${i + 1}. ${value}</p>
      `
    );
  });
}

$$.getJSON('http://52.48.79.163/db.php?type=top10stories',
  function (data) {
    create10TopList(data);
  }
);

// Current Authors

function createCurrentAuthorsList(response) {
  $.each(response.authors.author, function(i, value){
    $('#current-authors-content').append(
      `
        <p>${value}</p>
      `
    );
  });
}

$$.getJSON('http://52.48.79.163/db.php?type=currentauthors',
  function (data) {
    createCurrentAuthorsList(data);
  }
);
