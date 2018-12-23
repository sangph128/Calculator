function calculation() {

	var answer = document.querySelector("#answer");
	var num1 = Number(document.querySelector('#num1').value);
	var num2 = Number(document.querySelector('#num2').value);
	var select = document.querySelector('select');

	if (select.options[select.selectedIndex].value === "minus") {
		answer.innerHTML = num1 - num2;
	} else if (select.options[select.selectedIndex].value === "add") {
		answer.innerHTML = num1 + num2;
	} else if (select.options[select.selectedIndex].value === "divide") {
		answer.innerHTML = num1 / num2;
	} else if (select.options[select.selectedIndex].value === "multiply") {
		answer.innerHTML = num1 * num2;
	} else {
		answer.innerHTML = "Invalid Operator"
	}
}
