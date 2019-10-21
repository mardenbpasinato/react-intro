export function TweetConteudo(conteudo) {
    return (
        React.createElement('p', { className: 'tweet__conteudo'},
            React.createElement('span', {}, conteudo)
        )
    )
}