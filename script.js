const generatePDFButton = document.getElementById('generate-pdf');

generatePDFButton.addEventListener('click', () => {
	const quote = document.getElementById('quote').value;

	// Generate PDF here
	// ...

	alert(`PDF generated with quotation: ${quote}`);
});
