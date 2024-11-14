const studentEmailTemplate = ({
  tutorName,
  studentName,
  date,
  startedTime,
  session,
  fee,
  // studentJoinLink,
  tutorEmail,
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
          {`Tutor's email`}: {tutorEmail}
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
