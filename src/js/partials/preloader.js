document.body.onload = function(){
    setTimeout(function(){
        var wrapper = document.querySelector('.wrapper');
        var preloader = document.querySelector('.load');
        if(wrapper.style.opacity = "0"){
            wrapper.style.opacity = "1"
            preloader.style.visibility = "hidden"
        }
    }, 250)
};