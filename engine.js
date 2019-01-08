const inputs = document.querySelectorAll(".controlls input");

//	Listeners for events
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(){
	const suffix = this.dataset.sizing || "";

	document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
	console.log(this.value);



	//	Reload all values, otherwise result will be stuck untill all values are change
	inputs.forEach((input) => {
		const suffix = input.dataset.sizing || "";
		document.documentElement.style.setProperty(`--${input.name}`, input.value+suffix);
	});

}

//	Load photo
document.getElementById('picFile').onchange = function(event) {
	console.log("change");
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('target-photo');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };