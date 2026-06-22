import type { ICharacter } from './ICharacter.js';
export declare abstract class Hero implements ICharacter {
    protected _name: string;
    protected _health: number;
    level: number;
    constructor(name: string, health?: number);
    get name(): string;
    set name(value: string);
    get health(): number;
    set health(value: number);
    takeDamage(amount: number): void;
    heal(amount: number): void;
    levelUp(): void;
}
//# sourceMappingURL=hero.d.ts.map