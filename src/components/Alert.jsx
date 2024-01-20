const Alert = ({color, msg}) => {

    return (
      <div className={`alert ${color}`}>
        {msg}
      </div>
    )
  }
  export default Alert