let currentQuestion = 0;
let answers = [];
let profileScores = {
    Estratégico: 0,
    Fanático: 0,
    Criativo: 0,
    Resiliente: 0,
    Zen: 0
};

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function goToHome() {
    showPage('homePage');
    resetQuiz();
}

function handleRegister(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        birthdate: document.getElementById('birthdate').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem('userProfile', JSON.stringify(formData));

    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    console.log(userProfile);

    startQuiz();
}

function startQuiz() {
    currentQuestion = 0;
    answers = [];
    profileScores = {
        Estratégico: 0,
        Fanático: 0,
        Criativo: 0,
        Resiliente: 0,
        Zen: 0
    };
    showPage('quizPage');
    displayQuestion();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    const progressPercent = (currentQuestion / quizQuestions.length) * 100;
    
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
    document.getElementById('questionNumber').textContent = 
        `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-letter">${option.id}</div>
            <div class="option-text">${option.text}</div>
        `;
        optionElement.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(optionElement);
    });
}

function selectAnswer(option) {
    answers.push(option.id);
    profileScores[option.profile]++;
    
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const result = calculateResult();
    const resultData = profileResults[result];
    
    document.getElementById('resultTitle').textContent = `Você é um verdadeiro ${resultData.title}!`;
    document.getElementById('resultDescription').textContent = resultData.description;
    
    document.getElementById('sportResult').innerHTML = `
        <h3>${resultData.sport}</h3>
        <p>${resultData.sportDescription}</p>
    `;
    
    document.getElementById('productImage').innerHTML = `
        <img src="${resultData.product.imageUrl}" alt="${resultData.product.name}" class="product-image">
    `;
    document.getElementById('productName').textContent = resultData.product.name;
    document.getElementById('productDescription').textContent = resultData.product.description;
    document.getElementById('verNaLoja').href = resultData.product.productUrl;
    
    showPage('resultsPage');
}

function calculateResult() {
    let maxScore = 0;
    let maxProfile = 'Estratégico';
    
    Object.entries(profileScores).forEach(([profile, score]) => {
        if (score > maxScore) {
            maxScore = score;
            maxProfile = profile;
        }
    });
    
    return maxProfile;
}

function shareResult() {
    const result = calculateResult();
    const resultData = profileResults[result];
    const text = encodeURIComponent(`Descobri que sou um ${resultData.title}! ${resultData.description}\n\nDescubra o seu também!`);
    const url = encodeURIComponent(window.location.href);

    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="share-modal-content">
            <h3>Compartilhar Resultado</h3>
            <div class="share-buttons">
                <a href="https://api.whatsapp.com/send?text=${text}%20${url}" target="_blank" class="share-button whatsapp">
                    WhatsApp
                </a>
                <a href="https://twitter.com/intent/tweet?text=${text}&url=${url}" target="_blank" class="share-button twitter">
                    Twitter
                </a>
            </div>
            <button onclick="closeShareModal()" class="close-modal">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function copyToInstagram() {
    const result = calculateResult();
    const resultData = profileResults[result];
    const text = `Descobri que sou um ${resultData.title}! ${resultData.description}\n\nDescubra o seu também!\n${window.location.href}`;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado! Agora você pode colar nas suas stories do Instagram!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        alert('Não foi possível copiar o texto. Tente novamente!');
    });
}

function closeShareModal() {
    const modal = document.querySelector('.share-modal');
    if (modal) {
        modal.remove();
    }
}

function restartQuiz() {
    showPage('homePage');
    resetQuiz();
}

function resetQuiz() {
    currentQuestion = 0;
    answers = [];
    profileScores = {
        Estratégico: 0,
        Fanático: 0,
        Criativo: 0,
        Resiliente: 0,
        Zen: 0
    };
}
