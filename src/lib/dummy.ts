import { VulDBPost } from "@/types/type";
import { Timestamp } from "firebase/firestore";

export const exampleCode = `import SectionBusinessForever from "@/components/section-business-forever";
import SectionVideoDisplayer from "@/components/section-video-displayer";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-36 min-h-screen"
    // only background brightness is 0.5
      style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg.svg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <hgroup className="flex flex-col items-center py-16 gap-4 z-10">
        <Badge>Systemable</Badge>
        <h1 className="text-6xl font-bold">Build once, Business forever</h1>
        <p className="text-sm">
          We help businesses to grow and scale by providing them with the right
          tools and resources.
        </p>
      </hgroup>
      <div className="z-10 grid grid-cols-2 max-w-4xl mx-auto gap-4 my-24">
        <Card className="bg-transparent backdrop-blur-sm col-span-2">
          <CardHeader>
            <CardTitle>Analyze</CardTitle>
            <CardDescription>
              We analyze your business processes and provide you with the right ways to make sure your business is running smoothly.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-transparent backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Systemize</CardTitle>
            <CardDescription>
              We find the ways to systemize your business processes to make sure you are not wasting time on repetitive tasks.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-transparent backdrop-blur-sm">`;

export const exampleCertCCVulDBPost: VulDBPost = {
  id: "VulDB-09-01",
  label: "기타",
  source: "CERT/CC",
  page_url: "https://www.kb.cert.org/vuls/id/244112",
  title: {
    original:
      "Multiple SMTP services are susceptible to spoofing attacks due to insufficient enforcement",
    translated:
      "여러 SMTP 서비스가 불충분한 강화로 인해 스푸핑 공격에 취약합니다.",
  },
  created_at: Timestamp.fromDate(new Date("2023-09-01T12:34:56Z")),
  updated_at: Timestamp.fromDate(new Date("2024-09-01T12:34:56Z")),
  views: 0,
  content: {
    overview: {
      original: [{ id: "1", text: "overview" }],
      translated: [{ id: "1", text: "overview" }],
    },
    description: {
      original: [
        { id: "1", text: "description1" },
        { id: "2", text: "description2" },
      ],
      translated: [
        { id: "1", text: "description1" },
        { id: "2", text: "description2" },
      ],
    },
    impact: {
      original: [{ id: "1", text: "impact" }],
      translated: [{ id: "1", text: "impact" }],
    },
    solution: {
      original: [
        { id: "1", text: "solution1" },
        { id: "2", text: "solution2" },
      ],
      translated: [
        { id: "1", text: "solution1" },
        { id: "2", text: "solution2" },
      ],
    },
    cveIDs: ["CVE-2024-7208", "CVE-2024-7209"],
  },
};

//selectedfile 모달에서 쓰이는 더미데이터
export const dummyFileItems = [
  {
    title: "file name 1",
    subtitle: "file sub title 1",
    date: "4 months ago",
  },
  {
    title: "file name 2",
    subtitle: "file sub title 2",
    date: "4 months ago",
  },
  {
    title: "file name 3",
    subtitle: "file sub title 3",
    date: "4 months ago",
  },
  {
    title: "file name 4",
    subtitle: "file sub title 4",
    date: "4 months ago",
  },
  {
    title: "file name 5",
    subtitle: "file sub title 5",
    date: "4 months ago",
  },
];

export const koreanLoremIpsum = `대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.
국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다.
대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다.
모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.
지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다.
제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다. 국가원로자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다.
모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 행정권은 대통령을 수반으로 하는 정부에 속한다.
대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 대통령의 임기는 5년으로 하며, 중임할 수 없다.
선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다. 국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.
헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.`;