import {useState} from 'react'
import Authentication from "./Authentication"
import Modal from "./Modal"

export default function Layout(props) {
    const {children} = props
    
    const [showModal, setShowModal] = useState(false)

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button onClick={() => {
                setShowModal(true)
            }}>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://github.com/divenire05">divenire05</a> <br /> using the <a target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a> design library.<br/>Check out the project on <a href="https://github.com/divenire05/caffiend" target="_blank">GitHub</a>!</p>
        </footer>
    )

    return (
        <>
            {showModal && (<Modal handleCloseModal={() => setShowModal(false)}>
                <Authentication handleCloseModal={() => setShowModal(false)}/>
            </Modal>)}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}