export default function pro() {
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Promise:First");
      resolve();
    }, 1000);
  })
    .then(function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log("Promise:Second");
          resolve();
        }, 2000);
      });
    })
    .then(function () {
      setTimeout(function () {
        console.log("Promise:Third");
      }, 3000);
    });
}
