import recruiter from "../../assets/landing/recruiter.png";
import candidate from "../../assets/landing/candidate.png";

export const sectionsData = [
  {
    heading: "Hire Smarter with IntelliHire – The AI That Works for You",
    paragraph: "IntelliHire empowers recruiters to streamline the hiring process like never before. By creating an account, you can effortlessly schedule interviews for specific candidates, monitor progress, and receive detailed AI-generated reports on each candidate’s performance. Say goodbye to manual evaluations and scattered feedback — IntelliHire ensures every interview is conducted consistently, objectively, and efficiently.",
    id: "recruiters",
    image: recruiter,
    reverse: false, // text left, image right
    buttonText : "Start Hiring Smarter"
  },
  {
    id: "candidates",
    heading: "Take Control of Your Career with IntelliHire",
    paragraph: "IntelliHire delivers seamless, AI-powered interviews from start to finish. A human-like voice agent conducts conversations using speech-to-text and text-to-speech, asking questions, clarifying responses, and following up naturally in real time.It then evaluates candidate performance and provides structured insights, all within a secure platform with protected personal data and a clean, responsive interface",
    image: candidate,
    reverse: true, // image left, text right
    // buttonText : "See your progress"
  },
];
