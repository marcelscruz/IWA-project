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
