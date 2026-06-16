import { Hero } from './hero.js';
export declare class Archer extends Hero {
    private _arrows;
    constructor(name: string, health?: number, arrows?: number);
    get arrows(): number;
    set arrows(value: number);
    shoot(): void;
    restock(): void;
}
//# sourceMappingURL=archer.d.ts.map