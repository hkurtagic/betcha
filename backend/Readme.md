### Prisma init:

npm install prisma --save-dev
npx prisma init --datasource-provider sqlite --output ../generated/prisma

### Migrate (model to Tables):

npx prisma migrate dev --name init
