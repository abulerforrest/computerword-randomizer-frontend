import { IWord } from "../Word";

export interface IWordService {
	getRandomWord(): Promise<IWord>
}