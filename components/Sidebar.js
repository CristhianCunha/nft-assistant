import { BsChevronRight } from "react-icons/bi";
import { SidebarData } from "./SideBarData";
import { useEffect, useState, useRef, useContext } from "react";
import  * as BsIcons from "react-icons/bs";
import  * as FcIcons from "react-icons/fc";
import  * as FaIcons from "react-icons/fa";
import  * as ImIcons from "react-icons/Im";
import Api, {auth} from '../service/firebase'
import Link from 'next/link'
import { AuthContext } from "../contexts/AuthContext";

export default function Sidebar ({children}) {
	const [sidebar, setSidebar] = useState(true);	
	const [darkMode, setDarkMode] = useState(false);
	const firstUpdate = useRef(true);
	const {user, setUser} = useContext(AuthContext)
	

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
	}
	const toggleSideBar = () => {
		setSidebar(!sidebar)
	}
	useEffect(() => {
		if (firstUpdate.current) {
			return
		}
		console.log(sidebar)
		document.querySelector(".sidebar").classList.toggle("close")
	}, [sidebar])
	useEffect(() => {
		if (firstUpdate.current) {
			return
		}
		console.log(darkMode)
		document.querySelector("body").classList.toggle("dark")
	}, [darkMode])
	useEffect(() => {
		auth.onAuthStateChanged(user =>{
			if(user){
				setUser({
					id: user.uid,
					name: user.displayName,
					avatar: user.photoURL,
					email: user.email
				})
				setLogedin(true)
			}
			else{
				setLogedin(false)
			}
		})
	},[])	
	const [logedin, setLogedin] = useState(false);
	useEffect(() => {
	}, [logedin])
	

	const actionLoginDataGoogle = (u) => {
		let newUser = {
		id: u.uid,
		name: u.displayName,
		avatar: u.photoURL,
		email: u.email
		}

		setUser(newUser)
		setLogedin(true)
		console.log(newUser)
	}

  	const actionLoginGoogle = async () => {
		if(!logedin){
			let result = await Api.googleLogar()
			if(result){
				actionLoginDataGoogle(result.user)
				const users = Api.getDoc()
				Api.saveUser(result.user)
			}
			else{
				alert(' error')
			}
		}
		else if(logedin){
			let result = Api.googleDeslogar()
			console.log(result)
			setUser({})
			setLogedin(!logedin)
		}
  	}

  	useEffect(()=> {
		if(firstUpdate.current){
	  		firstUpdate.current = false;
	  		return
		}
  	},[])
	return (
		<div>
		  	<nav className="sidebar open">
				<header>
				<div className="image-text">
					<span className="image">
						<img src={(user && user.avatar ? user.avatar
							: "https://farming.evoverse.app/assets/img/Gameart-Animus_tootbox_64px.png")} alt="" />
					</span>
					<div className="text logo-text">
						<span className="name">Evo Assistant</span>
						<span className="profession">{(user && user.name ? user.name
							: "Aguardando Login")}</span>
					</div>
				</div>
				<FaIcons.FaChevronRight className="toggle" onClick={toggleSideBar}/>
				</header>
				<div className="menu-bar">
					<div className="menu">
						<ul className="menu-links">
						{SidebarData.map((item,index) =>{
							return(
							<li key={index }className="nav-link">
								<Link href={item.path}>
									<a>
									{item.icon} 
										<span className={item.cName}>{item.title}</span>
									</a>
								</Link>
							</li>
						)
						})}
						</ul>
					</div>
					<div className="bottom-content">
						<li className>
							<Link href="/">
								<a   onClick={actionLoginGoogle}>
									<FcIcons.FcGoogle className="icon"/>
									<span className="text nav-text">{logedin? "Logout" : "Login"}</span>
								</a>
							</Link>
						</li>
						<li className="mode" >
							<div className="sun-moon">
								{darkMode ? (sidebar ? <BsIcons.BsMoonStarsFill className="icon mode-icon sun"/> : <> </>)
								: (sidebar? <ImIcons.ImSun className="icon mode-icon moon"/> : <> </>)}
							</div>
							<span className="mode-text text">{darkMode ? "Dark Mode" : "Light Mode"}</span>
							<div className="toggle-switch" onClick={toggleDarkMode}>
								<span className="switch" />
							</div>
						</li>
					</div>
				</div>
		  	</nav>
			<section className="home">  
				{children}
			</section>
		</div>
	)
}