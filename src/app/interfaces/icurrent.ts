export interface ICurrent {
   temp: {
      temp: number;
      feelslike: number;
      windSpeed: number;
      humidity: number;
   }
   description: {
      text: string;
      icon: string;
   }
}
