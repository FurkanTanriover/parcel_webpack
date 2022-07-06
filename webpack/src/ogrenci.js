import axios from "axios";

export default class Ogrenci {
  constructor(ad) {
    this.ad = ad;
  }

  adiniSoyle() {
    console.log(`adım: ${this.ad}`);
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response=>{
        console.log(response.data);
    })

  }
}
