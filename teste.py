#QUESTÃO: DESENVOLVA UM PROGRAMA QUE SOLICITE A ALTURAE GENERO DE 15 PESSOAS E INFORME OS SEGUINTES DADOS:-MAIOR E MENOR ALTURA - MEDIA DA ALTURA DOS HOMENS - QUANT MULHERES.
#RESOLUÇÃO ABAIXO:


alturas=[]                           
soma_Altura_H=0
quant_mulheres=0
for _ in range(15):
    genero=input('Digite o gênero (M ou F): ').lower()
    altura=float(input('Digite sua altura: '))
    
    alturas.append(altura)
    if genero=='m':
        soma_Altura_H+=altura 
    elif genero == 'f':
        quant_mulheres+=1
maior_altura=max(alturas)
menor_altura=min(alturas)
media_altura_H=soma_Altura_H/(15-quant_mulheres)
print('Maior altura:' ,maior_altura)
print('Menor altura:' ,menor_altura)
print('Média altura dos homens:' ,media_altura_H)
print('Quant mulheres: ' ,quant_mulheres)
