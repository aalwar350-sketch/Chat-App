const form = document.getElementById('chat-input-form');
const chatBox = document.getElementById('chat-display');
const input = document.getElementById('user-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    
    if (text !== "") {
        const time = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
        
        appendMsg(text, 'user', time);
        input.value = '';

        setTimeout(() => {
            appendMsg("أهلاً بك! كيف يمكنني مساعدتك اليوم؟", 'bot', time);
        }, 1000);
    }
});

function appendMsg(text, type, time) {
    const div = document.createElement('div');
    div.classList.add('message', type);
    div.innerHTML = `
        <div class="text">${text}</div>
        <span class="time">${time}</span>
    `;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}