<template>
  <v-container class="universal">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">FITTOC Universal</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <p>
          This where all the participants of FITTOC communities from different parts of the world are united to participate under one platform of participation using Bitcoin as a means of payment to each participant.
        </p>
        <p>
          Together We Shall Be Financially Free.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Logo from '@/components/common/Logo'
export default {
  name: 'Universal',
  components: {
    Logo
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style  scoped>
.universal {
  margin-top: 32px;
}
p {
  text-align: justify;
}
</style>
