import logo from '../assets/img/vecteezy_fc-barcelone-logo-symbol-black-and-white-design-spain_10994341.jpg'

export const Logo = ({text}) => {
    return(
        <div className='auth-form-logo-container'>
            <img src={logo} alt="Escudo Kinal" width={'500px'}/>
            <span>{text}</span>
        </div>
    )
}