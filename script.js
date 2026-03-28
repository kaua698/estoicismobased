const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const btn = document.getElementById('get-advice');


const sabedoriaEstoica = [
    { texto: "A felicidade de sua vida depende da qualidade de seus pensamentos.", autor: "Marco Aurélio" },
    { texto: "Não é o que acontece com você, mas como você reage que importa.", autor: "Epiteto" },
    { texto: "A sorte é o que acontece quando a preparação encontra a oportunidade.", autor: "Sêneca" },
    { texto: "Você tem poder sobre sua mente - não sobre eventos externos.", autor: "Marco Aurélio" },
    { texto: "Sofremos mais frequentemente na imaginação do que na realidade.", autor: "Sêneca" },
    { texto: "Se não é certo, não faça; se não é verdade, não diga.", autor: "Marco Aurélio" },
    { texto: "A melhor vingança é ser diferente daquele que causou o dano.", autor: "Marco Aurélio" },
    { texto: "Nenhum homem é livre se não for mestre de si mesmo.", autor: "Epiteto" },
    { texto: "Onde quer que haja um ser humano, há uma oportunidade para a bondade.", autor: "Sêneca" },
    { texto: "Enquanto esperamos pela vida, a vida passa.", autor: "Sêneca" },
    { texto: "A vida é muito curta para ser pequena.", autor: "Benjamin Disraeli (Estóico de espírito)" },
    { texto: "Nada é tão lamentável quanto um homem que começa a viver quando a vida termina.", autor: "Sêneca" },
    { texto: "Muitas vezes um homem viveu muito, mas viveu pouco.", autor: "Sêneca" },
    { texto: "A morte sorri para todos nós; o que um homem pode fazer é sorrir de volta.", autor: "Marco Aurélio" },
    { texto: "Não perca mais tempo discutindo o que um bom homem deve ser. Seja um.", autor: "Marco Aurélio" },
    { texto: "O que impede a ação favorece a ação. O que está no caminho torna-se o caminho.", autor: "Marco Aurélio" },
    { texto: "Lembre-se de quanto tempo você tem adiado as coisas.", autor: "Marco Aurélio" },
    { texto: "É a marca de uma mente educada ser capaz de entreter um pensamento sem aceitá-lo.", autor: "Aristóteles" },
    { texto: "O homem sábio olha para o propósito de todas as ações, não para suas consequências.", autor: "Sêneca" },
    { texto: "Dificuldades fortalecem a mente, assim como o trabalho faz com o corpo.", autor: "Sêneca" },
    { texto: "A pobreza não é a falta de coisas, mas a abundância de desejos.", autor: "Sêneca" },
    { texto: "O sol também brilha nas sarjetas e não é poluído.", autor: "Diógenes" },
    { texto: "Tudo o que ouvimos é uma opinião, não um fato. Tudo o que vemos é uma perspectiva, não a verdade.", autor: "Marco Aurélio" },
    { texto: "O destino guia quem quer, e arrasta quem não quer.", autor: "Sêneca" },
    { texto: "A alma é tingida com a cor de seus pensamentos.", autor: "Marco Aurélio" }
    
];

let ultimaFrase = -1;

function getAdvice() {
    adviceText.style.opacity = "0";

    setTimeout(() => {
        let indiceAleatorio;
        // Sorteio sem repetição imediata
        do {
            indiceAleatorio = Math.floor(Math.random() * sabedoriaEstoica.length);
        } while (indiceAleatorio === ultimaFrase);

        ultimaFrase = indiceAleatorio;
        const item = sabedoriaEstoica[indiceAleatorio];

        adviceId.innerText = `SABEDORIA ESTÓICA #${indiceAleatorio + 1}`;
        adviceText.innerHTML = `
            "${item.texto}"
            <br><small>— ${item.autor}</small>
        `;

        adviceText.style.opacity = "1";
    }, 300);
}

btn.addEventListener('click', getAdvice);
getAdvice();
