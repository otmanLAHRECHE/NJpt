


const age_calcul = (year) =>{
    const current_year = new Date().getFullYear();
    const age = current_year - year
    console.log("your age is aproximaticly:...."+ age)
}

module.exports = age_calcul