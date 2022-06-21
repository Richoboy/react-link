// export const Bar = (props) => {
//     return (
//         <h2 className="p-text">  Hi, I am Duff {props.text}</h2>
//     )
// }

// export const Btn = () => {
//     return (
//         <h2>
//             Hi, I am Efe
//         </h2>
//     )
// }

// export const Reg = () => {
//     return (
//         <h2>
//             Hi, I am Mark.
//         </h2>
//     )
// }

export function Header() {
    return (
        <div className="Header">
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    )
}

export function Body() {
    return(
    <div className="body">
        <aside className="page1">
            <p>loremLorem ipsum dolor sit amet. Et consequatur eaque ut corporis blanditiis sed facilis blanditiis aut porro consequuntur. Et enim voluptas eos minima laboriosam sit internos itaque. Vel eveniet autem qui facilis dolorum qui excepturi internos quo iure dolor</p>
        </aside>
        <main className="page2">Sit vero laborum est repellendus ratione et expedita sapiente et consequatur rerum et distinctio saepe hic sunt suscipit! Hic labore enim sed aliquid aliquid sit voluptas voluptatum et quasi dolor?</main>
    </div>
    )
}

export function Footer() {
    return(
        <div className="foot">
            <div>left text</div>
            <div>middle text</div>
            <div>right text</div>
        </div>
    )
}

export const ParentComp = () => {
    
    return (
        <div>
            <p>Parent componet</p>
            <button>change</button>
            <SendMesage name="Efe" message="Hello"/>
        </div>
    )

}

const SendMesage = ({name, message}) => {
    // const [message, setMessage] = useState ()
    // const {name, message} = props
    return (
        <div>
            <p>{name}</p>
            <h1>{message}</h1>
            <button></button>
            <FullComp name= {name} message= {message} />
        </div>    
    )
}

const FullComp = ({name, message}) => {
    return (
        <div>
            <h1>this is my comp</h1>
            <p>{name}</p>
            <h3>{message}</h3>
        </div>
    )
}
