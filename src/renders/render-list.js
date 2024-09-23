const renderList = (container, data) => {
	container.innerHTML = '';
	data.forEach((elem) => {
		const li = document.createElement('li');
		li.innerHTML = `
					<label for="${elem.id}">
						<span>${elem.title}</span>
							<input
								type="checkbox"
								id="${elem.id}"
								class="checkbox"
								${elem.isChecked && 'checked'}
								data-title=${elem.title}
							/>
					</label>
		`;
		container.append(li);
	});
};

export default renderList;
