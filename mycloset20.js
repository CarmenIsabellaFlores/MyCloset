
var PicturelistItem = function(Picture) {
  return `<div class="col-sm-6">
    <div class="card mb-4 box-shadow">
      <a href="mycloset20.html?id=${id}"><img class="card-img-top" src="${pictureUrl}"></a>
      <div class="card-body">

        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">

        </div>
      </div>
    </div>
  </div>`;
}

$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/Tops?api_key=key8kii4qZ62inYAF", function( data ) {
  // console.log(data.records);
  var items = [];
  items.push(`<div class="back">`);
  var pictureUrl = val.fields["Picture"] ? val.fields["Picture"][0].url : '';
  items.push(`<img src="pictureUrl">`);
   items.push(`</div>`);

  $(".Picture-list" ).append(items.join(""));
});
