
$(document).ready(function() {
    
});

jQuery.noConflict()(function($){
    $('.next-section').click(function(){
        var $this = $(this),
            $next = $this.parent().next();

        $next.scrollTo($next.offset().top, 500, 'linear');
    });
});

jQuery.noConflict()(function($){
    $('.prev-section').click(function(){
        var $this = $(this),
            $prev = $this.parent().prev();

        $prev.scrollTo($prev.offset().top, 500, 'linear');
    });
});

jQuery.noConflict()(function($){
        $(function() {
                    $('#frontend .chart')
                            .easyPieChart({
                            barColor: '#9F5050',
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                    $(this.el).find('.percent').text(Math.round(percent));
                            }
                    });
            });
        $(function() {
                    $('#frontend2 .chart')
                            .easyPieChart({
                            barColor: '#804064',
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                    $(this.el).find('.percent').text(Math.round(percent));
                            }
                    });
            });
            
        $(function() {
                    $('#DOTNET .chart')
                            .easyPieChart({
                            barColor: '#407F40',
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                    $(this.el).find('.percent').text(Math.round(percent));
                            }
                    });
            });
            
         $(function() {
                    $('#various .chart')
                            .easyPieChart({
                            barColor: '#9F7450',
                            easing: 'easeOutBounce',
                            
                            onStep: function(from, to, percent) {
                                    $(this.el).find('.percent').text(Math.round(percent));
                            }
                    });
            });
            
        $(function() {
                    $('#tools .chart')
                            .easyPieChart({
                            barColor: '#305F5F',
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                    $(this.el).find('.percent').text(Math.round(percent));
                            }
                    });
            });
    });


jQuery.noConflict()(function($){
$("a[href*=#]").on('click', function(event){
    var href = $(this).attr("href");
   
    if ( /(#.*)/.test(href) ){
      var hash = href.match(/(#.*)/)[0];
      var path = href.match(/([^#]*)/)[0];
      
      
      
      if (window.location.pathname == path || path.length == 0){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
        window.location.hash = hash;
      }
    }
});
});

jQuery.noConflict()(function($){
$(function() {
        var expander = $('#menu-expander');
        var closer = $('#close-image');
        menu = $('#bottom-nav');
        menuHeight = menu.height();
        
        $(expander).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
                $('#menu-expander').slideToggle();
        });
        
         $(closer).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
                $('#menu-expander').slideToggle();
        });

        $(window).resize(function(){
        var w = $(window).width();
        if(w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
        else if (w > 480 && menu.is(':visible')) {
            menu.removeAttr('style');
            
        }
    });
});
});