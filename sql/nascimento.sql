-- Mostre o nome de todas as pessoas que nasceram após 2000

SELECT data_nascimento
FROM pessoa
WHERE data_nascimento > '2000/01/01';