export interface HotWordConfiguration {
    [key: string]: HotWords;
}

export interface HotWords {
    colour: string;
    title: string;
    words: HotWord[];
}

export interface HotWord {
    word: string;
}

export interface GameConfiguration {
    [key: string]: Game;
}
export interface Game {
    title: string;
}
