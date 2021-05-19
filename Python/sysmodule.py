"""
lista = [1,2,3,4,5]
tupla = (1,2,3,4,5)
dic = {"uno":1, "dos":2, "tres":3}
dic["uno"]

x = [i for i in range(0,5)]

# CREATE TABLE "Estudiante" SETVALUES(Varchar(20) "Nombre ",Varchar(20)"Apellido", int "Edad");
# CREATE TABLE "MATERIA" SETVALUES(int "ID", int "NOMBRE");
# CREATE TABLE "CALIFICACIONES" SETVALUES(int "ID", int "Materia", int "IDEstudiante", int "Calificacion");
# SELECT "Apellido" FROM INNERJOIN("Estudiante","Calificaciones") IF "Calificacion" < 50;
"funcion recibe int devuelve fibonacci"
"""

def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

def arreglo(n):
    cont = 0
    arreglo=[]
    while True:
        if fibonacci(cont) > n:
            return arreglo
        else:
            arreglo.append(fibonacci(cont))
            cont+=1

max = int(input("Introduzca el valor maximo"))
print(arreglo(max))