# reactProjeto1


Estrutura html do projeto

Body > Game > Header > GameOption



Component > Quadrado
            > 3 estados possiveis:
                1) em branco
                2) preenchido com X
                3) preenchido com bolinha

1 passo) Incluir os estados possiveis em um Array
com 9 posicoes (quantidade de quadrinhos)

Atribuindo valor aos estados:

0 = em branco
1 = bolinha
-1 = x

Recebendo click do usuario

Verificar se a posição clickada esta vazia antes de inserir X ou O


Verificar o campeão 
    --> função/react hook "useEffect" é usado quando se quer que se realize uma ação sem a necessidade de que o usuário interaja, é executada sempre que algum parametro escolhido for alterado

        useEffect(() => {}, [])
                    1o parametro 1 função
                    2o parametro 2 array


const verifyGame = () => {

    console.log("testeeee")

}


const [winner,setWinner] = useState(0)

 useEffect(() => {
        setCurrentPlayer(currentPlayer * -1)
        verifyGame()

    }, [gameState])



#### função "map"  map(value) => newValue
retorna um novo valor a partir 
de uma função especifica



##### biblioteca classnames
 --> ajuda a definir classes css de acordo com cenarios especificos...
 -dar um "highligh" no array que ganhou a partida



Como usar uma variavel dentro de um JSON?
--> colocar entre cochetes []
ex: 
<div
className={
        classNames(styes.gameOption, {
        [styles.winner]: isWinner
        })
    }
    onClick={onClick}
>