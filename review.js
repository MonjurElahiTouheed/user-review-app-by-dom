document.getElementById('submit-btn').addEventListener('click', function(){
    const textarea = document.getElementById('text-area');
    const p = document.createElement('p');
    p.innerText = textarea.value;
    textarea.value = '';
    const reviewContainer = document.getElementById('review');
    reviewContainer.appendChild(p);
})