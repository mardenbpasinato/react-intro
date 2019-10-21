export function TweetCabecalho() {
    return (
        React.createElement('div', { className: 'tweet__cabecalho' }, 
            [
                React.createElement('img', { className: 'tweet__fotoUsuario', src: 'https://placehold.it/50x50', alt: ''}),
                React.createElement('span', { className: 'tweet__nomeUsuario' }, 'Fulano de Tal'),
                React.createElement('a', { href: '/' }, 
                    React.createElement('span', { className: 'tweet__userName'}, '@usuario')    
                )
            ]
        )
    )

}