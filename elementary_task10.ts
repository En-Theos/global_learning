interface IPersonalPlanPeter {
    name: string,
    age: number,
    skills: {
        languages: string[],
        programmingLangs: Record<string, string>,
        exp: string
    },
    showAgeAndLangs: (plan: IPersonalPlanPeter) => string
}

const personalPlanPeter:IPersonalPlanPeter = {
    name: "Peter",
    age: 29,
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    
    showAgeAndLangs: (plan: IPersonalPlanPeter) => {
        return `Мне ${plan.age} и я владею языками: ${plan.skills.languages.join(' ').toLocaleUpperCase()}`;
    }
};

function showExperience(plan: IPersonalPlanPeter): string {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan: IPersonalPlanPeter): string {
    const {programmingLangs} = plan.skills;
    let result:string = ''

    for (const key in programmingLangs) {
        result += `Мова ${key} вивчена на ${programmingLangs[key]} \n`;
    }

    return result;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));