export default function MessageCard(props) {
    const { message, onDelete } = props;
    return (
        <div className="message">
          <h1>{message}</h1>
          <button className="delete-button" onClick={onDelete} >x</button>
        </div>
    )
}