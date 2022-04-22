function ajaxcallAPI(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            var PJson = JSON.parse(xhttp.responseText);
            var dtext = ""
            for(i=0;i<PJson.length;i++)
            {
                if(PJson[i].completed == true)
                {
                    dtext += "<input type='checkbox' id = Check" + i + " class='mycheck' checked=true disabled=true>   " + PJson[i].title + "<br>";
                }
                else
                {
                    dtext += "<input type='checkbox' id = Check" + i + " class='mycheck' onclick='getCompleteCount1(this);'>   " + PJson[i].title + "<br>";                        
                }
            }
            document.getElementById("demo").innerHTML = dtext;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

function CallLoginPage(){
    window.location="index.html";
}

var TotComplete = 0;
function getTotComplete(myCheckBox){
        alert("Congrats. 5 Tasks have been Successfully Completed");
};

function getCompleteCount(mycheckbox){
    return new Promise(function(resolve, reject){
            var sucess = false;
            if(!sucess)
            {
                if (mycheckbox.checked==true)
                {
                    TotComplete += 1;
                }
                else
                {
                    TotComplete -= 1;
                }

                if(TotComplete==5)
                {
                    resolve();
                }
            }
            else{
                reject("Error");
            }
    })
}

function getCompleteCount1(me){
    var me1 = document.getElementById(me.id);
    getCompleteCount(me1)
    .then(getTotComplete)
    .catch(function(e){
        console.log(e);
    });
}
