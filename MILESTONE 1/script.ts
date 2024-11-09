
let ref_section = document.getElementById(`ref`)
let ref_btn = document.getElementById(`ref_btn`)

ref_btn?.addEventListener(`click`,()=>{
    ref_section!.classList.add(`hide`)
})


//----------------exp-section---------------------------
let exp_section = document.getElementById(`Experience`)
let exp_btn = document.getElementById(`btn`)

exp_btn?.addEventListener(`click`,()=>{
    exp_section!.classList.toggle(`hide`)
})

//---------------exp_sec---------------------------------
let print_btn =document.getElementById(`print_btn`)
print_btn?.addEventListener(`click`,()=>{
    window.print()
})