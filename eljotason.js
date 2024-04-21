var val="Projecte Petjades té com a finalitat inserir al col·lectiu amb situació de drogodependència a l'àmbit social i laboral,\
 deixant de costat els prejudicis del col·lectiu perquè puguen desenvolupar-se a la societat sense discriminacions. Fem emprar\
 unes eines com: la entrevista personal, el IPI, entrenaments de habilitats socials, entre altres.";

var cas="Projecte Petjades tiene como finalidad insertar al colectivo en situación de drogodependencia en el ámbito laboral, \
sin importar los prejuicios del colectivo y así poder desarrollarse en sociedad sin discriminaciones. Usamos herramientas como: \
la entrevista personal, el IPI, entrenamientos de habilidades sociales, entre otros.";


function traduval(){
    document.getElementById("text-video").textContent=val;
    console.log("Traduït")
}
function traducas(){
    document.getElementById("text-video").textContent=cas;
    console.log("Traducido")
}
