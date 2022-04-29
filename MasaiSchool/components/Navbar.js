function navbar(){
    return `<div id="jnavbar">
    <a href="index.html"><img src=".components/icons/download.svg" alt=""></a>
    <button id="explore">Explore <span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 12px;" data-rotate="270deg"></span></button>
    <input type="text" placeholder="What do you want to learn?">
    <button id="search"><span class="iconify" data-icon="eva:search-outline" data-width="20"></span></button>
    <p><a href="">Online Degrees</a></p>
    <p><a href="">Find your New Career</a></p>
    <p><a href="">For Enterprise</a></p>
    <p><a href="">For Universities</a></p>
    <p><a href="">Log In</a></p>
    <button>Join for Free</button>
</div>`
}
export default navbar