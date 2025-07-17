
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('i love you').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "happy 2nd mensive, sayang. two months might sound small, but for me it’s enough to know how much you mean to me. kadang aku mikir, gimana kalo aku gak ketemu kamu? pasti hidupku bakal sepi banget. thank you for staying, even when i’m hard to deal with. you matter, more than you’ll ever know.";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
