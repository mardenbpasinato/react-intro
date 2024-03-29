import React from 'react'
import './dashboard.css'

function Dashboard(props) {
    return (
        <div className={ (!props.posicao) ? `dashboard` : `dashboard__${props.posicao}` }>
            {props.children}
        </div>
    )
}

export { Dashboard }