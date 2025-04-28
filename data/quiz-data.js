const quizQuestions = [
    {
        id: 1,
        question: 'Qual seu estilo de jogo preferido?',
        options: [
            { id: 'A', text: 'Jogos de estratégia e mente fria – vencer é planejamento.', profile: 'Estratégico' },
            { id: 'B', text: 'Tiro, raça e vibração! Adrenalina lá no alto!', profile: 'Fanático' },
            { id: 'C', text: 'Com mundo aberto, customização e liberdade para criar o inesperado.', profile: 'Criativo' },
            { id: 'D', text: 'Cheio de superação! Jogos que testam sua paciência e frieza.', profile: 'Resiliente' },
            { id: 'E', text: 'Para curtir a vibe! Jogos leves, rápidos, para se divertir sem pressão.', profile: 'Zen' }
        ]
    },
    {
        id: 2,
        question: 'Final da FÚRIA. Você é o fã que:',
        options: [
            { id: 'A', text: 'Estuda as táticas e pensa nas jogadas.', profile: 'Estratégico' },
            { id: 'B', text: 'Se pinta, grita, perde a voz e a noção.', profile: 'Fanático' },
            { id: 'C', text: 'Cria memes, edita vídeos, faz a festa na internet.', profile: 'Criativo' },
            { id: 'D', text: 'Nunca perde a fé, segura até o fim, sem desespero.', profile: 'Resiliente' },
            { id: 'E', text: 'Curto a emoção, mas na minha boa, no stress.', profile: 'Zen' }
        ]
    },
    {
        id: 3,
        question: 'Qual frase te representa melhor?',
        options: [
            { id: 'A', text: '"Planejamento ganha partida."', profile: 'Estratégico' },
            { id: 'B', text: '"Aqui é raça e amor pela camisa!"', profile: 'Fanático' },
            { id: 'C', text: '"Criatividade vence onde a força não chega."', profile: 'Criativo' },
            { id: 'D', text: '"Resiliência transforma derrota em comeback."', profile: 'Resiliente' },
            { id: 'E', text: '"Quem joga de alma leve não perde."', profile: 'Zen' }
        ]
    },
    {
        id: 4,
        question: 'Se pudesse escolher um produto da FURIA agora, seria:',
        options: [
            { id: 'A', text: 'Moletom Oversized FURIA Future is Black Sankofa Preto', profile: 'Estratégico' },
            { id: 'B', text: 'Camiseta FURIA Adidas Preta', profile: 'Fanático' },
            { id: 'C', text: 'Camiseta Oversized FURIA x ZOR Woodhorse Marrom', profile: 'Criativo' },
            { id: 'D', text: 'Jaqueta My Hero Academia x FURIA Izuku Midorya Verde', profile: 'Resiliente' },
            { id: 'E', text: 'Jaqueta College My Hero Academia x FURIA Azul', profile: 'Zen' }
        ]
    },
    {
        id: 5,
        question: 'Em uma palavra, você é:',
        options: [
            { id: 'A', text: 'Calculista', profile: 'Estratégico' },
            { id: 'B', text: 'Intenso', profile: 'Fanático' },
            { id: 'C', text: 'Criativo', profile: 'Criativo' },
            { id: 'D', text: 'Firme', profile: 'Resiliente' },
            { id: 'E', text: 'De boa', profile: 'Zen' }
        ]
    }
];

const profileResults = {
    'Estratégico': {
        title: 'FURIOSO IGL',
        description: 'Você é a mente da matilha. Cada movimento seu é um passo certeiro rumo à vitória.',
        sport: 'League of Legends',
        sportDescription: 'Um jogo onde estratégia é a chave para o GG!',
        product: {
            name: 'Moletom Oversized FURIA Future is Black Sankofa Preto',
            imageUrl: 'public/FURIOSO-IGL.png',
            description: 'O Moletom Sankofa carrega história e significado, como toda estratégia bem traçada.',
            productUrl: 'https://www.furia.gg/produto/moletom-oversized-furia-future-is-black-sankofa-preto-150152'
        }
    },
    'Fanático': {
        title: 'FURIOSO FANÁTICO',
        description: 'Você é o grito da arquibancada. Onde tem FURIA, tem você vibrando.',
        sport: 'Futebol 7 (Fut7)',
        sportDescription: 'A emoção corre no sangue e contagia todo o time!',
        product: {
            name: 'Camiseta FURIA Adidas Preta',
            imageUrl: 'public/FURIOSO-FANATICO.png',
            description: 'A Camiseta FURIA Adidas é feita pra quem carrega a paixão no peito.',
            productUrl: 'https://www.furia.gg/produto/camiseta-furia-adidas-preta-150263'
        }
    },
    'Criativo': {
        title: 'FURIOSO CRIATIVO',
        description: 'Criar é seu combustível. Você transforma cada experiência em arte pura!',
        sport: 'Valorant',
        sportDescription: 'Um universo para mentes que ousam e inovam.',
        product: {
            name: 'Camiseta Oversized FURIA x ZOR Woodhorse Marrom',
            imageUrl: 'public/FURIOSO-CRIATIVO.png',
            description: 'A Camiseta FURIA x ZOR traz a essência de criação e expressão livre.',
            productUrl: 'https://www.furia.gg/produto/camiseta-oversized-furia-x-zor-woodhorse-marrom-150243'
        }
    },
    'Resiliente': {
        title: 'FURIOSO RESILIENTE',
        description: 'Resiliência é seu segundo nome. Você aguenta firme até o último round!',
        sport: 'Rainbow Six Siege (R6)',
        sportDescription: 'Resistência e estratégia no mais alto nível.',
        product: {
            name: 'Jaqueta My Hero Academia x FURIA Izuku Midorya Verde',
            imageUrl: 'public/FURIOSO-RESILIENTE.png',
            description: 'Inspirada em heróis que superam limites.',
            productUrl: 'https://www.furia.gg/produto/jaqueta-my-hero-academia-x-furia-izuku-midorya-verde-150231'
        }
    },
    'Zen': {
        title: 'FURIOSO ZEN',
        description: 'Você joga no seu tempo, no seu estilo. Sabe que viver o game é tão importante quanto ganhar.',
        sport: 'Free Fire',
        sportDescription: 'Rápido, leve e feito para quem curte cada momento!',
        product: {
            name: 'Jaqueta College My Hero Academia x FURIA Azul',
            imageUrl: 'public/FURIOSO-ZEN.png',
            description: 'A Jaqueta College My Hero FURIA representa liberdade e conforto.',
            productUrl: 'https://www.furia.gg/produto/jaqueta-college-my-hero-academia-x-furia-azul-150230'
        }
    }
};