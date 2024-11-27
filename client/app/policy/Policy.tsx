import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        EduPro is committed to providing a secure, accessible, and user-friendly platform for learners, educators, 
        and administrators. All users must adhere to the following policies to ensure a productive and respectful 
        learning environment. Learners must comply with course-specific rules, educators are responsible for 
        maintaining content quality, and administrators manage users and platform integrity.
        </p>
        <br />
        {/* <br /> */}
        {/* <br /> */}
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        EduPro collects user data to improve the experience and will not share personal information without consent, except as required 
        by law. Users can update or delete their data by contacting support. All uploaded content must adhere to 
        copyright laws; prohibited content includes hate speech, plagiarized material, and malicious software. 
        Violations may result in content removal or account suspension.
        </p>
        <br />
        {/* <br /> */}
        {/* <br /> */}
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Users must respect others, avoid offensive behavior, and use EduPro solely for educational purposes. EduPro employs encryption to secure user data and 
        expects users to safeguard login credentials. In case of a data breach, affected users will be notified. 
        Content uploaded remains the intellectual property of its creators unless otherwise agreed, and anonymized 
        data may be used for platform improvement. 
        </p>
        <br />
        {/* <br /> */}
        {/* <br /> */}
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Payments for courses or services are processed securely; refunds 
        are available if requested within 7 days of purchase and with minimal course progress. EduPro strives for 
        99.9% uptime but may experience occasional downtime for maintenance or unforeseen issues. Accounts may be 
        suspended for policy violations, illegal activities, or misuse, with the option to appeal decisions. EduPro 
        reserves the right to update policies, and continued use implies acceptance of changes. 
        </p>
        <br />
      </ul>
      </div>
    </div>
  );
};

export default Policy;