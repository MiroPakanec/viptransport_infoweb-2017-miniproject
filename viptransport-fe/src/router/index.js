import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import PriceList from "@/components/PriceList";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WeddingTransfers from "@/components/WeddingTransfers";
import AirportTransfers from "@/components/AirportTransfers";
import PeopleTransports from "@/components/PeopleTransports";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/domov",
      name: "Home",
      component: Home
    },
    {
      path: "/domov",
      name: "Home",
      component: Home
    },
    {
      path: "/cennik",
      name: "Price list",
      component: PriceList
    },
    {
      path: "/galeria",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/kontakt",
      name: "Contact",
      component: Contact
    },
    {
      path: "/svadobna-preprava",
      name: "Wedding transfers",
      component: WeddingTransfers
    },
    {
      path: "/letiskove-transfery",
      name: "Airport transfers",
      component: AirportTransfers
    },
    {
      path: "/preprava-osob",
      name: "People transports",
      component: PeopleTransports
    },
    {
      path: "*",
      redirect: "/domov",
      name: "Home",
      component: Home
    }
  ],
  //mode: "history"
});
