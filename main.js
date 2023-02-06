
const btns = document.querySelectorAll('button');
const result = document.querySelector("#result");


for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", (e) => {
        //alert("hi")

        if (e.target.innerText === "C") {
            result.innerText = result.innerText.slice(0, -1)
            //result.innerText = result.innerText.slice(0,result.innerText.length-1)
        }
        else if (e.target.innerText === "AC") {
            result.innerText = ""
        }
        else if (e.target.innerText !== "=") {
            result.innerText += e.target.innerText
        }

        else {
            // alert("hi")
            try {
                result.innerText = eval(result.innerText)
            }
            catch (error) {
                alert("this wrong way")
            }
        }
    })
}