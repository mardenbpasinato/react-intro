import { TweetCabecalho } from '../TweetCabecalho/index.js'
import { TweetConteudo } from '../TweetConteudo/index.js'
import { TweetRodape } from '../TweetRodape/index.js'

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