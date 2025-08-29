// app/college/[college_name]/page.js
'use client';
import React from "react";
import { useParams } from "next/navigation";
import CollegePage from "@/Component/Pages/CollegePage/CollegePage";

export default function CollegeRoute() {
  const { college_name } = useParams();
   const universityKeyMap = {
        'Amity-University': 'Amity_University',
        'Dr.-DY-Patil-University':'DYP',
        'Jain-University':'Jain_University',
        'Lovely-Professional-University' :'Lovely_Professional_University',
        'Manipal-University':'Manipal_University',
        'NMIMS-University':'NMIMS',
        'Shardha-University':'Sikkim_Manipal_University',
        'Shoolini-University':'Shoolini_University',
        'Uttaranchal-University':'UU',
        'Vivekanand-Global-University':'VGU',
        'Noida-International-University':'NIU'
    };




  return (
    <div className="w-full font-[Outfit]">
      <CollegePage collegeName={universityKeyMap[college_name]} />
    </div>
  );
}
