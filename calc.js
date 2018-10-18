/**
 * Вычисляет выражение выражния вида: a+b, a-b, a*b, a**b, a/b.
 * 
 * @param {string} expr - выражение.
 */
function calculate (expr) {
    let result = expr.match( /^[+-]?\d+\.?\d*[+\-\/\*]\*?\d+\.?\d*$/);
    let res = 'undefined';
    if (result != null) {
        let divideElems = expr.split('/');
        if(divideElems.length == 2) {
            if (divideElems[1] == 0){
                res = 'division by zero';
                return res;
            }
        }
        res = eval(expr);
    }
    return res;
}

export {calculate};