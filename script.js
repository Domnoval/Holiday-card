document.getElementById('go-deeper').addEventListener('click', () => {
  document.getElementById('zodiac-overlay').classList.remove('hidden');
});

document.getElementById('show-greeting').addEventListener('click', () => {
  const zodiac = document.getElementById('zodiac-sign').value;
  const greetings = {
    aries: "Aries: Be bold this holiday season, your spark lights the way!",
    taurus: "Taurus: Enjoy the cozy moments—you deserve them!",
    // Add other signs
  };
  
  const customGreeting = greetings[zodiac] || "Please select a valid zodiac sign.";
  document.getElementById('custom-greeting').textContent = customGreeting;
  document.getElementById('custom-greeting').classList.remove('hidden');
});
