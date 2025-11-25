const people = [ { name: "Niveda", 
address: { 
  city: "Hyderabad", 
  street: { 
    name: "Sagar", number: 123 
    } 
  } 
}, 
{ name: "Neelu", 
address: { 
  city: "Chennai", 
  street: { 
    name: "Adiyar", number: 456 
    } 
  } 
} ];
const formatPeople = (people) =>
  people.map(({ name, address: { city, street: { name: streetName } } }) =>
    `${name} lives in ${city} on ${streetName}`
  );
  console.log(formatPeople(people));
