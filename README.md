$.getJSON( "https://api.airtable.com/v0/apput44m0VeU0dGGC/Tops?api_key=key8kii4qZ62inYAF", function( data ) {
  // console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {
    console.log(val.fields["Name"])
    items.push( "<li id='" + val.id + "'>" + val.fields["Name"]+" -"+ val.fields["Style"]+ " -"+ val.fields["Type"]+ " -"+ val.fields["Color"]+" -"+ val.fields["Store"]+" -"+ val.fields["Price"]+" -"+ val.fields["Season"]+ "</li>" );
  });

  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
