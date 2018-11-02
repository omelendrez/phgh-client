<template>
  <v-container class="home">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Home</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <v-btn color="primary" @click="dialog=!dialog">How to start participating?</v-btn>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark color="primary">
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark flat @click.native="dialog = false">Close</v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-title primary-title class="headline green lighten-3">
              <h1 class="headline">HOW TO START PARTICIPATING?</h1>
              <Logo />
            </v-card-title>

            <v-card-text>
              <p>
                So, you have decided to participate in FITTOC. What to do? It’s very easy! Just follow the steps below. :smile_cat:
              </p>
              <p>
                1. Register at the website: You can register now by clicking here: <v-btn color="primary" @click="goSignup">Register</v-btn>
              </p>
              <p>
                2. Enter your Personal Office.
              </p>
              <p>
                3. Submit your account details to be verified before you can participate in the system. <span class="_red">NOTE</span>: If the account name is different from the corresponding account number you will not be verified. If the account name is JOHN JUDE JERIMIAH and you submit JOHN JUDE you will not be verified. The system is sophisticated with AI-Artificial Intelligence tools and manpower to do this. <span class="_red">NO MULTIPLE ACCOUNTS.</span>
              </p>
              <p>
                4. There will be three big buttons. “Provide help”, “Recommit help” and “Get help”.
              </p>
              <p>
                5. If you want to contribute money, click “Provide help” and specify the amount you want to put into the system. The minimum amount is 10,000 and the maximum is 500,000. <span class="_red">THE AMOUNT CAN CHANGE WITH DUE NOTIFICATION.</span>
              </p>
              <p>
                6. As soon as you ‘Provide Help’, you are required to make 5% percent payment using FITTOC E-PIN. Your up line or your referrer can assist you on the purchase of E-PIN. This <span class="_red">CONTROL PAYMENT</span> is to ensure all ‘Provide Help’ in the system are not fake. The remaining order will be dispatched when a fellow participant(s) need Help.
              </p>
              <p>
                7. You immediately get E-MONEYs in your Personal Office (E-MONEY is the internal currency of the system) However, as soon as you get E-MONEY you won’t be able to sell them until they are confirmed as you still haven’t transferred money but only created the request.
              </p>
              <p>
                8. Participants are invited to take part in offline activities. For example, to stick leaflets with the symbols of the Community, distribute flyers, arrange a home visit.
                There are no guarantees and promises (be sure to read the WARNING-RULE! <v-btn color="primary" @click="dialog2=!dialog2">Warning</v-btn>)
              </p>
              <p>
                9. Then you’ll get the order in your PO including all bank account details of the person you should transfer money to. The order also contains contact details of the person so you can get in touch with him or her to make sure that it’s a real person and participant as you if possible, you can reach the person’s up line or vice versa.
                In FITTOC, there is no central account where all participants’ money accumulates (and where it can be stolen). All transfers are carried out between the participants directly. It means that everything is quite clear and transparent. FITTOC plays the role of the operator that helps to establish the contact between the participants.
              </p>
              <p>
                10. Transfer money to the participant. He or she confirms the receipt and your E-MONEYs become “confirmed”. That’s it! Now you can sell them whenever you want after 10% of the expected Get Help amount has been recommitted and paid or if the 10% of the expected Get Help cannot be recommitted, the participant gets 10x the recommitted amount, that is, total amount or a part of it.
              </p>
              <p>
                11. If you want to sell your E-MONEYs click “Get help” and specify the amount.
                Other participant will receive the order and will send you the money (provide help). As you did earlier! Don’t forget to confirm the receipt of help as soon as the money is on your bank account (But no earlier! Be careful with frauds!). If you don’t do it the sender’s E-MONEYs won’t be confirmed.
              </p>
              <p>
                12. You can read the detailed rules of system on the page <v-btn color="primary" @click="dialog2=!dialog2">Warning</v-btn>
              </p>
              <p>
                <i>
                  <span class="_red">At the beginning we recommend contributing a small sum of money that is not critical for you and go through the process from the start to the end. From the registration to getting help. Therefore, everything will be clear and there won’t be any doubts.</span>
                </i>
              </p>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog2" width="80%">
      <Warning :activate="activate" />
    </v-dialog>

  </v-container>
</template>

<script>
import Logo from '@/components/common/Logo'
import Warning from '@/components/Warning'
export default {
  name: 'home',
  components: {
    Logo,
    Warning
  },
  data () {
    return {
      dialog: false,
      dialog2: false
    }
  },
  methods: {
    activate () {
      this.dialog2 = !this.dialog2
    },
    goSignup () {
      this.$router.push({ name: 'Signup' })
    }
  },
  created () {

  }
}
</script>

<style scoped>
.home {
  margin-top: 32px;
}
._red {
  color: red;
}
</style>
