function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

function burger(){
	const arr  = [document.querySelector('.header_burger'),document.querySelector('.header-menu')]
	const body = document.querySelector('body') 
	arr[0].addEventListener('click',function(){
		arr.map(item => {
			item.classList.toggle('active')
		})
		body.classList.toggle('lock')
	})
}
burger()
// $(document).ready(function(){
// 	$('.header_burger').click(function(event){
// 		$('.header_burger,.header_menu').toggleClass('active')
// 		$('body').toggleClass('lock')
// 	})
// })