const textArea = document.getElementById('text');
const voiceSelect = document.getElementById('voices');
const speakBuuton = document.getElementById('speak');

function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}
speechSynthesis.onvoiceschanged = loadVoices;

speakBuuton.addEventListener('click', () => {


    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoice = voiceSelect.value;
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);
    speechSynthesis.speak(utterance);
})

