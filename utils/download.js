let url = 'https://raw.githubusercontent.com/IHTSDO/SNOMEDCT-Languages/master/SnomedCTExpressionConstraintLanguage/ECL%20Syntax/Expression%20Constraint%20Language%20v1%20-%20ABNF%20(Brief%20syntax%20-%20Normative).txt';

let https = require('https');
let path = require('path');
let fs = require('fs');

https.get(url, (res) => {
    console.log(res.statusCode);
    res.pipe(fs.createWriteStream(path.join(__dirname, 'Expression-ABNF.txt')));
});