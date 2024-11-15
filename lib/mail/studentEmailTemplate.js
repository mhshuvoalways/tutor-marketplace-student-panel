const studentEmailTemplate = ({
  tutorName,
  studentName,
  date,
  startedTime,
  session,
  fee,
  studentJoinLink,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#f7f8fc",
        padding: "30px",
        borderRadius: "5px",
      }}
    >
      <h2>Hello {studentName},</h2>
      <p
        style={{
          marginTop: "5px",
        }}
      >
        Your tutoring session with {tutorName} is confirmed! 🎉 Here are the
        details:
      </p>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p>📅 Date: {date}</p>
        <p>🕒 Time: {startedTime}</p>
        <p>🕒 Session: {session} hour</p>
        <p>💵 Fee: ${fee}</p>
        <p>
          🔗 Zoom Link:{" "}
          <a
            style={{
              textDecoration: "underline",
            }}
            target="blank"
            href={studentJoinLink}
          >
            {studentJoinLink}
          </a>
        </p>
      </div>
      <p
        style={{
          marginTop: "30px",
        }}
      >
        Feel free to prepare any questions or topics you want to cover. Your
        tutor is excited to help you succeed!
      </p>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p>Looking forward to your session,</p>
        <h4>{`Tim's Tutor Team`}</h4>
      </div>
    </div>
  );
};

export default studentEmailTemplate;
