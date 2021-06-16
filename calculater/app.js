//Calculater


function setValue(num){
    // console.log(num);
    var val = document.getElementById('val');
    var lastVal = val.value.slice(val.value.length - 1);
    var opt = ['+','-','/','*'];
    if(opt.indexOf(lastVal) !== -1 && opt.indexOf(num) !== -1){
        val.value = val.value.slice(0,val.value.length -1) + num
    }
    else{
        val.value += num;
    }
}

// function del(){
//     var val = document.getElementById('val');
//     val.value = val.value.slice(0,val.value.length -1)
// }

function setResult(){
    var val = document.getElementById('val');
    val.value = eval(val.value)
}

function clearVal() {
    var val = document.getElementById('val');
    val.value = ""
}



// function getnumber(num) {
//     var result = document.getElementById("result");
//     result.value += num
// }

// function getclear() {
//     var result =document.getElementById("result");
//     result.value = ""
// }
// function getResult() {
//     var result = document.getElementById("result")
//     result.value = eval(result.value)
// }
