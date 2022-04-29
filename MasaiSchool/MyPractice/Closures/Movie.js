 
async function searchmovie(){
    try {
        // let movie=document.getElementById("query").value;
        let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=74bcc86531b60937390e5766cbb3668c`)
        let data=await res.json();
        mydata=data.results
        console.log(mydata)
        appenddata(mydata)
        } catch (error) {
            console.log(error)
        }
    }
searchmovie()
let movies_div=document.getElementById("movies")
function appenddata(movies){
    movies_div.innerHTML=null;
    movies.forEach(function (elem){
        let div= document.createElement("div")
        let h4=document.createElement("h4")
        let h2=document.createElement("h4")
        let h3=document.createElement("h4")
        let overview=document.createElement("p")
        let rate=document.createElement("h4")
        let image=document.createElement("img")
       var num= elem.vote_average
       rate.textContent=num
        h4.textContent=elem.original_title
        h2.textContent=elem.Type
        overview.textContent=elem.overview
        h3.textContent=elem.release_date
        image.src=elem.poster_path;

       if(num>8.5){
        let recommend=document.createElement("p")
        recommend.textContent="Recommended"
        div.append(image,h4,h2,h3,rate,recommend)
       }
       else{
        div.append(image,overview,h4,h2,h3,rate)
       }
        
        
        movies_div.append(div)
    })
}

  