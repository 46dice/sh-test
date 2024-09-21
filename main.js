import ui from './src/ui';
import changeUrlWithParams from './src/url-utils/changeUrlWithParams';
import updateCheckedIdsInURL from './src/url-utils/updateCheckedIdsInURL';
import categories from './src/categories.data';
import renderCategories from './src/renders/render-categories';
import changeStateCheckboxIsChecked from './src/state/changeStateIsChecked';

const params = new URLSearchParams(window.location.search);

let initialCategories = [...categories];

const handleClickOnCheckbox = (event, key) => {
	updateCheckedIdsInURL(params, event, key);
	changeUrlWithParams(params);

	initialCategories = changeStateCheckboxIsChecked(
		initialCategories,
		Number(event.target.id)
	);

	renderCategories(ui.list, initialCategories);
};

ui.list.addEventListener('click', (event) => {
	if (event.target.matches('input')) {
		const key = event.target.getAttribute('data-title');
		handleClickOnCheckbox(event, key);
	}
});

(function appInit() {
	renderCategories(ui.list, categories);
	params.forEach((paramItem) => {
		const urlParamFinded = initialCategories.find(
			(checkbox) => checkbox.id === Number(paramItem)
		);
		//TODO
		initialCategories.forEach((category) => {
			if (+urlParamFinded.id === +category.id) {
				console.log(category.id);

				category = { ...category, isChecked: true };
			}
		});
	});
})();
