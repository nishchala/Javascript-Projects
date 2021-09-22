document.addEventListener("DOMContentLoaded",() => {
    const display = document.getElementById("display");
    display.textContent = "0";
    
})

let num1flag = 0, num2flag = 0, num1 =0, num2 =0, opflag = 0;
let op = "";

const num = document.getElementsByClassName("num");
for(let i=0; i < num.length; i++) {
    num[i].addEventListener("click", ()=>{
        if(num1flag ==0 && opflag==0 && num2flag==0) {
            num1=Number(num[i].innerHTML);
            console.log(num1);
            display(num1);
            num1flag = 1;
        }
        else if(num1flag = 1 && opflag==0 && num2flag==0) {
            num1 += num[i].innerHTML;
            num1 = Number(num1);
            console.log(num1);
            display(num1);
        }
        else if(num1flag==0 && opflag==1 && num2flag==0) {
            num2flag=1;
            opflag=0;
            num2=Number(num[i].innerHTML);
            console.log(num2);
            display(num2);
        }
        else if(num2flag==1 && num1flag==0 && opflag==0) {
            num2 += num[i].innerHTML;
            num2 = Number(num2);
            console.log(num2);
            display(num2);
        }

        // console.log(typeof Number(num[i].innerHTML));
    });
}

const opr = document.getElementsByClassName("op");
// console.log(opr);
for(let i=0; i < opr.length; i++) {
    opr[i].addEventListener("click", ()=>{
        if(opflag==0 && num1flag==0 && num2flag==0) {
            num1=0;
            
            op = opr[i].innerHTML;
            
             opflag=1;
            console.log(op);
            display(num1);
        }
        else if(opflag==0 && num1flag==1 && num2flag==0) {
            num1flag=0;
            opflag=1;
            op = opr[i].innerHTML;
            console.log(op);
        }
        else if(opflag==1 && num1flag==0 && num2flag==0) {
            num1 = calc(num1,num2,op);
            num2 = 0;
            op = opr[i].innerHTML;
            console.log(num1);
            console.log(op);
            display(num1);
        }
        else if (opflag==0 && num1flag==0 && num2flag==1) {
            opflag=1;
            num2flag=0;
            num1 = calc(num1,num2,op);
            num2=0;
            op=opr[i].innerHTML;
            

            console.log(num1);
            console.log(op);
            display(num1);
        }
    });}

    const equal = document.getElementById("equal");
    equal.addEventListener("click", ()=>{
        num1 = calc(num1,num2,op);
        display(num1);
        num1flag = 1;
        opflag =0;
        num2flag =0;
    });

    const clear = document.getElementById("clear");
    clear.addEventListener("click", ()=> {
        num1flag = num2flag = num1 = num2 = opflag = 0;
        op = "";
        display(0);
    })

    const calc = (num1,num2,op) => {
        if(op=="+") return num1+num2;
        if(op=="-") return num1-num2;
        if(op=="*") return num1*num2;
        if(op=="/") return num1/num2;
        if(op=="%") return num1%num2;
        if(op=="=") return num2; //to do num1 + num2 = (result) + num1
    }

    const display = (num) => {
        const display = document.getElementById("display");
    display.textContent = num;
    }



