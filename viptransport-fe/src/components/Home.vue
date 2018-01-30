<template>
  <v-container fluid
               class="no-padding brown--text">
    <app-carousel></app-carousel>
    <!-- banner with random message
        <v-layout wrap row class="pt-4 pb-2 bg-darker">
          <v-flex>
            <p class="text-xs-center message">
              <v-icon class="brown--text">{{ message.icon }}</v-icon>
              {{ message.text }}
            </p>
          </v-flex>
      </v-layout>
    -->
    <v-divider></v-divider>
    <v-layout row
              class="mt-3 mb-2">
      <v-flex xs12
              text-xs-center>
        <h4 v-if="languageId == 1"
            class="mb-4 mt-2">Kto je VIP Transport?</h4>
        <h4 v-else
            class="mb-4 mt-2">Who is VIP Transport?</h4>

      </v-flex>
    </v-layout>
    <v-layout class="mb-4">
      <v-flex v-if="languageId == 1"
              xs10
              offset-xs1
              md6
              offset-md3
              text-xs-center>
        <p>
          Spoločnosť VIP transport môžete využiť vždy, keď sa potrebujete prepraviť či už v rámci Slovenska alebo do zahraničia, ale taktiež na transfery na letiská (Žilina – letisko Viedeň, Žilina – letisko Praha,...). Vďaka tejto službe je zákazník odbremenený od starostí pri zanechaní auta na letisku, pri hľadaní alternatívneho odvozu, ale taktiež redukuje svoje náklady (napríklad na parkovanie).
        </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          Spoločnosť disponuje 5 a 8-miestymi vozidlami, takže dokáže ponúknuť najvyššie pohodlie aj v prípade prepravy väčšieho počtu osôb. Všetky autá sú v najlepšej výbave, preto poskytujú zákazníkovi maximálny komfort. Všetky autá sú neustále servisované, v dokonalom technickom stave.
        </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          VIP transport s.r.o. má k dispozícií vozidlá značky Hyundai – i40 kombi, i40 sedan a H1. Všetky vozidlá majú dostatočne veľký batožinový priestor, aby sa dokázali naplniť všetky požiadavky klienta aj v prípade prepravy väčšieho množstva batožiny.
        </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          Profesionálni vodiči spoločnosti sa dokážu prispôsobiť všetkým požiadavkam klienta. Samozrejmosťou je dres code všetkých šoférov, ktorý tvoria čierne nohavice a košela, v prípade požiadavky majú oblečený oblek. Každý zo šoférov ovláda minimálne základy anglického jazyka slovom. Taktiež všetky náležitosti vodiča ako sú psychotesty resp. preukaz vodiča sú samozrejmosťou.
        </p>
      </v-flex>
      <v-flex v-else
              xs10
              offset-xs1
              md6
              offset-md3
              text-xs-center>
        <p>
          You can always use the services of VIP Transport when you need to travel either in Slovakia or abroad. We also offer transfers to airports (Žilina – Vienna Airport, Žilina – Prague Airport...). Our customers are free from worries concerning leaving their car at the airport, looking for alternative transfer as well as additional fees, thanks to our services. </p>

        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          We offer 5 and 8-seat vehicles to provide convenience even when transporting more people. All our cars offer the best equipment for the highest comfort. Also, we make sure that our cars are constantly serviced and kept in perfect technical condition. </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          VIP transport s.r.o. offers the following vehicles: Hyundai – i40 kombi, i40 sedan a H1. All vehicles have sufficient luggage space to meet all client requirements, even when carrying bigger amount of luggage. </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          Our professional drivers are trained to adapt to every requirement of our clients. Dress code, consisting of black trousers and a shirt is a must for every driver. A suit is also a possibility if required. Each of the chauffeurs knows the essentials of spoken English language. Furthermore, all driver's instructions, such as psycho-tests, the driver's license are a matter of course. </p>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      messages: [
        {
          id: 1,
          text: "Občerstvenie v podobe nealko nápoja alebo kávy.",
          icon: "local_cafe"
        },
        {
          id: 2,
          text: "U nás je možnosť platby kartou samozrejmosťou.",
          icon: "credit_card"
        },
        {
          id: 3,
          text:
            "V našich autách je vždy k dispozícii aktuálne vydanie dennej tlače.",
          icon: "subtitles"
        }
      ]
    };
  },
  computed: {
    message() {
      let randomId = Math.floor(Math.random() * this.messages.length) + 1;
      return this.messages.filter(function(message) {
        return message.id == randomId;
      })[0];
    },
    languageId: {
      get() {
        return this.$store.getters.selectedLanguageId;
      }
    }
  }
};
</script>


<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 15px;
}

hr.cut {
  width: 80%;
  margin-left: 10%;
}

.message {
  font-size: 3vh;
}
</style>
