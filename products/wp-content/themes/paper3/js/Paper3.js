$( function($) {
    $('#nav  ul li').hover( 
            function() {
                    $(this).children('ul').show("normal");       
            },
            function() {
                    $(this).children('ul').hide("normal");       
            }
            );
    $('#nav ul li ul li').hover( 
            function() {
                    $(this).children('ul').show("normal");       
            },
            function() {
                    $(this).children('ul').hide("normal");       
            }
            );
    $('#nav ul li ul li ul li').hover( 
            function() {
                    $(this).children('ul').show("normal");       
            },
            function() {
                    $(this).children('ul').hide("normal");       
            }
            );
    $('tr:odd').addClass("odd-row");
    $('.show').hover(
        function(){
        $(this).find(".hide").show("normal");
        },
        function(){
        $(this).find(".hide").hide("normal");
        }); 
  $(".more-link").live('click', function(e){
        e.preventDefault();
    var link = $(this);
    $.post(link.attr("href"), {
        post_expander: 1
      }, function(data) {
        link.parents(".post-content").html($(data));
      }
    );
    return false;
  });
})