import {
  Card,
  CardFooter,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "@/components/ui/Card";
import { IconPin, IconShare } from "@/components/ui/Icons";
import { Label } from "@/components/ui/Label";
import ArticleDetail from "@/components/vulnerability-db/ArticleDetail";

import VulnerabilityGrid from "@/components/vulnerability-db/VulnerabilityGrid";
import { redirectIfNotLoggedIn } from "@/lib/redirect";

export default async function VulnerabilityDBDetailPage() {
  await redirectIfNotLoggedIn("/vuldb/items");
  //임시 더미데이터
  const articleData = {
    id: "1",
    title: "[취약성 경고] Microsoft의 여러 보안 취약점에 대한 CNNVD의 보고서",
    content: `최근 Microsoft는 다양한 보안 취약점에 대한 공지를 공식적으로 발표했으며, 이 취약점 공지에는 총 80개의 취약점 패치가 발표되었습니다.

      이 공지에는 Microsoft Azure 사이트 복구 보안 취약점(CNNVD-202402-1061, CVE-2024-21364), Microsoft Azure Kubernetes 보안 취약점(CNNVD-202402-1050, CVE-2024-21376) 및 기타 취약점을 포함합니다.

      위 취약점이 악용될 경우, 공격자는 대상 시스템에서 임의의 코드를 실행하고, 사용자 데이터를 획득하며, 권한을 상승시키는 등의 작업을 할 수 있습니다.
      
      최근 Microsoft는 다양한 보안 취약점에 대한 공지를 공식적으로 발표했으며, 이 취약점 공지에는 총 80개의 취약점 패치가 발표되었습니다.

      이 공지에는 Microsoft Azure 사이트 복구 보안 취약점(CNNVD-202402-1061, CVE-2024-21364), Microsoft Azure Kubernetes 보안 취약점(CNNVD-202402-1050, CVE-2024-21376) 및 기타 취약점을 포함합니다.

      위 취약점이 악용될 경우, 공격자는 대상 시스템에서 임의의 코드를 실행하고, 사용자 데이터를 획득하며, 권한을 상승시키는 등의 작업을 할 수 있습니다.`,
    createdAt: "2024-08-13",
    showLabel: true,
    labelVariant: "hot",
    labelText: "HOT",
  };

  return (
    <>
      <div className="mb-[8.596rem] grid place-items-center">
        <ArticleDetail
          id={articleData.id}
          title={articleData.title}
          content={articleData.content}
          createdAt={articleData.createdAt}
          showLabel={articleData.showLabel}
          labelText={articleData.labelText}
        />

        <VulnerabilityGrid />
        <div className="w-full max-w-[82.125rem]">
          <h2 className="mb-4 justify-self-start text-2xl font-semibold leading-[1.816rem] tracking-[-0.01em]">
            비슷한 정보글
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {[...Array(6)].map((_, index) => (
              <Card key={index} variant="article" size="short">
                <CardHeader>
                  <Label>HOT</Label>
                  <CardTitle>
                    {`[취약성 경고] Microsoft의 여러  보안 취약점에 대한 CNNVD의 보고서]`}
                  </CardTitle>
                </CardHeader>
                <CardSubTitle size="big" isSingleLine>
                  간략한 글 내용
                </CardSubTitle>
                <CardFooter>
                  <div className="inline-flex gap-4">
                    <IconPin />
                    <IconShare />
                  </div>
                  <CardSubTitle>2일 전</CardSubTitle>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
