(function () {

    class Calculadora {
        constructor() {
            this.display = document.querySelector('.display')
        }

        start(){
            this.capturarClicks();
            this.capturaEnter();
        }

        capturarClicks() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.addNumToDisplay(el);
                if(el.classList.contains('btn-clear')) this.clear();
                if(el.classList.contains('btn-del')) this.del();
                if(el.classList.contains('btn-eq')) this.makeAccount();

            });
        }
        
        capturaEnter() {
            document.addEventListener('keypress', e => {
                if(e.keyCode === 13) this.makeAccount();
            });
        }

        addNumToDisplay(el){
            this.display.value += el.innerText;
            this.display.focus();
        }

        clear(){
            this.display.value = ' ';
        }

        del(){
            this.display.value = this.display.value.slice(0, -1);
        }

        makeAccount(){
            try {
                const conta = eval(this.display.value);
                if(!conta){
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = conta;

            } catch {
                alert('Conta inválida!');
                return;
            }
        }
    }
    const calc = new Calculadora();
    calc.start();

})();
