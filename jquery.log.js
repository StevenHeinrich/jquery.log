/**
 * log plugin for jQuery
 * v1.0
 * executes console.log with you message
 * to show what you are currently accessing.
 * (known to work in Firefox and Chrome)
 *
 * Plugin authored by Steve Heinrich, to encapsulate
 * the function and concept from Dominic Mitchell
 * http://happygiraffe.net/blog/2007/09/26/jquery-logging
 *
 * As featured on HackGeo.com
 * Please use as you wish, at your own risk.
 */

/**
 * Usage:
 *
 *   $(<selector>).log('Some Message');
 *    
 */

(function($) {
  $.fn.log = function (msg) {
	  if (!window.console || !console) return;
      console.log("%s: %o", msg, this);
      return this;
  	};
})(jQuery);
