$(function(){
var searchvalue;
var nam;
var poster=$("#poster");
$('#mybutton').on('click',function(){
 searchvalue=$('#search').val();
  nam='http://www.omdbapi.com/?s='+searchvalue;
  var i=0;
  $.ajax({
     type:'GET',
      url:nam,
success:function(nam){
$.each(nam,function(i,searchvalues){
   $.each(searchvalues,function(index,value){
            poster.append('<img src="'+value.Poster+'">')
            poster.append('<p> Title:'+value.Title+'</p>')
            poster.append('<p> Year:'+value.Year+'</p>')
            poster.append('<p> IMDBID:'+value.imdbID+'</p>')
            });  });
}
});
});
});
