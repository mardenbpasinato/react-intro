import React, { useState, useRef, Fragment } from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho.js'
import { Widget } from '../../components/Widget/Widget.js'
import * as LoginService from '../../model/services/LoginService.js'
import './loginPage.css'

export function LoginPage(props) {

    const [ isLoginValid, setIsLoginValid ] = useState(true)
    const [ errorMessage, setErrorMessage ] = useState("")
    const $inputLogin = useRef(null)
    const $inputPassword = useRef(null)

    function onFormSubmit(event) {
        event.preventDefault()
        const user = $inputLogin.current.value
        const password = $inputPassword.current.value

        const isLoginValid = (user.length !== 0 && password.length !== 0)
        setIsLoginValid(isLoginValid)

        if (isLoginValid) {
            LoginService.logar(user, password)
                .then(() => {
                    props.history.push("/")
                })
                .catch(err => {
                    setIsLoginValid(false)
                    setErrorMessage(err.message)
                })
        } else {
            setErrorMessage("Usuario ou senha inválidos")
        }
    }

    return (
        <Fragment>
            <Cabecalho />
            <div className="loginPage">
                <div className="container">
                    <Widget>
                        <h2 className="loginPage__title">Seja bem vindo!</h2>
                        <form className="loginPage__form" action="/" onSubmit={ onFormSubmit }>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="login">Login</label> 
                                <input ref={ $inputLogin } className="loginPage__input" type="text" id="login" name="login"/>
                            </div>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                <input ref={ $inputPassword } className="loginPage__input" type="password" id="senha" name="senha"/>
                            </div>
                            {
                                (!isLoginValid)
                                    ? 
                                        <div className="loginPage__errorBox">
                                            { errorMessage }
                                        </div>
                                    : ''
                            }
                            <div className="loginPage__inputWrap">
                                <button className="loginPage__btnLogin" type="submit">
                                    Logar
                                </button>
                            </div>
                        </form>
                    </Widget>
                </div>
            </div>
        </Fragment>
    )
}