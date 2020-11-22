(function(){

  // filter range price
	if ($(".js-range-slider").length > 0) {

		let from;
		let to;
		let min;
		let max;
		let range;
		let rangePrice = $(".js-range-slider");
		let rangePriceFrom = $('.range-price__control--from');
		let rangePriceTo = $('.range-price__control--to');

		let updateValues = function () {
			rangePriceFrom.prop("value", from);
			rangePriceTo.prop("value", to);
		};

		rangePrice.ionRangeSlider({
			type: "double",
			min: min,
			max: max,
			onChange: function (data) {
				from = data.from;
				to = data.to;
				updateValues();
			}
		});

		range = rangePrice.data("ionRangeSlider");
		let updateRange = function () {
			range.update({
				from: from,
				to: to
			});
		};

		rangePriceFrom.on("change", function () {
			from = +$(this).prop("value");
			if (from < min) {
				from = min;
			}
			updateValues();
			updateRange();
		});

		rangePriceTo.on("change", function () {
			to = +$(this).prop("value");
			if (to < max) {
				to = max;
			}
			updateValues();
			updateRange();
		});

	}

})();