// eslint-disable-next-line no-unused-vars
import './style.module.css';
import { SideNavData } from './SideNavData';
const Navbar = () => {

    return (
      <header>
        <a href="/"><img src="https://cdn.discordapp.com/attachments/1135292607589777518/1135322335847665684/Astron__1_-removebg-preview.png" alt="" 
        width={110}
        height={110}
        /></a>
        <h1>Space Mision</h1>
        <nav>
        {SideNavData.map((val,key) => {
        return(  <a key={key} 
                className="row"
                id={window.location.pathname=== val.link ? "active"  : ""}
                onClick={()=>{  
                    window.location.pathname= val.link}}> 
                {""}
                {val.title} 
                 </a>
                 
            );
         })}

        </nav>
      </header>
  );
}

export {Navbar};
