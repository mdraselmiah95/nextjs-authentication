import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name}
      </h1>
      <p className="text-2xl text-center mt-5">
        Your Email: {session?.user?.email}
      </p>
    </div>
  );
};

export default DashboardPage;
