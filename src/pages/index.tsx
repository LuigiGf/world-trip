// React Imports
import { useMemo } from "react";
//Icons
import { Cup, Beach, Globe, Modern, Museum } from "../../public/Icons";

//Components
import Benefit from "../components/Benefit";
import Header from "../components/Header";

//External Libs
import { Container, Divider, Grid, GridItem, Img } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const benefitItems = useMemo(
    () => [
      {
        title: "vida noturna",
        svg: <Cup />,
      },
      {
        title: "praia",
        svg: <Beach />,
      },
      {
        title: "moderno",
        svg: <Modern />,
      },
      {
        title: "clássico",
        svg: <Museum />,
      },
      {
        title: "e mais...",
        svg: <Globe />,
      },
    ],
    []
  );

  return (
    <>
      <Header />
      <Img alt="Banner" src="Banner.png" objectFit="cover" w="full" />
      <Grid
        my="20"
        justifyItems="center"
        mx="auto"
        maxW="7xl"
        templateColumns="repeat(5, 1fr)"
        gap="6"
      >
        {benefitItems.map(({ title, svg }, index) => (
          <GridItem maxW="max" key={`${title} ${index}`}>
            <Benefit title={title} svg={svg} />
          </GridItem>
        ))}
      </Grid>
      <Divider
        mx="auto"
        orientation="horizontal"
        mb="3.25rem"
        w="130px"
        borderColor="black"
        borderBottomWidth="3px"
      />
      <Container maxW="7xl" mb="10">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <Img src="Continent.png" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
