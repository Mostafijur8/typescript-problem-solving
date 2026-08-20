type User = {
  name: string;
  age: number;
  city: string;
};

function formatUserProfile(user: User): string {
  return `${user.name} is ${user.age} years old and lives in ${user.city}`;
}

console.log(
  formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
  }),
);

// Expected output:
// "Fahim is 22 years old and lives in Dhaka."
