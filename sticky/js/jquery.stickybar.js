// JQuery StickyBar Plugin By Taufik Nurrohman
// URL's: https://plus.google.com/108949996304093815163/about
//        http://hompimpaalaihumgambreng.blogspot.com
// Usage: $('div').stickyBar();

(function($) {

        $.fn.stickyBar = function(settings) {

                settings = $.extend({
                        until: "",
                        top: 0,
                        bottom: 0,
                        animated: false,
                        speed: 400,
                        easing: null,
                        onFixed: function() {},
                        onStatic: function() {},
                        onStopped: function() {}
                }, settings);

                return this.each(function() {

                        var $this = $(this),
                                $window = $(window),
                                offsetTop = $this.offset().top,
                                objectHeight = $this.outerHeight(),
                                objectTop = $this.css('top'),
                                objectLeft = $this.css('left'),
                                stopLimit;
                        stopLimit = (settings.until !== "") ? $(settings.until).offset().top - objectHeight - settings.top : $(document).height();

                        // alert($this.css('position'));
                        if ($this.css('position') == "static") {
                                $this.css('position','relative');
                        }

                        function isFixed() {
                                if (!settings.animated) {
                                        $this.css({
                                                'top': $window.scrollTop() - offsetTop + settings.top,
                                                'left': objectLeft
                                        }).removeClass('isStopped').addClass('isFixed');
                                } else {
                                        $this.stop().animate({
                                                top: $window.scrollTop() - offsetTop + settings.top
                                        }, settings.speed, settings.easing, function() {
                                                // (animation enabled) => I need this callback for safety reason.
                                                // I don't know, but when I test it in all browser except FF in Windows 7 32-bit (I don't know in another higher bit, but I guess it will works better)...
                                                // ... the animation does not finished, so the sticky bar won't back to the normal position if you scroll the window too fast
                                                // With this simple .css() callback, at least I can jump the sticky bar position and put it back to the what this plugin should put when the animation has been finished (or not completely finish)
                                                // Only in 32-bit OS, Windows 7. Mini Notebook, Acer Aspire One. I think :p
                                                $(this).css({
                                                        'top': $window.scrollTop() - offsetTop + settings.top,
                                                        'left': objectLeft
                                                });
                                                // End callback.
                                        }).removeClass('isStopped').addClass('isFixed');
                                }
                        }

                        function isStatic() {
                                if (!settings.animated) {
                                        $this.css({
                                                'top': objectTop
                                        }).removeClass('isFixed isStopped');
                                } else {
                                        $this.stop().animate({
                                                top: objectTop
                                        }, settings.speed, settings.easing, function() {
                                                // Safety callback
                                                $(this).css({
                                                        'top': objectTop
                                                });
                                                // End callback.
                                        }).removeClass('isFixed isStopped');
                                }
                        }

                        // Extra function for accurate position
                        function isStopped() {
                                $this.css({
                                        'top': stopLimit - offsetTop // Stick to the stopper
                                }).removeClass('isFixed').addClass('isStopped');
                        }

                        $window.on("scroll resize", function() {
                                if ($(this).scrollTop() >= offsetTop - settings.top) {
                                        if (stopLimit - settings.bottom >= $(this).scrollTop()) {
                                                isFixed();
                                                settings.onFixed.call(this);
                                        } else {
                                                isStopped();
                                                settings.onStopped.call(this);
                                        }
                                } else {
                                        isStatic();
                                        settings.onStatic.call(this);
                                }
                        });

                });
        };

})(jQuery);
