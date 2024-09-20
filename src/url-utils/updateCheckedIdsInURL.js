const updateCheckedIdsInURL = (params, event, index) => {
	const { target } = event;

	if (target.checked) {
		params.append(index, target.id);
	} else {
		params.delete(index);
	}
};

export default updateCheckedIdsInURL;
