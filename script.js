function toggleDarkMode() {
    const body = document.body;
    const container = document.querySelector('.container');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
        container.style.backgroundColor = '#444';
        document.querySelectorAll('.left-side').forEach(el => el.style.backgroundColor = '#222');
        document.querySelectorAll('.right-side').forEach(el => el.style.backgroundColor = '#555');
    } else {
        body.style.backgroundColor = '#f1f1f1';
        body.style.color = '#333';
        container.style.backgroundColor = '#fff';
        document.querySelectorAll('.left-side').forEach(el => el.style.backgroundColor = '#505050');
        document.querySelectorAll('.right-side').forEach(el => el.style.backgroundColor = '#f9f9f9');
    }
}
