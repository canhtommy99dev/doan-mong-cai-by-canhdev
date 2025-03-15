import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Hiến máu nhân đạo",
    subtitle: "Tổ chức ngày hội hiến máu để hỗ trợ nguồn máu cứu người.",
    image:
      "https://api.traveloka-vn.com/api/imDemo/482279223_621937917124905_8679337285347713380_n.jpg",
  },
  {
    id: 2,
    title: "Ngày Chủ nhật xanh",
    subtitle:
      "Dọn dẹp vệ sinh môi trường, trồng cây xanh, thu gom rác thải nhựa.",
    image:
      "https://api.traveloka-vn.com/api/imDemo/481314373_617191247599572_1387639446271210768_n.jpg",
  },
  {
    id: 3,
    title: "Thăm hỏi, tặng quà",
    subtitle: "Hỗ trợ gia đình chính sách, học sinh nghèo vượt khó.",
    image:
      "https://api.traveloka-vn.com/api/imDemo/480187284_624884430163587_1389506234723878762_n.jpg",
  },
];

const blogPosts2 = [
  {
    id: 1,
    title: "Rèn luyện thể chất",
    subtitle: "Giải chạy bộ, giải bóng đá, bóng chuyền, cầu lông, võ thuật…",
    image:
      "https://api.traveloka-vn.com/api/imDemo/481043494_616893824295981_8823812788564039166_n.jpg",
  },
  {
    id: 2,
    title: "Cuộc thi kỹ năng",
    subtitle: "Hùng biện, viết báo, nhiếp ảnh, sáng tạo khoa học kỹ thuật",
    image:
      "https://api.traveloka-vn.com/api/imDemo/481446961_617382670913763_4909506885699285787_n.jpg",
  },
  {
    id: 3,
    title: "Học tập và phát triển kỹ năng",
    subtitle: "Tập huấn kỹ năng mềm, khởi nghiệp, học ngoại ngữ.",
    image:
      "https://api.traveloka-vn.com/api/imDemo/484022923_3833923720193168_6386595140656224327_n.jpg",
  },
];

export default function BlogSection() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Hoạt động tình nguyện vì cộng đồng
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg"></div>
            <div
              className="absolute bottom-0 left-0 right-0 text-white text-center p-4"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm">{post.subtitle}</p>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover rounded-t-lg"
              style={{ borderRadius: "15px" }}
            />
          </motion.div>
        ))}
      </div>
      {/* //// */}
      <br />
      <h2 className="text-3xl font-bold text-center mb-6">
        Phong trào rèn luyện bản thân
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts2.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg"></div>
            <div
              className="absolute bottom-0 left-0 right-0 text-white text-center p-4"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm">{post.subtitle}</p>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover rounded-t-lg"
              style={{ borderRadius: "15px" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
