import { cn } from "@/lib/utils";
import { Cloud, CloudRain, CloudSnow, Sun } from "lucide-react";

async function getCurrentWeather(town: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        town
      )}&appid=${process.env.OPEN_WEATHER_KEY}`,
      {
        cache: "reload",
      }
    );
    const data = await response.json();

    if (data.cod === 200) {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;

      return [temperature - 273, weatherDescription];
    } else {
      console.log(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function Weather() {
  const weather = await getCurrentWeather("Boston, US");

  if (!weather) return null;

  let icon;
  let colours;

  if (weather[1].includes("clouds")) {
    icon = <Cloud className="w-16 h-16" />;
    colours = "to-slate-600 from-slate-900";
  }

  if (weather[1].includes("sun")) {
    icon = <Sun className="w-16 h-16" />;
    colours = "to-orange-400 from-yellow-200";
  }

  if (weather[1].includes("rain")) {
    icon = <CloudRain className="w-16 h-16" />;
    colours = "to-blue-200 from-blue-500";
  }

  if (weather[1].includes("snow")) {
    icon = <CloudSnow className="w-16 h-16" />;
    colours = "to-white from-slate-200";
  }

  return (
    <div
      className={cn(
        "border bg-gradient-to-br rounded-3xl col-span-2 px-6 py-6 text-left flex justify-between md:col-span-1 relative text-white",
        colours
      )}
    >
      {icon}
      <p className="absolute right-6 bottom-6 font-bold text-lg">
        {Math.round(parseFloat(weather[0]))}°C
      </p>
    </div>
  );
}
