$('#landing-section').waypoint(function(direction) {
    if (direction === 'down') {
      $('.navbar').removeClass('animated slideOutUp')
      $('.navbar').addClass('animated slideInDown')
    }
    else {
      $('.navbar').removeClass('animated slideInDown')
      $('.navbar').addClass('animated slideOutUp')
    }
  }, {
    offset: -150
  }
);

 var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) {
            event.preventDefault();

            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            $('html,body').animate({
                scrollTop: dest
            }, 500, 'swing');
            hashTagActive = this.hash;
        }
    });

var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next").click(function(){
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 400,
		complete: function(){
			current_fs.hide();
			animating = false;
                        next_fs.show();
		},
		easing: 'easeInOutBack'
	});
});
$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 0.8 + (1 - now) * 0.2;
			left = ((1-now) * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		},
		duration: 400,
		complete: function(){
			current_fs.hide();
			animating = false;
			previous_fs.show();
		},
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

$("fieldset").last().on('show', function() {
	var selected = $("input[type='radio']:checked");
	console.log(selected);
	var sum = 0;
	for (index = 0; index < selected.length; ++index) {
		if (selected[index].value !== null) {
			sum += parseInt(selected[index].value);
		}
	}
	console.log(sum);
	switch(true) {
		case (sum < 5):
			$('#evaluation').html(unsichere);
			break;
		case (sum > 8):
			$('#evaluation').html(ueberzeugte);
			break;
		default:
			$('#evaluation').html(zweifler);
			break;
	}
});

/* Some magic found in the wild of the world wide web */
(function ($) {
	  $.each(['show', 'hide'], function (i, ev) {
	    var el = $.fn[ev];
	    $.fn[ev] = function () {
	      this.trigger(ev);
	      return el.apply(this, arguments);
	    };
	  });
	})(jQuery);

var ueberzeugte = '<div class="question"><h3>Sie geh&ouml;ren zu den &Uuml;berzeugten!</h3></div><div class="answers"><p>Noch ist das Auto Ihr Fortbewegungsmittel der Wahl, einfach weil es sehr bequem ist. Für Sie überwiegen die Vorteile eines eigenen Wagens das Radfahren bei Weitem, dennoch fragen Sie sich manchmal, ob ein Umstieg m&ouml;glich w&auml;re. Wir unterst&uuml;tzen Sie gerne bei den ersten Schritten – machen Sie einen Anfang, indem Sie einfach mal das Rad statt das Auto nehmen.</p></div></div>';
var unsichere = '<div class="question"><h3>Sie geh&ouml;ren zu den Unsicheren.</h3></div><div><p>Sie glauben an das Fahrrad als Fortbewegungsmittel, haben ohne die sch&uuml;tzende H&uuml;lle im Straßenverkehr aber Angst? Dann sind Sie hier genau richtig. Ein Umstieg gelingt nicht von heute auf morgen, nehmen Sie sich Zeit und finden Sie Gleichgesinnte für Ihr Vorhaben. Wir sind uns sicher, dass die Freude am Radfahren gr&ouml;ßer ist als die Angst.</p></div></div>';
var zweifler = '<div class="question"><h3>Sie sind ein Zweifler!</h3></div><div><p>Sie erkennen die Vorteile des Radfahrens klar und deutlich, dennoch sorgen Sie sich, welche Konsequenzen ein Umstieg für Sie hat. Wir versichern Ihnen: Mit dem Rad k&ouml;nnen Sie in der Stadt nahezu 100 Prozent Ihrer Wege zur&uuml;cklegen. Lesen Sie weiter und erfahren Sie, wie der Umstieg gelingt.</p></div></div>';
