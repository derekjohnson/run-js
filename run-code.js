var runCode = {
	createScript: function(button) {
		var el = document.createElement('script');

		el.appendChild(document.createTextNode(this.findCode(button)));

		document.body.appendChild(el);
	},

	findCode: function(button) {
		var previous = button.previousSibling;
		if(previous.nodeType === 3) {
			previous = previous.previousSibling;
		}

		var previous_child = previous.childNodes[0];
		if(previous_child.nodeType === 3) {
			previous_child = previous.childNodes[1];
		}
		var code = previous_child.innerHTML;

		return code;
	}
};

var	buttons = document.getElementsByTagName('button')
,	i = 0
,	ii = buttons.length;
;

for(i; i<ii; i++) {
	buttons[i].addEventListener('click', function() {
		runCode.createScript(this);
	}, false);
}