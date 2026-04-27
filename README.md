# Exercícios de Manipulação de Strings e Lógica em JavaScript

Este repositório reúne uma série de exercícios práticos desenvolvidos para o estudo e fixação de métodos nativos do JavaScript (ES6+). Os exemplos abrangem desde manipulações básicas de strings até lógica de programação com funções e expressões regulares.

## Como Executar

O projeto foi estruturado para ser executado em ambiente de navegador através de um arquivo central `index.html`.

1.  Abra o arquivo `index.html`.
2.  Localize a tag `<script>` e altere o atributo `src` para o arquivo que deseja testar:
    ```html
    <script src="ex23.js"></script>
    ```
3.  Abra o arquivo `index.html` no seu navegador.
4.  Acesse o Console do Desenvolvedor (`F12` ou `Ctrl+Shift+I`) para visualizar os resultados.

---

## Descrição dos Exercícios

### Parte 1: Métodos de String e Manipulação Básica

| Arquivo | Descrição | Métodos Principais |
| :--- | :--- | :--- |
| `ex1.js` | Localiza o índice da primeira ocorrência de uma palavra. | `indexOf()` |
| `ex2.js` | Localiza a última posição de um caractere específico. | `lastIndexOf()` |
| `ex3.js` | Extrai um segmento de texto baseado em índices. | `substring()` |
| `ex4.js` | Extrai e substitui dinamicamente uma parte da string. | `replace()`, `substring()` |
| `ex5.js` | Converte uma string separada por vírgulas em um array formatado. | `split()`, `map()`, `trim()` |
| `ex6.js` | Verifica a existência de uma substring dentro de um texto. | `includes()` |
| `ex7.js` | Formata o texto para caixa alta (maiúsculas). | `toUpperCase()` |
| `ex8.js` | Formata o texto para caixa baixa (minúsculas). | `toLowerCase()` |
| `ex9.js` | Remove espaços em branco nas extremidades da string. | `trim()` |
| `ex10.js` | Realiza a união de duas ou mais strings. | `concat()` |
| `ex11.js` | Retorna o comprimento total (número de caracteres). | `length` |
| `ex12.js` | Cria cópias repetidas de uma mesma string. | `repeat()` |
| `ex13.js` | Obtém o caractere em uma posição específica. | `charAt()` |
| `ex14.js` | Valida se uma string inicia com um determinado prefixo. | `startsWith()` |
| `ex15.js` | Valida se uma string encerra com um determinado sufixo. | `endsWith()` |

### Parte 2: Lógica, Funções e Expressões Regulares

| Arquivo | Função / Objetivo | Conceitos Aplicados |
| :--- | :--- | :--- |
| `ex16.js` | Conta o número de palavras em uma frase. | `split(/\s+/)` |
| `ex17.js` | Transforma a primeira letra de cada palavra em maiúscula. | `map()`, `slice()` |
| `ex18.js` | Extrai dados (Nome, Idade, Cidade) usando Regex. | `match()` |
| `ex19.js` | Inverte a ordem das palavras em uma frase. | `reverse()`, `join()` |
| `ex20.js` | Identifica a palavra mais longa dentro de uma string. | `for...of`, Lógica de comparação |
| `ex21.js` | Substitui todas as vogais por um caractere especial. | `replace()` com Regex global |
| `ex22.js` | Isola o domínio de uma lista de endereços de e-mail. | `split('@')` |
| `ex23.js` | Mapeia a frequência de cada caractere no texto. | Objetos, Iteração |

---

## Tecnologias Utilizadas
* **JavaScript (ES6+)**
* **HTML5** (Interface de execução)

## Autor
* **Matheus Quirino**
