const youngHyun = {
    name: "youngHyun",
    age: 32,
    gender: "male",
};

const resolvers = {
    Query: {
        person: () => youngHyun,
    },
};

export default resolvers;
