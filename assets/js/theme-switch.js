$('.switch').click(()=>{
    $("*[class*=dark],*[class*=light]").each((i, ele) =>{
        $(ele).toggleClass('bg-light bg-dark')
        $(ele).toggleClass('text-light text-dark')
        $(ele).toggleClass('navbar-light navbar-dark')
        $(ele).toggleClass('border-dark border-light')
    })
    
})

