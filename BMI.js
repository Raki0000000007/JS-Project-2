const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const Height=parseInt(document.querySelector('#Height').value)
    const Weight=parseInt(document.querySelector('#Weight').value)
    const submit=document.querySelector('.score')
    const BMI=Weight/((Height*Height)/10000).toFixed(2)
    const results=document.querySelector('.results')


    if(Height === ' ' || isNaN(Height) || Height < 0){
        submit.innerHTML=`Please anter a valid Height ${Height}`
    }
    else if(Weight === ' ' || isNaN(Weight) || Weight < 0){
        submit.innerHTML=`Please anter a valid Weight ${Weight}`

    }else{
        submit.innerHTML=`Your BMI is ${BMI}`
        
    }
if(BMI < 18){
    results.innerHTML='You are Under weight'
}else if(BMI > 24.9){
    results.innerHTML='You are Over weight'
}else if(BMI > 18.6 && BMI < 34.9){
    results.innerHTML='You are Perfect'
}

})