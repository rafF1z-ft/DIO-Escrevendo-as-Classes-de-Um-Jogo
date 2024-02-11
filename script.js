function loading() {
    const txtFinal = document.querySelector('#txtFinal');
    alert('Escolha seu Personagem pelo número.')
    const escolha = parseInt(prompt('Escolha um personagem (GUERREIRO[1],MAGO[2],MONGE[3],NINJA[4]):'));

    class Personagens {
        constructor() {
            this.tiposAtaque = {
                1: 'Espada',
                2: 'Magia',
                3: 'Artes Marciais',
                4: 'Shuriken'
            };
        }

        atacar(escolha) {
            const ataque = this.tiposAtaque[escolha];
            if (ataque) {
                return `O ${this.getNomePersonagem(escolha)} atacou usando ${ataque}`;
            } else {
                return `Tipo de personagem inválido: ${escolha}`;
            }
        }

        getNomePersonagem(escolha) {
            switch (escolha) {
                case 1:
                    return 'GUERREIRO';
                case 2:
                    return 'MAGO';
                case 3:
                    return 'MONGE';
                case 4:
                    return 'NINJA';
                default:
                    return 'Opção Inválida';
            }
        }
    }

    let atacarPersonagem = new Personagens();

    txtFinal.innerHTML = atacarPersonagem.atacar(escolha);
}

loading();
