<template>
  <div>
    <h2>Lista de Deputados</h2>
    <ul>
      <li v-for="deputado in deputados" :key="deputado.id" @click="verDetalhes(deputado.id)">
        <img :src="deputado.urlFoto" alt="Foto do Deputado" style="width: 100px;">
        <p>{{ deputado.nome }} ({{ deputado.siglaPartido }})</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListaDeputados',
  data() {
    return {
      deputados: []
    }
  },
  created() {
    this.buscarDeputados();
  },
  methods: {
    async buscarDeputados() {
      try {
        const response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome');
        this.deputados = response.data.dados;
      } catch (error) {
        console.error('Erro ao buscar deputados:', error);
      }
    },
    verDetalhes(idDeputado) {
      this.$router.push({ name: 'DetalhesDeputado', params: { id: idDeputado } });
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
