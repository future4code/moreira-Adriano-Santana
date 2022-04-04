## Exercício 1

## a)

- VARCHAR(255) > Varchar é igual a string e o (255) é o limitador de caracteres.
- PRIMARY KEY > Representa um ID único na tabela.
- FLOAT > Representa números não inteiros.
- DATE > Representa uma data (YYYY-MM-DD).
- NOT NULL > Não aceita valores nulos.

## b)

- SHOW DATABASES > apresenta uma tabela .
- SHOW TABLES > Mostra as tabelas que eu tenho.

## c)

- DESCRIBE ACTOR > Me traz todas as informações da tabela que estão os atores, contendo os tipos das informações, se é string, number, etc....

## Exercício 2

## a)

* INSERT INTO Actor (id, name, salary, birth_date, gender)
* VALUES(
  * "002", 
  * "Glória Pires",
  * 1200000,
  * "1963-08-23", 
  * "female"
)
## b)
Duplicidade para a chave primaria.
a PRIMARY KEY tem que ser unica.
### c)
Código do erro: 1136. Quantidade de colunas não corresponde à quantidade da linha 1.
 Depois do INSER INTO Actor faltou os valores de data de nascimento e gênero. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
  ### d)
Código do erro: 1364. O campo nome não tem um valor.
Faltou o campo do nome que é NOT NULL.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
### Exercício 3.

#### a)
SELECT * FROM Actor
WHERE gender = "female";
#### b)
SELECT salary FROM Actor
WHERE name = "Tony Ramos";

#### c)
O resultado veio  NULL pois não tem atores ou atrizes sem gênero, e na criação foi colocado o valor gênero como NOT NULL.

#### d)
SELECT id, name, salary FROM Actor
WHERE salary <= 500000;
### Exercício 4.

#### a)
A query mostra (SELECT) da tabela Actor (FROM Actor) onde tem nome que começa com A ou com J (WHERE (name LIKE "A%" OR name LIKE "J%")) e que tenha o salário
maior que 300 000 (AND salary > 300000).

#### b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

## Exercício 5
#### a)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL, 
	synopsis TEXT NOT NULL, 
	release_date DATE NOT NULL,
	rating INT NOT NULL