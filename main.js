function getPara_1(){
    var inputs = [];
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("para_1_input_box_" + i).value);
    }
    document.getElementById("showPara_1").innerHTML=inputs.join(". ")
}
function getPara_2(){
    var input = [];
    for(var j=1;j<=6;j++){
        input.push(document.getElementById("para_2_input_box_" +j).value);
    }
    document.getElementById("showPara_2").innerHTML=input.join(". ")
}