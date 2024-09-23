const addCategoryInSelectedState = (
	selectedCategories,
	initialCategories,
	currentId
) => {
	const clonedSelectedCategories = structuredClone(selectedCategories);

	const currentCategory = initialCategories.find(
		(category) => category.id === currentId
	);

	if (currentCategory.isChecked) {
		return [...clonedSelectedCategories, currentCategory];
	}

	return clonedSelectedCategories.filter(
		(category) => category.id !== currentId
	);
};

export default addCategoryInSelectedState;
