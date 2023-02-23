let videolink=document.getElementById('url');


function converturl(){ 
    let url=videolink.value;
    if (url.search("watch=?")){
        let start=document.getElementById('starttime').value;
        let end=document.getElementById('endtime').value;
        let embedurl=url.replace("watch?v=","embed/");
        trimmedurl=`${embedurl}?start=${start}&end=${end}`;
        console.log(trimmedurl);
        document.getElementById("player").src=trimmedurl;
    }

    document.getElementById('myform').reset();
};

document.getElementById('btn').addEventListener("click",converturl)