const form = document.querySelector("form")

// this usecase will give you empty 
// const height = document.querySelector("#height").value

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if(height === "" || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid height ${height}`;
    }
    else if(weight === "" || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span><br>`;
        
        if(bmi < 18.6){
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(`You are underweight`));
            result.appendChild(span)
        }
        else if(bmi >24.9){
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(`You are overweight`));
            result.appendChild(span)
        }
        else{
            const span = document.createElement('span')
            span.appendChild(document.createTextNode(`You are fit N fine`));
            result.appendChild(span)
        }
    }
})