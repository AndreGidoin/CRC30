import Vue from "vue";
import Router from "vue-router";
import crc30Dapp from "./components/crc30-dapp";
import Artists from "./views/Artists";
import About from "./views/About";
import Blockchain from "./views/Blockchain";
import Contact from "./views/Contact";
import Submit from "./views/Submit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "crc30-dapp",
      component: crc30Dapp,
      title: "Adopt The Rights Of A Child"
    },
    {
      path: '/Artisttt',
      name: 'Artists',
      component: Artists,
      title: "Adopt The Rights Of A Child - Artists"
    },
    {
      path: '/HowItWorks',
      name: 'How It Works',
      component: About,
      title: "Adopt The Rights Of A Child - About"
    },
    {
      path: '/Blockchain',
      name: 'Why Blockchain?',
      component: Blockchain,
      title: "Adopt The Rights Of A Child - Why Blockchain?"
    },
    {
      path: '/GetInTouch',
      name: 'Get In Touch',
      component: Contact,
      title: "Adopt The Rights Of A Child - Get In Touch"
    },
    {
      path: '/Submit',
      name: 'Submit artwork',
      component: Submit,
      title: "Adopt The Rights Of A Child - Submit Artwork"
    }
  ]
});
