let index = document.querySelectorAll('.index-text');
let currentIndex = 0;

 setInterval(() => {
     index[currentIndex].classList.remove('active-index');
     currentIndex = (currentIndex + 1) % index.length;
     index[currentIndex].classList.add('active-index');
 }, 2000);

//  Script untuk menghilangkan form dan muncul text
function handleSubmit(event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Sembunyikan form
    document.querySelector('.msg-form').style.display = 'none';

    // Tampilkan ucapan terima kasih
    document.getElementById('thankyou-msg').style.display = 'block';
}

//MEngambil data pada request form
function requestAccepted() {
    const medium = document.getElementById('req-medium').value;
    const tools = document.getElementById('req-tools').value;
    const style = document.getElementById('req-style').value;

    // Validasi input
    if (!medium || !tools || !style) {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.setItem('requestMedium', medium);
    localStorage.setItem('requestTools', tools);
    localStorage.setItem('requestStyle', style);
}