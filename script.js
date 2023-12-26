let product__btn = document.getElementsByClassName("product__btn")
let wrapper = document.getElementsByClassName("wrapper")[0]
let closewrapper = document.getElementsByClassName("closewrapper")[0]
let modalwrapper = document.getElementsByClassName("modalwrapper")[0]
let close = document.getElementsByClassName("close")[0]
let zoomimg = document.getElementsByClassName("zoomimg")
let formbtn = document.getElementsByClassName("form-btn")[0]
let rezolt = document.getElementsByClassName("rezolt")[0]
let formBody = document.getElementsByClassName("form_body")[0]
let formInputName = document.getElementsByClassName("form-input-name")[0]
let formInputLastname = document.getElementsByClassName("form-input-lastname")[0]
let formInputEmail = document.getElementsByClassName("form-input-email")[0]
let form2InputName = document.getElementsByClassName("name")[0]
let form2InputLastName = document.getElementsByClassName("lastname")[0]
let form2InputPhonenumber = document.getElementsByClassName("phonenumber")[0]
let form2InputAddress = document.getElementsByClassName("address")[0]
let form2btn = document.getElementsByClassName("confirm-order")[0]
let formtextbig = document.getElementsByClassName("form-text-big")[0]
let form2body = document.getElementsByClassName("form2body")[0]


for(let i = 0; i < product__btn.length; i++){
    product__btn[i].addEventListener("click", function () {
        wrapper.style.display = 'flex'
    })
}


close.addEventListener("click", function (){
    wrapper.style.display = "none"
})

for(let i = 0; i < zoomimg.length; i++){
    zoomimg[i].addEventListener("click", function(){
    modalwrapper.style.display = 'flex'
    })



    close.addEventListener("click", function (){
        modalwrapper.style.display = "none"
    })
}

formbtn.addEventListener("click", function (){
    if ( checkForm() == true) {
        rezolt.style.display = 'block' 
        formBody.style.display = 'none'
    }
})
function checkForm(){
    if(formInputName.value == ''){
        formInputName.style.border = '1px solid red'
        return false
    } else {
        formInputName.style.border = '1px solid green'

    }
    
    if(formInputLastname.value == ''){
        formInputLastname.style.border = '1px solid red'
        return false
    } 
    else{
        formInputLastname.style.border = '1px solid green'
    }
    

    if(formInputEmail.value == ''){
        formInputEmail.style.border = '1px solid red'
        return false
    }
    else{
        formInputEmail.style.border = '1px solid green'
    }



    return true
}



formbtn.addEventListener("click", function (e){
    e.preventDefault()

    sendData()
})

form2btn.addEventListener("click", function (e){
    e.preventDefault()
    if ( checkForm2() == true) {
        sendData()
        formtextbig.style.display = 'block' 
        form2body.style.display = 'none'

    }
})

function checkForm2(){
    if(form2InputName.value == ''){
        form2InputName.style.border = '1px solid red'
        return false
    } else {
        form2InputName.style.border = '1px solid green'

    }
    
    if(form2InputLastName.value == ''){
        form2InputLastName.style.border = '1px solid red'
        return false
    } 
    else{
        form2InputLastName.style.border = '1px solid green'
    }
    

    if(form2InputPhonenumber.value == ''){
        form2InputPhonenumber.style.border = '1px solid red'
        return false
    }
    else{
        form2InputPhonenumber.style.border = '1px solid green'
    }
    if(form2InputAddress.value == ''){
        form2InputAddress.style.border = '1px solid red'
        return false
    }
    else{
        form2InputAddress.style.border = '1px solid green'
    }



    return true
}




function sendData(){
    let token = '6549492423:AAGPFUGV7pgJ-EVp2QTxZJju4YXSLWTCj90';
    let myId = 2113505735
    let name =  document.getElementsByClassName('form-input-name')[0].value
    let lastname =  document.getElementsByClassName('form-input-lastname')[0].value
    let email =  document.getElementsByClassName('form-input-email')[0].value


    let rezolttext = `name: ${name}.  lastname:${lastname}.  email:${email}      `

    fetch('https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + myId + '&text=' + rezolttext  )
}
