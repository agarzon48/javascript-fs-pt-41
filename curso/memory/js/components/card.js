const card = (emoji, id) => {
    const cardComponent = document.createElement('div');
    cardComponent.className = 'card hidden';
    cardComponent.textContent = emoji;
    cardComponent.dataset.cardId = id;

    const turnArroundEvent = new CustomEvent('turnarround', {
        bubbles: true,
        detail: {
            emoji: emoji,
            id
        }
    });

    const turnArround = () => {
        cardComponent.classList.toggle('hidden');
        cardComponent.dispatchEvent(turnArroundEvent);
    }

    cardComponent.addEventListener('click', turnArround);

    const render = () => {
        return cardComponent;
    }

    return render();
}

export default card;