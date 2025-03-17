// Default (Good only for production)
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// export default prisma


// Developement
// DOC: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help
// Avoid multiple Prisma Client instances
// When developing a Next.js application, one common issue is accidentally creating multiple instances of the Prisma Client.
// This often occurs due to Next.js’s hot-reloading feature in development.

// To avoid this, create a single Prisma Client instance by using a global variable:

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;