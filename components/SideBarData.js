import  * as IoIcons from "react-icons/io";
import  * as AiIcons from "react-icons/ai";
import  * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Visão Geral',
        path: '/',
        icon: <AiIcons.AiOutlineHome className="bx icon"/>,
        cName: 'text nav-text'
    },
    {
        title: 'Meus Pods',
        path: 'pods',
        icon: <BiIcons.BiBoltCircle className="bx icon"/>,
        cName: 'text nav-text'
    },
    {
        title: 'Simular Fusão',
        path: 'fusion',
        icon: <BiIcons.BiAnalyse className="bx icon"/>,
        cName: 'text nav-text'
    },
    {
        title: 'Calcular Ganhos',
        path: 'calculator',
        icon: <AiIcons.AiOutlineCalculator   className="bx icon"/>,
        cName: 'text nav-text'
    },
    {
        title: 'Evo Agenda',
        path: 'diary',
        icon: <BiIcons.BiNotepad className="bx icon"/>,
        cName: 'text nav-text'
    },
]