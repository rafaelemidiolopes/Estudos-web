const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;

    if (!email || !password || !passwordConfirm || !name || !birthday || !gender || !terms) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (password !== passwordConfirm) {
        alert('As senhas não coincidem.');
        return;
    }

    alert('Formulário enviado com sucesso!');

    signupForm.reset();
});