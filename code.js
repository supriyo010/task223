console.log("hello");
var inp1 = document.getElementById("inp1")
var btn = document.getElementById('btn ')
var req = document.getElementById('req')
var form1 = document.getElementById('form1')
var backdrop = document.getElementById('backdrop')
var btntext = document.getElementById("btntext")
var spinner = document.getElementById("spinner")

inp1.addEventListener(('keyup'), (e) => {
    const value = e.currentTarget.value;

    if (value === "") {
        req.style.visibility = 'visible';
    } else {
        req.style.visibility = 'hidden';

    }

})


btn.addEventListener(('click'), (e) => {
    e.preventDefault()
    btn.classList.remove('btn')
    btn.classList.add("btn__loading")
    spinner.style.display = 'flex'
    setTimeout(() => {
        spinner.style.display = 'none';
        inp1.value = "";
        btn.classList.remove('btn__loading')
        btn.classList.add('btn__disabled')
        btn.disabled = true;
    }, 2000);
})