import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <p className="text-xl text-center mt-5">
            Your Email: {session?.user?.email}
          </p>
          <div className="flex justify-center items-center mt-4">
            <Image
              src={session?.user?.image}
              width={100}
              height={100}
              alt={session?.user?.name}
              className="rounded-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
