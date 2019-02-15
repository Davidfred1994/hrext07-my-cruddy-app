/*
Init app
interact with DOM
interact with localstorage
 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?


  $('.btn-add').on('click', function(){
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.input-key').val('');
    $('.input-value').val('');
  });


  // update db
  $(".btn-update").on('click', function(){
    $('.container-data').text('');
    for (var i = 0; i < localStorage.length; i++){
      console.log(localStorage.getItem(localStorage.key(i)));
      $('.container-data').append('<div class="display-data-item">'+'Day '+localStorage.key(i)+': '+localStorage.getItem(localStorage.key(i))+'</div>');
    }
 });

  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

});