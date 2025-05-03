<!-- <template>
  <main>
    <div>

      <div>
        <main>
          <form action="form" class="Formulario">
            <H1>Formulário De Casdrasto</H1>

            <label for="Name">Nome Completo</label>
            <input type="text" name="Name" id="Nome" placeholder="Nome completo">

            <label for="email">Seu E-mail</label>
            <input type="email" name="Email" id="" placeholder="Digite seu E-mail">


            <label for="fone">Telefone para Contato</label>
            <input type="number" name="telefone" id="tel" placeholder="Digite seu telefone">

            <label for="cpf">Idade</label>
            <input type="number" name="idade" id="idade" placeholder="Sua idade">

            <label for="date">Data de nascimento</label>
            <input type="date" name="data nascimento" id="Nascimento" placeholder="Digite sua data de nascimento">

            <label for="sexo">Selecione seu sexo:</label>
            <select id="sexo" v-model="sexoSelecionado">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="naoDizer">Prefiro não dizer</option>
              <option value="personalizar">Personalizar</option>
            </select>

            <div v-if="sexoSelecionado === 'personalizar'">
              <label for="personalizado">Personalize seu sexo:</label>
              <input type="text" id="personalizado" v-model="sexoPersonalizado" placeholder="Digite aqui">
            </div>



            <label for="password">Digite sua senha</label>
            <input type="password" name="Senha" id="" placeholder="Digite sua senha">
            <label for="Confirm your password">Confirme sua senha</label>
            <input type="password" name="Senha" id="senha" placeholder="Confirme sua senha">


            <input id="Cadrastor" type="submit" value="Cadrastar">


          </form>

        </main>
      </div>



    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  main {
    display: flex;
    place-items: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    
   

  }
}



#Cadrastor {
  background-color: #007BFF;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  width: 107%;
  border-radius: 8px;
  margin: 10px 2px 10px 2px;
  padding: 1%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

}



.Formulario {
  display: block;
  max-width: 330px;
  padding: 30px;
  border: 30px solid #9dff6100;
  border-radius: 30px;
  background-color: rgb(176,224,230);
  color: #000000;
  margin-block: auto;
  text-align: left;
  margin-top: 70px;
  

}


h1:hover {
  color: rgb(50,205,50);
}



h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #007BFF;
  font-size: larger;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}




label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:hover {
  color: #000000;
  background-color: #edf092;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #233bf6;
}
</style>

<script>

export default {
  data() {
    return {
      sexoSelecionado: '', // Valor selecionado no select
      sexoPersonalizado: '' // Valor inserido no campo personalizado
    };
  },
  methods: {
    enviarFormulario() {
      if (this.sexoSelecionado === 'personalizar') {
        alert(`Você personalizou: ${this.sexoPersonalizado}`);
      } else {
        alert(`Você selecionou: ${this.sexoSelecionado}`);
      }
    }
  }
};


</script> -->