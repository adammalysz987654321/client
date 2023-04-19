const socket=io("http://localhost:3000")
let no_name=true
const name="";
const  new_id = () => {
    if(!no_name){
        const id=document.getElementById("id").value;
        const name=document.getElementById("name").value;
        socket.emit("message",name+":"+id)
    }
    
    
}
socket.on("text",input=>{
    if(!no_name){
        document.getElementById("text").value +=input+"\n";
    }
    
    
})
const  new_name = () => {
    if(no_name){
        const name=document.getElementById("name").value;
        no_name=false
    }
    console.log(no_name)
    //socket.emit("message",name+":"+id)
    
}