# estorias-frontend-react
Frontend de aplicação de Estorias Online baseado em React - NextJS

## Tasks

* [x] Salvar textos escritos no localstorage
* [x] Apresentar esses textos na pagina de leitura
* [x] Tela de leitura
* [x] Editar Estorias
* [x] Excluir Estorias
* [z] Adicionar links de imagens
* [ ] Nao permitir salvar Estorias sem nome e sem escritor
* [ ] Adicionar trechos de Estoria
* [ ] Excluir trechos de Estoria
* [ ] Editar trechos de Estoria
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