var i = 1;
var a = 0,
   b = 5,
   m;
var score = 0;
var fail = 0;
var s = document.getElementById('score');
var f = document.getElementById('fail');
//1
document.getElementById('a1').addEventListener(
   'click',
   function () {
      if (i == 1) {
         i++;
         document.getElementById('a11').style.visibility = 'visible';
         a = 1;
         m = document.getElementById('a11'); //
      } else if (i == 2) {
         i++;
         document.getElementById('a11').style.visibility = 'visible';
         a = 1;
         if (a == b) {
            score += 1;
            s.innerText = 'Score: ' + score;
            i = 1;
            a = 9;
            b;
            10;
         } else {
            fail += 1;
            f.innerText = 'Failed Attemps: ' + fail;
            setTimeout(() => {
               document.getElementById('a11').style.visibility = 'hidden';
               m.style.visibility = 'hidden';

               i = 1;
            }, 2000);
         }
      }
   },
   false,
);
document.getElementById('a2').addEventListener(
   'click',
   function () {
      if (i == 1) {
         i++;
         document.getElementById('a22').style.visibility = 'visible';
         b = 1;
         m = document.getElementById('a22'); //
      } else if (i == 2) {
         i++;
         document.getElementById('a22').style.visibility = 'visible';
         b = 1;
         if (a == b) {
            score += 1;
            s.innerText = 'Score: ' + score;
            i = 1;
            a = 9;
            b = 10;
         } else {
            fail += 1;
            f.innerText = 'Failed Attemps: ' + fail;
            setTimeout(() => {
               document.getElementById('a22').style.visibility = 'hidden';
               m.style.visibility = 'hidden';
               i = 1;
            }, 2000);
         }
      }
   },
   false,
);
//2
document.getElementById('b1').addEventListener(
   'click',
   function () {
      if (i == 1) {
         i++;
         document.getElementById('b11').style.visibility = 'visible';
         a = 2;
         m = document.getElementById('b11');
      } else if (i == 2) {
         i++;
         document.getElementById('b11').style.visibility = 'visible';
         a = 2;
         if (a == b) {
            score += 1;
            s.innerText = 'Score: ' + score;
            i = 1;
            a = 9;
            b;
            10;
         } else {
            fail += 1;
            f.innerText = 'Failed Attemps: ' + fail;
            setTimeout(() => {
               document.getElementById('b11').style.visibility = 'hidden';
               m.style.visibility = 'hidden';
               i = 1;
            }, 2000);
         }
      }
   },
   false,
);
document.getElementById('b2').addEventListener(
   'click',
   function () {
      if (i == 1) {
         i++;
         document.getElementById('b22').style.visibility = 'visible';
         b = 2;
         m = document.getElementById('b22');
      } else if (i == 2) {
         i++;
         document.getElementById('b22').style.visibility = 'visible';
         b = 2;
         if (a == b) {
            score += 1;
            s.innerText = 'Score: ' + score;
            i = 1;
            a = 9;
            b = 10;
         } else {
            fail += 1;
            f.innerText = 'Failed Attemps: ' + fail;
            setTimeout(() => {
               document.getElementById('b22').style.visibility = 'hidden';
               m.style.visibility = 'hidden';
               i = 1;
            }, 2000);
         }
      }
   },
   false,
);
//3
document.getElementById('c1').addEventListener(
   'click',
   function () {
      if (i == 1) {
         i++;
         document.getElementById('c11').style.visibility = 'visible';
         a = 3;
         m = document.getElementById('c11');
      } else if (i == 2) {
         i++;
         document.getElementById('c11').style.visibility = 'visible';
         a = 3;
         if (a == b) {
            score += 1;
            s.innerText = 'Score: ' + score;
            i = 1;
            a = 12;
            b = 14;
         } else {
            fail += 1;
            f.innerText = 'Failed Attemps: ' + fail;
            setTimeout(() => {
               document.getElementById('c11').style.visibility = 'hidden';
               m.style.visibility = 'hidden';
               i = 1;
            }, 2000);
         }
      }
   },
   false,
);
//
document.getElementById('c2').addEventListener(
   'click',
   function () {
      if (i == 1) {
         i++;
         document.getElementById('c22').style.visibility = 'visible';
         b = 3;
         m = document.getElementById('c22');
      } else if (i == 2) {
         i++;
         document.getElementById('c22').style.visibility = 'visible';
         b = 3;
         if (a == b) {
            score += 1;
            s.innerText = 'Score: ' + score;
            i = 1;
            a = 12;
            b = 14;
         } else {
            fail += 1;
            f.innerText = 'Failed Attemps: ' + fail;
            setTimeout(() => {
               document.getElementById('c22').style.visibility = 'hidden';
               m.style.visibility = 'hidden';
               i = 1;
            }, 2000);
         }
      }
   },
   false,
);
