maior_altura = float('-inf')
menor_altura = float('inf')
soma_altura_homens = 0
quantidade_mulheres = 0

for _ in range(5):
 altura = float(input("Digite a altura: "))
 genero = input("Digite o gênero (M ou F): ")
 media_altura_homens = soma_altura_homens / (15 - quantidade_mulheres)
 if altura > maior_altura:
    maior_altura = altura
 if altura < menor_altura:
    menor_altura = altura

 if genero == 'M':
    soma_altura_homens += altura
 elif genero == 'F':
    quantidade_mulheres+= 1
soma_altura_homens = soma_altura_homens + 1


print("Maior altura:", maior_altura)
print("Menor altura:", menor_altura)
print("Média da altura dos homens:", media_altura_homens)
print("Quantidade de mulheres:", quantidade_mulheres)