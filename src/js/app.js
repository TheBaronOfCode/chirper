document.addEventListener("DOMContentLoaded", function () {
    const chripInput = document.getElementById("chirpInput");
    const charCount = document.getElementById("charCount");
    const chripForm = document.getElementById("chirpForm");
    
    // update caracter count on input
    chripInput.addEventListener("input", function () {
        const currentLength = chripInput.value.length;
        charCount.textContent = `${currentLength}/280`;
    });

    // handle form submission
    chripForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const chirpText = chripInput.value.trim();
        if (chirpText) {
            alert(`Chirp Posted: ${chirpText}`);
            chirpText.value = "";
            charCount.textContent = "0/280";
        }
    })
})