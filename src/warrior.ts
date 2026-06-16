import { Hero } from './hero.js';

export class Warrior extends Hero {
    private _armor: number = 0;

    public constructor(name:string, health: number = 100, armor: number = 0) {
        super(name, health);
        this.armor = armor;
    }

    public get armor(): number {
        return this._armor;
    }

    public set armor (amount: number) {
        if (amount < 0) {
            throw new Error("Броня не может быть меньше нуля");
        }

        this._armor = amount;
    }

    public override takeDamage(amount: number): void {
        if (amount <= 0) {
            console.log("Урон должен быть больше нуля");
            return;
        }

        const finalDamage: number = Math.max(0, amount - this.armor);
        const blockedDamage: number = amount - finalDamage;

        console.log(`Броня героя ${this.name} поглотила ${blockedDamage} урона.`);

        this.health -= finalDamage;

        if (finalDamage === 0) {
            console.log(`Броня героя ${this.name} полностью поглотила урон.`);
            return;
        }

        if (this.health === 0) {
            console.log(`${this.name} получил ${finalDamage} урона и идет откисать в таверну`);
            return;
        }

        console.log(`${this.name} получил ${finalDamage} урона и теперь имеет ${this.health} здоровья.`);
    }
}