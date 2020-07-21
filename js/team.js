const team = [
    {
        name: "Francesco Coppola",
        role: "Developer and Doctor",
        bio: "Laureato in Computer Science all'Università di Camerino",
        img: "img/team/Francesco.jpg",
        social: {
            twitter: "https://twitter.com/francescocops",
            github: "https://github.com/Azzeccagarbugli",
            linkedin: "https://www.linkedin.com/in/francesco-coppola-98198814a/",
        }
    },
    {
        name: "Valerio Mariani",
        role: "Developer and student",
        bio: "Studente del secondo anno di Computer Science all'università di Pisa",
        img: "img/team/Valerio.jpg",
        social: {
            twitter: "https://www.facebook.com/vmariani3",
            github: "https://github.com/sd3ntato",
            linkedin: "https://www.linkedin.com/in/valerio-mariani-31b9ba13a/",
        }
    },
    {
        name: "Chiara Colciago",
        role: "Maker and student",
        bio: "Studentessa al quarto anno del Liceo Internazionale in Svezia",
        img: "img/team/Chiara.jpg",
        social: {
            twitter: null,
            github: null,
            linkedin: null,
        }
    },
    {
        name: "Antonio Strippoli",
        role: "Developer and student",
        bio: "Studente del secondo anno di Computer Science all'università di Perugia",
        img: "img/team/Antonio.jpg",
        social: {
            twitter: null,
            github: "https://github.com/Astromyen",
            linkedin: null,
        }
    },
    {
        name: "Beatrice Rapaccini",
        role: "Teacher",
        bio: "Co-Fondatrice del gruppo MakerSpace nella Bibloteca Multimediale di Fabriano",
        img: "img/team/Beatrice.png",
        social: {
            twitter: "https://twitter.com/tormiento",
            github: null,
            linkedin: "https://www.linkedin.com/in/rapaccini/",
        }
    },
    {
        name: "Luca Colciago",
        role: "EQR Development Manager",
        bio: "Co-Fondatore del MakerSpace nella Bibloteca Multimediale di Fabriano",
        img: "img/team/LucaC.jpg",
        social: {
            twitter: "https://twitter.com/dottork",
            github: "https://github.com/dottorK",
            linkedin: "https://www.linkedin.com/in/lucacolciago/",
        }
    },
    {
        name: "Giorgio Paoletti",
        role: "Developer and student",
        bio: "Studente del quinto anno di Informatica all'ITIS di Fabriano con una passione per il mondo dell'arti digitali e per il mondo videoludico",
        img: "img/team/Giorgio.jpg",
        social: {
            twitter: null,
            github: "https://github.com/GiorgioPaoletti",
            linkedin: null,
        }
    },
    {
        name: "Luca Ferroni",
        role: "Open man",
        bio: "Analista software specializzato nel settore Network con Linux nel cuore e Co-Fondatore del MakerSpace nella Bibloteca Multimediale di Fabriano",
        img: "img/team/LucaF.jpg",
        social: {
            twitter: "https://twitter.com/ferodafabriano",
            github: "https://github.com/feroda",
            linkedin: "https://www.linkedin.com/in/lucaferroni/",
        }
    },
    {
        name: "Dawid Weglarz",
        role: "Developer and student",
        bio: "Studente del terzo anno di Computer Science all'università di Urbino e presidente del MakerSpace nella Bibloteca Multimediale di Fabriano",
        img: "http://0.gravatar.com/avatar/5c9ed8fd12a584f8a941c019fb9cfcad?s=256",
        social: {
            twitter: null,
            github: "https://github.com/Radeox",
            linkedin: "https://www.linkedin.com/in/dawid-w%C4%99glarz-199574100/",
        }
    },

    {
        name: "Lorenzo Farinelli",
        role: "Developer and student",
        bio: "Studente del terzo anno di Ingegneria Informatica al Politecnico di Milano",
        img: "img/team/Lorenzo.jpg",
        social: {
            twitter: "https://twitter.com/fari_nelli",
            github: "https://github.com/lorenzofar",
            linkedin: "https://www.linkedin.com/in/lorenzofarinelli/",
        }
    },
    {
        name: "Riccardo Luzi",
        role: "Developer and student",
        bio: "Studente del quinto anno di Liceo Scientifico 'Vito Volterra' a Fabriano",
        img: "img/team/RiccardoLuz.jpg",
        social: {
            twitter: null,
            github: null,
            linkedin: null,
        }
    },
    {
        name: "Riccardo Lucarini",
        role: "Musician and student",
        bio: "Studente del quarto anno di Liceo Scientifico 'Vito Volterra' a Fabriano",
        img: "img/team/RiccardoLuca.jpg",
        social: {
            twitter: null,
            github: null,
            linkedin: null,
        }
    },
]

$("#team").ready(buildTeam);

function buildTeam() {
    let team_output = "";
    team.forEach(person => {
        let temp = $("#person-template").html(); // Carica template per persona
        Object.keys(person).filter(k => k != "social").forEach(k => temp = temp.replace(`{${k}}`, person[k])); // Sostituisci i placeholder con i valori reali
        let social = person["social"]; // Prendi lista dei social
        let social_out = "";
        Object.keys(social).filter(k => social[k] != null).forEach(k => { // Filtra social nulli
            let social_temp = $("#social-template").html(); // Carica template
            social_temp = social_temp.replace("{social}", k).replace("{url}", social[k]); // Sostituisci placeholder
            social_out += social_temp; // Aggiungi ad html
        })
        temp = temp.replace("{social-items}", social_out); // Carica lista social
        team_output += temp; // Aggiungi persona ad html finale     
    });
    $("#team-container").html(team_output);
}
