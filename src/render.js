const render = (container, data) => {
	data.forEach((elem) => {
		const li = document.createElement('li');
		li.innerHTML = `
					<label for="${elem.id}">
						<span>${elem.id}</span>
							<input
								type="checkbox"
								id="${elem.id}"
								class="checkbox"
							/>
					</label>
		`;
		container.append(li);
	});
};

export default render;
