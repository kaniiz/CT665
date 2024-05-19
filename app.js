const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="margin-left: auto;
    margin-right: auto;
    max-width: fit-content;">
    <p>name: Khanitta Sorkanchanachai</p>
    <p>id: 65130488</p>
    <div style="width:100%;">
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-6/323557048_2966907313615391_8423888818852768294_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrSCs0Hq8J5p2JZRbPptV53LJ_JEUHLKzcsn8kRQcsrP3Lnb1isUfYIwS6A4q7lf2P--4dbbG43mIQBf01wpQt&_nc_ohc=oMPm0K3UzHgQ7kNvgFuvwcG&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYA77homSE0-mU5cr21mVl4X1VCnDWnqdR--ZOKka52ldw&oe=664F64A2" style="width:300px;height:300px;" >
    </div>
    
    <a href="/myresearch">MyResearch</a>
    <a href="/researchplan">My Research Plan</a>
    <a href="/rest/researchplan/">Rest My Research Plan</a>
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
  <p>เนื่องจากการสร้างเว็บไซต์มีความหลากหลายทางด้านสถาปัตยกรรมมากขึ้นแต่หลักๆ ที่เป็นที่นิยม จะมีแบบ MVC (Model view controller) ซึ่งมีการแบ่งการทำงานของเว็บไซต์อย่างชัดเจนโดย มีการกำหนด model หรือรูปแบบการทำงานของแอปพลิเคชั่นนั้นๆ ในส่วนของ model ส่วนต่อมาจะเป็น view ซึ่งก็คือส่วนของหน้าแสดงผลและส่วนสุดท้าย controller หรือก็คือส่วนควบคุม โดยในสถาปัตยกรรมในแบบ MVC การพัฒนาแอปพลิเคชั่นสามารถทำได้ต้นจนจบภายในโครงสร้างเดียว MVC แต่เดิมใช้กับแอปพลิเคชั่นที่เป็น Graphical User Interface (GUI) บน desktop แอปพลิเคชั่น
  แนวทาง MVC ถูกสร้างขึ้นจาก Trygve Reenskaug โดยเป้าหมายของการออกแบบ MVC เกิดจากการต้องการแก้ปัญหาของผู้ใช้ที่ต้องควบคุมข้อมูลที่ใหญ่และซับซ้อนโดยแบ่งส่วนออกไปเพื่อให้แต่ละส่วนทำงานในงานของตัวเอง ลักษณะเด่นๆ ของ MVC จะมีการแบ่งแยกที่ชัดเจนของ business logic, UI logic และ input logic และมีความง่ายในการจัดการ HTML และ URL MVC ยังพัฒนาเพื่อรองรับ Test Driven Development (TDD) หรือก็คือการพัฒนาแอปพลิเคชั่นที่ลดความเสี่ยงต่อความผิดพลาดที่จะทำให้เกิด bug และทำให้ code มีประสิทธิภาพมากขึ้นทำให้ performance ดีขึ้นอีกด้วย
  และอีกแบบคือสถาปัตยกรรมแบบ Front-end และ Back-end เป็นการสร้างเว็บแอปพลิเคชั่นแบบมีการแบ่งแยกการทำงานโดยแบ่งเป็น 2 ส่วนโดย Front-end จะรับหน้าที่ในการขอข้อมูลจาก Back-end และนำมาแสดงผลโดยเน้นความสำคัญด้านประสบการณ์การใช้งานของผู้ใช้ และอีกส่วนจะเป็น Back-end ที่ทำหน้าที่จัดการ การทำงานของแอปพลิเคชั่น โลจิคต่างๆ และส่งข้อมูลในแบบฟอร์มที่กำหนดไว้เพื่อสื่อสารกับ Front-end ในรูปแบบที่เรียกว่า API (Application Programming Interface) ซึ่งปัจจุบันกำลังเป็นที่นิยม ด้วยความสามารถที่จะขยายขีดจำกัดได้สะดวกและสามารถใช้ Back-end เพียงตัวเดียวสื่อสารกับแอปพลิเคชั่นหลาย หรืออุปกรณ์ได้อย่างหลากหลาย
  ทั้งนี้ปัญหาที่เกิดขึ้นคือในเมื่อมีภาษาที่มีประสิทธิภาพการเลือกสถาปัตยกรรมระหว่าง MVC หรือ Front-end/Back-end ว่าสถาปัตยกรรมไหนที่มีการทำงานได้ดีกว่าทั้งในด้านประสิทธิภาพหรือด้านการใช้ทรัพยากร ต่อการพัฒนาแอปพลิเคชั่นนึง แบบไหนมีความเหมาะสมกว่า ดังนั้นการวิจัยนี้จึงเกิดขึ้นมาเพื่อตรวจวัดและเปรียบเทียบประสิทธิภาพในด้านต่างๆ โดยมีการทำแอปพลิเคชั่นและแสดงผลในรูปแบบเดียวกันต่างกันเพียงแค่การใช้สถาปัตยกรรมซึ่งสามารถส่งผลในระยะยาว ทั้งเรื่อง Performance และเรื่องของ Scalability ที่เป็นเรื่องที่เกี่ยวกับธุรกิจโดยตรงจากการลงทุนโครงสร้าง หลีกเลี่ยงค่าใช้จ่ายที่ไม่มีความจำเป็นออกไปจากธุรกิจได้
  </p>
    <a href="/">MyHome</a>
  `);
});


app.get("/researchplan", (req, res) => {
  res.send(`
  <div>
    <h2>My_Research_Plan</h2>

    <table border="1">
      <tr>
        <th></th>
        <th colspan="8">เดือน</th>
      </tr>
      <tr>
        <th>ขั้นตอน</th>
        <th>ตุลาคม</th>
        <th>พฤศจิกายน</th>
        <th>ธันวาคม</th>
        <th>มกราคม</th>
        <th>กุมภาพันธ์</th>
        <th>มีนาคม</th>
        <th>เมษายน</th>
        <th>พฤษภาคม</th>
      </tr>
      <tr>
        <td>ศึกษาปัญหาของ Fronted-Backend</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Literature review</td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ออกแบบโครงสร้าง การทดลอง ส่วนของ Node, golang</td>
        <td></td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ลงมือ Coding</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบ unit-test ด้วย Jmeter</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>วัดประสิทธิภาพ เวลาในการทดสอบ และ ความสามารถในการรองรับ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบการทำงานและบันทึกผล</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <td>ประเมินผล และ สรุป</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
      </tr>
    </table>  
    <a href="/">MyHome</a>
  </div>
  `);
});



app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "ศึกษาปัญหาของ Fronted-Backend",
      startDate: "2023-10-01",
      endDate: "2023-10-31"
    },
    {
      id: 2,
      description: "Literature review",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "ออกแบบโครงสร้าง การทดลอง ส่วนของ Node, golang",
      startDate: "2023-12-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      description: "ลงมือ Coding",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: 5,
      description: "ทดสอบ unit-test ด้วย Jmeter",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "วัดประสิทธิภาพ เวลาในการทดสอบ และ ความสามารถในการรองรับ",
      startDate: "2024-02-16",
      endDate: "2024-03-31"
    },
    {
      id: 7,
      description: "ทดสอบการทำงานและบันทึกผล",
      startDate: "2024-04-01",
      endDate: "2024-04-30"
    },
    {
      id: 8,
      description: "ประเมินผล และ สรุป",
      startDate: "2024-05-01",
      endDate: "2024-05-31"
    }
  ];

  res.json(researchPlan);
});

app.listen(8080);
