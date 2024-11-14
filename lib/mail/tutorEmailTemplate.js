const tutorEmailTemplate = ({
  tutorName,
  studentName,
  date,
  startedTime,
  session,
  fee,
  // tutorJoinLink,
  studentEmail,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#f7f8fc",
        padding: "30px",
        borderRadius: "5px",
      }}
    >
      <h2>Hello {tutorName},</h2>
      <p
        style={{
          marginTop: "5px",
        }}
      >
        Congratulations! 🎉 You have a new tutoring session booked with{" "}
        {studentName}. Here’s what you need to know:
      </p>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p>📅 Date: {date}</p>
        <p>🕒 Time: {startedTime}</p>
        <p>🕒 Session: {session} hour</p>
        <p>💵 Earn: ${fee}</p>
        <p>
          {`Student's email`}: {studentEmail}
        </p>
      </div>
      <p
        style={{
          marginTop: "30px",
        }}
      >
        Please be prepared and review any materials that may help guide the
        session. We appreciate your dedication!
      </p>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p>Best regards,</p>
        <h4>{`Tim's Tutor Team`}</h4>
      </div>
    </div>
  );
};

export default tutorEmailTemplate;
