$('.switch').click(()=>{
    console.log("Clicked switch");
    
    $("*[class*=dark],*[class*=light]").each((i, ele) =>{
        console.log("dark " + ele.class);
        $(ele).toggleClass('bg-light bg-dark')
        $(ele).toggleClass('text-light text-dark')
        $(ele).toggleClass('navbar-light navbar-dark')
        $(ele).toggleClass('border-dark border-light')
    })
    
})

