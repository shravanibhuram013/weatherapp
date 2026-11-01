const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const message = document.getElementById("message");
const result = document.getElementById("result");

const UNAVAILABLE = "The weather service is unavailable right now. Please try again later.";

function showMessage(text) {
  result.hidden = true;
  document.body.classList.remove("rain");
  message.textContent = text;
}

function showWeather(data) {
  message.textContent = "";
  document.getElementById("place").textContent = data.city + ", " + data.country;
  document.getElementById("time").textContent = "Local time: " + data.localTime;
  document.getElementById("temp").textContent = data.temperatureC + "°C";
  document.getElementById("desc").textContent = data.description;
  document.getElementById("feels").textContent = data.feelsLikeC + "°C";
  document.getElementById("humidity").textContent = data.humidity + "%";
  document.getElementById("wind").textContent = data.windKph + " km/h " + data.windDirection;

  const icon = document.getElementById("icon");
  icon.src = data.icon.startsWith("//") ? "https:" + data.icon : data.icon;
  icon.alt = data.description;

  const isRainy = /rain|drizzle|shower/i.test(data.description);
  document.body.classList.toggle("rain", isRainy);
  result.hidden = false;
}

async function search() {
  const city = input.value.trim();
  try {
    const response = await fetch("/api/weather?city=" + encodeURIComponent(city));
    const data = await response.json();
    if (data.error) {
      showMessage(data.error);
    } else {
      showWeather(data);
    }
  } catch (error) {
    showMessage(UNAVAILABLE);
  }
}

button.addEventListener("click", search);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search();
  }
});
