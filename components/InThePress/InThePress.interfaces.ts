import { NewsOutlets } from './InThePress.types';

export interface Quote {
    imagePath: string;
    imageAlt: string;
    imageHeight: number;
    imageWidth: number;
    quoteURL: string;
    catchPhrase: string;
    remainder: string;
    newsOutlet: NewsOutlets;
};
