class Aluno:
   def __init__(self, nome, nota):
       self.nome = nome
       self.nota = nota


   def aprovado(self):
       return self.nota >= 6




aluno = Aluno("janderson", 8.0)


print("nome:", aluno.nome)
print("nota:", aluno.nota)
print("aprovado:", aluno.aprovado())




