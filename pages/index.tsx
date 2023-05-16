import Head from "next/head"
import * as S from '../src/commons/styles/home.styles';

const Home = () => {
    return (
        <>
         <Head>
        <title>YILI_LU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <S.Wrapper>
        <a href="/about">aboutpage</a>
        <div>승재형</div>
       
        </S.Wrapper>
        </>
    )
}

export default Home