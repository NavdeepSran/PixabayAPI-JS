var key="46283795-c0f8b23903a01f2aa50e5a0fe"
var endpoint="https://pixabay.com/api/?key="+key+"&image_type=photo&q="
var vendpoint="https://pixabay.com/api/videos/?key="+key+"&q="
function getImages(e){
    e.preventDefault();
    var q=document.getElementById("query").value;
    var url=endpoint+q;
    var content=""
    $("#result").empty();
    $.getJSON( url, function( data ) {
        $.each( data.hits, function( key,val ){
        content+=`<div class='col-md-3 mb-3'>
        <img src='${val.largeImageURL}' class='w-100 border p-2'
        title='${val.tags}'
        alt='${val.type}' height="250px"/>
        </div>`
})
     $("#result").append(content);
})
}

function getVideos(e){
    e.preventDefault();
    var q=document.getElementById("query").value;
    var url=vendpoint+q;
    var content=""
    $("#result").empty();
    $.getJSON( url, function( data ) {
        $.each( data.hits, function( key,val ){
        content+=`<div class='col-md-3 mb-3'>
        <video src='${val.videos.large.url}' class='w-100 border p-2'
        title='${val.tags}'
        height="250px" controls></video>
        </div>`
})
     $("#result").append(content);
})
}