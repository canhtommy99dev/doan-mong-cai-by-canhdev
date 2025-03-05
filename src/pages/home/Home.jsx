import { Button } from "@/components/ui/button";
import logo from "../../assets/logoDoan.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={logo} width={160} />
      <h1 className="text-4xl font-bold text-blue-600">
        Đoàn Thanh niên - Hội LHTN Việt Nam,Thanh Đoàn Móng Cái
      </h1>
      <p className="text-gray-700 mt-4">
        Chào mừng tháng 3,Tháng thanh niên Việt Nam <br />
      </p>

      <div className="">
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default Home;
