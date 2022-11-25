/// Iteration 2: getMaxNum

function getMaxNum (getMaxNum) {
    return Math.max(...getMaxNum.filter(Number));
}

// Iteration 2 tests:
console.log(getMaxNum([45, 67, 12, 34])) // Should return 67
console.log(getMaxNum(['hello', [0, 1, 2], 34, 45, 12, 0])) // Should return 45


/// Iteration 3: changeItem

/* Your code goes here */

function changeItem(arrNum, num1, num2) {
    arrNum.forEach((elem, i) => {
    if (elem === num1) {
        arrNum.splice(i, 1, num2);
    }
    });
    return arrNum;
}


// Iteration 3 tests:
// console.log(changeItem([3, 5, 7], 3, 4)) // Should return [4,5,7]
// console.log(changeItem([17, 18, 6, 18, 3], 18, 2)) // Should return [17, 2, 6, 2, 3];
// console.log(changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8)) // Should return [8, 8, 3, 2, 4, 8, 8] 




/// Iteration 4: orderByDate

/* Your code goes here */
function orderByDate(birthdayArray) {
    const birthdays = [...birthdayArray].sort((a,b) => {
        if (a.year > b.year) return 1;
        else if (a.year < b.year) return -1;
        else if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
    });
    return birthdays;
}
function orderByDate(dateArray) {
    const importantDates = [...dateArray].sort((a,b) => {
        if (a.year > b.year) return 1;
        else if (a.year < b.year) return -1;
        else if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
    });
    return importantDates;
}


const birthdays = [
    {
    name: 'Bob',
    year: 1989,
    },
    {
    name: 'Rosita',
    year: 1990,
    },
    {
    name: 'Stevie',
    year: 1988,
    },
    {
    name: 'Marlon',
    year: 1979,
    },
]
const importantDates = [
    {
    title: 'Wedding aniversary',
    year: 2014,
    },
    {
    name: "Daddy's birthday",
    year: 2013,
    },
    {
    name: 'Graduation party',
    year: 2019,
    }
]
console.log(orderByDate(birthdays)) // Should return them ordered 1979, 1988, 1989, 1990
console.log(orderByDate(importantDates)) // Should return them ordered 2013, 2014, 2019




/// Iteration 5: new machine gun

/* Your code goes here */
class Weapon {
    constructor(type, power = 80, ammo = 10) {
    this.type = type;
    this.power = power;
    this.ammo = ammo;
    this.shootingInterval = undefined
    }
    shoot(){
        this.shootingInterval = setInterval(() => {
            if (this.ammo > 0){
                this.ammo = this.ammo - 1;
                console.log (this.ammo)
            }
        }, 300)
    }
    stopShooting(){
        clearInterval(this.shootingInterval);
    }
    reload (num){
        this.ammo = this.ammo + num;
    }

    }

// Iteration 5 tests
// const machineGun = new Weapon('Machine gun', 90, 50);
// console.log('Begin:')
// machineGun.shoot();
// setTimeout(() => machineGun.stopShooting(), 1000);
// setTimeout(() => machineGun.reload(35), 1500);


