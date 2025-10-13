import { messagingApi } from "@line/bot-sdk";

const token = process.env.LINE_CHANNEL_ACCESS_TOKEN!;
export const line = new messagingApi.MessagingApiClient({
  channelAccessToken: token,
});

export async function pushText(toUserId: string, text: string) {
  await line.pushMessage({ to: toUserId, messages: [{ type: "text", text }] });
}
