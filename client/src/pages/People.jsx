import { Link } from "react-router-dom";

const People = () => {
  return (
    <div>
      <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 -mb-px">
            {/* Header: Left side */}
            <div className="flex">
              {/* Hamburger button */}
              <button className="text-slate-500 hover:text-slate-600 lg:hidden"></button>
            </div>
            <h2 className=" text-slate-800">รายชื่อผู้จัดทำ</h2>
            {/* Header: Right side */}
            <div className="flex items-center">
              <Link to="/">Back</Link>
              {/*  Divider */}
              <hr className="w-px h-6 bg-slate-200 mx-3" />
            </div>
          </div>
        </div>
      </header>
      <body>
        <div class="py-20 bg-gray-50">
          <div class="container mx-auto px-6 md:px-12 xl:px-32">
            <div class="mb-16 text-center">
              {/* <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2> */}
              {/* <h2 className=" text-slate-800">รายชื่อผู้จัดทำ</h2>  */}
              {/* <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p> */}
            </div>
            <div class="grid gap-12 items-center md:grid-cols-3">
              <div class="space-y-4 text-center">
                <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                  <div class="h-full w-full">
                    <div class="relative w-full">
                      <img
                        class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                        src="/images/เพชร.jpg"
                        width={300}
                      />
                      <div>
                        <h4 class="text-2xl">นายภัทรพล แจ่มจำรัส</h4>
                        <span class="block text-sm text-gray-500">member</span>
                        <span class="block text-sm text-gray-500">
                          Front-end Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  src="/images/ดิว.jpg"
                  width={300}
                />
                <div>
                  <h4 class="text-2xl">นายอัษฎาวุธ คล้ายเมือง</h4>
                  <span class="block text-sm text-gray-500">member</span>
                  <span class="block text-sm text-gray-500">
                    Front-end Developer
                  </span>
                </div>
              </div>
              <div class="space-y-4 text-center">
                <img
                  class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  src="/images/แต้ม.jpg"
                  width={300}
                />
                <div>
                  <h4 class="text-2xl">นายนเรศ เฟื่องเวโรจน์สกุล</h4>
                  <span class="block text-sm text-gray-500">
                    Project Manager
                  </span>
                  <span class="block text-sm text-gray-500">AI Developer</span>
                </div>
              </div>
              <div class="space-y-4 text-center">
                <img
                  class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  src="/images/พี.jpg"
                  width={300}
                />
                <div>
                  <h4 class="text-2xl">นายธิติพนธ์ สว่างศรี </h4>
                  <span class="block text-sm text-gray-500">member</span>
                  <span class="block text-sm text-gray-500">AI Developer</span>
                </div>
                <img
                  class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  src="/images/บิ๊ก.jpg"
                  width={300}
                />
                <div>
                  <h4 class="text-2xl">นายโรจนากร แย้มบางยาง </h4>
                  <span class="block text-sm text-gray-500">member</span>
                  <span class="block text-sm text-gray-500">
                    Back-end Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};
export default People;
