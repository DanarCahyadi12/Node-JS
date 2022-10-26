const rupiah = param =>  {
    if(isNaN(param)){
        console.error(`${param} not a number. Must integer value`)
    }else{
        let str = param.toString()
        let output = ''
    if(str.length < 4){
        output+=`Rp${str}`
    }else if(str.length >= 4 && str.length < 7){
        let inc = 0
        for(let i =str.length-1; i >= 0; i--){
            if(inc === 0){
                output+='Rp'+str[inc]
            }else if(i === 2){
                output+='.'+str[inc]
            }else{
                output+=str[inc]
            }          
            inc++
        }
    }else if(str.length >= 7 && str.length < 10){
        let inc = 0
        for(let i = str.length-1; i >= 0;i--){
            if(inc === 0){
                output+=`Rp${str[inc]}`
            }else if( i === 5 || i === 2){
                output+=`.${str[inc]}`
            }else {
                output+=str[inc]
            }
            inc++
        }
    }
    console.log(output)
    }
}

exports.rupiah = rupiah