<template>
  <v-container class="charity">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Charity</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <p>
          This is where the works of charity done by Guiders/Leaders and participants of FITTOC community will be recorded.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Logo from '@/components/common/Logo'
export default {
  name: 'Charity',
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
.charity {
  margin-top: 32px;
}
p {
  text-align: justify;
}
</style>
