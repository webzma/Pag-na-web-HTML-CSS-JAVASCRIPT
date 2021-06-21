//OBTENER LOS ELEMENTOS DEL HTML

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu-navegacion");

// console.log(menu);
// console.log(hamburguesa);


//FUNCIÓN PARA OCULTAR Y ABRIR MENU

hamburguesa.addEventListener("click", funcionar);

function funcionar()
{
	menu.classList.toggle("spread");
}


window.addEventListener("click", ventana);

function ventana(e)
{
	if(menu.classList.contains("spread") && e.target != menu && e.target != hamburguesa)
	{
		menu.classList.toggle("spread");
	}
}