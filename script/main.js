const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
    };
  },
  mounted() {
    console.log("inizio");
    for (i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          // handle success
          console.log(response.data.response);
          this.mails.push(response.data.response);
          console.log(this.mails[i]);
        });
    }
    /*
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    */

    console.log("fine");
  },
}).mount("#app");
