import ui from './src/ui/ui';
import changeUrlWithParams from './src/url-utils/changeUrlWithParams';
import updateCheckedIdsInURL from './src/url-utils/updateCheckedIdsInURL';
import categories from './src/categories.data';
import renderList from './src/renders/render-list';
import changeStatusInCheckbox from './src/state/changeStatusInCheckbox';
import addCategoryInSelectedState from './src/state/addCategoryInSelectedState';

renderList(ui.list, categories);

const params = new URLSearchParams(window.location.search);

let initialCategories = structuredClone(categories);
let selectedCategories = [];

const handleClickOnCheckbox = (event, key) => {
	const { id } = event.target;
	updateCheckedIdsInURL(params, event, key);
	changeUrlWithParams(params);

	initialCategories = changeStatusInCheckbox(initialCategories, Number(id));
	selectedCategories = addCategoryInSelectedState(
		selectedCategories,
		initialCategories,
		Number(id)
	);

	renderList(ui.list, initialCategories);
	renderList(ui.listChecked, selectedCategories);
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

	renderList(ui.list, initialCategories);
	renderList(ui.listChecked, selectedCategories);
})();
