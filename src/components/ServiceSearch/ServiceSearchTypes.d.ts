type IServiceSearchFormData = {
  locations: {
    departure: string;
    destination: string;
  };
  dates: {
    departure: string;
    arrival: string;
  };
  guests: {
    adults: number;
    childs: { age: number }[];
    rooms: number;
  };
};
