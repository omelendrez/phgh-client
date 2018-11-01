<template>
  <v-card>
    <v-card-title class="headline green lighten-3" primary-title>WARNING!</v-card-title>
    <v-card-text>
      <p>
        There are no guarantees and promises! Neither explicit nor implicit.
        There are neither investments nor business! Participants help each other, sending each other money directly and without intermediaries. That’s all! There's nothing more.
        There are no securities transactions, no relationship with the professional participants of the securities market; you do not acquire any securities. (Do you need them? :-))
      </p>
      <p></p>
      <h2>RULES!!!</h2>
      <p>
        (A) participant with a running ‘Provide Help’-PH cannot ‘Get Help-GH until all ‘Provide Help’-PH is confirmed.</p>
      <p>
        (B) A participant is allowed to ‘Get Help’-GH after the payment and confirmation of 10% recommitment of the expected ‘Get Help’-GH amount. However, if a participant cannot recommit the 10% of the expected ‘Get Help’-GH amount, the participant is allowed to ‘Get Help’ of 10x the recommitted amount. That is, if a participant is expected to ‘Get Help’-GH of 200k with a recommitment of 10% which is 20k but has only 10k to recommit the participant is allowed to ‘Get Help’-GH of 10x the recommitted amount which in this case is 100k. And the remaining e-money will be in his/her wallet that’s fairness :-))</p>
      <p>
        (C) A participant is allowed to ‘Get Help’-GH from BONUS WALLET after the payment and confirmation of 50% recommitment of the expected ‘Get Help’-GH amount from BONUS WALLET. However, if a participant cannot recommit the 50% of the expected ‘Get Help’-GH amount from BONUS WALLET, the participant is allowed to ‘Get Help’ of 2x the recommitted amount. That is, if a participant is expected to ‘Get Help’-GH of 200k from BONUS WALLET with a recommitment of 50% which is 100k but has only 10k to recommit the participant is allowed to ‘Get Help’-GH of 2x the recommitted amount which in this case is 20k. And the remaining e-money will be in his/her wallet that’s fairness :-))
      </p>
      <p>
        (D) No participant is allowed to ‘Provide Help’-PH of any amount less than the previous ‘Provide Help’-PH.
      </p>
      <p>
        (E) A participant has a countdown of four(4) days to ‘Provide Help’-PH back to the system immediately a ‘Letter Of Happiness’ is submitted after the last payment confirmation without which the participant is blocked. Can still be blocked after four(4) days without ’Letter Of happiness’. ☺)))
        <strong>
          In general! There are no rules. In principle! The only rules are standards to ensure sustainability! Even if you follow all of the instructions, you may still "lose" or “gain” or might not be paid. Without any reasons or explanations.
        </strong>
      </p>
      <p></p>
      <h2>RECOMMENDATION:</h2>
      <p>
        Again, you can lose all your money. Always remember about this and participate only with spare money. Or do not participate at all. :-))
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="activate">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'Warning',
  props: {
    activate: {
      type: Function
    }
  }
}
</script>
<style>
p {
  text-align: justify;
}
</style>

