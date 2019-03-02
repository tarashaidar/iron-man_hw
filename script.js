var bar = document.getElementById('menu-bars');
var close = document.getElementById('close-bars');
var navigation = document.getElementById('menu-items');
bar.onclick=function(){

	bar.style.display='none';
	close.style.display='block';
	navigation.style.display='block';
}
close.onclick=function(){
	bar.style.display='block';
	close.style.display='none';
	navigation.style.display='none';
}