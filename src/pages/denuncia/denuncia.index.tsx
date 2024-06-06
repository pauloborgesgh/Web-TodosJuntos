
import  './denuncia.css'

function Denuncia(){

    return(
        <div>
        <form className="form" action="e" method="post">
      
        <div className="input-box">
            <label>Nome completo</label>
            <input type="text" name="nome" placeholder="Digite seu nome"  />
        </div>
        
        <div className="column">
        
            <div className="input-box">
              <label>E-mail</label>
              <input type="email" name="email" placeholder="Digite seu e-mail" />
            </div>
        
            <div className="input-box">
              <label>Telefone</label>
              <input type="text" name="telefone" placeholder="Digite seu telefone" />
            </div>
        
        </div>
        
        <div className="gender-box">
        
          <label>Sexo</label>
          
          <div className="gender-option">
            
              <div className="gender">
              
                  <input type="radio" name="sexo" value="Masculino" id="check-male"/>
                  <label >Masculino</label>
            
              </div>
            
              <div className="gender">
              
                 <input type="radio" name="sexo" value="Feminino" id="check-female"/>
                 <label >Feminino</label>
              
              </div>
  
          </div>
  
        </div>
        
          <div className="input-box">
          
              <label>Quero aprender a fazer ?</label>                        
              <div className="column">
              
                  <div className="select-box">
                  
                      <select name="aprender">
                        
                          <option value="" selected>Selecione</option>
                          <option value="Formulários">Formulários</option>
                          <option value="Menus">Menus</option>
                          <option value="Rodapé">Rodapé</option>
                          <option value="Botão">Botão</option>
                          <option value="Galeria de Fotos">Galeria de Fotos</option>
                      
                      </select>
                  
                  </div>
              
              
              </div>
        
          </div>
          
          <label className="naoexibir">
              <span>Não preencher:</span>
              <input type="text" name="url" value=""/>
          </label> 
  
          <div className="input-box">
  
              <textarea name="mensagem" required></textarea>
          
          </div>
        
        <button>Enviar Dados</button>
    
      </form>
  
  </div>


    )
}

export default Denuncia