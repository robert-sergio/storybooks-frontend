# estorias-frontend-react
Frontend de aplicação de Estorias Online baseado em React - NextJS

## Tasks

* [x] Salvar textos escritos no localstorage
* [x] Apresentar esses textos na pagina de leitura
* [x] Tela de leitura
* [x] Editar Estorias
* [x] Excluir Estorias
* [ ] Nao permitir salvar Estorias sem nome e sem escritor
* [ ] Adicionar trechos de Estoria
* [ ] Adicionar links de imagens
* [ ] Download Estoria
* [ ] Adicionar comentarios aos trechos de leitura
* [ ] Adicionar opção de idioma de escrita [ PT EN ESP ]
* [ ] Logar com google
* [ ] Exportar Estoria para google drive
* [ ] Persistir estorias no backend

## Bloqueadas por conhecimento tecnico
* [ ] Traduzir para outro idioma
* [ ] Usar chatgpt ou outra coisa para traduzir para ingles
* [ ] Usar chatgpt para ver se texto é impróprio para crianças

## Documentacao

### JSON das Estorias

```javascript
    {
        id: 1,
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
            }
        ]
    }
```