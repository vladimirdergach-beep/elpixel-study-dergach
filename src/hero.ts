import type { ICharacter } from './ICharacter.js';

export abstract class Hero implements ICharacter {
    protected _name: string = '';
    protected _health: number = 100;
    public level: number = 1;

    public constructor(name: string, health: number = 100) {
        this.name = name;
        this.health = health;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        const trimmedName: string = value.trim();
        const hasNumber: boolean = /\d/.test(trimmedName);

        if (trimmedName.length === 0) {
            throw new Error("Имя героя не может быть пустым.");
        }

        if (hasNumber) {
            throw new Error("Имя героя не может содержать цифры.");
        }

        this._name = trimmedName;
    } 

    public get health(): number {
        return this._health;
    }

    public set health(value: number) {
        if (value < 0) {
            this._health = 0;
            return;
        }

        if (value > 100) {
            this._health = 100;
            return;
        }

        this._health = value;
    }

    public takeDamage(amount: number): void {
        if (amount <= 0) {
            console.log("Урон должен быть больше нуля");
            return;
        }

        this.health -= amount;

        if (this.health === 0) {
            console.log(`${this.name} получил ${amount} урона и идет откисать в таверну`);
            return;
        }

        console.log (`${this.name} получил ${amount} урона. Текущее здоровье: ${this.health}`);
    }

    public heal(amount: number): void {
        if (amount < 0) {
            console.log('Лечение должно быть больше нуля');
            return;
        }

        this.health += amount;

        if (this.health === 100) {
            console.log('Здоровье полностью восстановлено');
            return;
        }

        console.log(`${this.name} восстановил ${amount} здоровья. Текущее здоровье: ${this.health}`);
    }

    public levelUp(): void {
        this.level += 1;
        this.health = 100;

        console.log(`${this.name} получил ${this.level} уровень. Здоровье полностью восстановлено`);  
    }
}