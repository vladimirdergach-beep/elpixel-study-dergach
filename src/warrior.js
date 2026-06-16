import { Hero } from './hero.js';
export class Warrior extends Hero {
    _armor = 0;
    constructor(name, health = 100, armor = 0) {
        super(name, health);
        this.armor = armor;
    }
    get armor() {
        return this._armor;
    }
    set armor(amount) {
        if (amount < 0) {
            throw new Error("Броня не может быть меньше нуля");
        }
        this._armor = amount;
    }
    takeDamage(amount) {
        if (amount <= 0) {
            console.log("Урон должен быть больше нуля");
            return;
        }
        const finalDamage = Math.max(0, amount - this.armor);
        const blockedDamage = amount - finalDamage;
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
//# sourceMappingURL=warrior.js.map