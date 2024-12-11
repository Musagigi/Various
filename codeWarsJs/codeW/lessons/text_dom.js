const $box = document.getElementById('box');

$box.innerText = 'New Text';
console.log($box.innerText)

$box.style.widht = '500px'

$box.addEventListener('click', function(){
    alert('Клик клик клик');
})
