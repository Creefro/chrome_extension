async function fetchData() {
    const res=await fetch ("https://api.nasa.gov/planetary/apod?api_key=eBaoHSv4dhecQcdarX3wjmYGBjLbhMHp0Yp6kyrt");
    const record=await res.json();
    document.getElementById("date").innerHTML=record.date;
    document.getElementById("explanation").innerHTML=record.explanation;
    document.getElementById("title").innerHTML=record.title;
    
    

    document.getElementById("myButton").onclick = function () {
      window.open(record.hdurl, '_blank');

  }
}
fetchData();