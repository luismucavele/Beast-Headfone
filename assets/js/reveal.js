window.revelar = ScrollReveal({reset:false})

//top header
// Imagem principal (aparece primeiro)
ScrollReveal().reveal('.imagen-beast', {
    duration: 1800, // Ajustado para 1.8s (mais natural)
    distance: '150px', // Reduzi a distância para menos deslocamento
    origin: 'left',
    delay: 1000, // Menos delay para aparecer mais cedo
    opacity: 0,
    easing: 'ease-in-out',
    scale: 0.95 // Mantive um efeito de leve escala
});

// Texto de descrição (aparece depois da imagem)
ScrollReveal().reveal('.descricao-texto', {
    duration: 900, // Um pouco mais fluido
    distance: '100px', // Reduzi a distância para um efeito mais sutil
    delay: 1300, // Surge logo depois da imagem
    origin: 'bottom',
    easing: 'ease-in-out'
});

// Botão de ação (último a aparecer)
ScrollReveal().reveal('.descricao-btn', {
    duration: 1000, // Ajustado para ficar natural
    distance: '80px', // Menos deslocamento, para um efeito mais elegante
    delay: 1600, // Depois do texto, chamando a atenção
    origin: 'bottom'
});


// Os titulos das sessoes

// TITULOS DAS SEÇÕES (Animação do topo)
ScrollReveal().reveal('.especial', {
    duration: 1000,
    distance: '100px',
    origin: 'top',
    delay: 300,  // Diminui um pouco o delay para mais agilidade
    opacity: 0,
    easing: 'ease-in-out' // Suaviza a animação
});

// INFORMAÇÕES (Animação da esquerda para a direita em cascata)
ScrollReveal().reveal('.info-texto1', {
    duration: 1000,
    distance: '100px',
    delay: 600, // Depois do título
    origin: 'left'
});

ScrollReveal().reveal('.info-texto2', {
    duration: 1200, // Pequena variação na duração para dinamismo
    distance: '100px',
    delay: 800, // Um pouco depois do primeiro
    origin: 'left'
});

ScrollReveal().reveal('.info-texto3', {
    duration: 1400, 
    distance: '100px',
    delay: 1000, // Segue o fluxo natural da leitura
    origin: 'left'
});

ScrollReveal().reveal('.info-texto4', {
    duration: 1600, 
    distance: '100px',
    delay: 1200, // Último item, fechando o efeito cascata
    origin: 'left'
});


//sessao headphone-especificações

ScrollReveal().reveal('.headphone-especificações', {
    duration: 2000, // Reduzi para 2000ms para mais fluidez
    distance: '120px', // Pequeno ajuste para suavizar o efeito
    delay: 1800, // Aparece antes (era 2100)
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
    scale: 0.95 // Efeito de leve escala para um impacto visual
});



/* figure */

/* 🔹 Texto da seção (surge suavemente de baixo) */
ScrollReveal().reveal('.figure-texto', {
    duration: 1200, 
    distance: '80px', 
    origin: 'bottom',
    delay: 200,  
    opacity: 0,
    easing: 'ease-in-out'
});

/* 🔹 Imagem da seção (desce suavemente de cima) */
ScrollReveal().reveal('.case-imagem', {
    duration: 1200, 
    distance: '80px', 
    origin: 'top',
    delay: 400,  
    opacity: 0,
    easing: 'ease-in-out'
});

/* 🔹 Descrição da imagem (aparece logo após a imagem) */
ScrollReveal().reveal('.case-descricao', {
    duration: 1200, 
    distance: '60px',  // Menos movimento para um efeito mais natural
    origin: 'bottom',
    delay: 600,  // Aparece depois da imagem, criando uma sequência progressiva
    opacity: 0,
    easing: 'ease-in-out'
});



/* Disconto */


// 🔹 Texto da descrição vem da esquerda 🡆
ScrollReveal().reveal('.disconto-descricao', {
    duration: 1200, 
    distance: '100px',  // Movimento mais sutil
    origin: 'left',  // Vem da esquerda
    delay: 400,  // Aparece primeiro
    opacity: 0,
    easing: 'ease-in-out'
});

// 🔹 Imagem vem da direita 🡄
ScrollReveal().reveal('.disconto-imagem', {
    duration: 1200, 
    distance: '100px',  // Movimento mais sutil
    origin: 'right',  // Vem da direita
    delay: 600,  // Aparece logo depois do texto
    opacity: 0,
    easing: 'ease-in-out'
});






