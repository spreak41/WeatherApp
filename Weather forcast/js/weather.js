$(document).ready(function(){
    
    
    $('#city').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
    {
        $('#submit').click();
        return false;  
    }
});   
   
    $('#submit').click(function(){
        
        var city = $('#city').val();
        
        if(city != ''){
            
            $.ajax({
               
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial&APPID=" + "30866e765db0fc26fc53ced8c1298f7c",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    
                    $("#weather").css("display", "block");
                    $("header").css("height", "auto");
                    $("#error").css("display", "none");
                    $(".title").css({"margin-top": 0, "font-size": 40 + "px"});
                    
                    
                    $("#weathercity").html(data.name.toUpperCase() + ", " + data.sys.country);
                    $("#state").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon +".png'>" + data.weather[0].main.toUpperCase());
                    $("#weatherdescription").html(data.weather[0].description.toUpperCase());
                    $("#weathertemperature").html(data.main.temp.toFixed() + " &degF");
                    $("#min-temp").html(data.main.pressure.toFixed() + " HPA");
                    $("#Humidity").html(data.main.humidity.toFixed() + "%");
                    $("#wind").html(data.wind.speed.toFixed() + " MPH");
                    $("#max-temp").html(data.wind.deg.toFixed()+ " DEGREE ANGLE");
                    
                    
                    $("#weathercity").css("color", "#f1c40f");
                    
                    
                    $("span").css("color", "#f1c40f");
                }
                
            });
            
        }else {
            $("#error").html('Field cannot be empty');
            $("#error").css("display", "block");
        }
        
    });
    
});

