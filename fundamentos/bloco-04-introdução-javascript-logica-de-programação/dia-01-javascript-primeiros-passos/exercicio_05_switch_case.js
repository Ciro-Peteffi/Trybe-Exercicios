let processoSeletivo = "aprovada"

switch (processoSeletivo){
    case "aprovada":
        console.log("Parabéns pela aprovação");
        break;

    case "lista":
        console.log("Em avaliação, entraremos em contato em breve");
        break;

    case "reprovado":
        console.log("Infelizmente, você não foi aprovado, mas não desista");
        break;

    default:
        console.log("Não se aplica");
}