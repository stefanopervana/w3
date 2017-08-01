import { Chart } from 'react-google-charts';
import React from 'react';
import Ap from './button';

var first = {"data":[
    ["Phrases"],["sra. ESTEVEZ, GABRIELA BEATRIZ.-"],
        ["Señor presidente: quiero plantear una cuestión de privilegio contra el senador Ernesto Martínez, de la alianza Cambiemos, en relación con sus declaraciones irresponsables y discriminatorias en torno del debate por la paridad de género, que me ofenden como diputada mujer y como representante de la provincia de Córdoba, de la misma forma que ofenden a todas las integrantes de este Congreso de la Nación y a todas las mujeres en general."],
        ["En diferentes medios de comunicación, el senador Martínez ha calificado a la paridad de género como innecesaria, arcaica, demagógica, discriminatoria, corporativa, denigratoria, negativa, contraproducente, y hasta dijo que era fascista."],
        ["Asimismo, afirmó públicamente que en la Argentina la discriminación política hacia las mujeres había desaparecido, siendo cosa del pasado, y que la desigualdad de género en la política no existía de hecho. Como si fuera poco, e ignorando o “ninguneando” los compromisos internacionales de nuestro país y los amplios debates teóricos y políticos en torno de la paridad, así como la larga historia de la lucha de las mujeres, se despachó con que la paridad de género no tenía un cuerpo de ideas por detrás y que no resolvía ningún problema de las mujeres."],
        ["No le alcanzó al senador Martínez con insultar la lucha histórica y negar las desigualdades de género de nuestro sistema político; no le bastó arremeter contra las mujeres, sino que aprovechó también para plantear que la paridad de género abría las puertas para que se inventen cupos de cualquier cosa. Y en ese “cualquier cosa” están también los trabajadores, los colectivos desfavorecidos, los pueblos originarios, los adultos mayores y la comunidad LGBTIQ. Tenía miedo de que estos sectores pudiesen reclamar algo similar, es decir, que se abran cupos para que diferentes sectores pidan tener participación política."],
        ["Dice el senador Martínez que la paridad de género tiene olor a fascismo. Yo realmente me pregunto de dónde viene esa fragancia."],
        ["Más grave todavía, tuvo expresiones muy dolorosas con respecto al contexto de la protesta social en la que se enmarcaba este debate, por el estado de movilización social contra la violencia de género y los femicidios. Según el senador Martínez –y voy a utilizar sus palabras-, con la marcha contra los femicidios se había montado una escena que hizo complicado que muchos legisladores que estaban en contra votaran de acuerdo a su opinión, y agregó que los asesinatos de las mujeres, que se vienen produciendo de manera cruel, no tienen nada que ver con la paridad de género."],
        ["El mencionado senador debería recordar que, hasta que no tuvimos una presidenta mujer, que fue elegida por el voto popular, en este país no hubo una ley integral de protección contra la violencia hacia las mujeres ni ley de prevención y sanción contra la trata de personas ni se incorporó la figura del femicidio al Código Penal. Algo tendremos que ver, las mujeres que ocupamos espacios institucionales de decisión, con los avances en materia de derechos y políticas públicas en contra de la violencia machista. Negarlo es volver a “ningunear” nuestra lucha, nuestro esfuerzo y nuestro trabajo colectivo."],
        ["Además, ¿cómo puede el senador Martínez referirse a las movilizaciones ciudadanas contra la violencia machista como una puesta en escena para presionar al Congreso con la paridad de género? Es muy irresponsable, sobre todo como representante de Córdoba, teniendo en cuenta que en lo que va del año ya mataron a 20 cordobesas y llevamos un récord de 230 mujeres asesinadas a nivel nacional."],
        ["La marcha que se realizó hace quince días fue un grito colectivo para que dejen de golpearnos, violarnos y matarnos."],
        ["La paridad de género es el reconocimiento justo a que nuestra democracia solo será representativa cuando en este Congreso de la Nación y en todos los poderes del Estado haya al menos un 50 por ciento de mujeres que ocupen puestos de decisión política, sobre todo teniendo en cuenta que en la Argentina las mujeres representamos más del 50 por ciento de la población."],
        ["Al senador Martínez le encanta machacar con los requisitos del mérito y la idoneidad para el cargo, como si en su partido y en todos los partidos no hubiese mujeres idóneas. Pero si, como dice Martínez, no hay desigualdad de hecho y el único requisito es la idoneidad, que nos explique a todos los argentinos de qué sirve la idoneidad de los jueces que liberan a los femicidas para que puedan andar como si nada, la de los jueces que prohíben los abortos no punibles, la de los senadores que votaron con “la Banelco” y la de aquellos presidentes que en otras épocas -que me recuerdan bastante a estas- se fueron en helicóptero mientras hacían que masacraran al pueblo en la Plaza de Mayo. Además, por casualidad ese ex presidente pertenece al mismo partido de este senador."],
        ["No voy a caer en calificar de fascista la posición del senador tal como él calificó la paridad de género, porque tengo la responsabilidad y el conocimiento de la historia para saber lo que significa esa palabra. Pero sí voy a definir esa posición como profundamente conservadora e interesada. Digo que es interesada porque no solo refleja la ideología del senador sino que también tiene que ver con los intereses electorales del partido al que pertenece. De hecho, él mismo afirmó públicamente que, con la paridad de género, el armado de las listas del año que viene será muy difícil y altamente dificultoso. ¿Tendrá miedo el senador de que otras dirigentes, mujeres de su propio partido, más preparadas, representativas e idóneas, ocupen su lugar?"]
        ],

        "width":"100%",
        "options":{
          "wordtree":{"format":"implicit",
          "type": "double",
          "word":"mujeres"
                    },
                    
          "colors": [ 'black', 'green'],
          "maxFontSize": "20",
          "fontName":"courier",
          "backgroundColor":"sky"
        },"chartPackages":["wordtree"]};
   

class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = first

} 
  render() {
    return (
      <div>
      <div id="header">
      <div class="wrapper">
      <h1 id="logo">
      <a href=".">Word Tree</a>
      </h1><Ap />
      </div>
      </div>
      
      <Chart
        chartType="WordTree"
        data={this.state.data}
        options={this.state.options}
        word={this.state.word}
        graph_id="WordTree"
        width="200%"
        height="600px"
        legend_toggle
      />
      
      </div>
    );
  }
}
export default ExampleChart;
