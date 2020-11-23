// 에픽 사령관
import eulji_mundeok from '../../commander/data/epic/eulji_mundeok';
import scipio from '../../commander/data/epic/scipio';
import lohar from '../../commander/data/epic/lohar';
import joan_of_arc from '../../commander/data/epic/joan_of_arc';
import hermann from '../../commander/data/epic/hermann';
import pelagius from '../../commander/data/epic/pelagius';
import sun_tzu from '../../commander/data/epic/sun_tzu';
import kusunoki_masashige from '../../commander/data/epic/kusunoki_masashige';
import boudica from '../../commander/data/epic/boudica';
import baibars from '../../commander/data/epic/baibars';
import belisarius from '../../commander/data/epic/belisarius';
import osman from '../../commander/data/epic/osman';

export const epics = [sun_tzu, pelagius, baibars, joan_of_arc, belisarius, kusunoki_masashige, eulji_mundeok, boudica, osman, hermann, scipio, lohar];

// 엘리트 사령관
import tomoe_gozen from '../../commander/data/elite/tomoe_gozen';
import sarka from '../../commander/data/elite/sarka';
import constance from '../../commander/data/elite/constance';
import gaius_marius from '../../commander/data/elite/gaius_marius';
import lancelot from '../../commander/data/elite/lancelot';

const elites = [constance, sarka, gaius_marius, tomoe_gozen, lancelot];

// 우수 사령관
import centurion from '../../commander/data/advanced/centurion';
import markswoman from '../../commander/data/advanced/markswoman';
import city_keeper from '../../commander/data/advanced/city_keeper';
import dragon_lancer from '../../commander/data/advanced/dragon_lancer';

const advanceds = [centurion, markswoman, city_keeper, dragon_lancer];

const commanders = epics.concat(elites).concat(advanceds);

export default commanders;
