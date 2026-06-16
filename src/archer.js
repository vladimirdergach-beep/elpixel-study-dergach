import { Hero } from './hero.js';
export class Archer extends Hero {
    _arrows = 25;
    constructor(name, health = 100, arrows = 25) {
        super(name, health);
        this.arrows = arrows;
    }
    get arrows() {
        return this._arrows;
    }
    set arrows(value) {
        if (value < 0) {
            throw new Error("Количество стрел не может быть меньше нуля");
        }
        this._arrows = value;
    }
    shoot() {
        if (this.arrows === 0) {
            console.log(`У ${this.name} закончились стрелы. Необходимо возобновить запас!`);
            return;
        }
        this.arrows -= 1;
        console.log(`${this.name} сделал выстрел. Осталось ${this.arrows} стрел.`);
    }
    restock() {
        this.arrows += 10;
        console.log(`${this.name} метнулся за стрелами, возобновив запас на 10 единиц!`);
    }
}
//# sourceMappingURL=archer.js.map