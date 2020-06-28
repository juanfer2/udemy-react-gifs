import React, {useState} from "react";
import styled, { css, jsx } from '@emotion/styled'
import { useFetchGyphy } from "./hooks/useFetchGyphy";
import GyphyImage from "./defaults/GyphyImage";
import GyphySearch from "./defaults/GyphySearch";

const GyphyStyled = styled.div`
  .container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
    img{
      background-size: cover;
      background-position: center;
      width: 100%;
    }
  }
`;

function Gyphy() {
  const [category, setCategory] = useState('')
  // const { data, loanding } = useFetchGyphy("Are You Afraid of the Dark");
  const { data, loanding } = useFetchGyphy(category);
  if (loanding) return "Loanding...";
  return (
    <GyphyStyled>
      hola Gyphy

      <GyphySearch  categoy={category} setCategory={setCategory} />
      
      <div className="container">
        {data.map((image) => (
          <GyphyImage key={image.id} img={image.url} title={image.title} />
        ))}
      </div>
    </GyphyStyled>
  );
}

export default Gyphy;
