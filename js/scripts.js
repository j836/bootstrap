
        $(document).ready(function() 
        {
             $("#mycarousel").carousel({
                 interval: 2000
             })
            // $("#carousel-pause").click(function() {
            //     $("#mycarousel").carousel("pause")
            // })
            // $("#carousel-play").click(function() {
            //     $("#mycarousel").carousel("cycle")
            // })
            
                $("#carousel-button").click(function() {
                    console.log("clicked");
                    if($('#carouselButton').children("span").hasClass('fa-pause'))
                    {
                        alert("Fired");
                        $('#mycarousel').carousel('pause')
                        $("#carouselButton").children("span").removeClass('fa-pause')
                        $("#carouselButton").children("span").addClass('fa-play');
                    }
                    else if($('#carouselButton').children("span").hasClass('fa-play'))
                    {
                        $('#mycarousel').carousel('cycle')
                        $("#carouselButton").children('span').removeClass('fa-play') 
                        $("#carouselButton").children('span').addClass('fa-pause');
                    }
                })
                $("#loginbutton").click(function() {
                    //alert("Fie");
                    $("#loginmodal").modal('toggle');
                })
                $("#closeButton").click(function() {
                    $("#loginmodal").modal('hide');
                })
                $("#reservetable").click(function() {
                    $("#reservetablemodal").modal('toggle')
                })
                $("#closeReserveTableModal").click(function() {
                    $("#reservetablemodal").modal('hide')
                })

        })
        