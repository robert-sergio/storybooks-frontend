# storybooks-frontend
    My Personal Pet Project. :heart_eyes:
    As a personal project, I wont accept any Pull Request but I will be glad if you wish to collaborate by adding your Issues if you find something wrong.

    Frontend repository for a story writing and reading books website.
    This project was made using NextJS

    Check it out the Figma Prototype to See the future of this baby!:
    https://www.figma.com/proto/XrA5hDMr1W75lLGUW4GyQ9/Escritor-de-Est%C3%B3rias?type=design&node-id=3-3&t=8ZmQZuYxvlGzzg91-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A3

    Ps.: The figma is in Portuguese.

    This project won't be deployed untill being reasonably good. It may take some months to make it happen.

## Features and Objectives of this website

### Writing Books
    * Planned

    My objective is to make a writing interface that doesn't saves the book on the backend for default.
    All your stories will be saved on local storage, and you can then click a button to save on the cloud.
    Only making this action you will save your book on the backend.

    All the books on the cloud will be private and the user will choose when they want to turn the book public. The writer will also have the power to decide wich chapters will be public or private separately.

    I want to make each page of the book customizable. The writer will be able to chose a page with single text, or text and images, add musics to be played and add effects.

    Effects will be the most nice part of this project. The writer will be able to add effects like rain, sandstorm, snow, space trip, games and others.

    The writers will also be able to choose the art style of the project and search in the AI gallery for arts to compose their books. For example, one can choose Anime Style to the book and search for Anime like scenarios and characters in the gallery.

    * For the Future
    

### Reading Books
    My objective is to make a Read books interface that looks like a real book in the frontend.
    For the reading, all stories will be readed from the backend.

## All Tasks

* [x] Salvar textos escritos no localstorage
* [x] Apresentar esses textos na pagina de leitura
* [x] Tela de leitura
* [x] Editar Estorias
* [x] Excluir Estorias
* [x] Adicionar links de imagens
* [x] Opção de 1 imagem por tela
* [ ] Efeito troca de pagina
* [ ] Tela criação de Personagens
* [ ] Validar porque não está salvando os trechos
* [ ] Nao permitir salvar Estorias sem nome e sem escritor
* [ ] Salvar trechos ao clicar Salvar Estoria
* [x] Adicionar trechos de Estoria
* [ ] Excluir trechos de Estoria
* [ ] Editar trechos de Estoria
* [ ] Paginação nas paginas de pesquisa
* [ ] Adicionar Paginas do Livro
* [ ] Adicionar Efeitos por Pagina
* [ ] Adicionar campo de Capa do Livro
* [ ] Download Estoria
* [ ] Adicionar comentarios aos trechos de leitura
* [ ] Adicionar opção de idioma de escrita [ PT EN ESP ]
* [ ] Logar com google
* [ ] Exportar Estoria para google drive
* [ ] Persistir estorias no backend
* [ ] Trocar Quill por solução própria
* [ ] Modo de exibição igual a livro

## Bloqueadas por conhecimento tecnico
* [ ] Traduzir para outro idioma
* [ ] Usar chatgpt ou outra coisa para traduzir para ingles
* [ ] Usar chatgpt para ver se texto é impróprio para crianças

## Documentacao

### JSON das Estorias

```javascript
    {
        id: 1,
        escritor: 'fulano',
        titulo: 'estoria boa',
        urlCapa: '',
        sinopse: '',
        publicoAlvo: '',
        estoria:[
            {
                idTrecho:1,
                tipoTrecho:'Imagem',
                valor: '<img src=''></img>'
            },
            {
                idTrecho:2,
                tipoTrecho:'Texto',
                valor: '<p>AlgumTexto</p>'
            },
            {
                idTrecho:3,
                tipoTrecho:'Video',
                valor: '<iframe width="892" height="502" src="https://www.youtube.com/embed/51r5f5OdIY0?list=RDGMEM6CZm14o9sc-Q22TIneLI8g" title="Good Times" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            },
            {
                idTrecho:4,
                tipoTrecho:'Musica',
                valor: ''
            },
        ]
    }
```