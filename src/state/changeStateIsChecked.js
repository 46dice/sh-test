const changeStateCheckboxIsChecked = (data, id) => {
	const uppdatedCategories = data.map((category) => {
		if (id === category.id) {
			return {
				...category,
				isChecked: !category.isChecked,
			};
		}
		return category;
	});
	return uppdatedCategories;
};

export default changeStateCheckboxIsChecked;
