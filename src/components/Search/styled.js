import styled from 'styled-components'

const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-Stats {
    margin-bottom: 20px;
  }
  .ais-SearchBox {
    padding-top: 0;
  }
  .ais-Stats {
    color: #8899a6;
  }
  .ais-SearchBox-input {
    border: none;
    display: flex;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 50px;
    padding: 1rem;
    width: 100%;
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits-list {
    list-style: none;
    margin: 0;
    column-gap: 20px;
    display: grid;
    grid-template-areas: "div div";
  }

  @media screen and (max-width: 873px) {
    .ais-Hits-list {
      grid-template-areas: "div";
    }
  }
`

export {
  SearchWrapper,
}
