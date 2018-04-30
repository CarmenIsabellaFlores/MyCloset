

var pictureListItem = function(id, pictureUrl) {
  return `<div class="col-s m-6 center">
    <div class="card mb-4 box-shadow">
      <a href="mycloset.html?id=${id}"><img class="card-img-top" src="${pictureUrl}"></a>
        </div>
      </div>
    </div>
  </div>`;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/cutetops?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".cutetops-list" ))
  $(".cutetops-list" ).append(items.join(""));
});



$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/cutebottoms?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".cutebottoms-list" ))
  $(".cutebottoms-list" ).append(items.join(""));
});



$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/cuteshoes?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".cuteshoes-list" ))
  $(".cuteshoes-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/flirtytops?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".flirtytops-list" ))
  $(".flirtytops-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/flirtybottoms?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".flirtybottoms-list" ))
  $(".flirtybottoms-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/flirtyshoes?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".flirtyshoes-list" ))
  $(".flirtyshoes-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/cozytops?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".cozytops-list" ))
  $(".cozytops-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/cozybottoms?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".cozybottoms-list" ))
  $(".cozybottoms-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/cozyshoes?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".cozyshoes-list" ))
  $(".cozyshoes-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/mentops?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".mentops-list" ))
  $(".mentops-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/menbottoms?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".menbottoms-list" ))
  $(".menbottoms-list" ).append(items.join(""));
});

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/menshoes?api_key=key8kii4qZ62inYAF", function( data ) {
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
  console.log(items, $(".menshoes-list" ))
  $(".menshoes-list" ).append(items.join(""));
});
