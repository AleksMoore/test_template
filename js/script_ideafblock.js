/*
*	Idea FBlock (Idea Float Block)
*	Функциональность: нужна для выпадающей формы при нажатии на ссылку
*	Создание: Idea-CP for DIUS [09.09.2014 12:50] -> [09.09.2014 13:37]
*	Версия: 1.0
*	Использование:
*		1) Подключить данную библиотеку - script_ideafblock.js
*		2) Прописать в теге head вызов данного скрипта - $('.fblock_link').idea_fblock();
*		3) Сделать ссылку со следующими параметрами - <a href="#" class="fblock_link" data-fblock="#fblock_main">ссылку</a>
*/
(function($){
	$.fn.idea_fblock=function(){
		$(this).on('click',function(){
			var thisElementData = $(this).data('fblock');
			$('#fblock_bg').show();
			$(thisElementData).show();
			$('#fblock_bg, .ct_fblock').on('click',function(){
				$('#fblock_bg').hide();
				$(thisElementData).hide();
				return false;
			});
			return false;
		});
	}
}(jQuery));