function fetchDataWithCallback(callback) {
  setTimeout(function() {
    let error = Math.random() < 0.5;
    try {
      if (error) {
        throw new Error("Fetch failed");
      }
      callback("Data fetched");
    } catch (err) {
      console.error("Error:", err.message);
    }
  }, 2000);
}

fetchDataWithCallback(function(result) {
  console.log(result);
});