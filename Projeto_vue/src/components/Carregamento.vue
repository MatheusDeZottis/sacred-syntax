<template>
  <div>
    <!-- Mostrar a animação de carregamento enquanto isLoading for true -->
    <div v-if="isLoading" class="loading-screen">
      <!-- Foto de carregamento -->
      <img src="@/assets/img/foto perfil_grade.jpeg" alt="Carregando..." class="loading-image" />
      
      <!-- Campo de carregamento com barra de progresso -->
      <div class="loading-box">
        <div class="loading-progress" :style="{ width: progress + '%' }"></div>
      </div>
      <p>{{ timeLeft }} segundos restantes...</p>
    </div>

    <!-- Conteúdo principal do site que ficará escondido durante o carregamento -->
    <div v-else>
      <!-- Aqui você coloca os componentes normais do site -->
      
      <!-- Outros componentes e conteúdo do seu site -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,  // Estado de carregamento ativo
      progress: 0,      // Progresso da barra de carregamento
      timeLeft: 10,     // Tempo restante em segundos
    };
  },
  mounted() {
    this.startLoading(); // Inicia o processo de carregamento ao montar o componente
  },
  methods: {
    startLoading() {
      const loadingInterval = setInterval(() => {
        if (this.progress >= 100) {
          this.isLoading = false;   // Desativa o carregamento quando o progresso atinge 100%
          clearInterval(loadingInterval); // Para o intervalo de carregamento
        } else {
          this.progress += 10;      // Aumenta o progresso em 10% a cada segundo
          this.timeLeft -= 1;       // Decrementa o tempo restante
        }
      }, 40); // Atualiza a cada 1 segundo
    }
  }
};
</script>

<style scoped>
/* Estilo da tela de carregamento completa */
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ocupa toda a altura da tela */
  background-color: #fff; /* Fundo branco durante o carregamento */
}

.loading-image {
  width: 150px; /* Tamanho da imagem de carregamento */
  margin-bottom: 20px;
}

/* Estilo do quadrado de carregamento */
.loading-box {
  width: 200px;
  height: 10px;
  border: 3px solid #3498db; /* Cor da borda */
  position: relative;
  background-color: #f3f3f3;
  overflow: hidden;
  margin-bottom: 20px;
}

/* Estilo da barra de progresso */
.loading-progress {
  background-color: #3498db; /* Cor da barra de progresso */
  height: 100%;
  width: 0%; /* Inicialmente, a barra tem largura 0 */
  transition: width 1s ease; /* Suaviza a transição de crescimento */
}

p {
  font-size: 20px;
  color: #333;
}
</style>
