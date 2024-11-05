import ContactForm from "../me/ContactForm";

export default function CustomerService() {
  return (
    <section className="my-[7.75rem] flex w-full justify-center px-[1rem]">
      <div className="flex-center-center h-[50.813rem] w-full max-w-[96.125rem] px-12 pt-2 sm:pt-0 lg:gap-x-28 lg:px-0 xl:gap-x-[10.333rem]">
        <div className="hidden size-full max-w-[28.125rem] lg:block">
          <h2 className="word-break-phrase text-6xl font-bold leading-[5.625rem] tracking-tighter text-primary-500">
            서비스 이용에
            <br />
            문제가 생겼나요?
          </h2>
          <p className="mt-8 text-lg font-medium leading-8 text-gray-default">
            이용하면서 문제가 생겼다면 언제든지 문의주세요.
            <br />
            서비스 개발과 성장에 큰 도움이 됩니다.
          </p>
          <ul className="mt-[23.125rem]">
            <li className="mb-8 flex flex-col gap-2">
              <span className="text-xl font-semibold leading-[1.875rem] text-gray-dark">
                Email
              </span>
              <span className="text-lg font-normal text-gray-default">
                justin@floatfactory.kr
              </span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl font-semibold leading-[1.875rem] text-gray-dark">
                Adress
              </span>
              <span className="text-lg font-normal text-gray-default">
                서울 강서구 마곡중앙2로 11 305호
              </span>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
