window.revelar = ScrollReveal({reset:false})

//top header
revelar.reveal('.imagen-beast',{
    duration: 2000,
    distance: '400px',
     origin: 'left',
     delay: 2000,
     opacity: 0,
     easing: 'ease-in-out',
     scale: 0.10
     
})
revelar.reveal('.descricao-texto',{
    duration: 600,
    distance: '100px',
    delay: 800,
    origin: 'bottom',
    easing: 'ease-in-out'
})
revelar.reveal('.descricao-btn',{
    duration: 1100,
    distance: '400px',
    delay: 1300,
    origin: 'bottom'
})

// Os titulos das sessoes

revelar.reveal('.titulo',{
    duration: 2000,
    distance: '120px'
})

// sessao de especialidades

revelar.reveal('.efeito-especialidades1',{
    duration: 2000,
    distance: '120px',
    delay: 1000
})
revelar.reveal('.efeito-especialidades2',{
    duration: 2000,
    distance: '120px',
    delay: 1500
})
revelar.reveal('.efeito-especialidades3',{
    duration: 2000,
    distance: '120px',
    delay: 2000
})

//sessao sobre

revelar.reveal('.efeito-img-sobre',{
    duration: 2000,
    distance: '120px',
    delay: 500,
    origin: 'top'


})
revelar.reveal('.efeito-txt-sobre',{
    duration: 2000,
    distance: '120px',
    delay: 1000,
    origin: 'bottom'


})
