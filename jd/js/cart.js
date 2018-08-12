var deleteButs = document.querySelectorAll('.delete');
var comfirm = document.querySelector('#comfirm');
var mask = document.querySelector('#mask');
var cancel = document.querySelector('#cancel');
var current = null;

for (var i = 0; i < deleteButs.length; i++) {

	deleteButs[i].onclick = deleteFn;

}

function deleteFn () {

	this.children[0].classList.add('active');

	current = this.children[0];

	mask.style.display = "block";

	comfirm.classList.add('active');

}

cancel.onclick = function () {

	setTimeout(function () {
		mask.style.display = "none";
	},600);

	comfirm.classList.remove('active');
	current.classList.remove('active');

};