import logo from './logo.svg';



function Header() {
            return  (
                <header>
                    <div>
                        <img src={logo}/>
                    </div>
                    <button id={"Langage"}>Langage</button>
                    <button id={"Section"}>Section</button>
                    <button id={"Component"}>Component</button>
                </header>
            )
}

export default Header;