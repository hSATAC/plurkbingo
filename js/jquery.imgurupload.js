"use strict";

(function ($) {
	$.imgurUploadSupported = $.support.cors;

	$.fn.imgurUpload = function (options) {
		if (!$.imgurUploadSupported) return this;

		var settings = {
			key: '0e5a73a20e10cffa94d56bd8f03bdfc9',
			name: 'image.png',
			title: false,
			caption: false,
			beforeSend: $.noop,
			complete: $.noop,
			success: $.noop,
			error: $.noop
		};

		if (options) {
			$.extend(settings, options);
		}

		return this.each(
			function () {
				if (this.nodeName.toLowerCase() !== 'canvas') return;
				$.ajax(
					{
						url: 'http://api.imgur.com/2/upload.json',
						type: 'POST',
						data: (function (canvas) {
							var d = {
								type: 'base64',
								key: settings.key,
								image: canvas.toDataURL().split('base64,')[1]
							};
							
							if (settings.name !== false) d.name = settings.name;
							if (settings.title !== false) d.title = settings.title;
							if (settings.caption !== false) d.caption = settings.caption;

							return d;
						})(this),
						dataType: 'json',
						beforeSend: settings.beforeSend,
						complete: settings.complete,
						success: settings.success,
						error: settings.error
					}
				);
			}
		);
	};
})(jQuery);

