import { UIConfig } from "./components/CustomizeModal";
import { Elem } from "./components/rows/Threshold";

const defaultConfig = {
    showDice: true,
    showLife: true,
    showYourLife: true,
    elems: [Elem.EARTH, Elem.AIR, Elem.FIRE, Elem.WATER],
    showPStone: true,
    oppElems: [],
};

export function setStoredConfig(config: UIConfig) {
    localStorage.setItem('ui-config-2', JSON.stringify(config));
}

export function getStoredConfig(): UIConfig {
    const config = localStorage.getItem('ui-config-2');
    if (config) {
        return JSON.parse(config);
    } else {
        return defaultConfig;
    }
}