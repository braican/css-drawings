
/*
 * jQuery Velociunirapticornize Plugin 1.0
 */

 (function($){

    $.fn.velociunirapticornize = function(options){

        var defaults = {
            trigger: 'click', // how the velociunirapticorn gets triggered
            delay: 5000
        }

        var options = $.extend(defaults, options);

        return this.each(function(){
            var $this = $(this);
            var vurnMarkup;


            function init(){
                $.get('inc/vurn.html', function(vurn) {
                    vurnMarkup = vurn;

                    $('body').append(vurnMarkup);
                }).error(function(e) {
                    console.log("[error] : " + e.statusText);
                });
            }

            if(options.trigger == "onload"){
                $(this).ready(function() {
                    console.log("this");
                    init();
                });
            } else if(options.trigger == "click"){
                $this.on("click", function(e){
                    e.preventDefault();
                    init();
                });
            } else {
                console.log("[error] : " + options.trigger + " is not a valid trigger");
            }

        }); // each instance
    } // plugin call
 })(jQuery);