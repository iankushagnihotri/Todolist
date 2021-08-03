 $("ul").on("click","li",function(){
 $(this).toggleClass("complete");
});
$("ul").on("click","span",function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500,function()
  	{
  		$(this).remove();
  	});
});
$("input").keypress(function(event){
	if(event.which === 13)
	{
	 var add=$(this).val();
	 $(this).val("");
	 $("ul").append("<li> <span><i class='fas fa-trash'></i></span> "+add+"</li>");
	}
});
$(".fa-plus").click(function(){
	$("input").fadeToggle(200);
})