import { createGlobalStyle } from "styled-components";

export const colors = {
  blue: "#4583CC",
  pink: "#B6768D",
  yellow: "#D1A835",
  green: "#3DA696",
  light: "#E5E5E5",
  dark: "#1F1C1C",
  action: "#ED5145",
};

const GlobalStyles = createGlobalStyle`


*{
  margin:0;
  padding: 0%;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}


body{
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.light};
}

main{
  width: 100vw;
  max-width: 1440px;
  margin:0 auto;
  height:calc(100% - 200px);
  min-height: calc(100vh - 200px);
  padding: 3rem 0 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

h1{
  font-size: 1.5rem;
  color: ${colors.dark} ;
}
h2{
  font-weight: 700;
  font-size: 3rem;
  
  @media screen and (min-width:380px) {
    font-size: 4rem;
  }
  @media screen and (min-width:1024px) {
    font-size: 5rem;
  }
}
h3{
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.dark} ;
  @media screen and (min-width:425px) {
    font-size: 2.5rem;
  }
}
h4{
  font-size: 1.5rem;
  font-weight: 900;
  color: ${colors.light};
  @media screen and (min-width:1024px) {
    font-size: 2rem;
  }
}
h5{
  font-size: 1.5rem;
  color: ${colors.light} ;
  @media screen and (min-width:425px) {
    font-size: 2rem;
  }
}
h6{
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: ${colors.light} ;
  @media screen and (min-width:1024px) {
    font-size: 1rem;
  }
}


p , li{
  font-size: 1.5rem;
}


ul{
  list-style: none;
}

button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.action};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 900;
    color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(255, 255, 255, 0.25);
  transition: 0.2s;

  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
  &:active{
    box-shadow: none;
  }
  img{
    width: 30px;
  }
  &.text{
    width: auto;
    height: 2rem;
    
    border-radius: 30px;
    padding: .25rem 1rem;

  }
}

.col-div{
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row-div{
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.resp-div{
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
      flex-direction: row;
    }

}

.break{
  width: calc(90%);
  height: 2px;
  background-color: lightgray;
  margin-left: 5%;
}
.break-vertical{
  height: 90%;
  width: 2px;
  background-color: lightgray;
  margin-top: 5%;
}

.shadow {
  background-color: rgba(0,0,0,0.5);
  padding: 2rem;
}

.box-shadow{
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}

.hover-scale-link{
  transition:0.3s;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
}

.link{
  cursor: pointer;
}


`;

export default GlobalStyles;
