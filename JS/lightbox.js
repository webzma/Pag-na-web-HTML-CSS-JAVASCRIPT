const img = document.querySelectorAll(".img-galeria");
const imgLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const hamburguesa1 = document.querySelector(".hamburguesa");


img.forEach(imagen =>{
	imagen.addEventListener("click", ()=>{
		aparecerImagen(imagen.getAttribute("src")); 
	})
});


contenedorLight.addEventListener("click", (e)=>{
	if(e.target !== imgLight){
		contenedorLight.classList.toggle("show");
		imgLight.classList.toggle("showImage");
		hamburguesa1.style.opacity = "1";
	}
});

const aparecerImagen = (imagen)=>{
	imgLight.src = imagen;
	contenedorLight.classList.toggle("show");
	imgLight.classList.toggle("showImage");
	hamburguesa1.style.opacity = "0";	
};

