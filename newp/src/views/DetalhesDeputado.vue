<template>
  <div>
    <h2>Detalhes do Deputado</h2>
    <div v-if="deputado">
      <img :src="deputado.urlFoto" alt="Foto do Deputado" style="width: 200px;">
      <p>Nome: {{ deputado.nome }}</p>
      <p>Estado: {{ deputado.siglaUf }}</p>
      <div v-if="deputado.redesSociais.length">
        <p>Redes Sociais:</p>
        <ul>
          <li v-for="redeSocial in deputado.redesSociais" :key="redeSocial.url">
            <a :href="redeSocial.url" target="_blank">{{ redeSocial.nome }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DetalhesDeputado',
  data() {
    return {
      deputado: null
    }
  },
  created() {
    this.buscarDetalhesDeputado();
  },
  methods: {
    async buscarDetalhesDeputado() {
      try {
        const response = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${this.$route.params.id}`);
        this.deputado = response.data.dados;
      } catch (error) {
        console.error('Erro ao buscar detalhes do deputado:', error);
      }
    }
  }
}
</script>