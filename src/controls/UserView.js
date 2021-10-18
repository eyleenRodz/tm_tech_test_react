function UserView({
  completeName="",
  imageUrl="", 
  sideImage='right',
  className="",
  nameFirst=false,
  children
}) {
  return ( 
    <div className={className+" user"}>
      <img className="user--image" src={imageUrl} alt="Imagen de un usuario"/>
      <span className={'user--name'+ (nameFirst ?'-first' : '')}>{completeName}{children}</span>
    </div> 
  );
}

export default UserView;