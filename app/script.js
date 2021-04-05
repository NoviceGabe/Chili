const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu-mobile');
const header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
	header.classList.toggle('sticky-top', window.scrollY > 0);
});

hamburger.addEventListener('click', function(e){
	e.preventDefault();
	const span = hamburger.querySelectorAll('span');
	
	
	if(hamburger.classList.contains('open')){
		hamburger.classList.remove('open');
		span.forEach(each => {
			each.style.background = '#000';
		});

	}else{
		hamburger.classList.add('open');
		span.forEach(each => {
			each.style.background = '#d3d3d3';
		});
	}
	menu.classList.toggle('active');
});


const favorites = [{
	id: 1,
	title: 'Alfredo Pasta',
	price: 'Php480 - Php575',
	img: 'featured1.png'
},{
	id: 2,
	title: 'Baby Back Ribs',
	price: 'Php725 - Php1,400',
	img: 'featured2.png'
},{
	id: 3,
	title: 'Beef Salpicao',
	price: 'Php785',
	img: 'featured3.png'
},{
	id: 4,
	title: 'Molten Chocolate Cake',
	price: 'Php395',
	img: 'featured4.png'
}];

const card = (data) =>{
	let path = './assets/img/';

	return `
		<div class="card">
			<div class="card__img-wrapper">
				<img src="${path}${data?.img ?? 'featured1.png'}">
			</div>
			<div class="card__content">
				<h3 class="card__content__title">${data?.title ?? 'Alfredo Pasta'}</h3>
				<p class="card__content__price">${data?.price ?? 'Free'}</p>
			</div>
		</div>
	`;
}

(()=>{
	const favContainer = document.querySelector('.main__favorites__content');
	let html = '';

	favorites.forEach(item => {
		html += card(item);
	});

	favContainer.innerHTML = html;

})();