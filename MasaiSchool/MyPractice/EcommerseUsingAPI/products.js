 
 let url=  "https://fakestoreapi.com/products"

 async function getProducts(){
    try{
        let productlist=await fetchproducts(url);
        console.log(productlist);
        renderproducts(productlist);
    }
    catch(error){
        console.log(error);
    }
 }

 let cart = localStorage.getItem("cart");
 if (!cart) {
   // if cart is null/undefined;
   cart = []; // initialize it with empty array;
   localStorage.setItem("cart", JSON.stringify(cart));
   refreshCart(cart);
 } else {
   // if data exists in cart;
   cart = JSON.parse(cart); // get the data | data format [{id:1, title:1, ..},{},{}]
   refreshCart(cart);
 }
  
 
 function refreshCart(cart){
     let cartcount=document.getElementById("CartCount")
     cartcount.textContent=cart.length
 }
 getProducts();
  function fetchproducts(url){
     return fetch(url)
     .then(function(res){
         return res.json();
     })
     .then(function(res){
         return res;
     })
     .catch(function(err){
         console.log(err);
     })
 }
 function addToCart(ele){
     let cart=JSON.parse(localStorage.getItem("cart"));
     cart.push(ele);
    
     localStorage.setItem("cart", JSON.stringify(cart));
     refreshCart(cart);
 }

 //gets invoked when users select sort criteria
 async function sortProducts(){
     try {
        let productslist=await fetchproducts(url);
        let sortcriteria=document.getElementById("sortbutton").value
        let filtercriteria=document.getElementById("filterbutton").value
        if(sortcriteria){
            let updatedProductsList=productslist.filter(filterfunction).ProdAsort(function sortfunction(ProdA, prodB){
                if(sortcriteria=="desc"){
                    return ProdA.price-prodB.price
                }
                else if(sortcriteria=="asc")
                return prodB.price-ProdA.price
               })
               renderproducts(updatedProductsList)
               function filterfunction(prod){
                if(filtercriteria=="0-50"){
                    return prod.price<=50
                }
                 else if(filtercriteria=="51-150"){
                return prod.price>=51 && prod.price<=150
                }
                else if(filtercriteria==">150")
                 return prod.price>150
                 }
        }
        
        else{
            renderproducts(productslist)
        }
     }
      catch (error) {
         console.log(error)
     }
    
     
 }
 async function filterProducts(){
    try {
       let productslist=await fetchproducts(url);
       let filtercriteria=document.getElementById("filterbutton").value
        
           let updatedProductsList=productslist.filter(function filterfunction(prod){
               if(filtercriteria=="0-50"){
                   return prod.price<=50
               }
                else if(filtercriteria=="51-150"){
               return prod.price>=51 && prod.price<=150
               }
               else if(filtercriteria==">150")
                return prod.price>150
                })
            renderproducts(updatedProductsList)
       }
       catch (error) {
        console.log(error)
    }
       
    }
    

 function renderproducts(products){
     let container=document.querySelector("#container")
     container.innerHTML="";
     products.forEach(function (ele){
        var div=document.createElement("div")
        var image=document.createElement("img")
        image.src=ele.image
        var Cat=document.createElement("h3")
        Cat.textContent=ele.category;
        var name=document.createElement("h4")
        name.textContent=ele.title;
        var des=document.createElement("p")
        des.textContent=ele.description
        var price=document.createElement("p")
        price.textContent="Price : INR "+ ele.price
        var btn=document.createElement("button");
        btn.textContent="Add to cart";
        btn.onclick=function(event){
           addToCart(ele)
        }
        var div1=document.createElement("div")
        div1.setAttribute("id","div1")
        div1.append(price, btn)
        var rating=document.createElement("p")
        rating.textContent=ele.rating.rate;
        var ratingcount=document.createElement("p")
        ratingcount.textContent=ele.rating.count;
       
        
        
        div.append(image,name,rating,div1);
        container.append(div)
     })
    
    
 }
