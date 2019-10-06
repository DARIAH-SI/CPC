
$(document).ready(function(){
    $('body').addClass('has-js');
    $('.label_check, .label_radio').click(function(){
        setupLabel();
    });
    setupLabel(); 
    configureMenus();
    new UISearch( document.getElementById( 'sb-search' ) );

     $('.galerie-slider').flexslider({
        animation: "swipe",
        slideshow: true,
        animationLoop: true,
        controlNav: true,               
        directionNav: false,             
        prevText: "",           
        nextText: ""
    });
    
    $('.header-slider').flexslider({
        animation: "swipe",
        slideshow: true,
        animationLoop: true,
        controlNav: true,               
        directionNav: false,             
        prevText: "",           
        nextText: "",
        controlsContainer: ".control-wrapper"
    });
    

   
   $('.hash a.next').on('click', function(e){
        e.preventDefault();
        var nextrow = $(this).parent().parent().next('tr');

        if (nextrow.length){
            $('html,body').animate({scrollTop: nextrow.offset().top - 40}, 800 );
        } else {
            $('html,body').animate({scrollTop: 0}, 800 );
        }
   });
   
   $('.hash a.prev').on('click', function(e){
        e.preventDefault();
        var nextrow = $(this).parent().parent().prev('tr');

        if (nextrow.length){
            $('html,body').animate({scrollTop: nextrow.offset().top - 40}, 800 );
        } else {
            $('html,body').animate({scrollTop: 0}, 800 );
        }
   });
   
   $('.search-btn').on('click', function(){
       if($('.header-search input').val()){
           $('.header-search form').submit();
       } else {
           $('.header-search').slideToggle();
       }
   });
   
   $('.box-title h3 a').on('click', function(e){
       e.preventDefault();
       $('.box-title h3 a').removeClass('current-tab');
       $(this).addClass('current-tab');
       var tab = $(this).attr('href');
       var tabs = $('.tab-content').find('.tab');
       tabs.hide();
       $('.tab-content').find(tab).show();
   });
   
   if($(".fancybox-thumb").length){
       $(".fancybox-thumb").fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none',
            helpers	: {
                title	: {
                    type: 'outside'
                },
                thumbs	: {
                        width	: 50,
                        height	: 50
                }
            }
        });
   }
   
});

function configureMenus(){
    
    $.fn.extend({ _on: (function(){ return $.fn.on; })() });
    $.fn.extend({
        on: (function(){
            var isTouchSupported = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
            return function( types, selector, data, fn, one ) {
                if (typeof types == 'string' && isTouchSupported && !(types.match(/touch/gi))) types = types.replace(/click/gi, 'touchstart');
                return this._on( types, selector, data, fn);
            };
        }())
    });
    
    /*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
    (function (window) {

        window.viewportSize = {};

        window.viewportSize.getHeight = function () {
            return getSize("Height");
        };

        window.viewportSize.getWidth = function () {
            return getSize("Width");
        };

        var getSize = function (Name) {
        var size;
        var name = Name.toLowerCase();
        var document = window.document;
        var documentElement = document.documentElement;
        if (window["inner" + Name] === undefined) {
            size = documentElement["client" + Name];
        }
        else if (window["inner" + Name] != documentElement["client" + Name]) {
            var bodyElement = document.createElement("body");
            bodyElement.id = "vpw-test-b";
            bodyElement.style.cssText = "overflow:scroll";
            var divElement = document.createElement("div");
            divElement.id = "vpw-test-d";
            divElement.style.cssText = "position:absolute;top:-1000px";
            divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
            bodyElement.appendChild(divElement);
            documentElement.insertBefore(bodyElement, document.head);

            if (divElement["offset" + Name] == 7) {
                size = documentElement["client" + Name];
            }
            else {
                size = window["inner" + Name];
            }
            documentElement.removeChild(bodyElement);
        }
        else {
            size = window["inner" + Name];
        }
        return size;
        };
    })(this);
    
    var screenw = viewportSize.getWidth();
    if (screenw < 481) {
       clearAll();
       clear();
       smMenu();
       smSelect();
    } else if (screenw >= 481 && screenw <= 720) {
        clearAll();
        clear();
        smMenu();
        smSelect();
    } else {
        clearAll();
        contentHeight();
        lgSelect();
    };

    $(window).resize(function() {
        var screenw = viewportSize.getWidth();
        if (screenw < 481) {
            clearAll();
            clear();
            smMenu();
            smSelect();
        }
        if (screenw > 480 && screenw < 721) {
            clearAll();
            clear();
            smMenu();
            smSelect();
        }  
        if (screenw > 720 && screenw < 960) {
            clearAll();
            clear();
            lgSelect();
        }  
        if (screenw > 960) {
            clearAll();
            contentHeight();
            lgSelect();
        } 
    });
    
    function clear() {
        $('.legislatie-box, .activitate-parlamentara-box').removeAttr('style');
    }
    
    function contentHeight() {
        var maxHeight = 0;
        $('.legislatie-box, .activitate-parlamentara-box').removeAttr('style');
        $('.legislatie-box, .activitate-parlamentara-box').each(function() {
            maxHeight = Math.max(maxHeight, $(this).innerHeight());
        });
        $('.legislatie-box, .activitate-parlamentara-box').css({height:maxHeight + 'px'});
    }
   
    var zoomEnable;

    zoomEnable = function() {
      $("head meta[name=viewport]").prop("content", "width=device-width, initial-scale=1.0, user-scalable=yes");
    };

    $("input[type='text']").on("touchstart", function(e) {
      $("head meta[name=viewport]").prop("content", "width=device-width, initial-scale=1.0, user-scalable=no");
    });

    $("input[type='text']").blur(zoomEnable);
    
    function clearAll() {
        $('.menu-dropdown').remove();
        $('.menu-dropdown-sec').remove();
    }
    
    function smMenu() {
        
        $('.menu-toggle').off('touchstart');
        $('.menu-toggle').off('click');
        
        $('.main-menu').removeClass('expand');
      
        $('.dropdown').removeClass('expand');
        $('.dropdown').removeAttr('style');
        $('.second-dropdown').removeClass('expand');
        $('.second-dropdown').removeAttr('style');
        
        $('.menu-dropdown').remove();
        $('.menu-dropdown-sec').remove();
        
        var hasDropdown = $('.main-menu').find('.has-dropdown > .inner-wrap > a');
        $(hasDropdown).after('<span class="menu-dropdown"><i class="fa fa-angle-down"></i></div>');
        var hasSecDropdown = $('.main-menu').find('.has-sec-dropdown > a');
        $(hasSecDropdown).after('<span class="menu-dropdown-sec"><i class="fa fa-angle-down"></i></div>');


        $('.menu-toggle').on('click', function() {
            $('.has-dropdown .inner-wrap .dropdown').removeClass('expand');
            $('.has-sec-dropdown .inner-wrap .second-dropdown').removeClass('expand');
            $('.menu-dropdown i').removeClass('fa-angle-up').addClass('fa-angle-down');
            $('.menu-dropdown-sec i').removeClass('fa-angle-up').addClass('fa-angle-down');
            if($('.main-menu').hasClass('expand')){
                $('.main-menu').removeClass('expand');
            } else {
                $('.main-menu').addClass('expand');
            }
        });
   
        $('.menu-dropdown').on('click', function() {
            var currentItem = $(this).siblings('.dropdown');
            $('.has-dropdown .inner-wrap .dropdown').not(currentItem).removeClass('expand');
            
            var otherValues = $('.has-dropdown .inner-wrap .menu-dropdown').not(this).find('i.fa-angle-up');
            otherValues.removeClass('fa-angle-up').addClass('fa-angle-down');
           
            $(this).siblings('.dropdown').toggleClass('expand');
            
            var newValue = $(this).find('i.fa');
            if(newValue.hasClass('fa-angle-down')){
                newValue.removeClass('fa-angle-down').addClass('fa-angle-up');
            }else{
                newValue.removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });
        
        $('.menu-dropdown-sec').on('click', function() {
            var currentItem = $(this).siblings('.second-dropdown');
            $('.has-sec-dropdown .inner-wrap .second-dropdown').not(currentItem).removeClass('expand');
            
            var otherValues = $('.has-sec-dropdown .inner-wrap .menu-dropdown-sec').not(this).find('i.fa-angle-up');
            otherValues.removeClass('fa-angle-up').addClass('fa-angle-down');
           
            $(this).siblings('.second-dropdown').toggleClass('expand');
            
            var newValue = $(this).find('i.fa');
            if(newValue.hasClass('fa-angle-down')){
                newValue.removeClass('fa-angle-down').addClass('fa-angle-up');
            }else{
                newValue.removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });
    }
    
    function smSelect() {
        $('.sub-menu ul').each(function() {
            var $wrapper = $('<div class="styled-select"></div>');
            var $select = $('<select />');
            var $initial = $('<option>Selecteaza</option>');
            $initial.attr({
                value: '#',
                selected: 'selected'
            });
            
            $select.append($initial);
            $(this).find('a').each(function() {
                var $option = $('<option />');
                $option.attr('value', $(this).attr('href')).html($(this).html());
                $option.attr('title', $(this).attr('title'));
                $select.append($option);
            });
            $wrapper.append($select);
            $select.change(function() {
                window.location = $(this).find("option:selected").val();
              });
              
            $(this).replaceWith($wrapper);
        });
    };
    
    function lgSelect() {
       $('.sub-menu select').each(function() {
            $(this).find(':first-child').remove();
            var $ul = $('<ul />');
            var len = $(this).find('option').length;
            $(this).find('option').each(function(index, element) {
                var $li = $('<li />');
                var $a = $('<a />');
                var $span = $('<li class="s-menu-sep"><span></span></li>');
                $a.attr('href', $(this).attr('value')).html($(this).html());
                $a.attr('title', $(this).attr('title'));
                $ul.append($li);
                if (index != len - 1) {
                    $ul.append($span);
                }
                $li.append($a);
            });
            
            $(this).unwrap();
            $(this).replaceWith($ul);
        });
    };
}

function setupLabel() {
    if ($('.label_radio input').length) {
        $('.label_radio').each(function(){ 
            $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function(){ 
            $(this).parent('label').addClass('r_on');
        });
    };
    if ($('.label_check input').length) {
        $('.label_check').each(function(){ 
            $(this).removeClass('c_on');
        });
        $('.label_check input:checked').each(function(){ 
            $(this).parent('label').addClass('c_on');
        });                
    };
};

/**
 * uisearch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';
	
	// EventListener | @jon_neal | //github.com/jonathantneal/EventListener
	!window.addEventListener && window.Element && (function () {
	   function addToPrototype(name, method) {
		  Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
	   }
	 
	   var registry = [];
	 
	   addToPrototype("addEventListener", function (type, listener) {
		  var target = this;
	 
		  registry.unshift({
			 __listener: function (event) {
				event.currentTarget = target;
				event.pageX = event.clientX + document.documentElement.scrollLeft;
				event.pageY = event.clientY + document.documentElement.scrollTop;
				event.preventDefault = function () { event.returnValue = false };
				event.relatedTarget = event.fromElement || null;
				event.stopPropagation = function () { event.cancelBubble = true };
				event.relatedTarget = event.fromElement || null;
				event.target = event.srcElement || target;
				event.timeStamp = +new Date;
	 
				listener.call(target, event);
			 },
			 listener: listener,
			 target: target,
			 type: type
		  });
	 
		  this.attachEvent("on" + type, registry[0].__listener);
	   });
	 
	   addToPrototype("removeEventListener", function (type, listener) {
		  for (var index = 0, length = registry.length; index < length; ++index) {
			 if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
				return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
			 }
		  }
	   });
	 
	   addToPrototype("dispatchEvent", function (eventObject) {
		  try {
			 return this.fireEvent("on" + eventObject.type, eventObject);
		  } catch (error) {
			 for (var index = 0, length = registry.length; index < length; ++index) {
				if (registry[index].target == this && registry[index].type == eventObject.type) {
				   registry[index].call(this, eventObject);
				}
			 }
		  }
	   });
	})();

	// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
	
	// http://www.jonathantneal.com/blog/polyfills-and-prototypes/
	!String.prototype.trim && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	});

	function UISearch( el, options ) {	
            this.el = el;
            this.inputEl = el.querySelector( 'form > input.sb-search-input' );
            this._initEvents();
	}

	UISearch.prototype = {
            _initEvents : function() {
                var self = this,
                    initSearchFn = function( ev ) {
                        ev.stopPropagation();
                        // trim its value
                        self.inputEl.value = self.inputEl.value.trim();

                        if( !$(self.el).hasClass( 'sb-search-open' ) ) { // open it
                            ev.preventDefault();
                            self.open();
                        }
                        else if( $(self.el).hasClass( 'sb-search-open' ) && /^\s*$/.test( self.inputEl.value ) ) { // close it
                            ev.preventDefault();
                            self.close();
                        }
                    };

                this.el.addEventListener( 'click', initSearchFn );
                this.el.addEventListener( 'touchstart', initSearchFn );
                this.inputEl.addEventListener( 'click', function( ev ) { ev.stopPropagation(); });
                this.inputEl.addEventListener( 'touchstart', function( ev ) { ev.stopPropagation(); } );
            },
            open : function() {
                var self = this;
                $(this.el).addClass( 'sb-search-open' );
                $('.mobile-search').addClass('expanded');
                // focus the input
//                if( !mobilecheck() ) {
//                        this.inputEl.focus();
//                }
                var bodyFn = function( ev ) {
                        self.close();
                        this.removeEventListener( 'click', bodyFn );
                        this.removeEventListener( 'touchstart', bodyFn );
                };
                document.addEventListener( 'click', bodyFn );
                document.addEventListener( 'touchstart', bodyFn );
            },
            close : function() {
                this.inputEl.blur();
                $(this.el).removeClass( 'sb-search-open' );
                $('.mobile-search').removeClass('expanded');
            }
	};

	// add to global namespace
	window.UISearch = UISearch;

} )( window );

$(window).load(function() {
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 145,
        itemMargin: 20,
        maxItems: 4,
        prevText: "",
        nextText: "",
        asNavFor: '#slider'
    });
   
    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        directionNav: true,  
        prevText: "",
        nextText: "",
        sync: "#carousel"
    });
    
});
       
	




    