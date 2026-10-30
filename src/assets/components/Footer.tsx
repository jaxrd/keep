import "../../../public/styles/styles.css"
const year = new Date().getFullYear();
function Footer (){
    return(<footer><p>Copyright By {year}</p></footer>)
}


export default Footer;