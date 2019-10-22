import React from 'react'
import { Tweet } from '../components/Tweet/index'
import '../css/reset.css'
import '../css/container.css'
import '../css/btn.css'
import '../css/icon.css'
import '../css/iconHeart.css'
import '../css/notificacao.css'
import '../css/cabecalho.css'
import '../css/navMenu.css'
import '../css/dashboard.css'
import '../css/widget.css'
import '../css/novoTweet.css'
import '../css/trendsArea.css'

const listOfTweets = [
    "First tweet",
    "Second tweet",
    "Third tweet"
]

export function Home() {
    return (
        <div>
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="/">Twitelum</a>
                    </h1>
                    <nav className="navMenu">
                        <ul className="navMenu__lista">
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/">
                                    Bem vindo(a): <br />
                                    <strong> @artdiniz</strong>
                                </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/">
                                    Página Inicial
                                </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/hashtags">
                                    Hashtags
                                </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="/logout">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
        <div className="container">
            <div className="dashboard">
                <div className="widget">
                    <form className="novoTweet">
                        <div className="novoTweet__editorArea">
                            <span className="novoTweet__status">0/140</span>
                            <textarea className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button type="submit" className="novoTweet__envia">Tweetar</button>
                    </form>
                </div>
                <div className="widget">
                    <div className="trendsArea">
                        <h2 className="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                        <ol className="trendsArea__lista">
                            <li><a href="/">#bagulhos</a></li>
                            <li><a href="/">#bagulheiros</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="dashboard dashboard__centro">
                <div className="widget">
                    <div className="tweetsArea">
                        { 
                            listOfTweets.map(conteudo => (
                                <Tweet likesCount={ Math.floor(Math.random() * 10) }> 
                                    { conteudo } 
                                </Tweet>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}