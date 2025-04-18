
const Button = (proprs) => {
    console.log(proprs);
    
    return(
        <button className={proprs.className}>{proprs.innerText}</button>
    )
}
export default Button;