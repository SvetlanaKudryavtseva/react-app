import openGoogle from "./google";
import openYandex from "./yandex"

let openAllMaps = () => {
    openYandex();
    openGoogle();
}

export default openAllMaps;