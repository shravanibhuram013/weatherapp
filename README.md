# Weather App

## What the app is

* A simple weather website.
* You type a city name and see the current weather for that city.

## How it works

* Type a city name in the search box.
* Click **Search** (or press **Enter**).
* The page shows the weather details:
  * city and country
  * local time in that city
  * a small weather picture
  * the temperature in Celsius
  * a short description, like "Sunny"
  * the "feels like" temperature in Celsius
  * humidity
  * wind speed and wind direction
* If the weather description mentions rain, the page background turns dark green.

## Where the weather comes from

* All the weather data comes from [weatherapi.com](https://www.weatherapi.com).
* The page asks a small function on the server, and that function asks weatherapi.com. This keeps the secret key hidden.

## Where it is hosted

* The site is hosted on [Vercel](https://vercel.com).
* weatherapi.com needs a secret key (like a password). The key is stored on Vercel as an environment variable called `WEATHER_API_KEY`. (An environment variable is a private setting stored outside the code.)
* The key is never written in any file in this project.

## What happens when something goes wrong

* If the city is empty or can't be found, the page shows:
  * "We couldn't find that city. Please check the spelling and try again."
* If the weather service can't be reached or something else goes wrong, the page shows:
  * "The weather service is unavailable right now. Please try again later."

## Live link

[add live link here]

## Credits

* Weather data from [weatherapi.com](https://www.weatherapi.com).
