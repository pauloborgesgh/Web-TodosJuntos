
import  './home.css'



function HomeLogin(){
    return(
        <section className="boxLogin container">
        <div className="content">
      
      <form className="login" method="post" name="login">

        <h1><i ></i> Login</h1>

        <div className="padding">

          <label>
            <input type="text" className="campos" placeholder="E-mail" name="email"/>
          </label>

          <label>
            <input type="password" className="campos" placeholder="Password"  name="senha"/>
          </label>

          <input type="submit" className="btn fade_8S" name="login" value="Entrar"/>
          
        </div>

        <div className="linksForm">

          <a href="#" className="fade_4S" title="Resgatar Senha"><i className="icon icon-forward-1"></i> Resgatar Senha</a> 
          <a href="#" className="fade_4S" title="Cadastrar-se"><i className="icon icon-user-add"></i> Cadastro</a>

        </div>

      </form>

 </div>
 </section>
    )
}

export default HomeLogin