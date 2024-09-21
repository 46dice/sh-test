const updateCheckedIdsInURL = (params, event, key) => {
	const { target } = event;
	if (target.checked) {
		params.append(key, target.id);
	} else {
		params.delete(key);
	}
};

export default updateCheckedIdsInURL;
