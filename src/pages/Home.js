import React, { useState } from 'react'
import '../css/btn.css'
import '../css/icon.css'
import '../css/iconHeart.css'
import '../css/notificacao.css'
import '../css/novoTweet.css'
import '../css/reset.css'
import { Cabecalho, NavMenu, Dashboard, Widget, TrendsArea, Tweet } from '../components'

export function Home() {
    const [ textoTweet, setTextoTweet ] = useState("")
    const [ arrayTweets, setArrayTweets ] = useState([])
    
    function onTextArea(evento){
        const $textArea = evento.target
        setTextoTweet($textArea.value)
    }

    function onFormSubmit(evento) {
        evento.preventDefault()
        setArrayTweets([textoTweet, ...arrayTweets])
    }

    /* function onTweetTransition(){
        setArrayTweets([textoTweet, ...arrayTweets])
    } */

    const isInvalid = (textoTweet.length > 140)
    const classStatusCount = "novoTweet__status " + (isInvalid ? "novoTweet__status--invalido" : "")
    const classStatusEditor = "novoTweet__editor " + (isInvalid ? "novoTweet__editor--invalido" : "")
    
    return (
        <React.Fragment>
            <Cabecalho>
                <NavMenu usuario="@marden" />
            </Cabecalho>
            <div className="container">
                <Dashboard>
                    <Widget>
                        <form className="novoTweet" onSubmit={ onFormSubmit }>
                            <div className="novoTweet__editorArea"> 
                                <span className={ classStatusCount }>{ textoTweet.length }/140</span>
                                <textarea className={ classStatusEditor} placeholder="O que está acontecendo?" onChange={ onTextArea }></textarea>
                            </div>
                            <button disabled={ isInvalid } type="submit" className="novoTweet__envia">Tweetar</button>
                        </form>
                    </Widget>
                    <Widget>
                        <TrendsArea />
                    </Widget>
                </Dashboard>
                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">
                            { 
                                arrayTweets.map(conteudo => (
                                    <Tweet likesCount={ Math.floor(Math.random() * 10) }>{ conteudo }</Tweet>
                                ))
                            }
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </React.Fragment>
    )
}