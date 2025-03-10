class KeyboardSolo {
  constructor() {
      this.currentSymbol = '';
      this.victories = 0;
      this.defeats = 0;
      this.maxDefeats = 3;
      this.maxVictories = 10;
      this.registerEvents();
      this.generateSymbol();
  }

  registerEvents() {
      document.addEventListener('keyup', (event) => {
          const inputChar = event.key.toLowerCase();
          const currentChar = this.currentSymbol.toLowerCase();

          if (inputChar === currentChar) {
              this.success();
          } else {
              this.fail();
          }
      });
  }

  generateSymbol() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const randomIndex = Math.floor(Math.random() * characters.length);
      this.currentSymbol = characters[randomIndex];
      document.querySelector('.current-symbol').textContent = this.currentSymbol;
  }

  success() {
      this.victories++;
      document.getElementById('victories').textContent = this.victories;
      this.generateSymbol();
      this.checkVictory();
  }

  fail() {
      this.defeats++;
      document.getElementById('defeats').textContent = this.defeats;
      this.checkGameOver();
      this.generateSymbol();
  }

  checkVictory() {
      if (this.victories >= this.maxVictories) {
          alert('Поздравляем! Вы выиграли!');
          this.resetGame();
      }
  }

  checkGameOver() {
      if (this.defeats >= this.maxDefeats) {
          alert('Игра окончена! Вы проиграли.');
          this.resetGame();
      }
  }

  resetGame() {
      this.victories = 0;
      this.defeats = 0;
      document.getElementById('victories').textContent = this.victories;
      document.getElementById('defeats').textContent = this.defeats;
      this.generateSymbol();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new KeyboardSolo();
});