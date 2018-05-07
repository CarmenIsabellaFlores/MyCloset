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
$.getJSON("https://api.airtable.com/v0/apput44m0VeU0dGGC/cutetops?api_key=key8kii4qZ62inYAF", function(data) {
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
  console.log(items, $(".cutetops-list"))
  $(".cutetops-list").append(items.join(""));
});



$.getJSON("https://api.airtable.com/v0/apput44m0VeU0dGGC/cutebottoms?api_key=key8kii4qZ62inYAF", function(data) {
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
  console.log(items, $(".cutebottoms-list"))
  $(".cutebottoms-list").append(items.join(""));
});
