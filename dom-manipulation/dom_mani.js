let div = document.querySelector("div")
div.style.backgroundColor = "lightblue"
let para = document.createElement('p')
para.textContent = "This is a new paragraph."
div.append(para)

let btn = document.createElement('button')
btn.innerText = "Click Me"
btn.addEventListener('click', () => {
    alert("Button Clicked!")
})
div.prepend(btn)


// #remove the button
// btn.remove()

//prepend the button again
// div.prepend(btn)

// #replace the button with a new one
// let newBtn = document.createElement('button')
// newBtn.innerText = "New Button"
// btn.replaceWith(newBtn)


//add before the paragraph
// let newBtn = document.createElement('button')
// newBtn.innerText = "New Button"
// para.before(newBtn)

//add after the paragraph
// let newBtn = document.createElement('button')
// newBtn.innerText = "New Button"
// para.after(newBtn)