import { TweetCabecalho } from '../TweetCabecalho/index.js.js'
import { TweetConteudo } from '../TweetConteudo/index.js.js'
import { TweetRodape } from '../TweetRodape/index.js.js'

export function Tweet(conteudo) {
    return (
        React.createElement('article', { className: 'tweet' }, 
            [
                TweetCabecalho(),
                TweetConteudo(conteudo),
                TweetRodape()
            ]
        )
    )
}