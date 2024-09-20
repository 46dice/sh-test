import ui from './src/ui';
import changeUrlWithParams from './src/url-utils/changeUrlWithParams';
import updateUrlParams from './src/url-utils/updateUrlParams';

const params = new URLSearchParams(window.location.search);

const handleClickOnCheckbox = (checkbox, ix, event) => {
	updateUrlParams(params, event, ix, checkbox);
	changeUrlWithParams(params);
};

ui.arrCheckboxes.forEach((checkbox, ix) => {
	checkbox.addEventListener('click', (event) => {
		handleClickOnCheckbox(checkbox, ix, event);
	});
});

(function appInit() {
	params.forEach((paramItem) => {
		ui.arrCheckboxes.forEach((checkbox) => {
			if (paramItem === checkbox.id) {
				checkbox.checked = true;
			}
		});
	});
})();
