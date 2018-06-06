let snomed = require('./src/index');

let makeExpression = snomed.makeExpression;


console.log(JSON.stringify(makeExpression('< 123345766')));
console.log(JSON.stringify(makeExpression('<< 123345766')));
console.log(JSON.stringify(makeExpression('123345766')));

console.log(JSON.stringify(makeExpression('* : 246075003 |causative agent| = 387517004 |paracetamol|')));

console.log(JSON.stringify(makeExpression(
    `< 404684003 |clinical finding|:
        { 363698007 |finding site| = << 39057004 |pulmonary valve structure|,
        116676008 |associated morphology| = << 415582006 |stenosis|},
        { 363698007 |finding site| = << 53085002 |right ventricular structure|, 
        116676008 |associated morphology| = << 56246009 |hypertrophy|}`
)));

