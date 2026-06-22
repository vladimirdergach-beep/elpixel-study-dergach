import { Hero } from './hero.js';
export declare class Mage extends Hero {
    private _mana;
    private _maxMana;
    constructor(name: string, health?: number, maxMana?: number);
    get mana(): number;
    set mana(value: number);
    get maxMana(): number;
    set maxMana(value: number);
    castSpell(manaCost: number, spellName: string): void;
    levelUp(): void;
}
//# sourceMappingURL=mage.d.ts.map