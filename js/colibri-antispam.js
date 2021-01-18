	$('.asp').each(function() {
		var idform=$(this).attr('id');
		var number = 1 + Math.floor(Math.random() * 6);

		if(!$(this).attr('id')) {
			$(this).attr('id', '86c77fbe5b' + number);
		}

		var part1 = '86c77fbe5b';
		var part2 = 'afd6350d37';
		var part3 = '68193ceaf4b4';
		var first = $(this).find('input[type="text"]').first();
		$(this).append('<input style="display:none;" id="colibri'+idform+number+'" name="colibri'+idform+'" type="text" value=""/>');
		$(this).append('<input style="display:none;" id="colibri-a'+idform+number+'" name="colibri-a'+idform+'" type="text" value=""/>');

		for(var i=1; i<=150; i++) {
			if(i==7) {
				$(this).append('<input style="display:none;" align="ABSBOTTOM" id="colibri-checkbox-'+idform+number+'-'+i+'" name="colibri-checkbox-'+idform+i+'" type="checkbox" value="'+part1+part2+part3+i+'"/>');
			} else {
				$(this).append('<input style="display:none;" align="ABSBOTTOM" checked="checked" id="colibri-checkbox-'+idform+number+'-'+i+'" name="colibri-checkbox-'+idform+i+'" type="checkbox" value="'+part1+part2+part3+i+'"/>');
			}				
		}
			
		$('#'+$(this).attr('id')+' input[align="ABSBOTTOM"]').on('click', function(e) {
			$('#colibri-a'+idform+number).val(':)');
		});

		$(this).on('submit', function(e) {
			if($('#colibri-a'+idform+number).val() == '') {
				$('#colibri'+idform+number).val(first.val());
				$('#colibri-a'+idform+number).val('1234567.colibri.mc');
				$('#colibri-checkbox-'+idform+number+'-77').attr('checked', false);
			}

			if($('#colibri-a'+idform+number).val() == '1234567.colibri.mc') {
				$('#colibri'+idform+number).val(first.val());
			}
		});
	});