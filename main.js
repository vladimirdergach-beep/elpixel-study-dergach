import { Mage } from './src/mage.js';
import { Warrior } from './src/warrior.js';
import { Archer } from './src/archer.js';
function showError(error) {
    if (error instanceof Error) {
        console.log(`Ошибка: ${error.message}`);
        return;
    }
    console.log('Произошла неизвестная ошибка');
}
console.log('--- Проверка мага ---');
const invoker = new Mage('Инвокер', 100, 100);
invoker.castSpell(30, 'Tornado');
invoker.castSpell(80, 'Ice Wall');
invoker.takeDamage(50);
invoker.castSpell(40, 'Ghost Walk');
invoker.heal(20);
invoker.levelUp();
invoker.castSpell(100, 'Chaos Meteor');
console.log('--- Проверка воина ---');
const warrior = new Warrior('Могул-хан', 100, 15);
warrior.takeDamage(40);
warrior.takeDamage(10);
warrior.heal(20);
warrior.levelUp();
warrior.takeDamage(200);
console.log('--- Проверка лучника ---');
const archer = new Archer('Траксекс', 100, 3);
archer.shoot();
archer.shoot();
archer.shoot();
archer.shoot();
archer.restock();
archer.shoot();
archer.takeDamage(40);
archer.heal(20);
archer.levelUp();
console.log('--- Проверка ошибок ---');
try {
    new Mage('', 100, 100);
}
catch (error) {
    showError(error);
}
try {
    new Mage('Маг123', 100, 100);
}
catch (error) {
    showError(error);
}
try {
    new Warrior('Тролль Варлорд', 100, -10);
}
catch (error) {
    showError(error);
}
try {
    new Archer('Худвинк', 100, -5);
}
catch (error) {
    showError(error);
}
invoker.takeDamage(-10);
invoker.heal(-20);
invoker.castSpell(-10, 'Forge Spirit');
invoker.castSpell(999, 'Cataclysm');
//# sourceMappingURL=main.js.map