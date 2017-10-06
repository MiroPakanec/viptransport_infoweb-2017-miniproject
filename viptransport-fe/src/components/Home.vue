<template>
  <v-container fluid class="no-padding brown--text">
    <app-carousel></app-carousel>
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <h4 class="mb-4 mt-2">Kto je VIP Transport?</h4>
      </v-flex>
    </v-layout>
    <v-layout class="mb-4">
      <v-flex xs10 offset-xs1 md6 offset-md3 text-xs-center>
        <p>
          Spoločnosť VIP transport môžete využiť vždy, keď sa potrebujete prepraviť či už v rámci Slovenska alebo do zahraničia, ale taktiež na transfery na letiská (Žilina – letisko Viedeň, Žilina – letisko Praha,...). Vďaka tejto službe je zákazník odbremenený od starostí pri zanechaní auta na letisko, pri hľadaní alternatívneho odvozu, ale taktiež redukuje svoje náklady (napríklad na parkovanie).
        </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          Spoločnosť disponuje 5 a 8-miestymi vozidlami, takže dokáže ponúknuť najvyššie pohodlie aj v prípade prepravy väčšieho počtu osôb. Všetky autá sú v najlepšej výbave, preto poskytujú zákazníkovi maximálny komfort. Všetky autá sú neustále servisované, v dokonalom technickom stave.
        </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          Spoločnosť VIP transport s.r.o. má k dispozícií vozidlá značky Hyundai – i40 kombi, i40 sedan a H1. Všetky vozidlá majú dostatočne veľký batožinový priestor, aby sa dokázali naplniť všetky požiadavky klienta aj v prípade prepravy väčšieho množstva batožiny.
        </p>
        <v-divider class="cut mt-4 mb-4"></v-divider>
        <p>
          Profesionálni vodiči spoločnosti sa dokážu prispôsobiť všetkým požiadavkam klienta. Samozrejmosťou je dres code všetkých šoférov, ktorý tvoria čierne nohavice a košela, v prípade požiadavky majú oblečený oblek. Každý zo šoférov ovláda minimálne základy anglického jazyka slovom. Taktiež všetky náležitosti vodiča ako sú psychotesty resp. preukaz vodiča sú samozrejmosťou. </p>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
export default {

  computed: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
    images() {
      let images = [
        { id: '2', title: 'Sup', url: '../../static/main-carousel/2.jpg' },
        { id: '4', title: 'Sup', url: '../../static/main-carousel/4.jpg' },
        { id: '6', title: 'Sup', url: '../../static/main-carousel/6.jpg' },
        { id: '8', title: 'Sup', url: '../../static/main-carousel/8.jpg' },
        { id: '7', title: 'Sup', url: '../../static/main-carousel/7.jpg' },
        { id: '9', title: 'Sup', url: '../../static/main-carousel/9.jpg' },
      ];

      return images;
    },
    imagesMobile() {
      let images = [
        { id: '2', title: 'Sup', url: '../../static/main-carousel-mobile/1.jpg' },
        { id: '2', title: 'Sup', url: '../../static/main-carousel-mobile/2.jpg' },
        { id: '2', title: 'Sup', url: '../../static/main-carousel-mobile/3.jpg' },
        { id: '2', title: 'Sup', url: '../../static/main-carousel-mobile/4.jpg' },

      ];

      return images;
    },
  }
}
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
</style>
