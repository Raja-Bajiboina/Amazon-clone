
  let but = document.querySelector("#mg");
  but.addEventListener('click', function() {
    let search = document.querySelector(".search_input").value;
    if (search.trim() !== "") {
      let searchUrl = "https://www.amazon.com/s?k=" + encodeURIComponent(search);
      window.open(searchUrl, "_blank");
    } else {
      alert("Please enter a search term.");
    }
  });

