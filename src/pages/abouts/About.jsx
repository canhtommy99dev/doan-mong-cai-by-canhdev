import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const teamMembers = [
  {
    name: "Nguyễn Thế Vinh",
    role: "Bí thư Thành Đoàn",
    img: "https://mongcai.gov.vn/caches/editor/5292d1bc_vinh.jpeg",
    info: "Nguyễn Thế Vinh is the leader of the Thành Đoàn, responsible for youth activities and initiatives in the city.",
  },
  {
    name: "Nguyễn Thế Mười",
    role: "Phó Bí thư kiêm nhiệm Thành Đoàn, Bí thư Đoàn phường Ninh Dương",
    img: "https://mongcai.gov.vn/caches/editor/4151439b_muoi.jpeg",
    info: "Nguyễn Thế Mười plays a dual role in both city and ward-level youth leadership.",
  },
  {
    name: "Lê Thị Kiều Anh",
    role: "Ủy viên Ban Thường vụ, Chuyên viên Thành Đoàn",
    img: "https://mongcai.gov.vn/caches/editor/458/458b8d03-153b-4ad8-a8a4-32c00e610e2c.jpg",
    info: "Lê Thị Kiều Anh is an experienced consultant, ensuring the smooth operation of Thành Đoàn projects.",
  },
  {
    name: "Nguyễn Bảo Ngọc",
    role: "Chuyên viên Thành Đoàn",
    img: "https://mongcai.gov.vn/caches/editor/d171af0d_ngoc.jpeg",
    info: "Nguyễn Bảo Ngọc contributes significantly to various Thành Đoàn programs and activities.",
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-16 bg-blue-300 text-center">
      <div>
        <div className="relative isolate overflow-hidden bg-blue-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg  text-left">
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Giới thiệu Thành Đoàn Móng Cái
                  </h1>
                  <br />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Chức năng, nhiệm vụ của cơ quan Thành đoàn
                  </h2>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">
                    1. Chức năng:
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Tham mưu cho Ban Chấp hành, Ban Thường vụ Thành Đoàn về công
                    tác Đoàn, Hội, Đội và phong trào thanh thiếu nhi của thành
                    phố.
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">
                    2. Nhiệm vụ:
                  </h3>
                  <ul className="text-gray-700 mt-2 list-disc pl-5 space-y-2">
                    <li>
                      Nghiên cứu tham mưu với Ban Chấp hành, Ban Thường vụ Thành
                      Đoàn về các chủ trương, nghị quyết, chương trình, kế hoạch
                      công tác của Đoàn và phong trào thanh thiếu nhi của thành
                      phố.
                    </li>
                    <li>
                      Hướng dẫn, kiểm tra việc thực hiện các Nghị quyết, Chỉ thị
                      của Đoàn, các nghị quyết, chương trình, kế hoạch công tác
                      của Ban Chấp hành, Ban Thường vụ Thành Đoàn của các tổ
                      chức Đoàn, Hội, Đội từ thành phố tới cơ sở.
                    </li>
                    <li>
                      Tổng hợp, phân tích đánh giá tình hình hoạt động của Đoàn
                      và phong trào thanh thiếu nhi; chuẩn bị các báo cáo về
                      công tác Đoàn và phong trào thanh thiếu nhi.
                    </li>
                    <li>
                      Tập hợp, đề xuất với Ban Chấp hành, Ban Thường vụ Thành
                      Đoàn để kiến nghị với cấp ủy Đảng, chính quyền, các ngành
                      có liên quan về chủ trương, chế độ chính sách đối với
                      thanh thiếu nhi và tổ chức Đoàn, Hội, Đội.
                    </li>
                    <li>
                      Xây dựng, quản lý cơ sở vật chất, kỹ thuật đảm bảo điều
                      kiện hoạt động của Ban Chấp hành, Ban Thường vụ Thành
                      Đoàn.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="https://mongcai.gov.vn/caches/editor/914daef1_15.jpeg"
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Cơ cấu tổ chức
        </h2>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-16 mx-auto ">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setSelectedMember(member)}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg max-w-lg text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                {selectedMember.name}
              </h3>
              <p className="text-gray-600 mb-4">{selectedMember.role}</p>
              <p className="text-gray-500">{selectedMember.info}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
                onClick={() => setSelectedMember(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
