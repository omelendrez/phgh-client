<template>
  <v-container class="testimonials">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Testimonials</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <p>
          This is where testimonials and Letter Of Happiness from participants will be found.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Logo from '@/components/common/Logo'
export default {
  name: 'Testimonials',
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
.testimonials {
  margin-top: 32px;
}
p {
  text-align: justify;
}
</style>
