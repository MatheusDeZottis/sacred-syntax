# Operadores logicos 
# and (e) or (ou) not (não)
# and todas as condições precisam ser verdadeiras
# Se qualquer valor for considerado falso , a expresão
# inteira será avaliada naquele valor são considerados falsy (que você ja viu)

# 0 0.0 '' False 
# também existe o tipo none que é usado para representar um não valor 

entrada = input(" [e]ntrar  [s]sair ")
senha_digitada = input("senha: ")

senha_permitida = "123456"


if entrada == "e" and senha_digitada == senha_permitida:
    print("entrou no sistema")

else:
    print("saiu do sistema")
    

