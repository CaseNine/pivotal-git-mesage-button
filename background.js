var appended = false;
$('body').on('click', '.button_with_field', function (event) {

  $(this).parent().prepend("<button type='button' class='clipboard_button' style='padding: 2px 2px 6px 2px;' data-clipboard-text='git commit -m &quot;" + $(this).closest(".story.model.item" ).find(".story.name textarea").val() + " [Delivers #" + $(this).closest(".story.model.item" ).data("id") + "]&quot;'><img src='http://www.peterhajas.com/media/img/github_icon.png' width='16px' height='16px' /></button>");

});




