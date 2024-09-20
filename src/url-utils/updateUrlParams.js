const updateUrlParams = (params, event, ix, checkbox) => {
	if (checkbox.checked) {
		params.append(ix, event.target.id);
	} else {
		params.delete(ix);
	}
};

export default updateUrlParams;
