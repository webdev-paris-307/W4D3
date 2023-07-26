function copyArray(array) {
	return [...array]
}

function randomColor() {
	return `hsl(${Math.random() * 360}, 50%, 50%)`
}

function sortOrganizationByName(a, b) {
	return a.organization.name.localeCompare(b.organization.name)
}

export { copyArray, randomColor, sortOrganizationByName }
