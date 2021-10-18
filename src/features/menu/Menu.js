import React from "react";
import UserView from "../../controls/UserView";
import SearchBar from "../../controls/SearchBar";
import { useAuth } from "../../context/auth";

function Menu() {
  const { userProfile, logout } = useAuth()
  const onSearch=(text)=>{
    console.log('khee',text);
    document.location = document.location.origin + "?q="+text;
  }
  return (  
    <header className="menu">
      <img className="menu--logo" src="/logo.png" alt="Icono del sitio"/>
      <SearchBar className="menu--search" onSearch={(text)=> onSearch(text)}/>
      <UserView 
        completeName= {userProfile.name}
        imageUrl={userProfile.imageUrl}
        className="menu--user"
        nameFirst={true}
      >
        <span>
          <img 
            className="menu--close" 
            src="/logout.svg" 
            alt="image de cerrado de sesion" 
            onClick={()=>logout()}
            /></span>
      </UserView>
    </header>);
}

export default Menu;