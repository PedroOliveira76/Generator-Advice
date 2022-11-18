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