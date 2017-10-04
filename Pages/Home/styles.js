export default `
  :host {
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
  
  :host p {
    text-align: justify;
    text-justify: inter-word;
  }
`;
