import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

$primary: orange;

*{
  margin:0;
  padding: 0%;
  box-sizing: border-box;
  color: white;
  
}

.root{
  width: 100vw;

  overflow-x: hidden;
}

body{
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
}

main{
  width: 100vw;
  min-height: 100vh;
  padding: 8rem 1rem 2rem;
  @media screen and (min-width: 768px) {
    padding: 8rem 3rem 2rem;
  }
  @media screen and (min-width: 1240px) {
    padding: 8rem 15rem 2rem;
  }
}

a{
  text-decoration: none;
}

h1{
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  @media screen and (min-width:600px) {
    font-size: 3rem;
  }
}
h2{
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  
  @media screen and (min-width:600px) {
    font-size: 4rem;
  }
}
h3{
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  @media screen and (min-width:425px) {
    font-size: 2.5rem;
  }
}
h4{
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  @media screen and (min-width:425px) {
    font-size: 3rem;
  }
}
h5{
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  @media screen and (min-width:425px) {
    font-size: 2.5rem;
  }
}
h6{
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  @media screen and (min-width:1024px) {
    font-size: 1.5rem;
  }
}


p , li{
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
}


li{
  text-transform: uppercase;
}

ul{
  list-style: none;
}



button{
  background-color: orange;
  color: #623C63;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border: 3px solid orange;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: .3s;
  cursor: pointer;
  &:hover{
    background-color: transparent;
    color: orange;
    transform: scale(1.05);
  }

  &.small{
    padding: 0.25rem 0.5rem;
  }

  &.large{
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
  }

  &.round{
    border-radius: 50%;
  }
  

}

.mobile-icons {
    @media screen and (min-width: 1050px) {
      display: none;
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
