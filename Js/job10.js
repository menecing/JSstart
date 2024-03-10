"use strict"
//Упражнение 10. Задачи на работу с объектами

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
           js: '20%',
          php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        let str = '';
        const {age} = plan;
        const {languages} = plan.skills;
        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });
        return (`Мне ${age} и я владею языками: ${str}`)
    }
};

personalPlanPeter.showAgeAndLangs (personalPlanPeter);

//1
function showExperience(plan) {
    const {exp} = plan.skills;
    return (exp);
}

showExperience (personalPlanPeter);  

//2
function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return (str);
};

showProgrammingLangs (personalPlanPeter);
