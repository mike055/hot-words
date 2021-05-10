import { HotWordConfiguration } from '../types';

// https://htmlcolorcodes.com/color-chart/web-safe-color-chart/
const hotWordConfiguration: HotWordConfiguration = {
    blue: {
        title: 'Blue words',
        colour: '#6699FF',
        words: [{ word: 'the' }],
    },
    green: {
        title: 'Green words',
        colour: '#66CC00',
        words: [
            { word: 'to' },
            { word: 'do' },
            { word: 'am' },
            { word: 'at' },
            { word: 'an' },
            { word: 'and' },
            { word: 'can' },
            { word: 'as' },
            { word: 'has' },
            { word: 'had' },
        ],
    },
};

export default hotWordConfiguration;
