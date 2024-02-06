const { createApp } = Vue;

createApp({
  data() {
    return {
      mail: "no mail",
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
          this.mail = response.data.response;
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
