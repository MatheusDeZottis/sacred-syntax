<template>
  <header>
    <div class="Header">
      <h1><img src="" alt=""></h1>
      <nav>
        
        <ul class="Navegação">
          <li><router-link to="/Home">Home</router-link></li>
          <li><router-link to="/about">Sobre</router-link></li>

          <li><a href="https://github.com/MatheusDeZottis" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/matheus-de-zottis-2108b82b5/edit/forms/skills/new/?profileFormEntryPoint=PROFILE_SECTION" target="_blank">Contato</a></li>

          
          <li><router-link to="/Certificados"><input type="button" value="Certificados"></router-link></li>
        </ul>
     
      </nav>
    </div>
  </header>
</template>


<style scoped>

@media (min-width: 724px) and (max-width: 1024px) {
  .Header {
    position: fixed;
    width: 100%;
    margin: 0%;
    height: 20%;
    background-color: #3dff00;
    border-radius: 3%;
    color: white;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .Header {
    position: fixed;
    width: 100%;    
    height: 17%;
    background-color:#3dff00 ;
    color: white;
    border-radius: 3%;
    margin: -9px;
    font-size: large;
    font-weight: bolder;

  }
}
@media (min-width: 480px) and (max-width: 724px) {
  .Header {
    position: absolute;
    width: 100%;
    height: 17%;
    background-color:#3dff00;
    color: white;
    border-radius: 3%;
   

  }
}
@media (min-width: 1024px){
  .Header {
    position: fixed;
    width: 101%;
    height: 10%;
    background-color: #3dff00;
    border-radius: 3%;
    color: white;
    margin: -8px;
    z-index: 1000;/*faz que o header fique por cima de outros elementos caso seja necessario */
    
  }
}

.Navegação {
  width: 74%;
  margin: -60px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;

}

.Navegação li {
  list-style-type: none;
  
}

li input[type="button"] {
  background: linear-gradient(45deg, #9daaf7, #e4dfa0);
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform-origin: center;
}

li input[type="button"]:hover {
  animation: pulse 1s infinite;
  transform: rotate(360deg);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 10px rgba(240, 101, 149, 0.7), 0 0 20px rgba(255, 107, 107, 0.7), 0 0 30px rgba(240, 101, 149, 0.7);
  }
  50% {
    box-shadow: 0 0 20px rgb(245, 8, 225), 0 0 30px rgba(240, 101, 149, 1), 0 0 40px rgb(238, 3, 3);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 26, 255, 0.7), 0 0 30px rgba(215, 253, 0, 0.7);
  }
}

a {
  text-decoration: none;
  font-size: large;
  font-weight: bolder;
}


</style>

<script setup></script>