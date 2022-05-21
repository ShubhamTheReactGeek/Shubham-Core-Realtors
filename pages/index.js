import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'
// import fetchData from '../components/utils/fetchData'
import { baseUrl, fetchData } from '../utils/fetchData'
import Property from '../components/Property'
import { Flex } from '@chakra-ui/react'

export default function Home({propertiesForSale, propertiesForRent}) {
  // console.log(propertiesForRent)
  // console.log(propertiesForSale)
  return (
    <div className={styles.container}>
      {/* <Banner></Banner> */}
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id}></Property>
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id}></Property>
        ))}
      </Flex>
    </div>
  );
}

export async function getStaticProps() {
  // console.log('in aysnc')
  const urlForSale = `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  const urlForRent = `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  // console.log(url)
  const propertiesForSale =  await fetchData(urlForSale)
  const propertiesForRent = await fetchData(urlForRent)
  return {
    props: {
      propertiesForSale : propertiesForSale?.hits,
      propertiesForRent : propertiesForRent?.hits
      
    }
  }
}
