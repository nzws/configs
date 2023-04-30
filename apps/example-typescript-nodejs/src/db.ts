type User = { id: string; name: string };

// Imaginary database
const users: User[] = [];
export const db = {
  user: {
    findMany: () => Promise.resolve(users),
    findById: (id: string) =>
      Promise.resolve(users.find(user => user.id === id)),
    create: (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      return Promise.resolve(user);
    }
  }
};
