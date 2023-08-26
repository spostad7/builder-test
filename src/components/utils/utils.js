export const clx = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

export const isReactComponent = (element) => {
	return element.hasAttribute && element.hasAttribute('data-reactid');
};
