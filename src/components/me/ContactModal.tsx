import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import {
  Modal,
  ModalDescription,
  ModalTitle,
  ModalTitleWrapper,
} from "../ui/Modal";
import { RequestState } from "./ContactForm";

export default function ContactModal({
  requestState,
  setRequestState,
}: {
  requestState: RequestState;
  setRequestState: React.Dispatch<React.SetStateAction<RequestState>>;
}) {
  const router = useRouter();

  return (
    <Modal
      variant="inquirySubmitted"
      size="extraLarge"
      isOpen={requestState === "success"}
      className="top-0 border border-primary-500"
    >
      <ModalTitleWrapper variant="inquirySubmitted">
        <ModalTitle size="big" weight="bold">
          문의를 보냈어요!
        </ModalTitle>
        <ModalDescription size="big" className="font-medium text-[#8F8F8F]">
          문의를 성공적으로 전송했어요. 빠른 시일 내에 답변해드릴게요.
        </ModalDescription>
      </ModalTitleWrapper>
      <Button
        type="button"
        onClick={() => {
          setRequestState("idle");
          router.push("/");
        }}
        className="mt-14 h-14 w-[20.938rem] rounded-2xl text-[1.25rem] tracking-[-0.011em]"
      >
        홈으로 가기
      </Button>
    </Modal>
  );
}
