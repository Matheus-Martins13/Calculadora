(function () {

    /**
     * Adendo: A escolha de uma constructor function para a criação de uma 
     * calculadora é meramente por prática. Não há, na realidade, uma 
     * necessidade de fazer o uso delas. 
    */

    function Calculadora() {
        this.display = document.querySelector('.display');

        this.start = () => {
            this.capturaClicks();
            this.capturaEnter();
        };

        this.capturaClicks = () => {
            document.addEventListener('click', event => {
                const el = event.target;

                if (el.classList.contains('btn-num')) this.addNumDisplay(el);
                if (el.classList.contains('btn-clear')) this.clear();
                if (el.classList.contains('btn-del')) this.del();
                if (el.classList.contains('btn-eq')) this.realizaConta();
            });
        }

         this.capturaEnter = () => {
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        };

        this.addNumDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        };

        this.clear = () => this.display.value = ' '; 
        this.del = () => this.display.value = this.display.value.slice(0, -1);

        this.realizaConta = () => {
            try {
                const conta = eval(this.display.value);
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;

            } catch {
                alert('Conta inválida');
                return;
            }
        };
        
    }

    const calc = new Calculadora();
    calc.start();

})();
