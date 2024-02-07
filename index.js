import express from 'express'

const app = express();
const port = 6531;


const filmes = [{ nome: "A Cor Púrpura", duração: "2h34m", lançamento: 1985, genero: "drama" },
{ nome: "Histórias Cruzadas", duração: "2h26m", lançamento: 2011, genero: "drama" },
{ nome: "12 Anos de Escravidão", duração: "2h14m", lançamento: 2013, genero: "drama" },
{ nome: "A Outra História Americana", duração: "1h59m", lançamento: 1998, genero: "drama" },
{ nome: "Selma: Uma Luta Pela Igualdade", duração: "2h8m", lançamento: 2014, genero: "biografia" },
{ nome: "Tempo de Matar", duração: "2h29m", lançamento: 1996, genero: "drama" },
{ nome: "Raça", duração: "2h14m", lançamento: 2016, genero: "biografia" },
{ nome: "Eu Não Sou Seu Negro", duração: "1h33m", lançamento: 2016, genero: "documentário" },
{ nome: "Estrelas Além do Tempo", duração: "2h7m", lançamento: 2016, genero: "drama" },
{ nome: "Moonlight: Sob a Luz do Luar", duração: "1h51m", lançamento: 2016, genero: "drama" },
{ nome: "Fruitvale Station: A Última Parada", duração: "1h25m", lançamento: 2013, genero: "biografia" },
{ nome: "Loving: Uma História de Amor", duração: "2h3m", lançamento: 2016, genero: "drama" },
{ nome: "A Árvore dos Frutos Selvagens", duração: "3h8m", lançamento: 2018, genero: "drama" },
{ nome: "Infiltrado na Klan", duração: "2h15m", lançamento: 2018, genero: "biografia" },
{ nome: "Detroit em Rebelião", duração: "2h23m", lançamento: 2017, genero: "drama" },
{ nome: "A Melodia", duração: "1h30m", lançamento: 2014, genero: "drama" }
];

const livros = [
    { nome: "O Ódio que Você Semeia", autor: "Angie Thomas", numeroDePaginas: 464, genero: "Ficção Young Adult" },
    { nome: "Pequenas Coisas Belas", autor: "Chimamanda Ngozi Adichie", numeroDePaginas: 64, genero: "Não-ficção" },
    { nome: "A Cor Púrpura", autor: "Alice Walker", numeroDePaginas: 336, genero: "Romance" },
    { nome: "Eu Sou Malala", autor: "Malala Yousafzai", numeroDePaginas: 368, genero: "Biografia" },
    { nome: "Americanah", autor: "Chimamanda Ngozi Adichie", numeroDePaginas: 588, genero: "Romance" },
    { nome: "O Sol é Para Todos", autor: "Harper Lee", numeroDePaginas: 320, genero: "Romance" },
    { nome: "Não Seja Uma Boa Menina", autor: "Ruth Franklin", numeroDePaginas: 512, genero: "Biografia" },
    { nome: "O Diário de Anne Frank", autor: "Anne Frank", numeroDePaginas: 352, genero: "Biografia" },
    { nome: "Entre o Mundo e Eu", autor: "Ta-Nehisi Coates", numeroDePaginas: 184, genero: "Não-ficção" },
    { nome: "Meu Nome é Vento Forte", autor: "Juliano Rigatti", numeroDePaginas: 272, genero: "Romance" },
    { nome: "Pele Negra, Máscaras Brancas", autor: "Frantz Fanon", numeroDePaginas: 256, genero: "Não-ficção" },
    { nome: "A História de Myke", autor: "Angela Davis", numeroDePaginas: 160, genero: "Ficção Young Adult" },
    { nome: "O Problema Com o Racismo", autor: "Renato Noguera", numeroDePaginas: 224, genero: "Não-ficção" },
    { nome: "O Que É Lugar de Fala?", autor: "Djamila Ribeiro", numeroDePaginas: 120, genero: "Não-ficção" },
    { nome: "O Clube do Livro dos Homens", autor: "David Ebershoff", numeroDePaginas: 624, genero: "Romance" },
    { nome: "Mundo em Desigualdade", autor: "Thomas Piketty", numeroDePaginas: 816, genero: "Não-ficção" }
];

const musicas = [
    { nome: "Strange Fruit", cantor: "Billie Holiday", genero: "Jazz", duração: "3:10" },
    { nome: "Changes", cantor: "Tupac Shakur", genero: "Hip Hop", duração: "4:29" },
    { nome: "Black Lives Matter", cantor: "D'Angelo", genero: "R&B", duração: "5:20" },
    { nome: "Fight The Power", cantor: "Public Enemy", genero: "Hip Hop", duração: "4:42" },
    { nome: "What's Going On", cantor: "Marvin Gaye", genero: "Soul", duração: "3:53" },
    { nome: "Formation", cantor: "Beyoncé", genero: "Pop/R&B", duração: "3:26" },
    { nome: "A Change Is Gonna Come", cantor: "Sam Cooke", genero: "Soul", duração: "3:13" },
    { nome: "To Be Young, Gifted and Black", cantor: "Nina Simone", genero: "Jazz", duração: "2:47" },
    { nome: "Dear Mr. President", cantor: "Pink", genero: "Pop", duração: "4:33" },
    { nome: "Colors", cantor: "Ice-T", genero: "Hip Hop", duração: "3:58" },
    { nome: "Hell You Talmbout", cantor: "Janelle Monáe", genero: "R&B", duração: "5:51" },
    { nome: "Black Skinhead", cantor: "Kanye West", genero: "Hip Hop", duração: "3:08" },
    { nome: "Be Free", cantor: "J. Cole", genero: "Hip Hop", duração: "4:50" },
    { nome: "This Is America", cantor: "Childish Gambino", genero: "Hip Hop", duração: "3:46" },
    { nome: "What's Happening Brother", cantor: "Marvin Gaye", genero: "Soul", duração: "2:43" },
    { nome: "Changes", cantor: "David Bowie", genero: "Rock", duração: "3:35" }
  ];
  
  app.use (express.json());

function filme () {
    return filmes    
} 

function filmeAleatorio () {
    const aleatoriofilme = filmes [Math.floor (Math.random()*filmes.length)]
    return aleatoriofilme
}

function filtrarFilmes(genero){
    const filmefiltrado = filmes.filter(filme=> filme.genero === genero)
    return filmefiltrado
}

app.get("/filmefiltrado", (req, res)=>{
    const {genero} = req.body;
    const filmesfiltrados = filtrarFilmes(genero); 
    res.json (filmesfiltrados);
});

app.get ("/Filme-Aleatorio", (req, res)=>{
    res.json ({filmeAleatorio:filmeAleatorio()});
});

app.get ("/Todos-Filmes", (req, res)=>{
    const todosFilmes = filme ();
    res.json (todosFilmes);
});

function livro () {
    return livros
}

function filtrarLivros (genero) {
    const livrosFiltrados = livros.filter (livro => livro.genero === genero);
    return livrosFiltrados
}

app.get ("/filtrarlivros", (req, res)=>{
    const {genero} = req.body;
    const livrosfiltrados = filtrarLivros (genero);
    res.json ({livrosfiltrados});
});

function livroAleatorio () {
    const aleatorioLivro = livros[Math.floor (Math.random()*filmes.length)]
    return aleatorioLivro
}

app.get ("/Livro-Aleatorio", (req, res)=>{
    res.json ({livroAleatorio:livroAleatorio()})
})

app.get ("/Todos-Livros", (req, res)=>{
    const todosLivros = livro ();
    res.json (todosLivros)
})



app.listen(port, () => {
    console.log("O servidor está on");
});

function musica () {
    return musicas 
}

function filtrarmusica (genero) {
    const musicasfiltradas = musicas.filter (musica => musica.genero === genero)
    return musicasfiltradas
};

app.get ("/filtrarmusicas", (req, res)=>{
    const {genero} = req.body;
    const musicasfiltradas = filtrarmusica (genero);
    res.json (musicasfiltradas);
})

function musicaAleatoria () {
    const aleatoriomusica = musicas [Math.floor (Math.random()*musicas.length)]
    return aleatoriomusica
}

app.get ("/Musica-Aleatoria", (req, res)=>{
    res.json ({aleatoriomusica:musicaAleatoria()})
});

app.get ("/Todas-Musicas", (req, res)=>{
    const todasMusicas = musica ();
    res.json (todasMusicas);
});