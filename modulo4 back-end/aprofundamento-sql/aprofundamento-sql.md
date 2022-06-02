### Exercício 1



ALTER TABLE Actor DROP COLUMN salary;
a)
####resposta: 
 O exemplo mostra o comando ALTER TABLE para adicionar e depois remover colunas básicas de tabelas.

b)
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
####resposta: 
O exemplo mostra como usar o comando ALTER TABLE para adicionar e depois mudar o gender para sex VARCHAR(6).

c)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
####resposta: 
O exemplo acima mostra como usar o comando ALTER TABLE para adicionar e depois mudar o gender para gender VARCHAR(255).

d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
____

### Exercício 2

a) 
```
UPDATE Actor SET name = "Moacyr Franco" , birth_date= "2014-08-02" WHERE id = "003";
```

b)
````
update Actor set name = "JULIANA PAES" where name = "Juliana Paes";
update Actor set name = "Juliana Paes" where name = "JULIANA PAES";
````


