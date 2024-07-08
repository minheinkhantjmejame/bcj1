$(document).ready(function(){
	// Start Header
      // Start nav

      // for bugger
       $('.navbuttons').click(function(){
       	$('.navbuttons').toggleClass('crossxs');
       });

       // for nav
       $(window).scroll(function(){
       	// console.log('hay');

       	let getscrolltop=$(this).scrollTop();
       	console.log(getscrolltop);

       	if(getscrolltop>=200){
       		$('.navbar').addClass('navmenu');
       	}else{
       		$('.navbar').removeClass('navmenu');
       	}
       })
      // End nav
	// End Header
})