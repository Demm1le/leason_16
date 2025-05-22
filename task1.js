# 2.1 Программа с приветствием
print "Привет, мир!"

# 2.2 Большая буква A символами
print "   A   "
print "  A A  "
print " A   A "
print " AAAAA "
print " A   A "

# 2.3 B-I-N-G-O через переменные
let b = "B"
let i = "I"
let n = "N"
let g = "G"
let o = "O"
print b
print i
print n
print g
print o

# 2.4 Макет банковской карты
let name = "IVAN IVANOV"
let card = "1234 5678 9876 5432"
let exp = "12/28"
let cvv = "123"
print "--------------------------"
print "| BANK NAME             |"
print "|                      |"
print "|  " + card + "  |"
print "|                      |"
print "|  " + name + "     |"
print "|  EXP: " + exp + "   CVV: " + cvv + "  |"
print "--------------------------"

# 2.5 Таблица умножения (1 столбик)
let i = 1
while i <= 10
    print i * 1
    let i = i + 1
end