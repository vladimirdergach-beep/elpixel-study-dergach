import { Hero } from './hero.js';

export class Mage extends Hero {
    private _mana: number = 100;
    private _maxMana: number = 100;

    public constructor(name: string, health: number = 100, maxMana: number = 100) {
        super(name, health);
        
        this.maxMana = maxMana;
        this.mana = maxMana;
    }

    public get mana(): number {
        return this._mana;
    }

    public set mana(value: number) {
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

    public get maxMana(): number {
        return this._maxMana;
    }

    public set maxMana(value: number) {
        if (value <= 0) {
            throw new Error('Максимальная мана должна быть больше нуля');
        }

        this._maxMana = value;

        if (this._mana > this._maxMana) {
            this._mana = this._maxMana;
        }
    }

    public castSpell(manaCost: number, spellName: string): void {
        const  trimmedSpellName: string = spellName.trim();

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
    public override levelUp(): void {
        this.level += 1;
        this.health = 100;
        this.mana = this.maxMana;

        console.log(`${this.name} получил ${this.level} уровень. Здоровье и мана полностью восстановлены!`);  
    }
}