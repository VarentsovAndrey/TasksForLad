// Обозначаем переменные

const monster = {
  maxHealth: 10,
  name: "Лютый",
  moves: [
    {
      name: "Удар когтистой лапой",
      physicalDmg: 3, // физический урон
      magicDmg: 0, // магический урон
      physicArmorPercents: 20, // физическая броня
      magicArmorPercents: 20, // магическая броня
      cooldown: 0, // ходов на восстановление
    },
    {
      name: "Огненное дыхание",
      physicalDmg: 0,
      magicDmg: 4,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: "Удар хвостом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 50,
      magicArmorPercents: 0,
      cooldown: 2,
    },
  ],
};

const hero = {
  maxHealth: "",
  name: "Евстафий",
  moves: [
    {
      name: "Удар боевым кадилом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 50,
      cooldown: 0,
    },
    {
      name: "Вертушка левой пяткой",
      physicalDmg: 4,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 4,
    },
    {
      name: "Каноничный фаербол",
      physicalDmg: 0,
      magicDmg: 5,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: "Магический блок",
      physicalDmg: 0,
      magicDmg: 0,
      physicArmorPercents: 100,
      magicArmorPercents: 100,
      cooldown: 4,
    },
  ],
};

let healthHero = document.querySelector(".health-hero");
let healthMonster = document.querySelector(".health-monster");
const heroContainer = document.querySelector(".hero-container");
const monsterContainer = document.querySelector(".monster-container");

// Атака Евстафия
const button4 = document.getElementById("atack4");
button4.addEventListener("click", () => {
  animateHeroAttack(heroContainer);
  damageMonster(2, 0);
});

const button5 = document.getElementById("atack5");
button5.addEventListener("click", () => {
  animateHeroAttack(heroContainer);
  damageMonster(4, 0);
});
const button6 = document.getElementById("atack6");
button6.addEventListener("click", () => {
  animateHeroAttack(heroContainer);
  damageMonster(0, 5);
});
const button7 = document.getElementById("atack7");
button7.addEventListener("click", () => {
  animateHeroAttack(heroContainer);
  damageMonster(0, 0);
});

// Атака монстра
const button1 = document.getElementById("atack1");
button1.addEventListener("click", () => {
  animateMonsterAttack(monsterContainer);
  damageHero(3, 0);
});
const button2 = document.getElementById("atack2");
button2.addEventListener("click", () => {
  animateMonsterAttack(monsterContainer);
  damageHero(0, 4);
});
const button3 = document.getElementById("atack3");
button3.addEventListener("click", () => {
  animateMonsterAttack(monsterContainer);
  damageHero(2, 0);
});

let intervalHeroAttack;
let intervalHit;
let character;
let damageContainer;
// Задаем уровень сложности

healthHero.textContent = prompt(
  "Выберите сложность, уровень здоровья Евстафия",
  ""
);

// Анимация Евстафия

function animateHeroAttack(character) {
  let position = 170;
  const interval = 200;
  const diff = 489;
  character.style.transform = "translate(20em)";
  intervalHeroAttack = setInterval(() => {
    character.style.backgroundPosition = `-${position}px -5025px `;
    if (position < 2700) {
      position = position + diff;
    } else {
      position = 170;
      character.style.backgroundPosition = `-${position}px -5025px`;
      character.style.transform = "translate(0px)";

      stopAnimation(intervalHeroAttack);
    }
  }, interval);
}

// Анимация монстра
function animateMonsterAttack(character) {
  let position = 30;
  const interval = 200;
  const diff = 522;
  character.style.transform = "translate(-20em)";
  intervalHeroAttack = setInterval(() => {
    character.style.backgroundPosition = `-${position}px -4275px `;
    if (position < 2600) {
      position = position + diff;
    } else {
      position = 30;
      character.style.backgroundPosition = `-${position}px -4275px`;
      character.style.transform = "translate(0px)";
      stopAnimation(intervalHeroAttack);
    }
  }, interval);
}

function stopAnimation(item) {
  clearInterval(item);
}

// Функция урон монстру

function damageMonster(physicDmg, magicDmg) {
  let monsterHealth = healthMonster.textContent;
  let monsterAfterAttack = monsterHealth - physicDmg - magicDmg;
  healthMonster.textContent = monsterAfterAttack;
  if (monsterAfterAttack <= 0) {
    alert("Победил Евстафий!");
    monsterContainer.style.display = "none";
  }
}

// Функция урон магу

function damageHero(physicDmg, magicDmg) {
  let heroHealth = healthHero.textContent;
  let heroAfterAttack = heroHealth - physicDmg - magicDmg;
  healthHero.textContent = heroAfterAttack;
  if (heroAfterAttack <= 0) {
    alert("Победил Лютый!");
    heroContainer.style.display = "none";
  }
}
