
let Likes_count = parseInt(document.getElementById("Likes_count").innerText);

let hearts = document.getElementsByClassName("likes");
for(let i=0; i<hearts.length; i++){
hearts[i].addEventListener('click', function(){
        Likes_count++;
        document.getElementById("Likes_count").innerText = Likes_count;
        console.log(Likes_count);
})
}


let Copies_count = parseInt(document.getElementById("Copy-count").innerText);

let copies = document.getElementsByClassName("Copy");
for(let i=0; i<copies.length; i++){
copies[i].addEventListener('click', function(){
        Copies_count++;
        document.getElementById("Copy-count").innerText = Copies_count;
        console.log(Copies_count);

        let card = this.closest(".cards");


        let serviceNumber = card.getElementsByTagName("p")[1].innerText;

        navigator.clipboard.writeText(serviceNumber)
})
}


let Coins_count = parseInt(document.getElementById("Coins-count").innerText);

let history = [];

let coins = document.getElementsByClassName("Call-btn");
for(let i=0; i<coins.length; i++){
coins[i].addEventListener('click', function(){
        if(Coins_count<20){
            alert("You don't have enough coins");
        }
        else{
                Coins_count = Coins_count - 20;
                document.getElementById("Coins-count").innerText = Coins_count;
                console.log(Coins_count);

                let card = this.closest(".cards");
                let service_name = card.querySelector("h1").innerText;
                let service_number = card.getElementsByTagName("p")[1].innerText;
                alert(service_name +"\n"+ service_number);

                const data = {
                        serviceName: service_name,
                        serviceNumber: service_number,
                        date: new Date().toLocaleTimeString()
                }
                history.push(data);

                
                const div = document.createElement("div");
                div.innerHTML = 
                        `<div class="flex justify-between items-center   bg-gray-100 p-5 mt-3 mb-0 rounded-2xl">
                           <div>
                                <h1 class="Banner-discripsion ">${data.serviceName}</h1>
                                <p class="Regular-font text-gray-400">${data.serviceNumber}</p>
                          </div>
                          <div>${data.date}</div>
                       </div>`;

                const historyContainer = document.getElementById("history_container");
                historyContainer.appendChild(div);
                
                
                
        }
        
})
}

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', function(){

        const historyContainer = document.getElementById("history_container");

        historyContainer.innerHTML = ""; 
});


