import portofolioApi from "@/api/integrations/portofolio";
import {
  Button,
  Container,
  Input,
  NavbarLandingpage,
  Text,
} from "@/components";
import DemoInvitationData from "@/store/demo";
import { buttonStyle, textStyle } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [portofolios, setPortofolios] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPortofolios = async () => {
    try {
      setIsLoading(true);
      const result = await portofolioApi.getAll();
      console.log(result.status, result.data.portofolios);
      if (result.status) {
        setPortofolios(result.data.portfolios);
        setFilteredData(result.data.portfolios);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPortofolios();
  }, []);
  return (
    <div className="w-full min-h-screen">
      <Container>
        <NavbarLandingpage />
        <div className="w-full text-center flex flex-col items-center mt-24 mb-8">
          <Text style={textStyle.mdtitle}>Portfolio Undangan Online</Text>
          <Text style={textStyle.smalltitle} className={"md:w-8/12 mt-2"}>
            Berikut ini adalah beberapa portofolio undangan online digital
            terbaik yang telah dibuat menggunakan weddingnesia!
          </Text>
        </div>
      </Container>
      <div className="flex w-full justify-center items-center mb-8">
        <div className="w-5/12 mr-4">
          <Input
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setFilteredData(portofolios);
                return;
              }
              const newData = portofolios.filter((item) => {
                console.log(item.invitation.groom_name.toLowerCase());
                return (
                  item.invitation.groom_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                  item.invitation.bride_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                );
              });
              console.log(newData);
              setFilteredData(newData);
            }}
            type="search"
            placeholder="Cari berdasarkan nama mempelai"
          />
        </div>
      </div>
      {!isLoading && portofolios.length === 0 && (
        <div className="w-3/12 mx-auto flex flex-col items-center justify-center">
          <Image
            src={"/images/nodata.svg"}
            width={1080}
            height={1080}
            alt="No data"
          />
          <p className="mt-4">Belum ada portofolio disini</p>
        </div>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:max-w-lg lg:max-w-7xl mx-auto px-7">
        {isLoading &&
          Array.from({ length: 9 }, (val) => (
            <div
              key={val}
              className="w-full rounded-xl bg-gray-100 animate-pulse h-64"
            ></div>
          ))}
        {/* {isLoading && (
        )} */}
        {filteredData?.map(({ invitation }, i) => (
          <InvitationCard
            key={i}
            bride={`${invitation.bride_name} & ${invitation.groom_name}`}
            comment={"comment"}
            slug={invitation.slug}
            cover={invitation.primary_cover}
          />
        ))}
      </ul>
    </div>
  );
}

function InvitationCard({ slug, cover, bride, comment }) {
  return (
    <Link
      href={`/${slug}`}
      className="w-full rounded-xl transition-all duration-500 shadow hover:shadow-xl"
    >
      <Image
        src={cover}
        alt={bride}
        width={1080}
        height={1080}
        className="w-full object-cover h-48 rounded-t-md"
      />
      <div className="px-6 py-3">
        <Text style={textStyle.description} className={"font-bold"}>
          {bride}
        </Text>
        <Text style={textStyle.smalldescription}>&quot;{comment}&quot;</Text>
      </div>
    </Link>
  );
}
