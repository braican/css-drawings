
/*
 * jQuery Velociunirapticornize Plugin 1.0
 */

 (function($){

    $.fn.velociunirapticornize = function(options){

        var defaults = {
            path: "inc/vurn.html",
            showVurnTrigger: "show-vurn",
            nodTrigger: "nod-head",
            runAcrossTrigger: "engage",
            moveLeftLegTrigger: "move-left-leg",
            showStructureTrigger: "show-structure",
            onload: false,
            delay: 5000
        }

        var options = $.extend(defaults, options);

        var vurnMarkup;

        //
        // load up the velociunirapticorn
        //
        $.get(options.path, function(vurn) {
            vurnMarkup = vurn;

            if(options.onload){
                addVurnToPage();
            }
        }).error(function(e) {
            console.log("[error] : " + e.statusText);
        });

        //
        // event listeners if we're on load
        //
        function vurnEvents(){

            // show/hide vurn on the page
            $('.' + options.showVurnTrigger).on('click', function(event){
                event.preventDefault();
                event.stopPropagation();

                addVurnToPage();
            });

            // make the thing nod
            $('.' + options.nodTrigger).on('click', function(event){
                event.preventDefault();
                event.stopPropagation();

                console.log("nod the head");
                
                $(this).toggleClass('active');
                $('body').toggleClass('nod-head-animation');
            });

            // make vurn move his left leg
            $('.' + options.moveLeftLegTrigger).on('click', function(event){
                event.preventDefault();
                event.stopPropagation();

                console.log("move his left leg");

                $(this).toggleClass('active');
                $('body').toggleClass('move-left-leg-animation');
            });

            // make vurn run
            $('.' + options.runAcrossTrigger).on('click', function(event){
                event.preventDefault();
                event.stopPropagation();
                
                console.log("run across the screen");
                
                runVurnRun();
            });

            // show vurn's structure
            $('.' + options.showStructureTrigger).on('click', function(event){
                event.preventDefault();
                event.stopPropagation();

                console.log("show the vurn structure");

                showTheStructure();
                
            });
        }

        //
        // add vurn to the page
        //
        function addVurnToPage(){
            if($('.velociunirapticorn').length === 0){
                $('body').append(vurnMarkup);
                $('.' + options.showVurnTrigger).text("Hide Vurn");
                $('#toolbar div.actions').css('display', 'inline-block');
            } else{
                $('.velociunirapticorn').remove();
                $('.' + options.showVurnTrigger).text("Show Vurn");
                $('#toolbar div.actions').hide();
            }
        }

        //
        // show the internal structure of the vurn
        //
        function showTheStructure(){
            if($('body').hasClass('exposed-structure')){
                $('body').removeClass('exposed-structure');
                $('div', $('.velociunirapticorn')).removeAttr('style');
                $('.' + options.showStructureTrigger).text('Show Structure');
            } else {
                $('body').addClass('exposed-structure');
                $('div', $('.velociunirapticorn')).each(function(i, e){
                    if($(e).children().length == 0){
                        $(e).css({
                            "border": "2px solid black"
                        });
                    }
                });
                $('.' + options.showStructureTrigger).text('Hide Structure');   
            }
        }

        //
        // make vurn run
        //
        function runVurnRun(){
            var vurn = $(vurnMarkup).appendTo('body').addClass('move-left-leg-animation').css({
                "position":"fixed",
                "bottom": "0",
                "right" : "330px",
                "display" : "block"
            });

            vurn.animate({
                "bottom" : "770px"
            }, function(){
                var offset = (($(this).position().left)+1600);
                $(this).delay(400).animate({
                    "right": offset
                }, 2200, function(){
                    $(this).remove();
                })
            });
        }

        return this.each(function(){

            var $t = $(this);

            vurnEvents();

        }); // each instance
    } // plugin call
 })(jQuery);