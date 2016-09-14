/**
 * Lightbox v2.7.1
 * by Lokesh Dhakar - http://lokeshdhakar.com/projects/lightbox2/
 *
 * @license http://creativecommons.org/licenses/by/2.5/
 * - Free for use in both personal and commercial projects
 * - Attribution requires leaving author name, author link, and the license info intact
 */
(function(){var a=jQuery,b=function(){function a(){this.fadeDuration=500,this.fitImagesInViewport=!0,this.resizeDuration=700,this.positionFromTop=50,this.showImageNumberLabel=!0,this.alwaysShowNavOnTouchDevices=!1,this.wrapAround=!1}return a.prototype.albumLabel=function(a,b){return"Image "+a+" of "+b},a}(),c=function(){function b(a){this.options=a,this.album=[],this.currentImageIndex=void 0,this.init()}return b.prototype.init=function(){this.enable(),this.build()},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){var b=this;a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return b.changeImage(0===b.currentImageIndex?b.album.length-1:b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.changeImage(b.currentImageIndex===b.album.length-1?0:b.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})},b.prototype.start=function(b){function c(a){d.album.push({link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),a("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this;this.disableKeyboardNav();var d=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var e=new Image;e.onload=function(){var f,g,h,i,j,k,l;d.attr("src",c.album[b].link),f=a(e),d.width(e.width),d.height(e.height),c.options.fitImagesInViewport&&(l=a(window).width(),k=a(window).height(),j=l-c.containerLeftPadding-c.containerRightPadding-20,i=k-c.containerTopPadding-c.containerBottomPadding-120,(e.width>j||e.height>i)&&(e.width/j>e.height/i?(h=j,g=parseInt(e.height/(e.width/h),10),d.width(h),d.height(g)):(g=i,h=parseInt(e.width/(e.height/g),10),d.width(h),d.height(g)))),c.sizeContainer(d.width(),d.height())},e.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){this.$overlay.width(a(window).width()).height(a(document).height())},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerLeftPadding+this.containerRightPadding,h=b+this.containerTopPadding+this.containerBottomPadding;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(b){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var b=this;"undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(){location.href=a(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel?this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn("fast"):this.$lightbox.find(".lb-number").hide(),this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return b.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var b=new Image;b.src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")},b.prototype.keyboardAction=function(a){var b=27,c=37,d=39,e=a.keyCode,f=String.fromCharCode(e).toLowerCase();e===b||f.match(/x|o|c/)?this.end():"p"===f||e===c?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===f||e===d)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),a("select, object, embed").css({visibility:"visible"})},b}();a(function(){{var a=new b;new c(a)}})}).call(this);
//# sourceMappingURL=lightbox.min.map

/*
jquery.animate-enhanced plugin v1.02
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(d,J,K){function P(a,b,d,l,j,h,c,n,q){var t=!1;c=!0===c&&!0===n;b=b||{};b.original||(b.original={},t=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};n=b.meta;for(var k=b.original,x=b.properties,Q=b.secondary,D=r.length-1;0<=D;D--){var F=r[D]+"transition-property",y=r[D]+"transition-duration",e=r[D]+"transition-timing-function";d=c?r[D]+"transform":d;t&&(k[F]=a.css(F)||"",k[y]=a.css(y)||"",k[e]=a.css(e)||"");Q[d]=c?!0===q||!0===G&&!1!==q&&L?"translate3d("+n.left+"px, "+n.top+
"px, 0)":"translate("+n.left+"px,"+n.top+"px)":h;x[F]=(x[F]?x[F]+",":"")+d;x[y]=(x[y]?x[y]+",":"")+l+"ms";x[e]=(x[e]?x[e]+",":"")+j}return b}function B(a){for(var b in a)return!1;return!0}function R(a){a=a.toUpperCase();var b={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return"string"==typeof b[a]?b[a]:"block"}function H(a){return parseFloat(a.replace(a.match(/\D+$/),
""))}function M(a){var b=!0;a.each(function(a,d){return b=b&&d.ownerDocument});return b}var S="top right bottom left opacity height width".split(" "),I=["top","right","bottom","left"],r=["-webkit-","-moz-","-o-",""],T=["avoidTransforms","useTranslate3d","leaveTransforms"],U=/^([+-]=)?([\d+-.]+)(.*)$/,V=/([A-Z])/g,W={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},N=null,C=!1,z=(document.body||document.documentElement).style,O=void 0!==z.WebkitTransition||void 0!==z.MozTransition||void 0!==z.OTransition||
void 0!==z.transition,L="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,G=L;d.expr&&d.expr.filters&&(N=d.expr.filters.animated,d.expr.filters.animated=function(a){return d(a).data("events")&&d(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:N.call(this,a)});d.extend({toggle3DByDefault:function(){return G=!G},toggleDisabledByDefault:function(){return C=!C},setDisabledByDefault:function(a){return C=a}});d.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],
null),d={x:0,y:0};if(a)for(var p=r.length-1;0<=p;p--){var l=a.getPropertyValue(r[p]+"transform");if(l&&/matrix/i.test(l)){a=l.replace(/^matrix\(/i,"").split(/, |\)$/g);d={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return d};d.fn.animate=function(a,b,p,l){a=a||{};var j=!("undefined"!==typeof a.bottom||"undefined"!==typeof a.right),h=d.speed(b,p,l),c=this,n=0,q=function(){n--;0===n&&"function"===typeof h.complete&&h.complete.apply(c,arguments)},t;if(!(t=!0===("undefined"!==typeof a.avoidCSSTransitions?
a.avoidCSSTransitions:C)))if(!(t=!O))if(!(t=B(a))){var k;a:{for(k in a)if(("width"==k||"height"==k)&&("show"==a[k]||"hide"==a[k]||"toggle"==a[k])){k=!0;break a}k=!1}t=k||0>=h.duration}return t?J.apply(this,arguments):this[!0===h.queue?"queue":"each"](function(){var b=d(this),c=d.extend({},h),l=function(c){var g=b.data("jQe")||{original:{}},f={};if(2==c.eventPhase){if(!0!==a.leaveTransforms){for(c=r.length-1;0<=c;c--)f[r[c]+"transform"]="";if(j&&"undefined"!==typeof g.meta){c=0;for(var e;e=I[c];++c)f[e]=
g.meta[e+"_o"]+"px",d(this).css(e,f[e])}}b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(g.original).css(f).data("jQe",null);"hide"===a.opacity&&b.css({display:"none",opacity:""});q.call(this)}},k={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",
easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",
easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",
easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},y={},k=k[c.easing||"swing"]?k[c.easing||"swing"]:c.easing||"swing",e;for(e in a)if(-1===d.inArray(e,T)){var p=-1<d.inArray(e,I),m;var g=b,w=a[e],u=e,s=p&&!0!==a.avoidTransforms;if("d"==u)m=void 0;else if(M(g)){var f=U.exec(w);m="auto"===g.css(u)?0:g.css(u);m="string"==typeof m?H(m):m;"string"==typeof w&&H(w);var s=!0===s?0:m,t=g.is(":hidden"),v=g.translation();"left"==u&&(s=parseInt(m,10)+v.x);"right"==u&&(s=parseInt(m,10)+v.x);"top"==u&&
(s=parseInt(m,10)+v.y);"bottom"==u&&(s=parseInt(m,10)+v.y);!f&&"show"==w?(s=1,t&&g.css({display:R(g.context.tagName),opacity:0})):!f&&"hide"==w&&(s=0);f?(g=parseFloat(f[2]),f[1]&&(g=("-="===f[1]?-1:1)*g+parseInt(s,10)),m=g):m=s}else m=void 0;f=e;g=m;w=b;if(M(w)){u=-1<d.inArray(f,S);if(("width"==f||"height"==f||"opacity"==f)&&parseFloat(g)===parseFloat(w.css(f)))u=!1;f=u}else f=!1;if(f){var f=b,g=e,w=c.duration,u=k,p=p&&!0!==a.avoidTransforms,s=j,t=a.useTranslate3d,v=(v=f.data("jQe"))&&!B(v)?v:d.extend(!0,
{},W),A=m;if(-1<d.inArray(g,I)){var E=v.meta,C=H(f.css(g))||0,z=g+"_o",A=m-C;E[g]=A;E[z]="auto"==f.css(g)?0+A:C+A||0;v.meta=E;s&&0===A&&(A=0-E[z],E[g]=A,E[z]=0)}f.data("jQe",P(f,v,g,w,u,A,p,s,t))}else y[e]=a[e]}b.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((e=b.data("jQe"))&&!B(e)&&!B(e.secondary)){n++;b.css(e.properties);var G=e.secondary;setTimeout(function(){b.bind("webkitTransitionEnd oTransitionEnd transitionend",l).css(G)})}else c.queue=!1;B(y)||(n++,J.apply(b,[y,{duration:c.duration,
easing:d.easing[c.easing]?c.easing:d.easing.swing?"swing":"linear",complete:q,queue:c.queue}]));return!0})};d.fn.animate.defaults={};d.fn.stop=function(a,b,p){if(!O)return K.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var l=d(this),j=l.data("jQe");if(j&&!B(j)){var h,c={};if(b){if(c=j.secondary,!p&&void 0!==typeof j.meta.left_o||void 0!==typeof j.meta.top_o){c.left=void 0!==typeof j.meta.left_o?j.meta.left_o:"auto";c.top=void 0!==typeof j.meta.top_o?j.meta.top_o:"auto";for(h=r.length-
1;0<=h;h--)c[r[h]+"transform"]=""}}else if(!B(j.secondary)){var n=window.getComputedStyle(l[0],null);if(n)for(var q in j.secondary)if(j.secondary.hasOwnProperty(q)&&(q=q.replace(V,"-$1").toLowerCase(),c[q]=n.getPropertyValue(q),!p&&/matrix/i.test(c[q]))){h=c[q].replace(/^matrix\(/i,"").split(/, |\)$/g);c.left=parseFloat(h[4])+parseFloat(l.css("left"))+"px"||"auto";c.top=parseFloat(h[5])+parseFloat(l.css("top"))+"px"||"auto";for(h=r.length-1;0<=h;h--)c[r[h]+"transform"]=""}}l.unbind("webkitTransitionEnd oTransitionEnd transitionend");
l.css(j.original).css(c).data("jQe",null)}else K.apply(l,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);

/*! Superslides - v0.6.3-wip - 2013-12-17
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(i,t){var n,e="superslides";n=function(n,e){this.options=t.extend({play:!1,animation_speed:600,animation_easing:"swing",animation:"slide",inherit_width_from:i,inherit_height_from:i,pagination:!0,hashchange:!1,scrollable:!0,elements:{preserve:".preserve",nav:".slides-navigation",container:".slides-container",pagination:".slides-pagination"}},e);var s=this,o=t("<div>",{"class":"slides-control"}),a=1;this.$el=t(n),this.$container=this.$el.find(this.options.elements.container);var r=function(){return a=s._findMultiplier(),s.$el.on("click",s.options.elements.nav+" a",function(i){i.preventDefault(),s.stop(),t(this).hasClass("next")?s.animate("next",function(){s.start()}):s.animate("prev",function(){s.start()})}),t(document).on("keyup",function(i){37===i.keyCode&&s.animate("prev"),39===i.keyCode&&s.animate("next")}),t(i).on("resize",function(){setTimeout(function(){var i=s.$container.children();s.width=s._findWidth(),s.height=s._findHeight(),i.css({width:s.width,left:s.width}),s.css.containers(),s.css.images()},10)}),s.options.hashchange&&t(i).on("hashchange",function(){var i,t=s._parseHash();i=s._upcomingSlide(t),i>=0&&i!==s.current&&s.animate(i)}),s.pagination._events(),s.start(),s},h={containers:function(){s.init?(s.$el.css({height:s.height}),s.$control.css({width:s.width*a,left:-s.width}),s.$container.css({})):(t("body").css({margin:0}),s.$el.css({position:"relative",overflow:"hidden",width:"100%",height:s.height}),s.$control.css({position:"relative",transform:"translate3d(0)",height:"100%",width:s.width*a,left:-s.width}),s.$container.css({display:"none",margin:"0",padding:"0",listStyle:"none",position:"relative",height:"100%"})),1===s.size()&&s.$el.find(s.options.elements.nav).hide()},images:function(){var i=s.$container.find("img").not(s.options.elements.preserve);i.removeAttr("width").removeAttr("height").css({"-webkit-backface-visibility":"hidden","-ms-interpolation-mode":"bicubic",position:"absolute",left:"0",top:"0","z-index":"-1","max-width":"none"}),i.each(function(){var i=s.image._aspectRatio(this),n=this;if(t.data(this,"processed"))s.image._scale(n,i),s.image._center(n,i);else{var e=new Image;e.onload=function(){s.image._scale(n,i),s.image._center(n,i),t.data(n,"processed",!0)},e.src=this.src}})},children:function(){var i=s.$container.children();i.is("img")&&(i.each(function(){if(t(this).is("img")){t(this).wrap("<div>");var i=t(this).attr("id");t(this).removeAttr("id"),t(this).parent().attr("id",i)}}),i=s.$container.children()),s.init||i.css({display:"none",left:2*s.width}),i.css({position:"absolute",overflow:"hidden",height:"100%",width:s.width,top:0,zIndex:0})}},c={slide:function(i,t){var n=s.$container.children(),e=n.eq(i.upcoming_slide);e.css({left:i.upcoming_position,display:"block"}),s.$control.animate({left:i.offset},s.options.animation_speed,s.options.animation_easing,function(){s.size()>1&&(s.$control.css({left:-s.width}),n.eq(i.upcoming_slide).css({left:s.width,zIndex:2}),i.outgoing_slide>=0&&n.eq(i.outgoing_slide).css({left:s.width,display:"none",zIndex:0})),t()})},fade:function(i,t){var n=this,e=n.$container.children(),s=e.eq(i.outgoing_slide),o=e.eq(i.upcoming_slide);o.css({left:this.width,opacity:0,display:"block"}).animate({opacity:1},n.options.animation_speed,n.options.animation_easing),i.outgoing_slide>=0?s.animate({opacity:0},n.options.animation_speed,n.options.animation_easing,function(){n.size()>1&&(e.eq(i.upcoming_slide).css({zIndex:2}),i.outgoing_slide>=0&&e.eq(i.outgoing_slide).css({opacity:1,display:"none",zIndex:0})),t()}):(o.css({zIndex:2}),t())}};c=t.extend(c,t.fn.superslides.fx);var d={_centerY:function(i){var n=t(i);n.css({top:(s.height-n.height())/2})},_centerX:function(i){var n=t(i);n.css({left:(s.width-n.width())/2})},_center:function(i){s.image._centerX(i),s.image._centerY(i)},_aspectRatio:function(i){if(!i.naturalHeight&&!i.naturalWidth){var t=new Image;t.src=i.src,i.naturalHeight=t.height,i.naturalWidth=t.width}return i.naturalHeight/i.naturalWidth},_scale:function(i,n){n=n||s.image._aspectRatio(i);var e=s.height/s.width,o=t(i);e>n?o.css({height:s.height,width:s.height/n}):o.css({height:s.width*n,width:s.width})}},l={_setCurrent:function(i){if(s.$pagination){var t=s.$pagination.children();t.removeClass("current"),t.eq(i).addClass("current")}},_addItem:function(i){var n=i+1,e=n,o=s.$container.children().eq(i),a=o.attr("id");a&&(e=a);var r=t("<a>",{href:"#"+e,text:e});r.appendTo(s.$pagination)},_setup:function(){if(s.options.pagination&&1!==s.size()){var i=t("<nav>",{"class":s.options.elements.pagination.replace(/^\./,"")});s.$pagination=i.appendTo(s.$el);for(var n=0;s.size()>n;n++)s.pagination._addItem(n)}},_events:function(){s.$el.on("click",s.options.elements.pagination+" a",function(i){i.preventDefault();var t,n=s._parseHash(this.hash);t=s._upcomingSlide(n,!0),t!==s.current&&s.animate(t,function(){s.start()})})}};return this.css=h,this.image=d,this.pagination=l,this.fx=c,this.animation=this.fx[this.options.animation],this.$control=this.$container.wrap(o).parent(".slides-control"),s._findPositions(),s.width=s._findWidth(),s.height=s._findHeight(),this.css.children(),this.css.containers(),this.css.images(),this.pagination._setup(),r()},n.prototype={_findWidth:function(){return t(this.options.inherit_width_from).width()},_findHeight:function(){return t(this.options.inherit_height_from).height()},_findMultiplier:function(){return 1===this.size()?1:3},_upcomingSlide:function(i,t){if(t&&!isNaN(i)&&(i-=1),/next/.test(i))return this._nextInDom();if(/prev/.test(i))return this._prevInDom();if(/\d/.test(i))return+i;if(i&&/\w/.test(i)){var n=this._findSlideById(i);return n>=0?n:0}return 0},_findSlideById:function(i){return this.$container.find("#"+i).index()},_findPositions:function(i,t){t=t||this,void 0===i&&(i=-1),t.current=i,t.next=t._nextInDom(),t.prev=t._prevInDom()},_nextInDom:function(){var i=this.current+1;return i===this.size()&&(i=0),i},_prevInDom:function(){var i=this.current-1;return 0>i&&(i=this.size()-1),i},_parseHash:function(t){return t=t||i.location.hash,t=t.replace(/^#/,""),t&&!isNaN(+t)&&(t=+t),t},size:function(){return this.$container.children().length},destroy:function(){return this.$el.removeData()},update:function(){this.css.children(),this.css.containers(),this.css.images(),this.pagination._addItem(this.size()),this._findPositions(this.current),this.$el.trigger("updated.slides")},stop:function(){clearInterval(this.play_id),delete this.play_id,this.$el.trigger("stopped.slides")},start:function(){var n=this;n.options.hashchange?t(i).trigger("hashchange"):this.animate(),this.options.play&&(this.play_id&&this.stop(),this.play_id=setInterval(function(){n.animate()},this.options.play)),this.$el.trigger("started.slides")},animate:function(t,n){var e=this,s={};if(!(this.animating||(this.animating=!0,void 0===t&&(t="next"),s.upcoming_slide=this._upcomingSlide(t),s.upcoming_slide>=this.size()))){if(s.outgoing_slide=this.current,s.upcoming_position=2*this.width,s.offset=-s.upcoming_position,("prev"===t||s.outgoing_slide>t)&&(s.upcoming_position=0,s.offset=0),e.size()>1&&e.pagination._setCurrent(s.upcoming_slide),e.options.hashchange){var o=s.upcoming_slide+1,a=e.$container.children(":eq("+s.upcoming_slide+")").attr("id");i.location.hash=a?a:o}e.$el.trigger("animating.slides",[s]),e.animation(s,function(){e._findPositions(s.upcoming_slide,e),"function"==typeof n&&n(),e.animating=!1,e.$el.trigger("animated.slides"),e.init||(e.$el.trigger("init.slides"),e.init=!0,e.$container.fadeIn("fast"))})}}},t.fn[e]=function(i,s){var o=[];return this.each(function(){var a,r,h;return a=t(this),r=a.data(e),h="object"==typeof i&&i,r||(o=a.data(e,r=new n(this,h))),"string"==typeof i&&(o=r[i],"function"==typeof o)?o=o.call(r,s):void 0}),o},t.fn[e].fx={}})(this,jQuery);
/*! jQuery UI - v1.9.2 - 2015-12-14
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.accordion.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var n,a,r,o=t.nodeName.toLowerCase();return"area"===o?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(r=e("img[usemap=#"+a+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var n=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,i){return"number"==typeof t?this.each(function(){var s=this;setTimeout(function(){e(s).focus(),i&&i.call(s)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,n,a=e(this[0]);a.length&&a[0]!==document;){if(s=a.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(a.css("zIndex"),10),!isNaN(n)&&0!==n))return n;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(t,!n)}}),e(function(){var t=document.body,i=t.appendChild(i=document.createElement("div"));i.offsetHeight,e.extend(i.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===i.offsetHeight,e.support.selectstart="onselectstart"in i,t.removeChild(i).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function n(t,i,s,n){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),n&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,n(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,n(this,t,!0,i)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=6===parseFloat(t[1],10)}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i){var s,n=e.plugins[t];if(n&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)e.options[n[s][0]]&&n[s][1].apply(e.element,i)}},contains:e.contains,hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},isOverAxis:function(e,t,i){return e>t&&t+i>e},isOver:function(t,i,s,n,a,r){return e.ui.isOverAxis(t,s,a)&&e.ui.isOverAxis(i,n,r)}}))})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,o,r,h,l=i.split(".")[0];i=i.split(".")[1],a=l+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[l]=e[l]||{},o=e[l][i],r=e[l][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new r(e,i)},e.extend(r,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(t,i){e.isFunction(i)&&(n[t]=function(){var e=function(){return s.prototype[t].apply(this,arguments)},n=function(e){return s.prototype[t].apply(this,e)};return function(){var t,s=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=i.apply(this,arguments),this._super=s,this._superApply=a,t}}())}),r.prototype=e.widget.extend(h,{widgetEventPrefix:o?h.widgetEventPrefix:i},n,{constructor:r,namespace:l,widgetName:i,widgetBaseClass:a,widgetFullName:a}),o?(e.each(o._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete o._childConstructors):s._childConstructors.push(r),e.widget.bridge(i,r)},e.widget.extend=function(i){for(var n,a,o=s.call(arguments,1),r=0,h=o.length;h>r;r++)for(n in o[r])a=o[r][n],o[r].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(o){var r="string"==typeof o,h=s.call(arguments,1),l=this;return o=!r&&h.length?e.widget.extend.apply(null,[o].concat(h)):o,r?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[o])&&"_"!==o.charAt(0)?(s=n[o].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+o+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+o+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(o||{})._init():e.data(this,a,new n(o,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetName,this),e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,o,r=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(a=r[i]=e.widget.extend({},this.options[i]),o=0;n.length-1>o;o++)a[n[o]]=a[n[o]]||{},a=a[n[o]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,o=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,r){function h(){return i||o.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):t}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+o.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&(e.effects.effect[r]||e.uiBackCompat!==!1&&e.effects[r])?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e){var t=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var i=this.accordionId="ui-accordion-"+(this.element.attr("id")||++t),s=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset"),this.headers=this.element.find(s.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this._hoverable(this.headers),this._focusable(this.headers),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),s.collapsible||s.active!==!1&&null!=s.active||(s.active=0),0>s.active&&(s.active+=this.headers.length),this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this._createIcons(),this.refresh(),this.element.attr("role","tablist"),this.headers.attr("role","tab").each(function(t){var s=e(this),a=s.attr("id"),n=s.next(),r=n.attr("id");a||(a=i+"-header-"+t,s.attr("id",a)),r||(r=i+"-panel-"+t,n.attr("id",r)),s.attr("aria-controls",r),n.attr("aria-labelledby",a)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._on(this.headers,{keydown:"_keydown"}),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._setupEvents(s.event)},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),undefined):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t),undefined)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,a=this.headers.index(t.target),n=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:n=this.headers[(a+1)%s];break;case i.LEFT:case i.UP:n=this.headers[(a-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:n=this.headers[0];break;case i.END:n=this.headers[s-1]}n&&(e(t.target).attr("tabIndex",-1),e(n).attr("tabIndex",0),n.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t,i,s=this.options.heightStyle,a=this.element.parent();"fill"===s?(e.support.minHeight||(i=a.css("overflow"),a.css("overflow","hidden")),t=a.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),i&&a.css("overflow",i),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={};t&&(e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._on(this.headers,i))},_eventHandler:function(t){var i=this.options,s=this.active,a=e(t.currentTarget),n=a[0]===s[0],r=n&&i.collapsible,o=r?e():a.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:r?e():a,newPanel:o};t.preventDefault(),n&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=r?!1:this.headers.index(a),this.active=n?e():a,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),n||(a.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&a.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),a.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,a){var n,r,o,h=this,l=0,u=e.length&&(!t.length||e.index()<t.index()),d=this.options.animate||{},c=u&&d.down||d,p=function(){h._toggleComplete(a)};return"number"==typeof c&&(o=c),"string"==typeof c&&(r=c),r=r||c.easing||d.easing,o=o||c.duration||d.duration,t.length?e.length?(n=e.show().outerHeight(),t.animate(i,{duration:o,easing:r,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(s,{duration:o,easing:r,complete:p,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(n-t.outerHeight()-l),l=0)}}),undefined):t.animate(i,o,r,p):e.animate(s,o,r,p)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.uiBackCompat!==!1&&(function(e,t){e.extend(t.options,{navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var i=t._create;t._create=function(){if(this.options.navigation){var t=this,s=this.element.find(this.options.header),a=s.next(),n=s.add(a).find("a").filter(this.options.navigationFilter)[0];n&&s.add(a).each(function(i){return e.contains(this,n)?(t.options.active=Math.floor(i/2),!1):undefined})}i.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{heightStyle:null,autoHeight:!0,clearStyle:!1,fillSpace:!1});var i=t._create,s=t._setOption;e.extend(t,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle(),i.call(this)},_setOption:function(e){("autoHeight"===e||"clearStyle"===e||"fillSpace"===e)&&(this.options.heightStyle=this._mergeHeightStyle()),s.apply(this,arguments)},_mergeHeightStyle:function(){var e=this.options;return e.fillSpace?"fill":e.clearStyle?"content":e.autoHeight?"auto":undefined}})}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var i=t._createIcons;t._createIcons=function(){this.options.icons&&(this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected),i.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){t.activate=t._activate;var i=t._findActive;t._findActive=function(e){return-1===e&&(e=!1),e&&"number"!=typeof e&&(e=this.headers.index(this.headers.filter(e)),-1===e&&(e=!1)),i.call(this,e)}}(jQuery,jQuery.ui.accordion.prototype),jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh,function(e,t){e.extend(t.options,{change:null,changestart:null});var i=t._trigger;t._trigger=function(e,t,s){var a=i.apply(this,arguments);return a?("beforeActivate"===e?a=i.call(this,"changestart",t,{oldHeader:s.oldHeader,oldContent:s.oldPanel,newHeader:s.newHeader,newContent:s.newPanel}):"activate"===e&&(a=i.call(this,"change",t,{oldHeader:s.oldHeader,oldContent:s.oldPanel,newHeader:s.newHeader,newContent:s.newPanel})),a):!1}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{animate:null,animated:"slide"});var i=t._create;t._create=function(){var e=this.options;null===e.animate&&(e.animate=e.animated?"slide"===e.animated?300:"bounceslide"===e.animated?{duration:200,down:{easing:"easeOutBounce",duration:1e3}}:e.animated:!1),i.call(this)}}(jQuery,jQuery.ui.accordion.prototype))})(jQuery);

/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/*global jQuery*/
(function ($) {
  "use strict";
  $(document).ready(function () {

/* Menu */

    $(".menu__icon").click(function () {
      $("nav.JS-menu").toggle();
      $("body").toggleClass('mobile-menu-active');
      $(".icon-bar").toggleClass('mobile-menu-active');
    });

/* Bar */
if ($('.bar').length > 0) {
$('.drop__down > ul').append('<li class="js-toggle-action1 but-menu">INFO</li>');
$('body > header').append('<div class="js-toggle-action1 but-menu-mobile">INFO</div>');
}

$('.js-toggle-action1').click(function () {
$('.js-toggle-target1').slideToggle();
		});
/* Gallery */
$(".gallery a:has(> img)").attr('data-lightbox', 'image-gallery');

/* Img in content class ligthb */
$("a.lightb, .googpicwrap a").attr('data-lightbox', 'image-content');

$( "#accordion" ).accordion({
      heightStyle: "content"
    });
// Banner

$('#slides').superslides({
    play: 10000,
    animation: 'fade',
    animation_speed: 600,
    animation_easing: 'swing',
    pagination: true,
    hashchange: false,
    scrollable: true,
    });


// Accordion
	$(".js-accordion").accordion({
    heightStyle: "content",
    icons: false,
    collapsible: true,
    active: false

});
// Call To Action
	$(".js-accordion-active").accordion({
		heightStyle: "content",
    icons: false,
	});

	$('.action-but').click(function(){
		$('.action-container').toggleClass('action-active');
	});

   $('.home .action-container').toggleClass('action-active');

   var timeoutId = setTimeout(function(){
            $('.home .action-container').removeClass('action-active');
    }, 5000);

  $(".action-container").mouseover(function()  {
  		clearTimeout(timeoutId);
  });

    $(".action-container").mouseleave(function()  {
  		setTimeout(function(){
            $('.action-container').removeClass('action-active');
    }, 3000);
  });


// Embed
$(".embedded__content").fitVids();

// Events
$(".event__toggle__privat").click(function () {
	$(this).toggleClass('toggle-hide');
	$("li.event__privat").slideToggle();
});
$(".event__toggle__off").click(function () {
	$(this).toggleClass('toggle-hide');
	$("li.event__off").slideToggle();
});

// Til toppen
$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

// masonry
	$('.masonry-grid').masonry({
  columnWidth: '.post',
  itemSelector: '.post',
  percentPosition: true
});

// WooCommerce

if(window.location.href.indexOf("?") > -1) {
	$(".widget_layered_nav strong").append(' <- tilbage').toggleClass('click');
	$(".widget_layered_nav strong").click(function(event) {
    event.preventDefault();
    history.back(1);
});
}


  });
}(jQuery));