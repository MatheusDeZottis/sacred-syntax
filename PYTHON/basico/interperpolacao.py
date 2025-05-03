"""

interperpolação básica de strigs
s - string
d e i - int
f- float
x e X - Hexadecimal (ABCDEF0123456789)
"""

nome = "matheus"
preco = 1000.95897643
variavel = ' %s, o preço total foi r$%f ' % (nome, preco)
print(variavel)
print(' o hexadecimal de %d é %08x ' % (15, 15 ))