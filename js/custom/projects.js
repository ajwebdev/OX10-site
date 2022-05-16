$(document).ready(function(){      
    var url = window.location.href;
    var index = url.indexOf('#');
    var value = (index > 0) ? url.substring(index+1) : "";
    if(value.length > 0){
        $('.nav-list-link').removeClass("ox-10-active-link");
        $('.nav-list-link').addClass("ox10-nav-link");
        if(value === "all-projects"){
            $('#all').addClass("ox-10-active-link");
           }
           else if(value === "events"){
            $('#project1').addClass("ox-10-active-link");
           }
           else if(value === "branding"){
            $('#project2').addClass("ox-10-active-link");
           }
           else if(value === "product-launches"){
            $('#project3').addClass("ox-10-active-link");
           }
    }
   

 });
$('.nav-list-link').click(function(){
    var value = ($(this).attr('value'));
    if(value === 'all-projects'){
        $("#all-projects").show();
        $("#events").hide();
        $("#branding").hide();        
        $("#product-launches").hide();
        
    }
    else if(value === 'events'){
        $("#all-projects").hide();
        $("#events").show();
        $("#branding").hide();        
        $("#product-launches").hide();
        
    }
    else if(value === 'branding'){
        $("#all-projects").hide();
        $("#events").hide();
        $("#branding").show();        
        $("#product-launches").hide();
        
    }
    else if(value === 'product-launches'){
        $("#all-projects").hide();
        $("#events").hide();
        $("#branding").hide();        
        $("#product-launches").show();
        
    }
});

$(document).ready(function(){      
    $('.nav-list-link').click(function() {
        $('.nav-list-link').removeClass("ox-10-active-link");
        $('.nav-list-link').addClass("ox10-nav-link");
        $(this).addClass("ox-10-active-link");
       });
 });

