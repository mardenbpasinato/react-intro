import { Tweet } from '../js/components/Tweet/index.js'

const listOfTweets = [
    "First tweet",
    "second tweet",
    "Third tweet"
]

const $listOfTweets = listOfTweets.map(conteudo => Tweet(conteudo))

ReactDOM.render(
    $listOfTweets,
    document.querySelector('.tweetsArea')
)