<template>
  <v-container class="whats-fittoc">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">What is FITTOC?</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <p>
          FITTOC is not a bank, FITTOC does not collect your MONEY, FITTOC is not an online business, HYIP, investment or MLM program. FITTOC is a community where people help each other. FITTOC gives you a technical basic program, which helps millions of participants worldwide to find those who NEED help, and those who are ready to PROVIDE help for FREE. All transferred Local currency/Bitcoins to another participants are your help given by your own good will to another one, absolutely gratis. If you are completely confident and certain in your actions and make your mind to participate, we kindly ask you to study carefully all warnings and instructions first. In cases of any matter regarding the topic our online consultants are ready to help and answer all your questions.
        </p>
        <v-img :src='src' width="474px" class="hidden-sm-and-down">
        </v-img>
        <v-img :src='src' contain class="hidden-md-and-up">
        </v-img>
        <p>
          FITTOC is a community of people providing each other financial help on the principle of gratuitousness, reciprocity and benevolence. We use Local currency/Bitcoin in our transactions.
        </p>
        <p>
          In FITTOC you don’t have to make contracts or pledge your property. In FITTOC there are no lenders and no debtors. Everything is very simple: one participant asks for help — another one helps.
        </p>
        <p>
          The only thing that FITTOC demands from its participants is to be honest and kind to each other. You ask for financial help when you need it, you give financial help when you are able to do it.
        </p>
        <p>
          In their transactions FITTOC participants operate with Local currency/Bitcoins. It is the best possible way to organize smooth transfers between participants from different countries. FITTOC causes revolution in social relations between people. This combination of FITTOC and Local currency/Bitcoin ideas of fair and free financial system make it possible for us to establish significant changes in modern world of unjust financial system.
        </p>
        <strong>
          <p>
            VERY IMPORTANT!
            There is no central account, where all the money flows to (and where it can be easily stolen from :-)). All the money is distributed between the participants themselves! On a lot of thousands and millions of accounts. Participants transfer Local currency/Bitcoins directly to each other, without intermediaries! (What are they for? :-)) In fact, FITTOC only regulates the process and nothing more.
          </p>
          <p>
            I.e. the System completely belongs to people. Without fools! It is a real mutual aid fund, where ordinary people help each other.
          </p>
        </strong>
        <p>
          How does it work technically? You declare the willingness to give help (click in your Personal Office (hereinafter PO) "Provide Help"), after that your account will be credited with E-money (internal currency of the System). E-money's amount will start to grow from the moment of deposit and confirmation of 5% control payment. And the rate of growth is 1% daily for 30 days.
        </p>
        <p>
          In cases of any questions regarding the topic your up line or guider are ready to help and answer all your questions.
        </p>
        <p>
          <i>
            Please note that received money from FITTOC can’t be considered as a yield (we are the mutual aid fund), and nobody promises or guarantees to pay it! Read over the</i>
          <v-btn color="primary" @click="dialog=!dialog">Warning</v-btn>
        </p>
        <h2>REFERRAL BONUS</h2>
        <p>
          You get reward from deposits of the participant you invited. Inviting new members into the Community is your additional contribution to its development. But at the same time, understanding that FITTOC network can’t exist without development and participants’ encouragement in the form of referral bonuses motivate many people to take an active position.
        </p>
        <p>
          Direct referral bonus is 10%
        </p>
        <h2>GUIDERS/LEADERS BONUS</h2>
        <p>
          Guiders of FITTOC Community is a participant with at least 50 direct referrals and Guiders/Leaders can create their own structures and get a bonus from each donation of every participant in their structures. Thus a guider/leader can have his own leader whose rank is higher. Guiders/Leaders bonus depends on his level in the Community:
        </p>
        <p>
          Guider’s bonuses are credited in the same way as referral bonus and will be available to withdraw after confirmation of the help provided.
        </p>
        <ul>
          <li>
            Level1......10%
          </li>
          <li>
            Level2........2%
          </li>
          <li>
            Level3........1.5%
          </li>
          <li>
            Level4........0.5%
          </li>
          <li>
            Level5........0.5%
          </li>
          <li>
            ...
          </li>
          <li>
            ...
          </li>
          <li>
            . .............0.5%
          </li>
        </ul>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" width="80%">
      <Warning :activate="activate" />
    </v-dialog>
  </v-container>
</template>

<script>
import Logo from '@/components/common/Logo'
import Warning from '@/components/Warning'
import img01 from '@/assets/img01.png'
export default {
  name: 'WhatsFittoc',
  components: {
    Logo,
    Warning
  },
  data () {
    return {
      dialog: false,
      src: null
    }
  },
  methods: {
    activate () {
      this.dialog = !this.dialog
    }
  },
  created () {
    this.src = img01
  }
}
</script>

<style  scoped>
.whats-fittoc {
  margin-top: 32px;
}
p {
  text-align: justify;
}
</style>
