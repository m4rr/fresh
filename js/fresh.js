/*!
 * Theme “Fresh” 1.0.1 | https://artpolikarpov.github.io/fresh/
 */
$(function(){var a,b,c=$("body");$(window).on("scroll",function(){a||(a=!0,c.css({pointerEvents:"none"})),clearTimeout(b),b=setTimeout(function(){c.css({pointerEvents:"auto"}),a=!1},333)})}),$(function(){var a=$('img[alt^="cover"]'),b=a.attr("src"),c=a.attr("width")/a.attr("height"),d=$("#layout-root");if(a.parents(".e2-text-picture").remove(),b&&d.hasClass("layout--note")){var e=$.map(a.attr("alt").split(" ").slice(1),function(a){return"cover__color--"+a}).join(" "),f=300,g=$('<div class="cover__fotorama '+e+'"></div>').insertBefore(d.addClass("cover")).fotorama({width:"100%",ratio:c||16/9,maxheight:"90%",minheight:f,fit:"cover",allowfullscreen:!1,nav:!1,arrows:!1,click:!1,swipe:!1,trackpad:!1,spinner:{zIndex:-1}}),h=g.data("fotorama"),i=$("<div></div>");$(".js-cover").each(function(){$(this).appendTo(i)}),$("*[lead]").each(function(){$(this).wrapInner('<span class="text-bg"><span class="text-bg text-bg--1"><span class="text-bg text-bg--2"></span></span></span>').appendTo($(".js-cover-lead",i))}),h.load([{img:b,html:'<div class="layout layout--cover cover__layout '+e+' fotorama__select"><div class="layout__floor cover__floor">'+i.html()+"</div></div>"}]);var j,k=$(window),l=$(".fotorama__stage",g),m=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),n=5,o=0;k.on("resize orientationchange",function(){var a=0;$(".js-cover").each(function(){a+=$(this).innerHeight()}),a>f&&(f=a,h.setOptions({minheight:f})),m||(o=g.height(),k.scroll())}),m||k.on("scroll",function(){var a=Math.min(Math.max(k.scrollTop(),0),o);a!==j&&(j=a,l.css({transform:"translateY("+Math.max(k.scrollTop(),0)/n+"px)"}))}),k.resize()}}),/*!
  upyachka.js 0.2.0 | https://github.com/artpolikarpov/upyachka.js
 */
function(){var a=function(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c,!1):void 0},b=function(a,b,c){return a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c,!1):void 0},c=function(){var c=this,d=$(this),e=c.getAttribute("style"),f=c.className,g=!0;if(!d.width()||!d.height()){var h=function(){return c.style.height=Math.round(d.width()/k)+"px"};c.onload=function(){return e?c.setAttribute("style",e):c.removeAttribute("style"),g=!1,c.className=f,b(window,"resize",h)};var i=c.getAttribute("width"),j=c.getAttribute("height"),k=i/j;return g?(c.className+=" upyachka",h(),a(window,"resize",h)):void 0}};$(function(){$("img[width][height][src]").each(c)})}();