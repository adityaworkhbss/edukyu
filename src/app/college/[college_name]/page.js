// app/college/[college_name]/page.js
'use client';
import React from "react";
import { useParams } from "next/navigation";
import CollegePage from "@/Component/Pages/CollegePage/CollegePage";

export default function CollegeRoute() {
  const { college_name } = useParams();
   const universityKeyMap = {
        'Amity-University': 'Amity_University',
        'D.Y.-Patil-Vidyapeeth':'DYP',
        'Jain-University':'Jain_University',
        'Lovely-Professional-University' :'Lovely_Professional_University',
        'Manipal-University-Jaipur':'Manipal_University',
        'NMIMS-University-Online':'NMIMS',
        'Shardha-University':'Sikkim_Manipal_University',
        'Shoolini-University':'Shoolini_University',
        'Uttaranchal-University':'UU',
        'Vivekanand-Global-University':'VGU',
        'Noida-International-University':'NIU',
        'Sikkim-Manipal-University':'Sikkim_Manipal_University'
    };




  return (
    <div className="w-full font-[Outfit]">
      <CollegePage collegeName={universityKeyMap[college_name]} />
    </div>
  );
}
