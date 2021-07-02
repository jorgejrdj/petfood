import Logo from '../../assets/logo-white.png';
import Illustration from '../../assets/illustration.png';

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <div className="col-12" >
        <img src={Logo} />
      </div>
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box">
            <h2 className="text-center">Falta pouquíssimo para o seu pet ser feliz</h2>
            <br />
            <br />
            <input type="text" className="form-control form-control-bg mb-3"
              placeholder="Nome Completo" />
            <input type="text" className="form-control form-control-bg mb-3"
              placeholder="E-mail" />
            <input type="text" className="form-control form-control-bg mb-3"
              placeholder="CPF" />
            <input type="text" className="form-control form-control-bg mb-3"
              placeholder="Telefone" />
            <input type="date" className="form-control form-control-bg mb-3"
              placeholder="Data de nascimento" />


            <button className="btn btn-lg btn-block btn-secondary">
              Finalizar pedido
            </button>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Cadastro;