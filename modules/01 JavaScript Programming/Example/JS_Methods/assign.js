הפונקציה מעתיקה ערכים מספריים מאובייקט אחד או יותר אל אובייקט מטרה,הפונקציה תחזיר את האובייקט מטרה

var obj1 = {

a:1,
b:2,
c:3
}

var obj2 = Object.assign({d:4,e:5},obj1);

console.log(obj2.c, obj2.d);


//output: 3 5

*אם יש באובייקטים שדות זהים עם ערכים שונים,הערכים שיתקבלו בשדות של אובייקט המטרה ,
יהיו הערכים של האובייקט שמועבר כפרמטר הגבוה ביותר מבין האובייקטים שמועברים לפונקציה,לפי סדר משמאל לימין

var obj1 = {

a:1,
b:2,
c:3
}
var obj = {
a:5,
b:6,
c:7

}
var obj2 = Object.assign(obj1,obj);

console.log(obj2.c, obj2.b);//output: 7 6