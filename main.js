
/* ==== VARIAVEL ==== */
const home = document.querySelector(".home")
const luck = document.querySelector(".luck")
const cookie = document.querySelector("#cookie")
const openCookie = document.querySelector("#openCookie")
let index = 0
let messageName
let listMessage = []
let randomNumber = Math.round(Math.random() * 20)

/* ==== EVENTOS ==== */
cookie.addEventListener("click", toggleCookie)
openCookie.addEventListener("click", toggleCookie)
document.addEventListener("keydown", handlePressEnter)

/* ==== FUNÇOES ==== */
function toggleCookie() {
  home.classList.toggle("hide")
  luck.classList.toggle("hide")
  cookieMessage()    
}

function cookieMessage() {
  for (let MsgId of listMessage) {
    if (MsgId.id == randomNumber) {
      document.querySelector(".luck p").innerText = MsgId.message
    }
  }

  randomNumber = Math.round(Math.random() * 20)
}

function handlePressEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    event.preventDefault()
    tryLuck(event)
  }
}

function messageGenerator() {
  if (listMessage.length == 0) {
    index = 0
    messageName = `m_${index}`
  } else {
    index++
    messageName = `m_${index}`
  }

  return messageName
}

/* ==== CONSTUTOR DE LISTA DE MENSAGENS ==== */
function cookieMessages(id, message) {
  this.id = id
  this.message = message
}


listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "“Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.” — João 3:16"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Tenha coragem para se tornar aquilo que sonha."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Jamais se esqueça: você é o motivo do sorriso de muitas pessoas."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Não tome decisões difíceis em dias complicados. Descanse e recupere suas energias!"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Um dia tudo isto ainda vai parecer pequeno, porque tuas conquistas te farão enorme."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Não tenha medo de sonhar. Tenha medo de não acreditar em você."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Quando tudo parecer caótico, é possível que a vida esteja te encaminhando para uma grande mudança!"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Não deixe que uma fase ruim te faça desistir daquilo que você colocou tanto força para começar."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "O maior vencedor é aquele que sempre tem coragem para continuar lutando."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Acredite em Deus, ele está olhando para você e acompanhando todos os seus passos!"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Aprenda com o ontem. Viva o hoje. tenha esperança para o amanhã."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "O talento vence jogos, mas só o trabalho em equipe ganha campeonatos."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Trabalhe em silêncio, deixe que o sucesso faça barulho."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Ninguém conseguirá trabalhar em equipe se não aprender a ouvir. Ninguém aprenderá a ouvir se não aprender a se colocar no lugar dos outros. - Augusto Cury"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Se você não luta pelas coisas das quais acredita, é porque talvez no fundo não acredite de verdade."
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Desenvolva seus pontos fortes, mais pricipalmente seu pontos fracos, para que você não seja simplesmente bom e sim excelente. - Erlan Marinho"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "“Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no Senhor”. - Salmos 31:24"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá. - Salmos 91:7"
  ))
)
listMessage.push(
  (window[messageGenerator()] = new cookieMessages(
    index,
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
  ))
)