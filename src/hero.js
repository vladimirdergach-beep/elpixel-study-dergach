export class Hero {
    _name = '';
    _health = 100;
    level = 1;
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        const trimmedName = value.trim();
        const hasNumber = /\d/.test(trimmedName);
        if (trimmedName.length === 0) {
            throw new Error("Имя героя не может быть пустым.");
        }
        if (hasNumber) {
            throw new Error("Имя героя не может содержать цифры.");
        }
        this._name = trimmedName;
    }
    get health() {
        return this._health;
    }
    set health(value) {
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
    takeDamage(amount) {
        if (amount <= 0) {
            console.log("Урон должен быть больше нуля");
            return;
        }
        this.health -= amount;
        if (this.health === 0) {
            console.log(`${this.name} получил ${amount} урона и идет откисать в таверну`);
            return;
        }
        console.log(`${this.name} получил ${amount} урона. Текущее здоровье: ${this.health}`);
    }
    heal(amount) {
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
    levelUp() {
        this.level += 1;
        this.health = 100;
        console.log(`${this.name} получил ${this.level} уровень. Здоровье полностью восстановлено`);
    }
}
//# sourceMappingURL=hero.js.map