import styled from "styled-components";

const BlueDiv = styled.div`
    background-color: ivory;
`
const ProductImage = styled.img`
  width: 150px;
  height: 150px;
`;

const ProductDetail = ({product}) => {

    const {pno, pname, price, imgFile} = product

    return ( 
        <li>
            <ProductImage src={require(`../../img/${imgFile}`)} alt="Product" />
            <BlueDiv>PNO {pno}</BlueDiv>
            <div>NAME {pname}</div>
            <div>{price}</div>
            <button>BUY</button>
        </li>
    );
}
 
export default ProductDetail;