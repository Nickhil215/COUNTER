const endDate='24 April 2024 10:55 AM '
document.getElementById("endDate").innerText=endDate;
const inputs=document.querySelectorAll("input");



function clock(){
    const end=new Date(endDate);
    const now=new Date();
    // console.log(end);
    // console.log(now);
    const diff=(end-now)/1000;

    if(diff<0) return;

    if(now==end){
        alert("END");
    }
    //days
    // console.log(Math.floor(diff/3600/24));
    inputs[0].value=Math.floor(diff/3600/24);

    //hours
    // console.log(Math.floor(diff/3600)%24);
    inputs[1].value=Math.floor((diff/3600)%24);

    // Minutes

    // console.log(Math.floor((diff/60)%60));
    inputs[2].value=Math.floor((diff/60)%60);


    // seconds

    inputs[3].value=Math.floor(diff%60);



    


}

clock();


setInterval(()=>{
    clock()
},1000)
