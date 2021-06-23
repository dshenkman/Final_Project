const exp = require('express');
const app = exp();


app.set('port', 3001);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);

})
