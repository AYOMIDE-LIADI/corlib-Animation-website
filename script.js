$(document).ready(function(){

function fadeLoop(){
    $('#secondimage').fadeOut(2000, function(){
        $('#firstimage').fadeIn(2000, function(){
            $('#firstimage').fadeOut(2000, function(){
                $('#secondimage').fadeIn(2000,fadeLoop)
            })
        })
    })
}
fadeLoop()
  
$('#button').click(function(){
    $('#hidden').animate({left: '700px'},1000)
})
$('#button1').click(function(){
    $('#hidden').animate({left: '700px'},1000)
})
$('#pushback').click(function(){
    $('#hidden').animate({left: '0px'},1000)
})

})