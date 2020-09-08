window.onscroll = function(item) {
    if (item.path[1].scrollY > 100) {
        var header = document.getElementById("menu");
        header.style.position = "fixed" ;
        header.style.top = 0;
        header.style.width = '100%';
        header.style.right= 0;
        header.style.left= 0;
        header.style.transition= 'width 2s';
    }else{
        var header = document.getElementById("menu");
        header.style.position = "fixed" ;
        header.style.left= '10%';
        header.style.right= '10%';
        header.style.top= '7%';
        header.style.width= '80%';

    }
}


$(document).ready(function () {
    $('#onTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
  });