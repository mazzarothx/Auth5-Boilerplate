### Initial Setup

`npx create-next-app@14.0.4 antonio-nextauth5-clone`
```
√ Would you like to use TypeScript? Yes
√ Would you like to use ESLint? Yes
√ Would you like to use Tailwind CSS? Yes
√ Would you like to use `src/` directory? No
√ Would you like to use App Router? (recommended) Yes
√ Would you like to customize the default import alias (@/\*)? No
```
`cd folder`

### Environment Setup

`npx shadcn-ui@latest init`
```
√ Which style would you like to use? » New York
√ Which color would you like to use as base color? » Slate
√ Would you like to use CSS variables for colors? ... yes
```

`npx shadcn-ui@latest add button`

### Routing 

...

### Home page

...

### Card Wrapper

```
npx shadcn-ui@latest add card
npm i react-icons@4.12.0
```

### Login Form

`npx shadcn-ui@latest add form input label`

### Register Form

...

### Database & Prisma Setup

NeonDB: https://neon.tech/ - login - create service

```
npm i -D prisma
npm i @prisma/client
npx prisma init
npx prisma generate
npx prisma db push
npx prisma studio
npm i @auth/prisma-adapter@1.0.12
```

.env
```
DATABASE_URL=
DIRECT_URL=
AUTH_SECRET="secret"
```

.package.json
```
"scripts": {
    "postinstall": "prisma generate"
  },
```

### Register Functionality

```
npm i bcrypt@5.1.1 bcryptjs@2.4.3
npm i -D @types/bcrypt@5.0.2 @types/bcryptjs@2.4.6
localhost - create an user
```

### Middleware

Update Guide (v5): https://authjs.dev/guides/upgrade-to-v5

```
npm i next-auth@beta
- check http://localhost:3000/api/auth/providers work
- login with user email & password
- signOut
- create new account called test - login
```

### Callbacks

```
npx prisma generate
npx prisma db push
```

### OAuth

```
Github: https://github.com/settings/applications/new - 
- name: "localhost" - url: "http://localhost:3000/" - authCallback: "http://localhost:3000/api/auth/callback/github"
- copy env to .env
.
Google: "https://console.cloud.google.com" - new project -
- project name: <app-name> - create - select project - search - "api - enabled api & services" 
- oauth consent screen tab - external - create
name:               <app-name>
email:              <email>
dev contact info:   <email>
- save and continue x3 - back to dashboard
- credentials tab - create credentials - "oauth client id" - 
app type:             web application
name:                 Web client 1
auth JS orginals:     http://localhost:3000
auth redirect URIs:   http://localhost:3000/api/auth/callback/google
Create
- copy env to .env
```

.env
```
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

### Resend

```
npx prisma migrate reset
npx prisma generate
npx prisma db push
npm i resend@2.1.0 uuid@9.0.1
npm i -D @types/uuid@9.0.7
.
resend.com: create account - login - add api key to .env
localhost: create user <real email> - validate confirm email, dont open
```

.env
```
RESEND_API_KEY=
```

### Email Verification

`npm i react-spinners@0.13.8`

```
localhost: validate confirm email - login
```

### Reset Password Token

```
npx prisma migrate reset
npx prisma generate
npx prisma db push
localhost: login - forgot password? - send reset email, dont open
```

### New Password Form 

...

### Two Factor

```
npx prisma migrate reset
npx prisma generate
npx prisma db push
localhost: create user <real email> - validate confirm email - login
studio: change User - isTwoFactorEnabled to "true"
localhost: login - validate twofactor email - confirm code - validate auth page
studio: change User - isTwoFactorEnabled to "false"
```

### User Button

```
npx shadcn-ui@latest add avatar dropdown-menu
localhost: login - settings /w avatar image - logout
```

### Client Server example

```
npx shadcn-ui@latest add badge
studio: change User - isTwoFactorEnabled to "true"
localhost: login - settings - server & client page
```

### Admin example

```
npx shadcn-ui@latest add sonner
studio: change User - role to "ADMIN"
localhost: login - settings - admin page
```

### Settings page

```
npx shadcn-ui@latest add select switch
studio: change User - role to "ADMIN"
localhost: login - settings - settings page
```

### Domain

```
npx shadcn-ui@latest add dialog
- github and google - create new apps with prod domain & update vercel env
- vercel - change NEXT_PUBLIC_APP_URL to prod domain
```

.env
```
NEXT_PUBLIC_APP_URL=
```

### Deployment


foreach
```
git add .
git commit -m "XX: message"
git push
validate deployment succeed
```

once
```
github.com/new - create repo
use second option - "push an existing repo"
.
vercel.com/new - import - deploy
settings - environment variables - add from .env
```