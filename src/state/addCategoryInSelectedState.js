const addCategoryInSelectedState = (
	selectedCategories,
	initialCategories,
	currentId
) => {
	let selectedCat = selectedCategories;
	const currentCategory = initialCategories.find(
		(category) => category.id === currentId
	);

	if (currentCategory.isChecked) {
		selectedCategories.push(currentCategory);
	} else {
		selectedCat = selectedCategories.filter(
			(category) => category.id !== currentId
		);
	}

	return selectedCat;
};

export default addCategoryInSelectedState;
