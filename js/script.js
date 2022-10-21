// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


const teamArray = [
    {
        name: "Wayne",
        lastName:"Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        lastName:"Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        lastName:"Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        lastName:"Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        lastName:"Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        lastName:"Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
]

const teamRow = document.querySelector(".row");

let teamMembers = "";
for (let i = 0; i < teamArray.length; i++) {
    const currentTeam = teamArray[i];
    teamMembers += `
            <div class="col">
                <div class="card">
                    <img src="img/${currentTeam.img}" alt="${currentTeam.name}">
                    <h2>${currentTeam.name} ${currentTeam.lastName}</h2>
                    <p>${currentTeam.role}</p>
                </div>
            </div>
    `;
    console.log(teamMembers);
    teamRow.innerHTML = teamMembers
}


// {/* <div class="card">
//             <h2>${currentStudent.nome} ${currentStudent.cognome}</h2>
//             <p>Voto: ${currentStudent.votoMedio}</p>
//         </div> */}