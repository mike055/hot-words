export interface HotWordConfiguration {
    [key: string]: HotWords;
}

export interface HotWords {
    colour: string;
    title: string;
    words: Array<HotWord>;
}

export interface HotWord {
    word: string;
}
