function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('socialLogin').classList.add('hidden');
        document.getElementById('profile').classList.remove('hidden');
        document.getElementById('userSpan').innerText = username;
    } else {
        alert('Incorrect username or password.');
    }
}

function loginWithGmail() {
    // Implement login with Gmail logic
    alert('Login with Gmail functionality coming soon!');
}

function loginWithWhatsApp() {
    // Implement login with WhatsApp logic
    alert('Login with WhatsApp functionality coming soon!');
}

function loginFacebook() {
    // Implement login with Facebook logic
    alert('Login with Facebook functionality coming soon!');
}
function loginWithNickname() {
    var nickname = document.getElementById('nickname').value;

    if (nickname) {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('socialLogin').classList.add('hidden');
        document.getElementById('profile').classList.remove('hidden');
        document.getElementById('userSpan').innerText = nickname;
    } else {
        alert('Please enter a nickname.');
    }
}

function logout() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('socialLogin').classList.remove('hidden');
    document.getElementById('profile').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('nickname').value = '';
}
