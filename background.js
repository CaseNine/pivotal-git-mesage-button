var observer = new MutationObserver(function (mutations) {
	var form = document.querySelector('form.story:not(.casenine)');
	if (form === null) {
		return;
	}
	var actions = form.querySelector('.actions');

	var story = closest(form, '.story.model.item');
	var name = story.querySelector('.story.name textarea').value;
	var id = story.dataset.id;

	var isDisabled = 'inline-block';

	if (id === "") {
		isDisabled = 'none';
	}
	var button = document.createElement('button');
	button.type = 'button';
	button.style.display = isDisabled;
	button.classList.add('clipboard_button', 'casenine_button');
	button.dataset.clipboardText = name + ' [Delivers #' + id + ']';
	button.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 28 28">' 
		+ '<path d="M0 14q0-3.266 1.609-6.023t4.367-4.367 6.023-1.609 6.023 1.609 4.367 4.367 1.609 6.023q0 3.922-2.289 7.055t-5.914 4.336q-0.422 0.078-0.617-0.109t-0.195-0.469v-3.297q0-1.516-0.812-2.219 0.891-0.094 1.602-0.281t1.469-0.609 1.266-1.039 0.828-1.641 0.32-2.352q0-1.891-1.234-3.219 0.578-1.422-0.125-3.187-0.438-0.141-1.266 0.172t-1.437 0.688l-0.594 0.375q-1.453-0.406-3-0.406t-3 0.406q-0.25-0.172-0.664-0.422t-1.305-0.602-1.344-0.211q-0.688 1.766-0.109 3.187-1.234 1.328-1.234 3.219 0 1.328 0.32 2.344t0.82 1.641 1.258 1.047 1.469 0.609 1.602 0.281q-0.625 0.562-0.766 1.609-0.328 0.156-0.703 0.234t-0.891 0.078-1.023-0.336-0.867-0.977q-0.297-0.5-0.758-0.812t-0.773-0.375l-0.313-0.047q-0.328 0-0.453 0.070t-0.078 0.18 0.141 0.219 0.203 0.187l0.109 0.078q0.344 0.156 0.68 0.594t0.492 0.797l0.156 0.359q0.203 0.594 0.688 0.961t1.047 0.469 1.086 0.109 0.867-0.055l0.359-0.063q0 0.594 0.008 1.391t0.008 0.844q0 0.281-0.203 0.469t-0.625 0.109q-3.625-1.203-5.914-4.336t-2.289-7.055z" fill="#000000"></path>' 
		+ '</svg>';

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
