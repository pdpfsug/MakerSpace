const timeline = [
    {
        img: "img/timeline/1.jpg",
        title: "Settembre 2014",
        subtitle: "L'inzio di tutto",
        body: "Il Maker Space nasce nel 2014 quando insieme alla Biblioteca Multimediale di Fabriano, Beatrice Rapaccini e Luca Ferroni forgiano questo gruppo basato sulle varie attività makers grazie anche all'indispensabile aiuto del PDP"
    },
    {
        img: "img/timeline/2.jpg",
        title: "Ottobre 2014",
        subtitle: "La prima partecipazione alla Maker Faire",
        body: "Evento nella quale abbiamo presentato il progetto “Makerspaces in Libraries”, mostrando come sia possibile attuare attività semplici e complesse nelle bibloteche pubbliche. In particolare, abbiamo presentato alcuni progetti nati all’interno delle attività del Maker Space"
    },
    {
        img: "img/timeline/3.jpg",
        title: "Marzo 2015",
        subtitle: "Family Creative Learning",
        body: "In collaborazione con il Centro per le Famiglie si sono realizzati degli incontri per famiglie, dove i bambini e i propri genitori sono stati coinvolti ad apprendere attraverso un uso creativo delle tecnologie. Il laboratorio intendeva supportare quelle famiglie che avevano un accesso limitato alle tecnologie, sia dal punto di vista sociale che economico"
    },
    {
        img: "img/timeline/4.jpg",
        title: "Maggio 2015",
        subtitle: "Scratch Day",
        body: "Nella Biblioteca Pubblica si è festeggiato lo Scratch Day 2015, una rete globale di eventi per celebrare Scratch. Scratch è uno strumento, una piattaforma di apprendimento, una comunità, che permette di avvicinarsi alla programmazione in modo divertente e creativo. Abbiamo iniziato sperimentando Scratch, installato nei computer della Biblioteca, insieme a giovani e meno giovani, e successivamente l’Istituto Tecnico Merloni ha organizzato una gara di robotica “TakingBall” con i LEGO Mindstorms NXT e infine, abbiamo terminato con una jam session suonando Makey Makey e SynergicNoise"
    },
    {
        img: "img/timeline/5.jpg",
        title: "Ottobre 2016",
        subtitle: "Maker Faire ci risiamo!",
        body: 'HoloScratch è stato il progetto con cui ci siamo presentati durante la Maker Faire 2016. Quest\'ultimo è stato un progetto che mostrava come creare videogiochi con ologrammi sfruttando, in vari modi, una tecnica illusoria chiamata "Pepper\'s Ghost". Con Scratch, un linguaggio di programmazione visuale, è possibile creare animazioni e videogiochi in modo semplice e divertente e in questo progetto abbiamo visto come utilizzarlo per far apparire dei piccoli "fantasmi" in 3D'
    },
    {
        img: "img/timeline/6.jpg",
        title: "Ottobre 2016",
        subtitle: "Linux Day",
        body: "In collaborazione con il gruppo del PDP, il Maker Spcae ha organizzato il Linux Day 2016 nella cittadina di Fabriano, evento nel quale l'argomento più discusso è stato proprio il coding, attività di cui il nostro gruppo aveva fatto la sua caratteristica più importante. I vari talk che hanno scandito l'intera giornata sono stati fondamentali poi per le nostre esperienze successive"
    },
    {
        img: "img/timeline/7.jpg",
        title: "Marzo 2017",
        subtitle: "Uncinetto Type-D",
        body: "In occasione della settimana del Rosadigitale vi abbiamo mostrato come la storia della programmazione sia partita dalla tessitura. Jaquard, difatti, inventò le schede metalliche perforate per il telaio chesuccessivamente furono adottate nella programmazione dei computer. Mamme e nonne hanno insegnato al gruppo del Maker Space le basi del cucito, del ricamo, dell'uncinetto e a fare a maglia, fino ad incontrare una innovativa macchina ricamatrice"
    }
]

$("#timeline-container").ready(buildTimeline);

function buildTimeline(){
    let output = "";

    timeline.forEach(step => {
        let temp = $("#timeline-template").html(); // carica template
        Object.keys(step).forEach(k => {
            temp = temp.replace(`{${k}}`, step[k]);
        })
        output += temp;
    })
    output += $("#timeline").html();
    $("#timeline-container").html(output);
}