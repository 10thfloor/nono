export default `
  :host(home-page) {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(12, 1fr);
  }
  
  #greetings {
    grid-column-start: 4;
    grid-column-end: 10;
    grid-row-start: 2;
    text-align: center;
  }
  
  p {
    text-align: justify;
    text-justify: inter-word;
  }
`;
