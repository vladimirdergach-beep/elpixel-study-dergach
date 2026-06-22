import { Hero } from './hero.js';

export class Archer extends Hero {
    private _arrows: number = 25;

    public constructor(name: string, health: number = 100, arrows: number = 25) {
        super(name, health);

        this.arrows = arrows;
    }

    public get arrows(): number {
        return this._arrows;
    }

    public set arrows(value: number) {
        if (value < 0) {
            throw new Error("Количество стрел не может быть меньше нуля");
        }

        this._arrows = value;
    }

    public shoot(): void {
        if (this.arrows === 0) {
            console.log(`У ${this.name} закончились стрелы. Необходимо возобновить запас!`);
            return;
        }

        this.arrows -= 1;

        console.log(`${this.name} сделал выстрел. Осталось ${this.arrows} стрел.`);
    }

    public restock(): void {

        this.arrows += 10;

        console.log(`${this.name} метнулся за стрелами, возобновив запас на 10 единиц!`);
    }
}