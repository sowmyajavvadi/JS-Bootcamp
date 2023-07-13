// check the eligibility for vote
function checkeligibility(){
    let age=document.getElementById('age')
    if (age.value>=18){
        document.getElementById('Message').innerText = "You are eligible to vote.";
    }
    else{
        document.getElementById('Message').innerText = "You are not eligible to vote yet.";

    }

}

// generate a table
function GenerateTable(){
    let number=document.getElementById('num')
    for(let i=1;i<=10;i++)
    { 
        result=number.value*i;
        document.write(i+"*"+number.value+"="+result+"<br>"); 
    }
}

// convert dollar to rupees
function convert(){
    let amount=document.getElementById('amount');
    let rupees=amount.value*74.5;
    document.getElementById('convertedamount').innerText="Converted into rupees: "+rupees+"/-"

}