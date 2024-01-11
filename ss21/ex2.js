let a =+prompt('nhập vào 1 số để kiểm tra')
if(isNaN(a)){
    console.log('Không hợp lệ')
} else {
    if(a%2==0){
        console.log('số này là số chẵn')
    }else{
        console.log('số này là lẻ')
    }
}