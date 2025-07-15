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

// Script untuk mengubah guest menjadi username


