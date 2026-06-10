


function myFunction(){

    $("#room").hide();
    $("#r2").show();

};

$("#item1").click(function(){
    myFunction();
});

function green(){
    $("#surprise").show();
};


let count=0;

$(".clicker").click(function() {

    let keyID=$(this).attr("key");
    console.log(keyID);  
    keyID="#"+keyID;
    console.log(keyID);  
    let keyDiv=$(keyID);
    console.log(keyDiv); 
    $(keyDiv).show();

    count= count + 1;
    
    if (count==3) { 
        green();  
    }


});

$("#item2").click(function(){
    $("#item2").hide();
});

$("#item3").click(function(){
    $("#item3").hide();
});

$("#item4").click(function(){
    $("#item4").hide();
});

function pink(){
    $(".clickerID").hide();
};






















