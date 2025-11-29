function ProfileCard(props) {
// Inline styles for a quick card look
    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        width: "300px",
        textAlign: "center",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    };
    
    return (
        <div style={cardStyle}>
            <h2>{props.name}</h2>
            <p style={{ color: "gray" }}>{props.role}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}
export default ProfileCard;