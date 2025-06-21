// const { rest } = require('msw')
// console.log(rest)
// let users = [];

// export const handlers = [
//   rest.get('http://localhost:4000/users', (req, res, ctx) => {
//     return res(ctx.json(users));
//   }),
//   rest.post('http://localhost:4000/users', (req, res, ctx) => {
//     const { username, email, password, date, time } = req.body;
//     const newUser = { id: users.length + 1, username, email, password, date, time };
//     users.push(newUser);
//     return res(ctx.json(newUser));
//   }),
// ];


const { rest } = require('msw');

let users = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'password123',
    createdAt: '2025-01-10T09:30:00.000Z',
    addresses: [
      { name: 'B Chandra Sekhar', pincode: '500072', label: 'HOME', address: '796, Dharma Reddy colony Phase 1, KPHB, Kukatpally' },
      { name: 'Chandrasekhar', pincode: '500081', label: 'WORK', address: 'DIGIT IT - IT Design & Development, Arunodaya' },
    ],
  },
  // Add addresses to other users as needed
];

export const handlers = [
  rest.get('http://localhost:4000/users', (req, res, ctx) => {
    return res(ctx.json(users));
  }),
  rest.post('http://localhost:4000/users', (req, res, ctx) => {
    const { username, email, password, date, time, addresses = [] } = req.body;
    const newUser = { id: String(users.length + 1), username, email, password, date, time, addresses };
    users.push(newUser);
    return res(ctx.json(newUser));
  }),
];

// This code sets up a mock server using MSW (Mock Service Worker) to handle API requests for user registration and login.