var rating = document.querySelectorAll(".star-div>i");
var display = document.querySelector("#outer-div");

rating.forEach((node,index)=>{
    node.addEventListener('click',()=> {
            rating.forEach((node, index2) => {
                if(index >= index2){
                    node.classList.add("highlight")
                    display.innerHTML = index+1;
                    console.log(index,index2)
                }
                else{
                    node.classList.remove("highlight");
                } 
            })
              });
        
            })



