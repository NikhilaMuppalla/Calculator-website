let string = "";
let buttons = document.querySelectorAll('.button');
function fact(num) {     
    if (num < 0){ 
       return -1; 
    } 
    else if(num == 0){ 
       return 1; 
    } 
    else { 
       let result = 1; 
       for(var i = num; i > 1; i--){ 
          result *= i; 
       }; 
       return result; 
    } 
 }; 
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            Ans = eval(string);
            document.querySelector('input').value = Ans;
            string = Ans;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='!'){
            string=eval(string);
            Ans=fact(string);
            document.querySelector('input').value=Ans;
            string=Ans;
        }
        else if(e.target.innerHTML=='In'){
            string=eval(string);
            Ans=Math.log(string);
            document.querySelector('input').value=Ans;
            string=Ans;
        }
        else if(e.target.innerHTML=='log'){
            string=eval(string);
            Ans=Math.log10(string);                                                                           
            document.querySelector('input').value=Ans;
            string=Ans;
            
        }
        else {
            if (e.target.innerHTML == 'BS') {
                string = string.replace(string.charAt(string.length - 1), "");
                document.querySelector('input').value = string;
            }
            
            else {
                if (e.target.innerHTML == 'sin' || e.target.innerHTML=='cos' || e.target.innerHTML =='tan' || e.target.innerHTML =='cosec' || e.target.innerHTML=='sec' || e.target.innerHTML=='cot') {
                    string=eval(string);
                    string=string*Math.PI/180
                    if(e.target.innerHTML=='sin'){
                        Ans = Math.sin(string);
                    }
                    else if(e.target.innerHTML=='cos'){
                        Ans=Math.cos(string);
                    }
                    else if(e.target.innerHTML=='tan'){
                        Ans=Math.tan(string);
                    }
                    else if(e.target.innerHTML=='cosec'){
                        Ans=1/Math.sin(string);
                    }
                    else if(e.target.innerHTML=='sec'){
                        Ans=1/Math.cos(string);
                    }
                    else if(e.target.innerHTML=='cot'){
                        Ans=1/Math.tan(string);
                    }
                    document.querySelector('input').value = Ans;
                    string = Ans;
                }
               
                //console.log(e.target)
                else{
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                }
                
            }

        }

    })
})
