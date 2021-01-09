const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

function log(objects: {
  name: string;
  age: number;
  coords: { lat: number; lng: number };
  setAge: (age: number) => void;
}): void {
  const { age, name }: { age: number; name: string } = profile;
  console.log(age, name);
}

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

log(profile);
