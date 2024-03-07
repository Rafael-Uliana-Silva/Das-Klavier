import React from "react";
import Container from "./Container";

const Intro = () => {
  return (
    <div className="intro">
      <Container>
        <div>
          <h1>Encontre o instrumento perfeito para você aqui</h1>
          <div className="quebra">
            <svg width="853" height="96" viewBox="0 0 853 96" fill="none">
            <rect x="5" y="71.4854" width="848" height="2" fill="#fff"/>
            <rect x="5" y="61.0001" width="819" height="2" fill="#fff"/>
            <rect x="5" y="50.0001" width="794" height="2" fill="#fff"/>
            <rect x="5" y="39.0001" width="767" height="2" fill="#fff"/>
            <rect x="5" y="28.0001" width="744" height="2" fill="#fff"/>
            <rect x="5" y="17.0001" width="715" height="2" fill="#fff"/>
            <rect y="17.0001" width="5" height="56.5" fill="#fff"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37.8145 73.0484C26.9646 73.6285 14.2996 68.1571 14.0043 53.5944C13.7078 38.9401 28.7334 30.2509 28.7334 30.2509C28.7334 30.2509 27.3411 27.2059 26.4232 19.0633C25.5052 10.922 29.3651 1.01327 35.1703 0.0476675C40.9743 -0.919229 44.8986 13.066 41.9837 23.3292C40.7345 27.7254 36.6619 30.9974 32.2258 34.5182C32.8369 37.241 33.6285 40.7798 34.5 44.7093C36.5601 44.6706 38.8794 45.252 41.4113 46.6611C54.9092 54.1745 49.0163 69.4786 40.4934 72.5198C41.6963 78.3946 42.4917 82.6877 42.4208 83.4367C42.1565 86.2239 42.4646 95.5216 32.5352 95.2187C24.6879 94.9801 22.6677 90.4422 22.1662 88.5483C21.9961 88.0623 21.9045 87.5479 21.9045 87.0155C21.9045 84.0349 24.7756 81.6138 28.3131 81.6138C31.8507 81.6138 34.7217 84.0349 34.7217 87.0155C34.7217 89.5552 32.6397 91.6875 29.8356 92.2638C29.9104 92.2844 29.9878 92.3025 30.0677 92.3193C38.1303 93.9926 39.6671 88.8255 39.6567 84.5016C39.6542 83.3413 38.9064 78.9103 37.8145 73.0484ZM30.4364 35.944C25.0424 40.2822 19.5982 45.2417 18.367 53.2038C16.6394 64.3721 29.0557 71.3518 37.3117 70.3746C36.2094 64.5667 34.8609 57.7533 33.5859 51.4157C33.5305 51.435 33.4751 51.4556 33.4196 51.4762C26.8164 54.025 29.4244 62.8366 31.2331 65.3635C33.0432 67.8903 34.0036 68.005 31.0075 66.9788C20.5844 63.4116 22.9668 47.3908 32.289 45.0058C31.5825 41.5262 30.9418 38.4012 30.4364 35.944ZM35.9026 51.0676C37.2885 57.3782 38.7388 64.0743 39.9185 69.7364C41.3147 69.1808 42.4685 68.299 43.242 67.0639C47.8522 59.6936 41.8935 51.2932 35.9026 51.0676ZM30.6478 29.1384C30.6478 29.1384 27.3088 18.1041 30.6169 12.0784C34.188 5.57187 42.9829 6.8327 39.9442 16.151C37.9885 22.1522 35.062 24.7615 30.6478 29.1384Z" fill="#fff"/>
            </svg>
          </div>
          <h2>Instrumentos feitos sobre medida por profissionais qualificados, veja mais abaixo</h2>
          <div className="btn">
            <a href="#">Buscar</a>
          </div>
        </div>

        <div>
          <img src="/img/violin-img.jpg" alt="" />
        </div>
      </Container>
    </div>   
  )
}

export default Intro;