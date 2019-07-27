Router.route('/', {
	name: 'homeRoute',
	data: function () {
		return {
      bubbles: [
        {
          author: "Gianluca",
          text: "L'ispirazione è un fatto, un momento, un pensiero degno di essere espresso. Nel comune lavoro di composizione, l'ispirazione è imponderabile; il momento in cui essa avviene è imprevedibile. In una parola, è un caso! E così, provochiamo il caso. Utilizziamo un testo, meglio se è un testo letterario, per estrarne in maniera casuale, ad esempio aprendolo a caso, delle parole. Chi sviluppa la poesia selezionerà a sua volta e metterà insieme le parole estratte casualmente in modo da svilupparne, in forma poetica, uno o più concetti, idee, descrizioni, immagini o figure."
        },
        {
          author: "Pietro",
          text: "E' di uso comune, nelle nostre culture occidentali, che si metta faccia un book fotografico in occasione del proprio matrimonio e, a tale scopo, di norma si paga un fotografo professionale che colga per via visiva i momenti salienti di quel particolare giorno. Similemente si offre la possibilità di sviluppare un book di parole che immortali la circostanza. Il tempo necessario per la scrittura e la raccolta di materiale dipende dalla circostanza stessa. Ad esempio, nel caso di un matrimonio sarà opportuno qualche giorno per intervistare i genitori degli sposi, gli amici, i testimoni di nozze, gli sposi stessi. Viceversa, nel caso di un compleanno sarà sufficiente essere presente ed intervistare qualcuno degli intervenuti etc. \nIl libro è composto in formato digitale con impaginazione e contiene testi in metrica che possono essere descrizioni di circostanze, avvenimenti oppure paesaggi, pensieri relativi all'evento oppure ritratti delle persone intervenute e tutto il resto che la libera creatività dell'autore e degli organizzatori consente.."
        },
        {
          author: "Giada",
          text: `SE ti siedi e io ti guardo
sarà un passo contro il deserto.
Sicuro, un passo incerto,
forse un inciampo.
O forse, invece, un lampo
che arriva in ritardo
e illumina l'immagine, il sembiante
a farne un tuo ritratto di parole
nel tempo presente che ti somigli
e racconti il tuo sole o dia consigli.
È così un ritratto in versi;
una poesia che racconta che pensi,
un TU in vocaboli sparsi,
un pane della mente.Scusa, se è poco più di niente`
        },
        {
          author: "Cecco",
          text: "Il ritratto in versi funziona nello stesso modo: c'è un passante e c'è un poeta il quale espone o meno i propri versi. Secondo il proprio desiderio, il passante può fermarsi per acquistare una poesia già scritta o farsi fare un ritratto. È lo stesso principio."
        }
      ]
    }
	},
	action: function(){
    this.render('homePage');
	}
});
