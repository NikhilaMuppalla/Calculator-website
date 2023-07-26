let string = "";
let buttons = document.querySelectorAll('.button');
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

        else {
            if (e.target.innerHTML == 'BS') {
                string = string.replace(string.charAt(string.length - 1), "");
                document.querySelector('input').value = string;
            }
            else {
                if (e.target.innerHTML == 'sin') {
                    Ans = Math.sin(parseInt(string));
                    document.querySelector('input').value = Ans;
                    string = Ans;
                }
                //console.log(e.target)
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }

        }

    })
})