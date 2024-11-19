import { NextRequest, NextResponse } from "next/server";

const NAME_VALIDATION_MESSAGE = "이름은 공백 없이 2자 이상이어야 합니다.";
const EMAIL_VALIDATION_MESSAGE = "이메일 형식이 유효하지 않습니다.";
const MESSAGE_VALIDATION_MESSAGE = "메세지는 5자 이상이어야 합니다.";
const SERVER_ERROR_MESSAGE =
  "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  const { z } = await import("zod");
  const contactSchema = z.object({
    name: z
      .string()
      .min(2, { message: NAME_VALIDATION_MESSAGE })
      .refine((name) => !name.includes(" "), {
        message: NAME_VALIDATION_MESSAGE,
      }),
    email: z.string().email({ message: EMAIL_VALIDATION_MESSAGE }),
    message: z.string().min(5, { message: MESSAGE_VALIDATION_MESSAGE }),
  });

  const validationResult = contactSchema.safeParse({ name, email, message });

  if (!validationResult.success) {
    return NextResponse.json(
      { message: validationResult.error.errors[0]?.message },
      { status: 400 },
    );
  }

  try {
    const { sendEmail } = await import("@/lib/contact");
    await sendEmail(name.trim(), email.trim(), message.trim());
    return NextResponse.json({ message: "SUCCESS", status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      message: SERVER_ERROR_MESSAGE,
      status: 500,
    });
  }
}
