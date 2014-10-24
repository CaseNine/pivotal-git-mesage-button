var observer = new MutationObserver(function (mutations) {
	var form = document.querySelector('form.story:not(.casenine)');
	if (form === null) {
		return;
	}
	var actions = form.querySelector('.actions');

	var story = closest(form, '.story.model.item');
	var name = story.querySelector('.story.name textarea').value;
	var id = story.dataset.id;

	var button = document.createElement('button');
	button.type = 'button';
	button.style.padding = '2px 2px 6px 2px';
	button.classList.add('clipboard_button');
	button.dataset.clipboardText = name + ' [Delivers #' + id + ']';
	button.innerHTML = '<img src="http://www.peterhajas.com/media/img/github_icon.png" width="16px" height="16px" />';

	actions.insertBefore(button, actions.firstChild);

	form.classList.add('casenine');
});
observer.observe(document, {childList: true, subtree: true});



function closest(el, selector) {
    // traverse parents
    while (el !== null) {
        var parent = el.parentElement;
        if (parent !== null && parent.matches(selector)) {
            return parent;
        }
        el = parent;
    }

    return null;
}
