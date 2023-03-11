
import { Link } from "react-router-dom";



const People = () => {
    return(
<div>
<header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
            >
             
            </button>

          </div>
          <h2 className=" text-slate-800">รายชื่อผู้จัดทำ</h2> 
          {/* Header: Right side */}
          <div className="flex items-center">
                <Link to='/'>Back</Link>
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
          </div>
        </div>
      </div>
    </header>
    <body>

        <div className="flex items-center">
            <img src="/images/เพชร.jpg" width={300} />
            <div>
                <h1>
                    ชื่อ : นายภัทรพล แจ่มจำรัส
                </h1>
                <h2>
                    รหัสนิสิต : 6320502479 
                </h2>
                 <h3>
                    ตำแหน่ง : คน   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หน้าที่ : ทำเว็ป
                 </h3>
            </div>
            </div>

            <div className="flex items-center">
            <img src="/images/แต้ม.jpg" width={300} />
            <div>
                <h1>
                    ชื่อ : นายภัทรพล แจ่มจำรัส
                </h1>
                <h2>
                    รหัสนิสิต : 6320502479 
                </h2>
                 <h3>
                    ตำแหน่ง : คน   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หน้าที่ : ทำเว็ป
                 </h3>
            </div>
            </div>

            <div className="flex items-center">
            <img src="/images/บิ๊ก.jpg" width={300} />
            <div>
                <h1>
                    ชื่อ : นายภัทรพล แจ่มจำรัส
                </h1>
                <h2>
                    รหัสนิสิต : 6320502479 
                </h2>
                 <h3>
                    ตำแหน่ง : คน   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หน้าที่ : ทำเว็ป
                 </h3>
            </div>
            </div>

            <div className="flex items-center">
            <img src="/images/บิ๊ก.jpg" width={300} />
            <div>
                <h1>
                    ชื่อ : นายภัทรพล แจ่มจำรัส
                </h1>
                <h2>
                    รหัสนิสิต : 6320502479 
                </h2>
                 <h3>
                    ตำแหน่ง : คน   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หน้าที่ : ทำเว็ป
                 </h3>
            </div>
            </div>

            <div className="flex items-center">
            <img src="/images/เพชร.jpg" width={300} />
            <div>
                <h1>
                    ชื่อ : นายภัทรพล แจ่มจำรัส
                </h1>
                <h2>
                    รหัสนิสิต : 6320502479 
                </h2>
                 <h3>
                    ตำแหน่ง : คน   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หน้าที่ : ทำเว็ป
                 </h3>
            </div>
            </div>
            
      
        
      

    </body>
    </div>
    )
   
}
export default People;