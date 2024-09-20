const changeUrlWithParams = (params) => {
	window.history.replaceState(
		{},
		'',
		`${window.location.pathname}?${params.toString()}`
	);
};

export default changeUrlWithParams;
