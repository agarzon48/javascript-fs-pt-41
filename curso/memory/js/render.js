import title from './components/title.js';
import board from './components/board.js';

const app = document.querySelector('#app');

const render = () => {
    app.append(
        title({ text: 'Memory game!' }),
        board()
    );
}

export default render;