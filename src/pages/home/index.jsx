import './home.css'
import whatsapp from '../../assets/whatsapp.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import logo from '../../assets/logo.png'

export default function Home() {
    return (
        <div className="background">

            <div className='container'>

                {/* INICIO DO TEXT-CONTENT */}
                <div className="text-content">

                    <div className="logo">
                        <img className='logo-img' src={logo} alt="" />
                    </div>

                    <div className="text">
                        <h1>Tecnologia com soluções para o agronegócio</h1>
                        <p>Facilitamos a adequação ás legislações <br /> referentes a rastreabilidade vegetal, garantindo a segurança dos alimentos</p>
                    </div>

                    <div className="icons">
                        <img className='facebook' src={facebook} alt="icone do facebook" />
                        <img className='instagram' src={instagram} alt="icone do instagram" />
                        <img className='whatsapp' src={whatsapp} alt="icone do whatsapp" />
                    </div>

                </div>
                {/* FINAL DO TEXT-CONTENT */}

                {/* INICIO DO LOGIN */}
                <div className="login">
                    
                    <h1>Acesse sua conta</h1>

                    <input className='company' type="text" placeholder='Empresa' />
                    <input className='user' type="text" placeholder='Usuario' />
                    <input placeholder='Senha' className='password' type="password" name="password-login" id="password-login" />

                    <a className='forgot-password' href="">Esqueceu sua senha?</a>

                    <button type="submit">Login</button>

                    <div className='no-record'>
                        <p>Não possui uma conta?</p>

                        <a className='new-access' href="">Solicitar acesso</a>
                    </div>
                    

                </div>
                {/* FINAL DO LOGIN */}

            </div>

            
        </div>
        
        
    )
}