const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/captions?part=snippet&order=date&q=reactjs");
xhr.setRequestHeader("X-RapidAPI-Key", "483408ea2bmsh90f4d463b4803f7p1e10c9jsn0bcedf3a1bed");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);