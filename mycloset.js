

var pictureListItem = function(id, pictureUrl) {
  return `<div class="col-sm-6">
    <div class="card mb-4 box-shadow">
      <a href="mycloset20.html?id=${id}"><img class="card-img-top" src="${pictureUrl}"></a>
        </div>
      </div>
    </div>
  </div>`;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/Tops?api_key=key8kii4qZ62inYAF", function( data ) {
  // console.log(data.records);
  var items = [];

  items.push(`<div class="row">`);
  var randomNumber = getRandomInt(data.records.length);
  var val = data.records[randomNumber];


    //console.log(val.fields)
    var id = val.id;
    var pictureUrl = val.fields["Picture"] ? val.fields["Picture"][0].url : '';
    var itemHTML = pictureListItem(id, pictureUrl);
    items.push(itemHTML);

  items.push(`</div>`);
  console.log(items, $(".Tops-list" ))
  $(".Tops-list" ).append(items.join(""));
});



$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/Pants?api_key=key8kii4qZ62inYAF", function( data ) {
  // console.log(data.records);
  var items = [];

  items.push(`<div class="row">`);
  var randomNumber = getRandomInt(data.records.length);
  var val = data.records[randomNumber];


    //console.log(val.fields)
    var id = val.id;
    var pictureUrl = val.fields["Picture"] ? val.fields["Picture"][0].url : '';
    var itemHTML = pictureListItem(id, pictureUrl);
    items.push(itemHTML);

  items.push(`</div>`);
  console.log(items, $(".Pants-list" ))
  $(".Pants-list" ).append(items.join(""));
});



$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/Shoes?api_key=key8kii4qZ62inYAF", function( data ) {
  // console.log(data.records);
  var items = [];

  items.push(`<div class="row">`);
  var randomNumber = getRandomInt(data.records.length);
  var val = data.records[randomNumber];


    //console.log(val.fields)
    var id = val.id;
    var pictureUrl = val.fields["Picture"] ? val.fields["Picture"][0].url : '';
    var itemHTML = pictureListItem(id, pictureUrl);
    items.push(itemHTML);

  items.push(`</div>`);
  console.log(items, $(".Shoes-list" ))
  $(".Shoes-list" ).append(items.join(""));
});
