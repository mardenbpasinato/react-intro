import { Tweet } from './components/Tweet/index.js.js'

const listOfTweets = [
    "First tweet",
    "second tweet",
    "Third tweet"
]

const $listOfTweets = listOfTweets.map(conteudo => <Tweet />)

ReactDOM.render(
    $listOfTweets,
    document.querySelector('.tweetsArea')
)