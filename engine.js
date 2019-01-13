const inputs = document.querySelectorAll(".controlls input");

//	Listeners for events
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(){
	const suffix = this.dataset.sizing || "";

	document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
	console.log(this.value);



	//	Reload all values, otherwise result will be stuck untill all values are changed
	inputs.forEach((input) => {
		const suffix = input.dataset.sizing || "";
		document.documentElement.style.setProperty(`--${input.name}`, input.value+suffix);
	});

}

//	Load photo <--- to update
document.getElementById('picFile').onchange = function(event) {
	console.log("change");
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('target-photo');
      output.src = dataURL;
      var output = document.getElementById('target-photo-origin');
      output.src = dataURL;
      console.log(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  };

  //  Compare with origin photo
 document.querySelector("input[name='compare-with-origin']").onchange = () => {
   const originPhotoSelector = document.getElementById('target-photo-origin');
   const checkbox =  document.querySelector("input[name='compare-with-origin']");

   if(checkbox.checked){
    originPhotoSelector.style.display = "block";
   }else{
    originPhotoSelector.style.display = "none";
   }
  
 }

 // Mirror reflection
 document.querySelector("input[name='flip-photo']").onchange = () => {
  const targetPhoto = document.getElementById('target-photo');
  const checkbox =  document.querySelector("input[name='flip-photo']");

  if(checkbox.checked){
   targetPhoto.className += " flip";
  }else{
   targetPhoto.classList.remove('flip');
  }

 }

 // Background color from pallete
document.querySelector("input[name='color-palette']").onchange = ()  =>{
  const phtBackground = document.querySelector(".img-holder");
  const color = document.querySelector("input[name='color-palette']").value;

  phtBackground.style.setProperty("background-color", color);

}
 

//  Reset background
document.getElementById("btn-reset").onclick = () =>{
  const phtBackground = document.querySelector(".img-holder");
  const palette = document.querySelector("input[name='color-palette']");

  phtBackground.style.setProperty("background-color", "#344E5C");
  palette.value = "#344E5C";
}