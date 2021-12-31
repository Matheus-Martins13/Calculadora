(function() {

    /**
     * Adendo: A escolha de uma function factory para a criação de uma 
     * calculadora é meramente por prática. Não há, na realidade, uma 
     * necessidade de fazer o uso delas. 
    */

    function makeCalc() {
        return {

            display: document.querySelector('.display'),

            start() {
                this.clickButtons();
                this.pressEnter();
            },

            clickButtons() {
                // Aqui o this é a calculadora
                document.addEventListener('click', function(e) {
                    // Aqui o this passou a ser o document
                    /**
                     * O comportamento do this varia de acordo com quem o chama. 
                     * Quando utilizamos arraw functions, o this trava em quem
                     * criou o elemento, ou seja, ele não irá passar a ter outra
                     * referência. Por motivos de aprendizado, a function comum 
                     * será mantida.
                     */

                    const el = e.target;

                    if (el.classList.contains('btn-num')) {
                        this.btnForDisplay(el.innerText);
                    }

                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }

                    if (el.classList.contains('btn-del')) {
                        this.delOne();
                    }

                    if (el.classList.contains('btn-eq')) {
                        this.makeAccount();
                    }

                }.bind(this)) // "ao invés de usar o seu this, use o meu"
            },

            pressEnter() {
                this.display.addEventListener('keyup', (e) => {
                    if (e.keyCode === 13) {
                        this.makeAccount();
                    }
                });
            },

            clearDisplay() {
                this.display.value = ' ';
            },

            delOne() {
                this.display.value = this.display.value.slice(0, -1);
            },

            makeAccount() {
                let account = this.display.value;

                try {
                    account = eval(account);

                    if(!account) {
                        alert('Conta inválida')
                        return;
                    }

                    this.display.value = String(account);

                } catch (e) {
                    alert('Conta inválida');
                    return;
                }
            },

            
            btnForDisplay(valor) {
                this.display.value += valor;
            },

        };
    }

    const calculadora = makeCalc();
    calculadora.start();


})();
