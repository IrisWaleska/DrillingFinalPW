$(document).ready(function(){
    for(let j = 0; j<12; j++){
    $.ajax({
        type:"GET",
        url: "https://rickandmortyapi.com/api/character/" + j , 
        dataType: "json",
        async: true,
        success: function(data){
            var res;
            console.log(data)
            for (let i = 0; i<12; i++){
                $("#"+ i).after(" <div class='card col-lg-3' >"+"<img src=' "+ data.image +"' id='image' class='card-img-top'>" + 
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + data.name + "</h5>" +" <p class='card-text'> Género: " +data.gender+ "</p>"+  " <p class='card-text'> Especie: " +data.species+ "</p>" +" <p class='card-text'> Origen: " +data.origin.name+ "</p>"+ " <p class='card-text'> Estado: " +data.status+ "</p>"+ " <p class='card-text'> Location: " +data.location.name+ "</p>"+"</div> ")
                $(image).elevateZoom({
                    zoomType: "inner",
                    //cursor: "crosshair",
                    zoomWindowFadeIn: 10000,
                   zoomWindowFadeOut: 10000
                });
    
            }

           
      
        }
        
    });
   
}
});