type Weather = {
  sky: string;
  temperature: string;
  dust: string;
};

type WeatherBadge = {
  weather?: Weather;
  isRejected: boolean;
};

export type ContainerProps = {
  isLoading?: boolean;
};

export type { WeatherBadge };
