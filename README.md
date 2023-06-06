# < Pokédex >
<fig>
<img src="![genMenu](https://raw.githubusercontent.com/aferrande/pokedexJS/main/assets/images/genMenu.png)
" alt="Pokemon Generation Page">
<figcaption>Menu de escolha de gerações</figcaption>
</fig>

<fig>
<img src="![Pokedex](https://raw.githubusercontent.com/aferrande/pokedexJS/main/assets/images/pokedex.png)
" alt="Pokedex Page">
<figcaption>Pokédex renderizada</figcaption>
</fig>

<fig>
<img src="![Pokemon](https://raw.githubusercontent.com/aferrande/pokedexJS/main/assets/images/pokemon.png)
" alt="Pokemon Details Page">
<figcaption>Detalhes específicos do Pokémon selecionado</figcaption>
</fig>

## Inicialização
Para executar o projeto, utilize as ferramentas descritas na sessão *Ferramentas*.

## Ferramentas
* Visual Studio Code - IDE para desenvolvimento.
* Extensão Live Server no VSCode.

## Links importantes
* [Dribbble](https://dribbble.com/shots/6545819-Pokedex-App) - Usado como inspiração.
* [PokéAPI](https://pokeapi.co/) - API com todos os dados necessários pro projeto.

# < Pokédex >

## Introdução

Este projeto possui como objetivo principal o consumo de uma API com o uso async/await para a renderização de uma lista de Pokémons, e obtenção de suas informações específicas quando requisitado.  
Isso feito junto ao uso de "infinite scroll" para uma renderização dinâmica de acordo com a necessidade do usuário, atrelado a um "debounce" para que a API não seja consumida incessantemente ao scrollar a página. 

## Análise técnica

### Descrição do ambiente técnico

O projeto é composto por uma interface web com 3 telas. 

Tendo como funcionalidades: permitir ao usuário a seleção de uma geração inicial para a renderização da Pokédex; Renderização da Pokédex com a opção de escolha de um Pokémon a fim de se obter mais informações; E por último as informações mais detalhadas/específicas do Pokémon escolhido separadas em 3 abas.

As ferramentas utilizadas para o desenvolvimento incluem JavaScript que é uma linguagem de programação utilizada para o Front-end. Sass, um pré-processador CSS, e Bootstrap que é um kit de ferramentas que auxiliam na construção de projetos Front-end.
