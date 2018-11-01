<template>
  <v-container class="faq">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">FAQ</h1>
      </v-card-title>
      <v-card-text>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item, index) in items" :key="index">
            <div slot="header" class="header">{{item.question}}</div>
            <v-card>
              <v-card-text>
                <p>
                  {{item.answer}}
                </p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { faq } from '@/assets/faq.json'

export default {
  name: 'Faq',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.items = faq
  }
}
</script>

<style  scoped>
.faq {
  margin-top: 32px;
}
p {
  text-align: justify;
}
.header {
  color: #356859
;
}
</style>
