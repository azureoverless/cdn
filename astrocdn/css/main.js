/*!
 * Item: Azure
 * Description: Homepage Website
 * Author/Developer: ASTRO
 * Author/Developer URL: https://linktr.ee/astronimeid
 * Version: v5
 * License: Standard Licenses
 */

/*----------- Table of Contents -----------*/

/**
 * Globals
 * Navbar
 * Home
 * Services
 * Testimonials
 * Contact
 * Preloader
 * Portfolio
 */

!function(e){"use strict";e(function(){function t(t,i){e(t).length&&i()}function i(){let e=document.documentElement;e.style.setProperty("--vh",.01*window.innerHeight+"px")}e(document).on("click","[data-lightbox]",lity.options("template",'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>')),function t(i){function a(t,i,a){var n=e(t[0]).find(t[1]).slice(-i);null===t[2]?n.addClass(a):n.find(t[2]).addClass(a)}e.each(i,function(t,i){var n=[i[0][0],i[0][1],i[0][2]];if(!e(n[0]).length)return!0;var s=i[1],o=i[2];e.each(s,function(t,i){var s=i.columns;if(window.matchMedia(i.matchMedia).matches){var l=e(n[0]).find(n[1]).length%s;0===l?a(n,s,o):a(n,l,o)}})})}([[["#about",".services-section .single-service",null],[{matchMedia:"(max-width: 767.98px)",columns:1},{matchMedia:"(max-width: 991.98px)",columns:2},{matchMedia:"(min-width: 991.98px)",columns:3},],"rc-mb-0",],[["#about",".pricing-section .single-plan",null],[{matchMedia:"(max-width: 991.98px)",columns:1},{matchMedia:"(min-width: 991.98px)",columns:3},],"rc-mb-0",],[["#portfolio",".portfolio-section .single-item .portfolio-item",".portfolio-wrapper"],[{matchMedia:"(max-width: 991.98px)",columns:2},{matchMedia:"(min-width: 991.98px)",columns:3},],"rc-mb-0",],[["#blog",".blog-section .single-post",null],[{matchMedia:"(max-width: 991.98px)",columns:1},{matchMedia:"(min-width: 991.98px)",columns:3},],"rc-mb-0",],]),window.addEventListener("resize",i),i(),e('.navbar .navbar-nav .nav-link[href^="#"]').each(function(){e(this).animatedModal({animatedIn:"fadeIn",animatedOut:"fadeOut",animationDuration:"0s",beforeOpen:function(){e("#overlay-effect").addClass("animate-up").removeClass("animate-down"),e("#"+this.modalTarget).css({animationDelay:".5s",animationFillMode:"both"})},afterOpen:function(){e("#"+this.modalTarget).css({animationFillMode:"none"})},beforeClose:function(){e("#overlay-effect").addClass("animate-down").removeClass("animate-up"),e("#"+this.modalTarget).css({animationDelay:".5s",animationFillMode:"both"})},afterClose:function(){e("#"+this.modalTarget).css({animationFillMode:"none"})}})}),e(".lightbox-wrapper").each(function(){e('.navbar .navbar-nav .nav-link[href^="#'+this.id+'"]').length||e(this).hide()}),e(document).on("mouseup",function(t){if(e(".navbar #navbarSupportedContent").hasClass("show")){var i=e(".navbar .navbar-menu");i.is(t.target)||0!==i.has(t.target).length||i.trigger("click")}}),function(){(function t(i){i.each(function(){var t=e(this);if(t.hasClass("clip")){var i=t.find(".cd-words-wrapper"),a=i.width()+10;i.css("width",a)}setTimeout(function(){(function e(t){var i,a=(i=t,i.is(":last-child")?i.parent().children().eq(0):i.next());t.parents(".cd-headline").hasClass("clip")&&t.parents(".cd-words-wrapper").animate({width:"2px"},660,function(){var i,n,s,o;i=t,n=a,i.removeClass("is-visible").addClass("is-hidden"),n.removeClass("is-hidden").addClass("is-visible"),(s=a).parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},660,function(){setTimeout(function(){e(s)},1500)})})})(t.find(".is-visible").eq(0))},2500)})})(e(".cd-headline"));function t(e){return e.is(":first-child")?e.parent().children().last():e.prev()}}(),e(".home-area").hasClass("video-variant")&&e("#homeVideo").YTPlayer(),t("#about .testimonials-section",function(){tns({container:"#about .testimonials-section .my-slider",items:2,gutter:30,responsive:{0:{items:1,gutter:0},768:{items:2,gutter:30}},preventScrollOnTouch:"auto",slideBy:"page",mouseDrag:!0,swipeAngle:!1,speed:400,controls:!1,autoHeight:!0,navPosition:"bottom"})}),t("#resume .skills-section",function(){var t=function(){e("#resume .skills-section .single-skill").each(function(){var t=Math.min(100,Math.max(0,e(this).data("percentage"))),i=e(this).find(".skill-progress").outerWidth(!0);e(this).find(".skill-percentage").text(t+"%").css("margin-right",i-i*(t/100)),e(this).find(".progress-bar").attr("aria-valuenow",t).css("width",t+"%")})};t(),e(window).on("resize",function(){t()})}),t("#portfolio .portfolio-section",function(){var t=e("#portfolio .portfolio-section .portfolio-grid"),i=e("#portfolio .portfolio-section .filter-control li");t.imagesLoaded(function(){t.isotope({itemSelector:"#portfolio .portfolio-section .single-item",masonry:{horizontalOrder:!0}}),i.on("click",function(){i.removeClass("tab-active"),e(this).addClass("tab-active");var a=e(this).data("filter");t.isotope({filter:a,transitionDuration:".25s"})})})}),t("#contact .contact-section",function(){e("#contact .contact-section .contact-form").on("submit",function(t){var i=e(this),a=i.find("#contact-submit"),n=a.text(),s=i.find(".contact-feedback");t.preventDefault(),a.html("Wait...").addClass("wait").prop("disabled",!0),setTimeout(function(){e.ajax({url:i.attr("action"),type:"POST",data:i.serialize()}).done(function(e){"success"==e?(a.removeClass("wait").html("Success").addClass("success"),s.addClass("success").html("Thank you for your message. It has been sent.").fadeIn(200),setTimeout(function(){a.html(n).removeClass("success").prop("disabled",!1),s.fadeOut(200).removeClass("success").html("")},6e3),i[0].reset()):(console.log(e),a.removeClass("wait").html("Error").addClass("error"),s.addClass("error").html("Server error! Please check your browser console log for more details.").fadeIn(200),setTimeout(function(){a.html(n).removeClass("error").prop("disabled",!1),s.fadeOut(200).removeClass("error").html("")},6e3))})},1e3)})})}),e(window).on("load",function(){e(".preloader-icon").fadeOut(400),e(".preloader").delay(500).fadeOut("slow")})}(jQuery);
