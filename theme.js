let light = true;
function swapTheme() {
    document.querySelectorAll('*').forEach(x => {
        x.classList.toggle('dark-theme');
    });
}

$('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
    if (light) {
        swapTheme("/theme/dark/style.scss");
    } else {
        swapTheme("/theme/light/style.scss");
    }
    light = !light;
});