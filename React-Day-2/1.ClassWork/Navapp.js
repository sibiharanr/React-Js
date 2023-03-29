import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sam from './download (1).png'



function Navapp() {
  return (
    <div className='div1'>
        
      <Navbar bg="light" variant="primary">
        <Container>
          <Navbar.Brand href="https://www.samsung.com/in/"><img src={Sam} width={100} height={75} alt=""/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.samsung.com/in/smartphones/galaxy-s23-ultra/buy/?cid=in_pd_search_google_f1h23-dm_sales_tat-f1h23-q1-2023_text_24feb2023-na_1ur-450207l-keyword-cpc_na-652446074587-19724325079-144926444863-kwd-297704859501-s23-e--g--&gclid=CjwKCAjw_YShBhAiEiwAMomsEOijV_8r8SJE7uprDssNf8lMKbCV_O38Mafx8U4FQWE8-QU1Xk0PbBoCxUIQAvD_BwE"><b>S23 Series</b></Nav.Link>
            <Nav.Link href="https://www.samsung.com/in/smartphones/galaxy-a/"><b>A Series</b></Nav.Link>
            <Nav.Link href="https://www.samsung.com/in/smartphones/galaxy-m/?gbraid=123&cid=in_pd_search_google_im-all-all-all-dtc_sales_samsung-allproducts-all-2023_eshop-dsa_01jan2023-na_1ur-501336l-2023-eshop-bau-dsa-cpc_pfm-614139100219-17924215676-140077037736-dsa-546668199249----g--&gclid=CjwKCAjw_YShBhAiEiwAMomsELaSE94Bl212g7H0m26jFv1WsuxHXl3kByIqHfu4MQ_Sbxdq8kpQaRoCAawQAvD_BwE"><b>M Series</b></Nav.Link>
            <Nav.Link href="https://www.samsung.com/in/smartphones/galaxy-f/?cid=in_pd_search_google_im-all-all-all-dtc_sales_samsung-allproducts-all-2023_eshop-dsa_01jan2023-na_1ur-501336l-2023-eshop-bau-dsa-cpc_pfm-614139100219-17924215676-140077037736-dsa-546668199249----g--&gclid=CjwKCAjw_YShBhAiEiwAMomsELi49k2vQp5trssvP9woQNJa8Sq2Bu5V52nXFpbUKKNCRU48Yk3e2xoCoQcQAvD_BwE"><b>F Series</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
      
    </div>
  )
}

export default Navapp
