<h1 align="center" id="title">ITM Project: Face Mask Detection</h1>

<p id="description">Project นี้เป็นส่วนหนึ่งของรายวิชา Management of Information Technology 02204372-60</p>

 เอกสารส่งมอบอยู่ใน Folder/model/Document
## สมาชิกในทีม

| ชื่อ | หน้าที่ |
| --- | --- |
| นายภัทรพล แจ่มจำรัส | Front-end Developer |
| นายธิติพนต์ สว่างศรี | AI Developer |
| นายนเรศ เฟื่องเวโรจน์สกุล | Project Manager, AI Developer |
| นายโรจนากรณ์ แย้มบางยาง | Back-end Developer | Coding ในการสร้าง Model
| นายอัษฎาวุธ คล้ายเมือง | Front-end Developer |

## ลำดับการทำงาน
- [x] I. วางแผนการทำงานโครงการ
- [x] II. การออกแบบเว็บไซต์
- [x] III. การออกแบบฐานข้อมูล
- [x] IV. รวบรวม Dataset และ Preprocessing Data
- [x] V. Train Model AI/ Evaluate
- [ ] VI. เก็บข้อมูลจาก Model เข้าฐานข้อมูลและดึงข้อมูลมาแสดงหน้าเว็บ

## รายละเอียดแต่ละงาน
I. วางแผนการทำงานโครงการ
| Technology | Function | รายละเอียด
| --- | --- | --- |
|<a href="https://jupyter.org/" target="_blank" rel="noreferrer"> <img src="https://numfocus.org/wp-content/uploads/2016/07/jupyter-logo-300.png" alt="jupyter" width="90" height="60"/> </a>| Library | ใช้สำหรับ Coding Python ในการใช้ Library ต่างๆ เช่น OpenCV tensorflow sk-learn etc.
|<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="100" height="60"/> </a>| Database | PhPMyAdmin
|<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="100" height="60"/> </a>| Back-end developer | ใช้สำหรับ Coding ทางด้าน Backend ที่เชื่อมต่อกับฐานข้อมูล
|<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="100" height="60"/> </a>| Front-end developer | ใช้สำหรับ Coding ทางด้านการออกแบบหน้าเว็บไซต์
|<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://nystudio107.com/img/blog/_1200x630_crop_center-center_82_none/speeding-up-tailwind-css-builds2.png?mtime=1602603359" alt="tailwindcss" width="100" height="60"/> </a>| Framework | ใช้สำหรับตกแต่งหน้าเว็บไซต์
|<a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="100" height="60"/> </a>| Language | ใช้สำหรับการ Coding ในการสร้าง Model

II. การออกแบบเว็บไซต์
<p></p>
<img src="https://github.com/nared45/Face-mask-Detection/blob/main/Web_Design/1676480333917.jpg" alt="DB" width="1000" height="500"/>


III. การออกแบบฐานข้อมูล
<p></p>

<img src="https://github.com/nared45/Face-mask-Detection/blob/main/DataBase_Design/S__14401551.jpg" alt="DB" width="300" height="150"/>

IV. รวบรวม Dataset และ Preprocessing Data
<p>Data source: https://www.kaggle.com/datasets/ashishjangra27/face-mask-12k-images-dataset</p>
<p></p>

<img src="https://github.com/nared45/Face-mask-Detection/blob/main/DataSet/dataset.png" alt="dataset_Graph" width="1000" height="500"/>


| Class | Figure | Amount (Train)
| --- | --- | --- |
with_mask | <img src="https://github.com/nared45/Face-mask-Detection/blob/main/DataSet/Face%20Mask%20Dataset/Train/WithMask/69.png" alt="mask" width="100" height="100"/> | 5000
without_mask | <img src="https://github.com/nared45/Face-mask-Detection/blob/main/DataSet/Face%20Mask%20Dataset/Test/WithoutMask/1361.png" width="100" height="100"/> | 5000

<p>preprocessing and augmentation methods</p>
<img src="https://github.com/nared45/Face-mask-Detection/blob/main/DataSet/preprocessing.png" alt="preprocessing" width="1000" height="500"/>

| Method | Description
| --- | --- | 
rescale=1./255 | การปรับค่าความเข้มของพิกเซลของภาพเพื่อเข้าสู่ช่วงค่า [0, 1]
shear_range=0.2 | การปรับแต่งภาพด้วยการเอียงภาพเพื่อสร้างภาพที่แตกต่างกันด้วยมุมการเอียงสูงสุด 0.2 radians
rotation_range=20 | การปรับแต่งภาพด้วยการหมุนภาพที่แตกต่างกันด้วยมุมการหมุนสูงสุด 20 องศา
width_shift_range=0.1 and height_shift_range=0.1 | การปรับแต่งภาพด้วยการเลื่อนภาพที่แตกต่างกันด้วยการเลื่อนที่เป็นสุ่มและจะไม่เกิน 10% ของความกว้างและความสูงของภาพตามลำดับ
zoom_range=0.2 | การปรับแต่งภาพด้วยการซูมภาพที่แตกต่างกันด้วยค่าซูมสูงสุด 0.2
samplewise_center=True | การลบค่าเฉลี่ยของพิกเซลที่ต่างกันออกจากพิกเซลในแต่ละภาพ
samplewise_std_normalization=True | การปรับค่าพิกเซลในแต่ละภาพให้มีค่าเป็นปกติโดยการหารค่าพิกเซลในแต่ละภาพด้วยค่าเบี่ยงเบนมาตรฐาน
fill_mode='nearest' | การเติมค่าพิกเซลที่ว่างไว้ที่อยู่ในภาพที่ถูกปรับแต่งด้วยค่าพิกเซลที่ใกล้ที่สุด

V. Train Model AI/ Evaluate
<p>Model: DenseNet201</p>
<p>โมเดล DenseNet-201 มีความลึกและมีจำนวนชั้นมาก ทำให้มีความสามารถในการเรียนรู้และสกัดลักษณะของภาพได้ดีกว่าโมเดลที่มีความหลากหลายในจำนวนชั้นและพารามิเตอร์ต่ำกว่า นอกจากนี้โมเดลยังมี Dense Connectivity ซึ่งช่วยลดปัญหาของการสูญเสียของข้อมูลในการฝึกโมเดลและทำให้มีความแม่นยำในการจำแนกภาพได้สูง ด้วยความสามารถที่มีในการจำแนกภาพและการตรวจจับวัตถุอย่างแม่นยำ ทำให้ DenseNet-201 เหมาะสมกับงานการตรวจจับบุคคลใส่แมสหรือไม่ใส่แมสแบบ Real-time ที่ต้องการความรวดเร็วและความแม่นยำสูงในการตรวจจับวัตถุ</p>
<img src="https://production-media.paperswithcode.com/models/densenet121_spXhNmT.png" alt="DenseNet201" width="1000" height="500"/>
<p>Evaluate: </p>

<p>Accuracy</p>
<p> ในการใช้โมเดล DenseNet-201 ในงานการตรวจจับบุคคลใส่และไม่ใส่แมส การใช้ accuracy เป็นตัววัดที่สามารถใช้ในการวัดประสิทธิภาพได้ แต่จะไม่สามารถวัดประสิทธิภาพโดยเฉพาะเจาะจงว่าโมเดลสามารถตรวจจับใส่และไม่ใส่แมสได้แม่นยำเท่าใด ซึ่ง accuracy นั้นไม่สามารถแยกแยะได้ว่าโมเดลสามารถจำแนกใส่และไม่ใส่แมสได้อย่างถูกต้องและเป็นอย่างไร ดังนั้นควรใช้ตัววัดอื่นๆ ที่เหมาะสมกับงานการตรวจจับบุคคลใส่และไม่ใส่แมส เช่น F1-Score หรือ Confusion Matrix เพื่อวัดประสิทธิภาพของโมเดลในงานนี้ได้อย่างแม่นยำ</p>
<img src="https://github.com/nared45/Face-mask-Detection/blob/main/Model/acc.png" alt="con" width="1000" height="150"/>

<p>F1-score</p>
<p> ในการใช้โมเดล DenseNet-201 ในงานการตรวจจับบุคคลใส่และไม่ใส่แมส การวัดประสิทธิภาพด้วย F1-Score เป็นตัววัดที่สำคัญ เนื่องจากโมเดลต้องการความแม่นยำสูงในการตรวจจับวัตถุ โดยเฉพาะการตรวจจับบุคคลที่ใส่และไม่ใส่แมส ซึ่งเป็นการจำแนกแบบ binary classification ดังนั้นการใช้ F1-Score เป็นตัววัดที่เหมาะสมเพื่อวัดประสิทธิภาพของโมเดล</p>
<img src="https://github.com/nared45/Face-mask-Detection/blob/main/Model/messageImage_1676485592408.jpg" alt="MBnV2" width="1000" height="500"/>

<p>Confusion Matrix</p>
<p> การใช้ confusion matrix เป็นตัววัดความแม่นยำของโมเดลที่สำคัญมากในงาน classification เพราะสามารถแสดงผลการทำนายของโมเดลในแต่ละหมวดหมู่ได้อย่างชัดเจน ทำให้เราสามารถวิเคราะห์ปัญหาและปรับปรุงโมเดลได้อย่างมีประสิทธิภาพ โดยเฉพาะในงานการตรวจจับบุคคลใส่และไม่ใส่แมส โดยการใช้ confusion matrix สามารถแสดงให้เห็นได้อย่างชัดเจนว่าโมเดลของเรามีประสิทธิภาพในการตรวจจับในแต่ละกรณีได้มากน้อยเพียงใด และสามารถช่วยปรับปรุงโมเดลให้มีประสิทธิภาพในการตรวจจับแบบเฉพาะเจาะจงได้อย่างมีประสิทธิภาพ</p>
<img src="https://github.com/nared45/Face-mask-Detection/blob/main/Model/confu.png" alt="con" width="1000" height="500"/>

<p>Result</p>
<iframe width="560" height="315" src="https://youtu.be/qh8PUqT4_o0" frameborder="0" allowfullscreen></iframe>

