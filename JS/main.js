function randomAdvice(){
    let adviceID = document.getElementById('adviceID')
    let adviceTxt = document.getElementById('adviceTxt')
    fetch('https://api.adviceslip.com/advice')
        .then((res) => {
            res.json().then((data)=>{
                adviceID.innerHTML = `<h1>Advice #${data.slip.id}</h1>`
                adviceTxt.innerHTML = `<p>"${data.slip.advice}"</p>`
            })
        })
}
$( window ).resize(()=> {
    if(screen.availWidth <= 425){
        document.getElementById('imgPattern').src = "images/pattern-divider-mobile.svg"
    }
    if(screen.availWidth > 425){
        document.getElementById('imgPattern').src = "images/pattern-divider-desktop.svg"
    }
  })