import styled from "@emotion/styled";

const A = styled.div`
  color: red;
`;

const B = styled.div`
  color: blue;
  ${A} {
    color: green;
  }
`;

export default function Home() {
  return (
    <>
      <A>A alone</A>
      <br />
      <B>B alone</B>
      <br />
      <B>
        <A>A inside B</A>
      </B>
    </>
  );
}
