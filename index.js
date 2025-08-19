
  let nomeHeroi = "Mario Bros ";

  let xpHeroi = 5500;
  xpHeroi = parseInt(xpHeroi);
  
  let nivelXp = ""

if(xpHeroi < 1000) {
  nivelXp = "Ferro"
}else if(xpHeroi >= 1001 && xpHeroi <= 2000){
  nivelXp = "Bronze"
}else if(xpHeroi >= 2001 && xpHeroi <= 5000){
  nivelXp = "Prata"
}else if(xpHeroi >= 5001 && xpHeroi <= 7000){
  nivelXp = "Ouro"
}else if(xpHeroi >= 7001 && xpHeroi <= 8000){
  nivelXp = "Platina"
}else if(xpHeroi >= 8001 && xpHeroi <= 9000){
  nivelXp = "Ascendente"
}else if(xpHeroi >= 9001 && xpHeroi <= 10000){
  nivelXp = "Imortal"
}else if(xpHeroi > 10001){
  nivelXp = "Radiante"
}else {
  nivelXp = "XP inválido!" 
}

console.log("O Herói de nome: " + nomeHeroi + "está no nível " + nivelXp)