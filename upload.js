$(".new-location").on( "submit", function( event ) {
  event.preventDefault();

  var data = {
    'fields': {
      "Top": $(this).find('[name="Top"]').val(),

    }
  }
  console.log(data);
  $.ajax({
    method: 'POST',
    url:'https://api.airtable.com/v0/apput44m0VeU0dGGC/Top?maxRecords=3&view=Grid%20view',
    'headers': {
      'Authorization': 'Bearer key8kii4qZ62inYAF',
      'Content-type': 'application/json',
    },
    'data': JSON.stringify(data)
  });

});






$(".new-location").on( "submit", function( event ) {
  event.preventDefault();

  var data = {
    'fields': {
      "Bottom": $(this).find('[name="Bottom"]').val(),

    }
  }
  console.log(data);

  $.ajax({
    method: 'POST',
    url:'https://api.airtable.com/v0/apput44m0VeU0dGGC/Bottom?maxRecords=3&view=Grid%20view',
    'headers': {
      'Authorization': 'Bearer key8kii4qZ62inYAF',
      'Content-type': 'application/json',
    },
    'data': JSON.stringify(data)
  });

});








$(".new-location").on( "submit", function( event ) {
  event.preventDefault();

  var data = {
    'fields': {
      "Shoes": $(this).find('[name="Shoes"]').val(),

    }
  }
  console.log(data);

  $.ajax({
    method: 'POST',
    url:'https://api.airtable.com/v0/apput44m0VeU0dGGC/Shoes?maxRecords=3&view=Grid%20view',
    'headers': {
      'Authorization': 'Bearer key8kii4qZ62inYAF',
      'Content-type': 'application/json',
    },
    'data': JSON.stringify(data)
  });

});
