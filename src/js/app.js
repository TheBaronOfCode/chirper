document.addEventListener("DOMContentLoaded", function () {
    const chirpInput = document.getElementById("chirpInput");
    const charCount = document.getElementById("charCount");
    const chirpForm = document.getElementById("chirpForm");
    const chirpList = document.getElementById("chirpList");
  
    // Update character count on input
    chirpInput.addEventListener("input", function () {
      const currentLength = chirpInput.value.length;
      charCount.textContent = `${currentLength}/280`;
    });
  
    // Handle form submission
    chirpForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from reloading the page
      const chirpText = chirpInput.value.trim();
      if (chirpText) {
        // Create a new chirp element
        const chirpItem = document.createElement("div");
        chirpItem.className = "chirp-item";
        chirpItem.innerHTML = `<p>${chirpText}</p>`;
  
        // Add the new chirp to the feed
        chirpList.prepend(chirpItem);
  
        // Clear the input and reset character count
        chirpInput.value = "";
        charCount.textContent = "0/280";
      }
    });
  });
  