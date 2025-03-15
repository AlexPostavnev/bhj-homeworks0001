class Game {
    constructor(container) {
      this.container = container;
      this.wordElement = container.querySelector('.word');
      this.winsElement = container.querySelector('.status__wins');
      this.lossElement = container.querySelector('.status__loss');
      this.timerElement = document.getElementById('timer');
      this.maxWins = 10;
      this.maxLosses = 3;
  
      this.reset();
      this.registerEvents();
    }
  
    reset() {
      this.setNewWord();
      this.winsElement.textContent = 0;
      this.lossElement.textContent = 0;
      this.startTimer();
    }
  
    registerEvents() {
      document.addEventListener('keyup', (event) => {
        const currentChar = this.currentSymbol.textContent.toLowerCase();
        const inputChar = event.key.toLowerCase();
  
        if (inputChar === currentChar) {
          this.success();
        } else {
          this.fail();
        }
      });
    }
  
    success() {
      if (this.currentSymbol.classList.contains("symbol_current")) {
        this.currentSymbol.classList.remove("symbol_current");
      }
      this.currentSymbol.classList.add('symbol_correct');
      this.currentSymbol = this.currentSymbol.nextElementSibling;
  
      if (this.currentSymbol !== null) {
        this.currentSymbol.classList.add('symbol_current');
        return;
      }
  
      if (++this.winsElement.textContent >= this.maxWins) {
        alert('Победа!');
        this.reset();
      } else {
        this.setNewWord();
      }
    }
  
    fail() {
      this.currentSymbol.classList.add('word_incorrect');
      if (++this.lossElement.textContent >= this.maxLosses) {
        alert('Вы проиграли!');
        this.reset();
      } else {
        this.setNewWord();
      }
    }
  
    setNewWord() {
      const word = this.getWord();
      this.renderWord(word);
    }
  
    getWord() {
      const words = [
        'коля',
        'привет',
        'дом',
        'кот',
        'собака',
        'машина',
        'книга',
        'игра',
        'программирование',
        'нетология'
      ];
      const index = Math.floor(Math.random() * words.length);
      return words[index];
    }
  
    renderWord(word) {
      const html = [...word]
        .map((s, i) => `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`)
        .join('');
      this.wordElement.innerHTML = html;
  
      this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
  
    startTimer() {
      this.timeLeft = 10; // Время в секундах
      this.timerElement.textContent = this.timeLeft;
  
      this.timerInterval = setInterval(() => {
        this.timeLeft--;
        this.timerElement.textContent = this.timeLeft;
  
        if (this.timeLeft <= 0) {
          clearInterval(this.timerInterval);
          alert('Время вышло! Игра сбрасывается.');
          this.reset();
        }
      }, 1000);
    }
  }
  
  new Game(document.getElementById('game'));
  