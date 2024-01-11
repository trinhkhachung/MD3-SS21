let day = +prompt('mời nhập')
    switch (day) {
        case 2:
            day = 'Monday'
            break;
        case 3:
            day = 'tuesday'
            break;
        case 8:
            day = 'sunday'
            break;
        default:
            console.log('không hợp lệ')
    }
    console.log(day)
    
