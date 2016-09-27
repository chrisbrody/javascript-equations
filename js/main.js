function formData(form1) {
	var num1 = form1.elements.num1
	var num2 = form1.elements.num2
	x = parseInt(num1.value) + parseInt(num2.value)
	console.log('Addition is: ' + x)



	document.getElementById('results').textContent = x
}

document.getElementsByName('addition')[0].addEventListener('click', function() {
	addition()
})

function addition() {
	var newForm = document.createElement('form')
	var newFromGroup1 = document.createElement('div')
	var newFromGroup2 = document.createElement('div')
	var newRow = document.createElement('div')
	var newRow2 = document.createElement('div')
	var newBtn = document.createElement('button')
	var btnText = document.createTextNode('Add Numbers')

	newRow2.appendChild(newBtn)
	newBtn.appendChild(btnText)

	newBtn.type = 'button'
	newBtn.className = 'btn btn-primary col-sm-6 col-sm-offset-3'
	newBtn.name = 'addNumbers'

	newBtn.addEventListener('click', function(){
		formData(additionForm)
	})


	for(var i = 0; i < 2; i++) {
		var newCol = document.createElement('div')
		var newLabel = document.createElement('label')
		var newLabelText = document.createTextNode('Number ' + (i + 1))
		var newInput = document.createElement('input')

		// set class of new column
		if(i == 0) {
			newCol.className = 'col-sm-3 col-sm-offset-3'
		} else {
			newCol.className = 'col-sm-3'
		}
		// add to new column
		newCol.appendChild(newLabel)
		newCol.appendChild(newInput)

		// add label text to new label
		newLabel.appendChild(newLabelText)

		// add attributes to input
		newInput.name = 'num' + (i + 1)
		newInput.type = 'number'
		newInput.className = 'form-control'

		// add new column to row
		newRow.appendChild(newCol)
	}
	// add number inputs to new form group 1
	newFromGroup1.appendChild(newRow)

	newForm.setAttribute('name', 'additionForm')

	newFromGroup1.className = 'form-group'
	newFromGroup2.className = 'form-group'
	newRow.className = 'row'
	newRow2.className = 'row'

	document.getElementById('options').style.display = 'none'

	document.getElementById('mainForm').appendChild(newForm)
	newForm.appendChild(newFromGroup1)
	newForm.appendChild(newFromGroup2)

	newFromGroup2.appendChild(newRow2)
}


