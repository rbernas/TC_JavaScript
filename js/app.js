$(document).ready(function() {
		$(".routing").show();
		$(".survey").hide();
		$(".survey2").hide();
		$(".congrats").hide();

		$(".billing").click(function() {
			$(".routing").hide();
			$(".congrats").hide();
			$(".survey2").hide();
			$(".survey").show();
		});

		$("#register-form").submit(function(e) {
			e.preventDefault();

			$(".survey").hide();
			$(".survey2").hide();
			$(".routing").hide();
			$(".congrats").show();
		});

		$("#register-form2").submit(function(e) {
			e.preventDefault();

			$(".survey").hide();
			$(".survey2").hide();
			$(".routing").hide();
			$(".congrats").show();
		});

		$('#sel1').change(function(e) {
				if ($('#sel1').val() == "California") {
				$(".nextQuestion").show();
				$(".survey2").show();
				$(".survey").hide();
				$(".routing").hide();
				$(".congrats").hide();
			}
		});

				
});