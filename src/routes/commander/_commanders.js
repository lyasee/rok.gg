// 레전드 사령관
import yi_seong_gye from './data/legend/yi_seong_gye';
import julius_caesar from './data/legend/julius_caesar';
import el_cid from './data/legend/el_cid';
import richard from './data/legend/richard';
import caocao from './data/legend/caocao';
import frederick from './data/legend/frederick';
import minamoto from './data/legend/minamoto';
import cleopatra7 from './data/legend/cleopatra7';
import charles_martel from './data/legend/charles_martel';
import hannibal_barca from './data/legend/hannibal_barca';
import mehmed2 from './data/legend/mehmed2';
import seondeok from './data/legend/seondeok';
import saladin from './data/legend/saladin';
import alexander_greate from './data/legend/alexander_greate';
import constantine from './data/legend/constantine';
import genghis_khan from './data/legend/genghis_khan';
import aethelflaed from './data/legend/aethelflaed';
import edward_of_woodstock from './data/legend/edward_of_woodstock';

export const legends = [
  alexander_greate,
  edward_of_woodstock,
  yi_seong_gye,
  saladin,
  el_cid,
  richard,
  charles_martel,
  minamoto,
  caocao,
  frederick,
  julius_caesar,
  hannibal_barca,
  mehmed2,
  aethelflaed,
  constantine,
  seondeok,
  genghis_khan,
  cleopatra7,
];

// 에픽 사령관
import eulji_mundeok from './data/epic/eulji_mundeok';
import scipio from './data/epic/scipio';
import lohar from './data/epic/lohar';
import joan_of_arc from './data/epic/joan_of_arc';
import hermann from './data/epic/hermann';
import pelagius from './data/epic/pelagius';
import sun_tzu from './data/epic/sun_tzu';
import kusunoki_masashige from './data/epic/kusunoki_masashige';
import boudica from './data/epic/boudica';
import baibars from './data/epic/baibars';
import belisarius from './data/epic/belisarius';
import osman from './data/epic/osman';

export const epics = [sun_tzu, pelagius, baibars, joan_of_arc, belisarius, kusunoki_masashige, eulji_mundeok, boudica, osman, hermann, scipio, lohar];

// 엘리트 사령관
import tomoe_gozen from './data/elite/tomoe_gozen';
import sarka from './data/elite/sarka';
import constance from './data/elite/constance';
import gaius_marius from './data/elite/gaius_marius';
import lancelot from './data/elite/lancelot';

const elites = [constance, sarka, gaius_marius, tomoe_gozen, lancelot];

// 우수 사령관
import centurion from './data/advanced/centurion';
import markswoman from './data/advanced/markswoman';
import city_keeper from './data/advanced/city_keeper';
import dragon_lancer from './data/advanced/dragon_lancer';

const advanceds = [centurion, markswoman, city_keeper, dragon_lancer];

const commanders = legends
  .concat(epics)
  .concat(elites)
  .concat(advanceds);

export default commanders;
