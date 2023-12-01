-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
