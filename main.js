import ui from './src/ui';
import render from './src/render';
import changeUrlWithParams from './src/url-utils/changeUrlWithParams';
import updateCheckedIdsInURL from './src/url-utils/updateCheckedIdsInURL';

const params = new URLSearchParams(window.location.search);

const stateCheckboxes = Array.from(ui.arrCheckboxes);

const handleClickOnCheckbox = (event, index) => {
	updateCheckedIdsInURL(params, event, index);
	changeUrlWithParams(params);
	render(ui.list, stateCheckboxes);
};

ui.arrCheckboxes.forEach((checkbox, index) => {
	checkbox.addEventListener('click', (event) => {
		handleClickOnCheckbox(event, index);
	});
});

(function appInit() {
	params.forEach((paramItem) => {
		const findEl = stateCheckboxes.find(
			(checkbox) => checkbox.id === paramItem
		);

		if (findEl) {
			findEl.checked = true;
		}
	});
})();
