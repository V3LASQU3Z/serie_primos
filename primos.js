let n = parseFloat(prompt("introducir los n números para la serie de primos: "));
c = 1
p = 2
d = 2
document.write("<h2>Se muestra los " + n + " primeros números de la secuencia:</h2>")
while (c <= n) {
    if (p % d == 0) {
        if (p == d) {
            document.write(p + " , ")
            c = c + 1
        }
        d = 2
        p = p + 1
    } else {
        d = d + 1
    }
}