import { NextRequest, NextResponse } from 'next/server';
import mysql, { RowDataPacket } from 'mysql2/promise';

interface BlogContentRow extends RowDataPacket {
    descs: string;
}

export async function GET(req: NextRequest) {

    console.log('blogpage route req :::::::: ', req);

    const { searchParams } = new URL(req.url);


    const shortDescBlogIdMap = {
        "essential-elements-for-training-success": 3,
        "is-pgdm-equivalent-to-mba": 4,
        "distance-learning-mba-pgdm-program-in-inida": 6,
        "why-distance-mba-is-worthy-for-working-professionals": 7,
        "feedback-form": 8,
        "distance-learning-vs-executive-mba-from-nmims-university": 9,
        "management-college-analysis-for-working-professionals": 10,
        "frequently-asked-question-regarding-distance-mba": 11,
        "nmims-mba-x-business-analytics-fees-date-extended-till-28th-march": 12,
        "nmims-global-access-april-2020-exams-wil-be-cancelled": 13,
        "nmims-knowledge-series-workplace-diversity-inclusion": 14,
        "nmims-knowledge-series-decoding-millennials-and-how-to-sell-them": 15,
        "nmims-knowledge-series-building-great-leaders": 16,
        "nmims-knowledge-series-story-of-loadshare": 17,
        "nmims-knowledge-series-redefining-leadership": 18,
        "nmims-knowledge-series-rising-influence-of-digital-on-consumer-behaviour": 19,
        "nmims-knowledge-series-bharat-vs-india": 20,
        "nmims-knowledge-series-value-based-leadership": 21,
        "nmims-knowledge-series-the-new-marketing-paradigm-in-the-age-of-millennials": 22,
        "nmims-june-2020-assignment-is-live": 23,
        "nmims-classes-announcement": 25,
        "adapting-to-work-from-home": 26,
        "the-future-of-jobs-amidst-covid-19": 28,
        "mba-for-executive-info-sessions": 29,
        "professional-diploma-in-digital-marketing-info-session": 30,
        "nmims-june-2020-exams-registration": 31,
        "nmims-distance-exams-guidelines-and-policy": 32,
        "nmims-distance-exams-guidelines-and-policy-lvn": 33,
        "executive-mba-wx-program-from-nmims-university": 34,
        "benefits-of-executive-mba-to-the-employer": 36,
        "recorded-session-future-of-sales-in-a-digital-world-nmims-knowledge-series-ezf": 38,
        "tips-to-succeed-with-cold-calling": 40,
        "nmims-msc-artificial-intelligence-and-machine-learning-ops": 41,
        "narsee-monjee-distance-mba-for-working-professionals": 42,
        "executive-mba-comparision-from-top-business-schools": 43,
        "nmims-mba-distance-june-2021-exams-guidelines": 44,
        "nmims-jan-2021-feedback-form": 45,
        "nmims-mba-distance-june-2021-exams-guidelines-testing": 46,
        "nmims-career-growth-with-an-executive-mba-for-working-professionals": 50,
        "nmims-is-executive-mba-necessary-to-be-a-successful-professional-2nm": 52,
        "nmims-mba-or-emba-which-one-39-s-right-for-you": 53,
        "nmims-how-much-input-do-employees-have-on-decision-making": 54,
        "nmims-the-rising-demand-for-executive-mbas-with-business-analytics-specializat": 55,
        "nmims-how-to-balance-an-executive-mba-while-working-full-time": 56,
        "nmims-executive-mba-in-financial-markets-the-ultimate-guide-for-applicants": 57,
        "nmims-employee-education-tips-how-to-get-an-employer-sponsored-online-mba": 58,
        "nmims-mba-in-it-an-overview": 59,
        "nmims-7-effective-executive-leadership-skills": 60,
        "nmims-what-can-you-do-with-an-mba-in-strategy-and-leadership": 61,
        "nmims-why-is-marketing-management-important-for-business": 62,
        "nmims-7-ways-human-resource-manager-can-effectively-contribute-to-business-gro-4ek": 64,
        "nmims-time-management-tips-for-online-learning-students": 65,
        "management-of-information-technology-and-systems-via-the-internet": 66,
        "pursue-mba-in-retail-management-from-nmims": 67,
        "5-reasons-you-should-pursue-an-executive-mba-from-nmims": 68,
        "a-complete-guide-executive-mba-for-working-professionals": 69,
        "how-to-choose-the-right-executive-mba-program": 70,
        "best-mba-course-for-working-professionals-in-india": 71,
        "careers-to-pursue-with-an-executive-mba-in-leadership-and-strategy": 72,
        "top-notch-mba-programs-in-2023": 73,
        "top-mba-programs-for-emerging-leaders": 74,
        "mba-specialization-in-demand-2023": 75,
        "is-executive-mba-from-nmims-worth-it": 76,
        "a-guide-to-certificate-in-business-management": 77,
        "enhance-your-professional-credibility-with-a-certificate-in-corporate-communicat": 78,
        "tips-for-a-successful-bba-business-analytics-degree": 79,
        "bachelor-in-business-administration-bba-a-guide-to-bba-journey": 80,
        "the-best-ways-to-successfully-apply-for-an-odl-mba": 81,
        "what-can-you-do-with-an-emba-in-operations-and-supply-chain-management": 82,
        "is-distance-mba-worth-it-for-freshers": 84,
        "5-operations-management-courses-to-help-you-boost-your-career-in-2023": 85,
        "how-is-an-mba-useful-for-it-professionals": 86,
        "mba-in-india-or-abroad-which-is-the-best": 87,
        "5-exciting-career-options-after-mba-in-marketing-management": 88,
        "what-strategic-leaders-need-to-know-in-2023-developing-the-skills-for-success": 89,
        "6-business-analytics-concepts-managers-should-know": 90,
        "what-are-the-biggest-mba-myths": 91,
        "6-biggest-challenges-supply-chain-management-is-facing-in-2023": 93,
        "how-business-analytics-helps-in-marketing": 94,
        "5-ways-to-manage-emba-while-working": 95,
        "5-mistakes-every-mba-aspirant-should-avoid": 96,
        "supply-chain-kpi-mistakes-to-avoid-in-2023": 97,
        "a-complete-guide-for-students-interested-in-distance-mba-programs": 98,
        "top-5-skills-every-business-analytics-professional-needs": 100,
        "future-of-online-mba-programme-in-2023": 101,
        "top-5-distance-education-mba-universities-in-india-2023": 102,
        "top-distance-mba-colleges-in-delhi": 103,
        "top-distance-mba-colleges-in-kolkata": 104,
        "what-is-business-management": 105,
        "top-distance-mba-colleges-in-pune": 106,
        "top-10-executive-mba-colleges-in-india": 107,
        "distance-mba-colleges-eligibility-fees-career-and-salary": 108,
        "distance-mba-from-iim": 109,
        "dy-patil-distance-mba": 110,
        "online-mba-courses-in-india": 111,
        "mba-for-working-professionals": 112,
        "online-mba-Business-Analytics": 113,
        "online-mba-courses-in-bangalore": 114,
        "shoolini-university": 115,
        "online-mba-in-banking-and-finance": 116,
        "online-mba-in-supply-chain-management-and-logistics": 117,
        "online-mba-in-hospital-management": 119,
        "online-mba-in-marketing": 120,
        "jain-university-online-mba": 121,
        "best-mba-specialization": 122,
        "online-mba-in-international-business": 123,
        "online-mba-operations-management": 124,
        "online-mba-in-human-resource-management": 126,
        "affordable-online-mba-in-india": 127,
        "amity-university-online-mba": 128,
        "ugc-approved-online-mba-colleges": 129,
        "online-mba-vs-regular-mba": 131,
        "job-opportunities-after-mba": 133,
        "online-mba-courses-in-mumbai": 134,
        "distance-mba-in-hyderabad": 137,
        "distance-mba-in-ahmedabad": 139,
        "how-to-choose-mba-specialization": 140,
        "distance-mba-in-chennai": 141,
        "annamalai-university-distance-mba": 145,
        "ignou-online-mba": 146,
        "online-mba-in-pune-university": 147,
        "distance-mba-colleges-in-jaipur": 148,
        "ugc-fake-university-list-2024": 149,
        "one-year-online-mba": 150,
        "best-course-after-b-com": 151,
        "top-10-colleges-for-executive-mba-distance-learning-in-india": 152,
        "ignou-mca-admissions": 153,
        "du-sol-courses": 154,
        "ugc-banned-suresh-gyan-vihar-university": 155,
        "ugc-approved-online-degree-courses": 156,
        "ugc-removes-ban-on-nmims-university": 157,
        "top-open-university-in-india": 158,
        "nirf-rankings-2024": 159,
        "ugc-banned-periyar-university": 160,
        "online-b-ed-courses-in-india": 161,
        "ugc-deb-approved-list-for-online-programmes-2024": 163,
        "online-ba-degree-courses-in-india": 164,
        "online-master-degree-in-india": 165,
        "nmims-online-mba": 166,
        "top-online-mca-colleges-in-pune": 168,
        "online-mtech-for-working-professionals": 169,
        "what-is-abc-id": 170,
        "top-online-bba-colleges-in-pune": 176,
        "nmims-executive-mba": 177,
        "top-online-mca-colleges-delhi": 178,
        "amity-online-mca": 179,
        "lovely-professional-university-online-mca": 180,
        "online-ma-courses-in-india": 182,
        "top-online-mca-colleges-in-india": 183,
        "manipal-university-online-mca": 184,
        "top-distance-mba-colleges-bhopal": 185,
        "top-distance-mba-colleges-patna": 186,
        "top-mca-specializations": 187,
        "amity-online-bba": 188,
        "chandigarh-university-distance-mba": 189,
        "top-bba-colleges-in-delhi": 190,
        "mba-in-digital-marketing": 191,
        "best-degree-to-become-an-ias-officer": 192,
        "ignou-courses-list": 193,
        "aicte-approved-mba-colleges": 194,
        "top-courses-to-do-along-with-ca-course": 195,
        "top-bca-specializations-in-india": 196,
        "top-mca-colleges-in-bangalore": 197,
        "top-educational-loan-provider-for-online-degree": 198,
        "how-universities-conduct-online-degree-exams": 199,
        "online-degree-courses-for-defense-personnel": 200,
        "top-mtech-colleges-in-india": 201,
        "best-mca-colleges-in-hyderabad": 202,
        "best-university-for-mca-in-india": 203,
        "highest-paying-jobs-after-mba": 204,
        "mba-vs-mca": 206,
        "best-mca-colleges-in-chennai": 207,
        "sikkim-manipal-university-online-mca": 208,
        "top-bba-colleges-in-india": 209,
        "top-bca-colleges-in-india": 210,
        "top-courses-after-bca": 212,
        "what-is-a-stem-mba": 213,
        "best-online-mca-colleges-in-mumbai": 214,
        "aicte-approved-colleges-in-pune": 215,
        "top-bba-specialization": 216,
        "bcom-for-ca-students": 217,
        "online-msc-data-science": 218,
        "best-mba-colleges-in-India-without-cat": 221,
        "online-msc-in-mathematics": 222,
        "online-mba-in-artificial-intelligence": 223,
        "online-mba-in-project-management": 224,
        "online-mca-in-data-science": 225,
        "online-mba-in-data-science": 226,
        "mca-colleges-in-nagpur": 227,
        "jamia-islamia-distance-online-courses": 228,
        "online-mca-colleges-in-ahmedabad": 229,
        "top-mca-colleges-in-coimbatore": 230,
        "online-mba-colleges-in-bangalore": 231,
        "niu-online-mba": 232,
        "niu-online-mca": 233,
        "niu-online-bba": 234,
        "top-mba-colleges-in-delhi": 235,
        "mba-colleges-in-hyderabad": 236
    };

    const blogParam = searchParams.get("blogId");

    console.log(blogParam);

    const blogId = blogParam ? shortDescBlogIdMap[blogParam] : undefined;


    if (isNaN(blogId)) {
        return NextResponse.json({ error: 'Invalid blogId' }, { status: 400 });
    }


    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'blogdb',
            // host: 'localhost',
            // port: 3306,
            // user: 'root',
            // password: 'password',
            // database: 'EDUKYU',
        });

        const [rows] = await connection.query<BlogContentRow[]>(
            `SELECT userid, name, category, descs, shortUrl, metaTitle, imageUrl, timeStamp  FROM blog WHERE blogId = ?`,
            [blogId]
        );

        // console.log("selected row ::::::::::::: ", rows);

        await connection.end();

        if (rows.length === 0) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }


        return NextResponse.json({
            userid: rows[0].userid,
            category: rows[0].category,
            descs: rows[0].descs,
            metatitle: rows[0].metaTitle,
            title: rows[0].name,
            shortDesc: rows[0].shortDesc,
            shortUrl: rows[0].shortUrl,
            imageurl: rows[0].imageUrl,
            timestamp: rows[0].timeStamp,
        });
    } catch (error) {
        console.error('[ERROR] Single blog fetch failed:', error);
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
    }
}
