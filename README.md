# shredlove.com static site

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It also uses [Netlify CMS](https://www.netlifycms.org/) to provide the admin interface.

## Getting Started

Create a `.env` file with the following contents:

```
REST_CLIENT_URL=http://localhost:3030
NODE_CLIENT_URL=http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

- Content UI: [http://localhost:3000](http://localhost:3000)
- Admin UI: [http://localhost:3000/manager](http://localhost:3000/manager)

## TODO

- [ ] Handle photo uploads
- [ ] Handle photo displaying
- [ ] Mobile design
- [ ] Dark Mode