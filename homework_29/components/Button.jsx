const Button = (props) => {
    const {text = "Default", onClick} = props;

    return <button onClick={onClick}>{text}</button>
};

export default Button;