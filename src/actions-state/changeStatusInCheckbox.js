const changeStatusInCheckbox = (data, id) => {
	const category = data.find((cat) => cat.id === id);
	if (category) {
		category.isChecked = !category.isChecked;
	}
	return structuredClone(data);
};

export default changeStatusInCheckbox;
