function descobrirSigno() {
  let data = document.getElementById("dataNascimento").value;
  if (!data) {
    alert("Por favor, insira sua data de nascimento.");
    return;
  }

  let partes = data.split("-");
  let dia = parseInt(partes[2]);
  let mes = parseInt(partes[1]);

  let signo = "";
  let cavaleiro = "";
  let gif = "";
  let stats = {};

  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signo = "Áries"; cavaleiro = "Mu de Áries"; gif = "./img/aries.gif";
    stats = {hp:"21.000", atk:"2.000", def:"900", crit:"65%", critDmg:"180%", poder:"Mestre das muralhas de cristal"};
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signo = "Touro"; cavaleiro = "Aldebaran de Touro"; gif = "./img/touro.gif";
    stats = {hp:"23.000", atk:"1.800", def:"950", crit:"60%", critDmg:"170%", poder:"Força imbatível e resistência lendária"};
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = "Gêmeos"; cavaleiro = "Saga de Gêmeos"; gif = "./img/gemeos.gif";
    stats = {hp:"20.500", atk:"2.100", def:"870", crit:"72%", critDmg:"195%", poder:"Domínio sobre ilusões e realidades"};
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = "Câncer"; cavaleiro = "Máscara da Morte de Câncer"; gif = "./img/cancer.gif";
    stats = {hp:"19.800", atk:"1.950", def:"860", crit:"68%", critDmg:"185%", poder:"Controle sobre o submundo"};
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = "Leão"; cavaleiro = "Aiolia de Leão"; gif = "./img/leao.gif";
    stats = {hp:"22.000", atk:"2.200", def:"880", crit:"70%", critDmg:"190%", poder:"Raios devastadores e coragem indomável"};
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = "Virgem"; cavaleiro = "Shaka de Virgem"; gif = "./img/virgem.gif";
    stats = {hp:"21.500", atk:"2.050", def:"890", crit:"74%", critDmg:"200%", poder:"O homem mais próximo de Deus"};
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = "Libra"; cavaleiro = "Dohko de Libra"; gif = "./img/libra.gif";
    stats = {hp:"22.500", atk:"1.950", def:"920", crit:"66%", critDmg:"175%", poder:"Guardião das armas sagradas"};
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = "Escorpião"; cavaleiro = "Milo de Escorpião"; gif = "./img/escorpiao.gif";
    stats = {hp:"20.800", atk:"2.100", def:"880", crit:"71%", critDmg:"188%", poder:"Agulhas escarlates fatais"};
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = "Sagitário"; cavaleiro = "Aiolos de Sagitário"; gif = "./img/sagitario.gif";
    stats = {hp:"21.200", atk:"2.150", def:"870", crit:"73%", critDmg:"192%", poder:"Arqueiro da justiça e esperança"};
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signo = "Capricórnio"; cavaleiro = "Shura de Capricórnio"; gif = "./img/capricornio.gif";
    stats = {hp:"22.300", atk:"2.000", def:"910", crit:"67%", critDmg:"180%", poder:"Espada Excalibur cortante"};
  } else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signo = "Aquário"; cavaleiro = "Camus de Aquário"; gif = "./img/aquario.gif";
    stats = {hp:"21.700", atk:"2.050", def:"900", crit:"69%", critDmg:"185%", poder:"Domínio absoluto sobre o gelo"};
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signo = "Peixes"; cavaleiro = "Afrodite de Peixes"; gif = "./img/peixes.gif";
    stats = {hp:"20.000", atk:"1.900", def:"850", crit:"70%", critDmg:"190%", poder:"Beleza mortal e rosas venenosas"};
  }

  // Criar nova página com layout lado a lado e fundo vídeo/GIF
 let novaJanela = window.open("", "_blank");
novaJanela.document.write(`
  <html>
    <head>
      <title>${cavaleiro}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');
        body {
          font-family: 'Cinzel Decorative', serif;
          color: #00F2FE; /* azul neon */
          margin: 0;
          padding: 0;
          background: #02122D; /* fundo sólido escuro */
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 50px;
          background: linear-gradient(135deg, #02122D,rgb(24, 145, 151));
          margin: 80px auto;
          padding: 40px;
          border-radius: 20px;
          width: 80%;
          box-shadow: 0 0 40px rgba(0,242,254,0.8);
        }
        .stats {
          text-align: left;
          font-size: 1.3em;
          line-height: 1.6em;
          color: #1BB7BA; /* turquesa */
        }
        img {
          max-width: 350px;
          border-radius: 15px;
          box-shadow: 0 0 25px #00F2FE, 0 0 50px #1BB7BA;
        }
        h1 {
          text-align: center;
          width: 100%;
          margin-bottom: 30px;
          text-shadow: 0 0 25px #00F2FE, 0 0 50px #1BB7BA;
        }
      </style>
    </head>
    <body>
      <h1>${cavaleiro} - ${signo}</h1>
      <div class="container">
        <div class="image">
          <img src="${gif}" alt="${cavaleiro}">
        </div>
        <div class="stats">
          <p><strong>HP:</strong> ${stats.hp}</p>
          <p><strong>ATK:</strong> ${stats.atk}</p>
          <p><strong>DEF:</strong> ${stats.def}</p>
          <p><strong>CRIT Rate:</strong> ${stats.crit}</p>
          <p><strong>CRIT DMG:</strong> ${stats.critDmg}</p>
          <p><strong>Poder:</strong> ${stats.poder}</p>
        </div>
      </div>
    </body>
  </html>
`);
}
