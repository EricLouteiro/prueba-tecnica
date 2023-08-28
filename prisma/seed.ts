import { PrismaClient } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcryptjs';

const prisma = new PrismaClient();
const salt = genSaltSync(10);

async function main() {
  const alice = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      name: 'Admin',
      password: hashSync('admin1234', salt),
    },
  });

  console.log({ alice });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
