import { Hero } from './hero.js';
export class Mage extends Hero {
    _mana = 100;
    _maxMana = 100;
    constructor(name, health = 100, maxMana = 100) {
        super(name, health);
        this.maxMana = maxMana;
        this.mana = maxMana;
    }
    get mana() {
        return this._mana;
    }
    set mana(value) {
        if (value < 0) {
            this._mana = 0;
            return;
        }
        if (value > this._maxMana) {
            this._mana = this.maxMana;
            return;
        }
        this._mana = value;
    }
    get maxMana() {
        return this._maxMana;
    }
    set maxMana(value) {
        if (value <= 0) {
            throw new Error('Максимальная мана должна быть больше нуля');
        }
        this._maxMana = value;
        if (this._mana > this._maxMana) {
            this._mana = this._maxMana;
        }
    }
    castSpell(manaCost, spellName) {
        const trimmedSpellName = spellName.trim();
        if (trimmedSpellName.length === 0) {
            console.log("Название заклинания не может быть пустым.");
            return;
        }
        if (manaCost < 0) {
            console.log("Манакост заклинания не может быть отрицательным");
            return;
        }
        if (this.mana < manaCost) {
            console.log(`${this.name} попытался использовать ${trimmedSpellName}, но у него недостаточно маны!`);
            return;
        }
        this.mana -= manaCost;
        console.log(`${this.name} использовал ${trimmedSpellName}, потратив ${manaCost} маны. Осталось маны: ${this.mana}`);
    }
    levelUp() {
        this.level += 1;
        this.health = 100;
        this.mana = this.maxMana;
        console.log(`${this.name} получил ${this.level} уровень. Здоровье и мана полностью восстановлены!`);
    }
}
//# sourceMappingURL=mage.js.map