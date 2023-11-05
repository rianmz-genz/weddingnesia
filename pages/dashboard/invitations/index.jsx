import InvitationByUserApi from "@/api/integrations/invitation/ByUser";
import { Text } from "@/components";
import InvitationItem from "@/components/dashboard/user/invitation/InvitationItem";
import GetBadgeInvitation from "@/components/globals/GetBadge";
import { InputSearch } from "@/components/globals/Input";
import Skeleton from "@/components/globals/Skeleton";
import DashboardUser from "@/components/layout/DashboardUser";
import { textStyle } from "@/utils/enum";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiEdit, FiEye, FiPlus } from "react-icons/fi";

const DashboardInvitations = () => {
  const [invitations, setInvitations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    getInvitations();
  }, []);
  const getInvitations = () => {
    setIsLoading(true);
    InvitationByUserApi().then((res) => {
      // //console.log(res);
      setFiltered(res);
      setInvitations(res);
      setIsLoading(false);
    });
  };
  const onChangeSearch = (keyword) => {
    setKeyword(keyword);
    if (keyword == 0) {
      setFiltered(invitations);
    }
    const filter = invitations.filter((item) => item.slug.includes(keyword));
    setFiltered(filter);
  };
  return (
    <DashboardUser>
      <div className="w-11/12 mx-auto mt-6">
        <div className="w-full flex justify-between items-center">
          <Text style={textStyle.title}>Undangan</Text>
          <div className="flex items-center justify-center space-x-3">
            <Link
              href={"/create"}
              className="bg-white shadow shadow-black/5 text-black rounded-full p-2"
            >
              <FiPlus />
            </Link>
            <InputSearch
              value={keyword}
              onChange={(e) => onChangeSearch(e.target.value)}
            />
          </div>
        </div>
        <ul className="mt-6 flex flex-col gap-3 justify-start items-start">
          {isLoading ? (
            <>
              <Skeleton className="w-full h-24 bg-slate-200" />
              <Skeleton className="w-full h-24 bg-slate-200" />
              <Skeleton className="w-full h-24 bg-slate-200" />
              <Skeleton className="w-full h-24 bg-slate-200" />
              <Skeleton className="w-full h-24 bg-slate-200" />
              <Skeleton className="w-full h-24 bg-slate-200" />
              <Skeleton className="w-full h-24 bg-slate-200" />
            </>
          ) : (
            filtered?.map((invitation, i) => (
              <InvitationItem
                id={invitation.id}
                slug={invitation.slug}
                status={
                  invitation.order && invitation?.order[0]?.status == "PAID"
                }
                key={i}
              />
            ))
          )}
        </ul>
      </div>
    </DashboardUser>
  );
};

export default DashboardInvitations;
// export async function getServerSideProps({ req }) {
//   try {
//     const init = await InvitationByUserApi();
//     //console.log(init);
//     if (!init) {
//       return {
//         props: {
//           init: null,
//         },
//       };
//     }
//     // Misalnya, jika Anda ingin mengurutkan berdasarkan urutan: Freemium, Premium, Eksklusif, Pro, Elegant
//     if (init) {
//       return {
//         props: {
//           init,
//         },
//       };
//     }
//   } catch (error) {
//     console.error("Error fetching packages:", error.message);
//     return {
//       props: {
//         init: null,
//       },
//     };
//   }
// }
