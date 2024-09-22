import ui from './src/ui';
import changeUrlWithParams from './src/url-utils/changeUrlWithParams';
import updateCheckedIdsInURL from './src/url-utils/updateCheckedIdsInURL';
import categories from './src/categories.data';
import render from './src/renders/render-categories';
import changeStatusInCheckbox from './src/state/changeStateIsChecked';
import addCategoryInSelectedState from './src/state/addCategoryInSelectedState';

render(ui.list, categories);

const params = new URLSearchParams(window.location.search);

let initialCategories = [...categories];
let selectedCategories = [];

const handleClickOnCheckbox = (event, key) => {
	const { id } = event.target;
	updateCheckedIdsInURL(params, event, key);
	changeUrlWithParams(params);

	initialCategories = changeStatusInCheckbox(initialCategories, +id);
	selectedCategories = addCategoryInSelectedState(
		selectedCategories,
		initialCategories,
		+id
	);

	render(ui.list, initialCategories);
	render(ui.listChecked, selectedCategories);
};

ui.list.addEventListener('click', (event) => {
	if (event.target.matches('input')) {
		const key = event.target.getAttribute('data-title');
		handleClickOnCheckbox(event, key);
	}
});

(function appInit() {
	const categoriesObj = initialCategories.reduce((acc, category) => {
		acc[category.id] = category;
		return acc;
	}, {});

	params.forEach((paramItem) => {
		const urlParamFinded = initialCategories.find(
			(checkbox) => checkbox.id === Number(paramItem)
		);

		if (urlParamFinded) {
			const category = categoriesObj[urlParamFinded.id];
			category.isChecked = true;
			selectedCategories.push(category);
		}
	});

	render(ui.list, initialCategories);
	render(ui.listChecked, selectedCategories);
})();
