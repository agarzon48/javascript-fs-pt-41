import card from "./card.js";
import emojis from "../constants/emojis.js";

const board = () => {
    const boardComponent = document.createElement('div');
    boardComponent.className = 'board';

    let shownCards = 0;
    let prevCard = null;

    const handleCardTurnArround = (e) => {
        console.log(e.detail.id);
        shownCards += 1;

        if (prevCard === e.detail.id) {
            console.log('MATCH!')
            const activeCards = boardComponent.querySelectorAll(`[data-card-id="${e.detail.id}"]`);
            activeCards.forEach(card => {
                card.remove();
                shownCards = 0;
            })
        }


        if (shownCards === 3) {
            console.log('turn!');
            const activeCards = boardComponent.querySelectorAll('.card');
            activeCards.forEach(card => {
                card.classList.add('hidden')
            })

            shownCards = 0;
        }

        prevCard = e.detail.id;
    }

    boardComponent.addEventListener('turnarround', handleCardTurnArround)

    boardComponent.append(
        ...emojis.map((emoji, index) => card(emoji, index))
    );
    boardComponent.append(
        ...emojis.map((emoji, index) => card(emoji, index))
    );

    return boardComponent;
}

export default board;