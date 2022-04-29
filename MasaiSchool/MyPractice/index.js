var i=0;
var imgarr=["https://i.ytimg.com/vi/KfaYkyTMOYA/maxresdefault.jpg","https://imageio.forbes.com/blogs-images/scottmendelson/files/2019/03/FIN02_JW3_1Sht_Payoff_VF1-1200x675.jpg?fit=bounds&format=jpg&width=960","https://pro2-bar-s3-cdn-cf3.myportfolio.com/0d77262d-68bc-4f69-ba3d-e739ca29a233/e4d65f35-c9b7-4ec9-b9ed-86e106c8b430_rw_1920.jpg?h=52c9ee058b699803910345678592d0ec", "https://wallpapercave.com/wp/wp1851117.jpg","https://www.slashfilm.com/wp/wp-content/images/it_ver3_xlg.jpg","https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/Insidious-Movies-in-Order.jpg", "https://trendingnewsbuzz.com/wp-content/uploads/2021/05/the-witch.jpg","https://stanforddaily.com/wp-content/uploads/2020/01/ford-v-ferrari.jpg","https://i1.wp.com/3.bp.blogspot.com/-cDcbexO5J9o/T6xPl8LlUaI/AAAAAAAAAFY/MMbRH_dBfXA/s1600/prometheus_banner.jpg","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7116/517116-h"]
let img=document.getElementById("slideimage")
let x=setInterval(function(){
    if(i==10){
        i=0;
    }
    img.src=imgarr[i];
    i++
}, 3000)

async function searchmovie(){
    try {
        let movie=document.getElementById("query").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=d806bd70&s=${movie}`)
        let data=await res.json();
       return data.Search
        } catch (error) {
            console.log(error)
        }
    }

async function main(){
    let data= await searchmovie();
    if(data===undefined){
        return
    }
    appenddata(data)
    console.log(data) 
    }

    let movies_div=document.getElementById("movies")
    function appenddata(movies){
        movies_div.innerHTML=null;
        movies.forEach(function (elem){
            let div= document.createElement("div")
            let h4=document.createElement("h4")
            let h2=document.createElement("h4")
            let h3=document.createElement("h4")
            let rate=document.createElement("h4")
            let image=document.createElement("img")
           var num=((Math.random()*9)+1).toFixed(1);
           rate.textContent=num
            h4.textContent=elem.Title
            h2.textContent=elem.Type
            h3.textContent=elem.Year
            image.src=elem.Poster;

           if(num>8.5){
            let recommend=document.createElement("p")
            recommend.textContent="Recommended"
            div.append(image,h4,h2,h3,rate,recommend)
           }
           else{
            div.append(image,h4,h2,h3,rate)
           }
            
            
            movies_div.append(div)
        })
    }
    let timerID;
    function debounce(func,delay){
        if(timerID){
            clearTimeout(timerID)
        }
    timerID= setTimeout(function(){
        func();
    },delay) ;
    }


  